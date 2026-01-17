'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Terminal, CheckCircle, XCircle, Zap, Loader2 } from 'lucide-react';

interface LogLine {
    text: string;
    type: 'info' | 'error' | 'success' | 'warning' | 'system';
    delay: number;
}

const simulationSteps: LogLine[] = [
    { text: '$ npm run build', type: 'info', delay: 0 },
    { text: '▲ Next.js 16.1.1 (Turbopack)', type: 'info', delay: 400 },
    { text: 'Creating an optimized production build...', type: 'info', delay: 800 },
    { text: '', type: 'info', delay: 1200 },
    { text: '✗ Failed to compile.', type: 'error', delay: 1600 },
    { text: '', type: 'info', delay: 1800 },
    { text: './src/agents/lead_scraper.py:47:12', type: 'error', delay: 2000 },
    { text: "Error: selector '#contact-email' not found in DOM", type: 'error', delay: 2200 },
    { text: '', type: 'info', delay: 2600 },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', type: 'system', delay: 3000 },
    { text: '⚡ SELF-ANNEALING TRIGGERED', type: 'warning', delay: 3200 },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', type: 'system', delay: 3400 },
    { text: '', type: 'info', delay: 3600 },
    { text: '> Capturing error context...', type: 'system', delay: 3800 },
    { text: '> Reading src/agents/lead_scraper.py (lines 40-55)', type: 'system', delay: 4200 },
    { text: '> Analyzing DOM structure from last successful run...', type: 'system', delay: 4600 },
    { text: '> Sending to LLM for analysis...', type: 'system', delay: 5000 },
    { text: '', type: 'info', delay: 5400 },
    { text: '┌─ LLM ANALYSIS ────────────────────────────┐', type: 'system', delay: 5800 },
    { text: '│ Root cause: Website layout changed       │', type: 'system', delay: 6200 },
    { text: '│ Old selector: #contact-email             │', type: 'system', delay: 6500 },
    { text: '│ New selector: [data-testid="email-input"]│', type: 'system', delay: 6800 },
    { text: '│ Confidence: 94%                          │', type: 'system', delay: 7100 },
    { text: '└───────────────────────────────────────────┘', type: 'system', delay: 7400 },
    { text: '', type: 'info', delay: 7700 },
    { text: '> Generating surgical patch...', type: 'system', delay: 8000 },
    { text: '> Backup: lead_scraper.py.bak.151258', type: 'info', delay: 8300 },
    { text: '', type: 'info', delay: 8600 },
    { text: '┌─ PATCH APPLIED ──────────────────────────┐', type: 'success', delay: 8900 },
    { text: '│ - selector = "#contact-email"            │', type: 'error', delay: 9200 },
    { text: '│ + selector = \'[data-testid="email-input"]│', type: 'success', delay: 9500 },
    { text: '└───────────────────────────────────────────┘', type: 'success', delay: 9800 },
    { text: '', type: 'info', delay: 10100 },
    { text: '> Retrying build...', type: 'system', delay: 10400 },
    { text: '', type: 'info', delay: 10700 },
    { text: '$ npm run build', type: 'info', delay: 11000 },
    { text: '▲ Next.js 16.1.1 (Turbopack)', type: 'info', delay: 11300 },
    { text: 'Creating an optimized production build...', type: 'info', delay: 11600 },
    { text: '✓ Compiled successfully in 2.1s', type: 'success', delay: 12000 },
    { text: '', type: 'info', delay: 12300 },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', type: 'success', delay: 12600 },
    { text: '✓ BUILD SUCCESSFUL', type: 'success', delay: 12900 },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', type: 'success', delay: 13200 },
    { text: '', type: 'info', delay: 13500 },
    { text: '🧠 Knowledge updated: lead_scraper.py now handles layout v2', type: 'warning', delay: 13800 },
    { text: '⚡ System hardened. Future builds will not fail on this.', type: 'warning', delay: 14200 },
];

export default function SelfAnnealingDemo() {
    const [isRunning, setIsRunning] = useState(false);
    const [logs, setLogs] = useState<LogLine[]>([]);
    const [currentStep, setCurrentStep] = useState(0);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isRunning && currentStep < simulationSteps.length) {
            const step = simulationSteps[currentStep];
            const nextDelay = currentStep < simulationSteps.length - 1
                ? simulationSteps[currentStep + 1].delay - step.delay
                : 500;

            const timer = setTimeout(() => {
                setLogs(prev => [...prev, step]);
                setCurrentStep(prev => prev + 1);
            }, currentStep === 0 ? 0 : nextDelay);

            return () => clearTimeout(timer);
        } else if (currentStep >= simulationSteps.length) {
            setIsRunning(false);
        }
    }, [isRunning, currentStep]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [logs]);

    const startSimulation = () => {
        setLogs([]);
        setCurrentStep(0);
        setIsRunning(true);
    };

    const resetSimulation = () => {
        setIsRunning(false);
        setLogs([]);
        setCurrentStep(0);
    };

    const getLineColor = (type: string) => {
        switch (type) {
            case 'error': return 'text-red-400';
            case 'success': return 'text-green-400';
            case 'warning': return 'text-[#E9C46A]';
            case 'system': return 'text-blue-400';
            default: return 'text-gray-400';
        }
    };

    const isComplete = currentStep >= simulationSteps.length;

    return (
        <section className="py-12 md:py-20 px-4 bg-[#0A0A0A]">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#E9C46A]/10 border border-[#E9C46A]/30 text-[#E9C46A] text-xs md:text-sm font-mono mb-4 md:mb-6">
                        <Zap className="w-3 h-3 md:w-4 md:h-4" />
                        LIVE DEMONSTRATION
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                        Self-Annealing in Action
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-4">
                        Watch how a DOE agent detects a broken selector, analyzes the new DOM structure with an LLM,
                        patches its own code, and continues running — all without human intervention.
                    </p>
                </div>

                {/* Terminal */}
                <div className="bg-[#050505] border border-white/10 overflow-hidden font-mono text-xs md:text-sm shadow-2xl">
                    {/* Terminal Header */}
                    <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider hidden sm:inline">
                                self_anneal.py — DOE Terminal
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            {isRunning && (
                                <span className="text-xs text-[#E9C46A] flex items-center gap-1">
                                    <Loader2 className="w-3 h-3 animate-spin" />
                                    Running...
                                </span>
                            )}
                            {isComplete && (
                                <span className="text-xs text-green-400 flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" />
                                    Complete
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div
                        ref={terminalRef}
                        className="h-[280px] md:h-[400px] overflow-y-auto p-3 md:p-4 scrollbar-thin scrollbar-thumb-white/10 text-[11px] md:text-sm"
                    >
                        {logs.length === 0 && !isRunning && (
                            <div className="h-full flex flex-col items-center justify-center text-gray-600">
                                <Terminal className="w-12 h-12 mb-4 opacity-50" />
                                <p>Click "Run Simulation" to see Self-Annealing in action</p>
                            </div>
                        )}

                        <AnimatePresence>
                            {logs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className={`${getLineColor(log.type)} leading-relaxed`}
                                >
                                    {log.text || '\u00A0'}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isRunning && (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                                className="inline-block w-2 h-4 bg-[#E9C46A] ml-1"
                            />
                        )}
                    </div>

                    {/* Terminal Footer / Controls */}
                    <div className="bg-[#1a1a1a] px-3 md:px-4 py-2 md:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/10">
                        <div className="text-[10px] md:text-xs text-gray-600 text-center sm:text-left">
                            {isComplete ? (
                                <span className="text-green-400">Agent self-healed successfully</span>
                            ) : isRunning ? (
                                <span>Processing step {currentStep} of {simulationSteps.length}...</span>
                            ) : (
                                <span>Ready to simulate</span>
                            )}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={resetSimulation}
                                disabled={isRunning}
                                className="px-3 py-1.5 text-xs border border-white/20 text-gray-400 hover:border-white/40 hover:text-white disabled:opacity-30 transition-colors flex items-center gap-1"
                            >
                                <RotateCcw className="w-3 h-3" />
                                Reset
                            </button>
                            <button
                                onClick={startSimulation}
                                disabled={isRunning}
                                className="px-4 py-1.5 text-xs bg-[#E9C46A] text-black font-bold hover:bg-[#d4af37] disabled:opacity-30 transition-colors flex items-center gap-1"
                            >
                                <Play className="w-3 h-3" />
                                Run
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-[#050505] border border-white/10 p-4">
                        <div className="text-red-400 text-2xl mb-2">01</div>
                        <h3 className="text-white font-bold mb-1">Detect</h3>
                        <p className="text-gray-500 text-sm">Agent catches runtime errors and captures full context</p>
                    </div>
                    <div className="bg-[#050505] border border-white/10 p-4">
                        <div className="text-[#E9C46A] text-2xl mb-2">02</div>
                        <h3 className="text-white font-bold mb-1">Analyze</h3>
                        <p className="text-gray-500 text-sm">LLM identifies root cause and generates surgical fix</p>
                    </div>
                    <div className="bg-[#050505] border border-white/10 p-4">
                        <div className="text-green-400 text-2xl mb-2">03</div>
                        <h3 className="text-white font-bold mb-1">Heal</h3>
                        <p className="text-gray-500 text-sm">Patch is applied, build retried, system hardens</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
