#!/usr/bin/env python3
"""
Self-Annealing Build Script for Next.js (v2 - Surgical Fixes)

This script runs the build process, catches errors, analyzes them using an LLM,
applies MINIMAL targeted fixes (not full rewrites), and retries.

Key improvement: Returns only the specific lines to change, preserving the rest.

Usage:
    python3 scripts/self_anneal.py [--max-retries N] [--dry-run]

Environment Variables:
    DEEPSEEK_API_KEY: API key for DeepSeek (preferred)
    OPENAI_API_KEY: API key for OpenAI (fallback)
"""

import os
import re
import sys
import json
import argparse
import subprocess
from pathlib import Path
from datetime import datetime
from typing import Optional, Tuple, List

# Try to import requests
try:
    import requests
except ImportError:
    print("Installing requests...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "requests", "-q"])
    import requests

# Try to import dotenv
try:
    from dotenv import load_dotenv
except ImportError:
    print("Installing python-dotenv...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "python-dotenv", "-q"])
    from dotenv import load_dotenv

# Configuration
PROJECT_ROOT = Path(__file__).parent.parent.resolve()
LOG_DIR = PROJECT_ROOT / "scripts" / "anneal_logs"

# Load .env
load_dotenv(PROJECT_ROOT / ".env")


class Colors:
    RED = '\033[91m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    MAGENTA = '\033[95m'
    CYAN = '\033[96m'
    RESET = '\033[0m'
    BOLD = '\033[1m'


def log(message: str, color: str = Colors.RESET):
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"{Colors.CYAN}[{timestamp}]{Colors.RESET} {color}{message}{Colors.RESET}")


def log_section(title: str):
    print(f"\n{Colors.BOLD}{Colors.MAGENTA}{'━' * 50}")
    print(f"  {title}")
    print(f"{'━' * 50}{Colors.RESET}\n")


def run_build() -> Tuple[bool, str]:
    """Run npm build and return (success, output)."""
    log("Running npm run build...", Colors.BLUE)
    
    result = subprocess.run(
        ["npm", "run", "build"],
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True
    )
    
    combined_output = result.stdout + result.stderr
    return result.returncode == 0, combined_output


def parse_error(output: str) -> Optional[dict]:
    """Parse build error to extract file, line, and message."""
    patterns = [
        r"\./([\w/.-]+):(\d+):(\d+)\s*[-–]\s*(?:error|Type error):\s*(.+)",
        r"(src/[\w/.-]+\.tsx?):(\d+):(\d+)[:\s]+(.+)",
        r"Error:\s+(.+?)\n.*?([\w/.-]+):(\d+):(\d+)",
    ]
    
    for pattern in patterns:
        match = re.search(pattern, output, re.MULTILINE | re.IGNORECASE)
        if match:
            groups = match.groups()
            if len(groups) >= 4:
                return {
                    "file": groups[0] if groups[0].endswith(('.ts', '.tsx', '.js', '.jsx')) else groups[1] if len(groups) > 1 else groups[0],
                    "line": int(groups[1]) if groups[1].isdigit() else int(groups[2]) if len(groups) > 2 and groups[2].isdigit() else 1,
                    "column": int(groups[2]) if len(groups) > 2 and groups[2].isdigit() else 1,
                    "message": groups[-1].strip(),
                    "full_error": output[-1500:]
                }
    
    # Fallback
    file_match = re.search(r"(src/[\w/.-]+\.tsx?)", output)
    if file_match:
        return {
            "file": file_match.group(1),
            "line": 1,
            "column": 1,
            "message": "Build error",
            "full_error": output[-1500:]
        }
    
    return None


def read_file_with_numbers(file_path: Path) -> Tuple[str, List[str]]:
    """Read file and return (numbered content for display, lines list)."""
    if not file_path.exists():
        return "[File not found]", []
    
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    numbered = "\n".join(f"{i+1:4d} | {line.rstrip()}" for i, line in enumerate(lines))
    return numbered, lines


def get_surgical_fix(error_info: dict, file_content: str, lines: List[str], api_key: str, provider: str = "deepseek") -> Optional[dict]:
    """
    Ask LLM for a MINIMAL fix - only the specific lines to change.
    Returns dict with: start_line, end_line, replacement_lines, explanation
    """
    log(f"Requesting surgical fix from {provider.upper()}...", Colors.BLUE)
    
    error_line = error_info["line"]
    context_start = max(1, error_line - 15)
    context_end = min(len(lines), error_line + 15)
    
    context_lines = []
    for i in range(context_start - 1, context_end):
        marker = ">>> " if i + 1 == error_line else "    "
        context_lines.append(f"{marker}{i+1:4d} | {lines[i].rstrip()}")
    context_snippet = "\n".join(context_lines)
    
    prompt = f"""You are fixing a TypeScript/React build error. Make the SMALLEST possible change.

## Error
- File: {error_info['file']}
- Line: {error_info['line']}
- Message: {error_info['message']}

## Error Context (lines {context_start}-{context_end}, error line marked with >>>)
```
{context_snippet}
```

## Full Error Output
```
{error_info['full_error'][-800:]}
```

## Instructions
1. Identify the EXACT lines that need to change
2. Make the MINIMAL fix - do NOT rewrite unrelated code
3. Return ONLY the replacement for those specific lines

Respond with this exact JSON format:
{{
    "start_line": <first line number to replace>,
    "end_line": <last line number to replace>,
    "replacement": "<the new code for ONLY those lines, preserving indentation>",
    "explanation": "<brief explanation of the fix>"
}}

CRITICAL RULES:
- Only change what's necessary to fix the error
- If fixing an import, only return the import line
- If fixing a typo, only return that single line
- Preserve exact indentation and formatting
- Do NOT add or remove unrelated code"""

    if provider == "deepseek":
        url = "https://api.deepseek.com/chat/completions"
        model = "deepseek-chat"
    else:
        url = "https://api.openai.com/v1/chat/completions"
        model = "gpt-4o-mini"
    
    try:
        response = requests.post(
            url,
            headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
            json={
                "model": model,
                "messages": [
                    {"role": "system", "content": "You are a precise code fixer. Return only valid JSON with minimal surgical fixes."},
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.1,
                "max_tokens": 2000
            },
            timeout=45
        )
        response.raise_for_status()
        
        content = response.json()["choices"][0]["message"]["content"]
        
        # Extract JSON
        json_match = re.search(r'\{[\s\S]*\}', content)
        if json_match:
            fix_data = json.loads(json_match.group())
            
            # Validate the fix is minimal
            start = fix_data.get("start_line", 0)
            end = fix_data.get("end_line", 0)
            
            if end - start > 30:
                log(f"Fix too large ({end - start} lines). Rejecting.", Colors.YELLOW)
                return None
            
            return fix_data
        
        return None
        
    except Exception as e:
        log(f"API error: {e}", Colors.RED)
        return None


def apply_surgical_fix(file_path: Path, lines: List[str], fix_data: dict, dry_run: bool = False) -> bool:
    """Apply a surgical fix to specific lines only."""
    start = fix_data["start_line"]
    end = fix_data["end_line"]
    replacement = fix_data["replacement"]
    
    log(f"Surgical fix: lines {start}-{end}", Colors.CYAN)
    log(f"Explanation: {fix_data.get('explanation', 'N/A')}", Colors.GREEN)
    
    if dry_run:
        log("[DRY RUN] Would replace:", Colors.YELLOW)
        for i in range(start - 1, min(end, len(lines))):
            print(f"  - {i+1}: {lines[i].rstrip()}")
        print(f"  + {replacement}")
        return True
    
    try:
        # Create backup
        backup_path = file_path.with_suffix(file_path.suffix + f".bak.{datetime.now().strftime('%H%M%S')}")
        with open(file_path, 'r') as f:
            original = f.read()
        with open(backup_path, 'w') as f:
            f.write(original)
        log(f"Backup: {backup_path.name}", Colors.CYAN)
        
        # Apply fix
        new_lines = lines[:start-1]  # Lines before
        
        # Add replacement (handle multi-line)
        replacement_lines = replacement.split('\n') if '\n' in replacement else [replacement]
        new_lines.extend(line + '\n' if not line.endswith('\n') else line for line in replacement_lines)
        
        new_lines.extend(lines[end:])  # Lines after
        
        with open(file_path, 'w') as f:
            f.writelines(new_lines)
        
        log(f"Applied fix to: {file_path}", Colors.GREEN)
        return True
        
    except Exception as e:
        log(f"Failed to apply fix: {e}", Colors.RED)
        return False


def save_log(iteration: int, error_info: dict, fix_data: Optional[dict], success: bool):
    LOG_DIR.mkdir(exist_ok=True)
    log_file = LOG_DIR / f"anneal_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(log_file, 'w') as f:
        json.dump({
            "timestamp": datetime.now().isoformat(),
            "iteration": iteration,
            "error": error_info,
            "fix": fix_data,
            "success": success
        }, f, indent=2)


def main():
    parser = argparse.ArgumentParser(description="Self-Annealing Build (Surgical Fixes)")
    parser.add_argument("--max-retries", type=int, default=5)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    
    api_key = os.environ.get("DEEPSEEK_API_KEY")
    provider = "deepseek"
    if not api_key:
        api_key = os.environ.get("OPENAI_API_KEY")
        provider = "openai"
    
    if not api_key:
        log("ERROR: Set DEEPSEEK_API_KEY or OPENAI_API_KEY", Colors.RED)
        sys.exit(1)
    
    log_section("SELF-ANNEALING v2 (SURGICAL)")
    log(f"Project: {PROJECT_ROOT.name}", Colors.CYAN)
    log(f"Provider: {provider.upper()}", Colors.CYAN)
    log(f"Mode: {'DRY RUN' if args.dry_run else 'LIVE'}", Colors.CYAN)
    
    for iteration in range(1, args.max_retries + 1):
        log_section(f"ITERATION {iteration}/{args.max_retries}")
        
        success, output = run_build()
        
        if success:
            log_section("✓ BUILD SUCCESSFUL")
            log(f"Completed in {iteration} iteration(s)", Colors.GREEN)
            return 0
        
        log("Build failed. Parsing error...", Colors.YELLOW)
        error_info = parse_error(output)
        
        if not error_info:
            log("Could not parse error.", Colors.RED)
            print(output[-1000:])
            continue
        
        log(f"Error: {error_info['file']}:{error_info['line']}", Colors.YELLOW)
        log(f"Message: {error_info['message'][:100]}", Colors.YELLOW)
        
        file_path = PROJECT_ROOT / error_info["file"]
        numbered_content, lines = read_file_with_numbers(file_path)
        
        if not lines:
            log(f"Could not read file: {file_path}", Colors.RED)
            continue
        
        fix_data = get_surgical_fix(error_info, numbered_content, lines, api_key, provider)
        
        if not fix_data:
            log("Could not get valid fix.", Colors.RED)
            save_log(iteration, error_info, None, False)
            continue
        
        if apply_surgical_fix(file_path, lines, fix_data, args.dry_run):
            save_log(iteration, error_info, fix_data, True)
            log("Fix applied. Retrying build...", Colors.GREEN)
        else:
            save_log(iteration, error_info, fix_data, False)
    
    log_section("MAX RETRIES REACHED")
    log("Manual intervention required.", Colors.RED)
    return 1


if __name__ == "__main__":
    sys.exit(main())
