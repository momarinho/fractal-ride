'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal,
    X,
    Send,
    Cpu,
    Loader2,
    Zap,
    GripVertical
} from 'lucide-react';

interface Message {
    role: 'user' | 'bot' | 'system';
    text: string;
    options?: string[];
}

const initialMessages: Message[] = [
    {
        role: 'bot',
        text: 'ROOT ACCESS GRANTED.\nI am the DOE Agent Interface. Select a query protocol:',
        options: [
            'What is DOE?',
            'List Active Modules',
            'Execution Pricing',
            'Deployment Guide'
        ]
    }
];

// Base responses
const baseResponses: { [key: string]: Message } = {
    'what is doe': {
        role: 'bot',
        text: `DOE STRUCTURE ANALYSIS:
        
> DIRECTIVE: Define goals, guardrails, and success metrics.
> ORCHESTRATION: Manage state, routing, and decision trees.
> EXECUTION: Deterministic Python scripts interacting with APIs.

It is the standard for building reliable, self-healing AI agents.`,
        options: ['Why Python?', 'Self-Annealing?', 'List Active Modules']
    },
    'active modules': {
        role: 'bot',
        text: `AVAILABLE FRAMEWORK MODULES:

1. [NEURAL] SEO Calculator
   > Vibe Coding / ROI Analysis
2. [SYNC] Lead Scraper
   > Self-Annealing / Data Extraction
3. [KINETIC] Proposal Engine
   > MCP / Transcripts to Docs
4. [VOID] Research Dossier
   > Parallel Sub-agents / Deep Dive

Select a module for detailed specs.`,
        options: ['SEO Calculator', 'Lead Scraper', 'Proposal Engine', 'Research Dossier']
    },
    'execution pricing': {
        role: 'bot',
        text: `LICENSE COST: ZERO.
        
The DOE Framework is open-architecture. You pay only for:
1. Intelligence (LLM API tokens)
2. Compute (VPS/Local Machine)

We sell the Blueprints (Code + Docs). You own the runtime.`,
        options: ['List Active Modules', 'Deployment Guide']
    },
    'deployment': {
        role: 'bot',
        text: `DEPLOYMENT VECTOR:
        
1. Git Clone Repository
2. Configure .env (API Keys)
3. Docker Compose Up
4. Execute Entrypoint

Can run locally, on Vercel (for UI), or any Linux VPS.`,
        options: ['What about n8n?', 'Self-Annealing?']
    },
    'seo calculator': {
        role: 'bot',
        text: `MODULE: SEO CALCULATOR
complexity: LOW
framework: Vibe Coding

Generates ROI projections and keyword gap analysis instantly. Good entry point for understanding agent logic.`,
        options: ['Back to Modules', 'Get Access']
    },
    'lead scraper': {
        role: 'bot',
        text: `MODULE: LEAD SCRAPER
complexity: MEDIUM
framework: DOE / Self-Annealing

Autonomous browser agent. Detects layout changes and fixes its own selectors (Self-Annealing). Zero manual maintenance.`,
        options: ['Back to Modules', 'Get Access']
    },
    'proposal engine': {
        role: 'bot',
        text: `MODULE: PROPOSAL ENGINE
complexity: MEDIUM
framework: MCP (Model Context Protocol)

Ingests meeting audio, extracts intent, and drafts comprehensive commercial proposals using your templates.`,
        options: ['Back to Modules', 'Get Access']
    },
    'research dossier': {
        role: 'bot',
        text: `MODULE: RESEARCH DOSSIER
complexity: HIGH
framework: Parallel Sub-agents

Spawns 5-10 sub-agents to scour the web, read pages, and verify facts. Aggregates findings into a single authority report.`,
        options: ['Back to Modules', 'Get Access']
    },
    'n8n': {
        role: 'bot',
        text: `N8N LIMITATION ANALYSIS:
        
Visual nodes fail at managing complex state loops. debugging is slow. Version control is binary.
DOE (Python) offers: unit testing, git flow, type safety, and raw performance.`,
        options: ['What is DOE?', 'List Active Modules']
    },
    'self-annealing': {
        role: 'bot',
        text: `SELF-ANNEALING MECHANISM:
        
If an agent step fails (e.g., selector not found), it catches the exception, analyzes the DOM/Error with an LLM, updates its own logic file, and retries.
The system hardens over time.

TRY IT: Type something I don't understand, and watch me learn.`,
        options: ['List Active Modules', 'Deployment Guide']
    },
    'python': {
        role: 'bot',
        text: `WHY PYTHON?

- Full control over execution flow
- Native exception handling for Self-Annealing
- Type hints + Pydantic for data validation
- Vast ecosystem (requests, playwright, pandas)
- Easy to unit test and version control`,
        options: ['What is DOE?', 'List Active Modules']
    },
    'back to modules': {
        role: 'bot',
        text: `AVAILABLE FRAMEWORK MODULES:

1. [NEURAL] SEO Calculator
2. [SYNC] Lead Scraper
3. [KINETIC] Proposal Engine
4. [VOID] Research Dossier`,
        options: ['SEO Calculator', 'Lead Scraper', 'Proposal Engine', 'Research Dossier']
    },
    'get access': {
        role: 'bot',
        text: `ACCESS PROTOCOL:

Navigate to the PRODUCTS section to view blueprints.
Each module includes:
- Source Code (Python)
- Documentation
- Deployment Guide`,
        options: ['List Active Modules', 'What is DOE?']
    }
};

// Simple Levenshtein distance for fuzzy matching
function levenshtein(a: string, b: string): number {
    const matrix: number[][] = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [learnedKeywords, setLearnedKeywords] = useState<Record<string, string>>({});
    const [annealingCount, setAnnealingCount] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const findClosestKey = (text: string): string | null => {
        const keys = Object.keys(baseResponses).filter(k => k !== 'default');
        let bestMatch: string | null = null;
        let bestScore = Infinity;

        for (const key of keys) {
            const distance = levenshtein(text.toLowerCase(), key);
            // Also check if any word in the input is close to a key word
            const words = text.toLowerCase().split(/\s+/);
            for (const word of words) {
                const wordDistance = levenshtein(word, key.split(' ')[0]);
                if (wordDistance < bestScore && wordDistance <= 3) {
                    bestScore = wordDistance;
                    bestMatch = key;
                }
            }
            if (distance < bestScore && distance <= 4) {
                bestScore = distance;
                bestMatch = key;
            }
        }
        return bestMatch;
    };

    const findResponse = (text: string): { response: Message; wasLearned: boolean; learnedFrom?: string } => {
        const lowerText = text.toLowerCase().trim();

        // First check learned keywords
        if (learnedKeywords[lowerText]) {
            return { response: baseResponses[learnedKeywords[lowerText]], wasLearned: true, learnedFrom: learnedKeywords[lowerText] };
        }

        // Then check base responses
        for (const [key, response] of Object.entries(baseResponses)) {
            if (lowerText.includes(key) || lowerText.includes(key.split(' ')[0])) {
                return { response, wasLearned: false };
            }
        }

        // Not found - return null to trigger self-annealing
        return {
            response: {
                role: 'bot',
                text: 'COMMAND NOT RECOGNIZED.\nPlease select a valid protocol or rephrase query.',
                options: ['List Active Modules', 'What is DOE?']
            },
            wasLearned: false
        };
    };

    const handleSend = async (text?: string) => {
        const messageText = text || input;
        if (!messageText.trim()) return;

        const userMessage: Message = { role: 'user', text: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        await new Promise(resolve => setTimeout(resolve, 400));

        const { response, wasLearned, learnedFrom } = findResponse(messageText);

        // Check if we need to trigger self-annealing
        const lowerText = messageText.toLowerCase().trim();
        const isUnknown = response.text.includes('COMMAND NOT RECOGNIZED');

        if (isUnknown) {
            // SELF-ANNEALING TRIGGERED
            const closestKey = findClosestKey(messageText);

            if (closestKey) {
                // Show annealing process
                const annealingMsg: Message = {
                    role: 'system',
                    text: `⚡ SELF-ANNEALING TRIGGERED
━━━━━━━━━━━━━━━━━━━━━━━━
> Analyzing input pattern...
> Closest match found: "${closestKey}"
> Learning association: "${lowerText}" → "${closestKey}"
> Updating knowledge base...
━━━━━━━━━━━━━━━━━━━━━━━━
✓ ANNEALING COMPLETE`
                };
                setMessages(prev => [...prev, annealingMsg]);

                // Learn the new keyword
                setLearnedKeywords(prev => ({ ...prev, [lowerText]: closestKey }));
                setAnnealingCount(prev => prev + 1);

                await new Promise(resolve => setTimeout(resolve, 800));

                // Now provide the correct response
                const learnedResponse = baseResponses[closestKey];
                setMessages(prev => [...prev, learnedResponse]);
                setIsTyping(false);
                return;
            }
        }

        // If it was a previously learned keyword, show a note
        if (wasLearned && learnedFrom) {
            const recallMsg: Message = {
                role: 'system',
                text: `🧠 RECALL: Using learned association → "${learnedFrom}"`
            };
            setMessages(prev => [...prev, recallMsg]);
            await new Promise(resolve => setTimeout(resolve, 300));
        }

        setMessages(prev => [...prev, response]);
        setIsTyping(false);
    };

    return (
        <>
            {/* Chat Bubble Trigger */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        drag
                        dragMomentum={false}
                        dragElastic={0.1}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-black border border-white/20 hover:border-[#E9C46A] shadow-lg flex items-center justify-center group transition-colors cursor-grab active:cursor-grabbing"
                        style={{ touchAction: 'none' }}
                    >
                        <Terminal className="w-5 h-5 text-gray-400 group-hover:text-[#E9C46A] transition-colors" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E9C46A] rounded-full animate-pulse" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        drag
                        dragMomentum={false}
                        dragElastic={0.05}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[350px] md:w-[400px] h-[70vh] sm:h-[500px] bg-[#050505] border-t sm:border border-white/20 shadow-2xl flex flex-col overflow-hidden font-mono text-xs"
                        style={{ touchAction: 'none' }}
                    >
                        {/* Header - Draggable area */}
                        <div className="bg-[#0A0A0A] border-b border-white/10 p-3 flex items-center justify-between cursor-grab active:cursor-grabbing">
                            <div className="flex items-center gap-2">
                                <GripVertical className="w-4 h-4 text-gray-600" />
                                <Cpu className="w-4 h-4 text-[#E9C46A]" />
                                <span className="text-gray-400 font-bold tracking-widest uppercase text-[10px] sm:text-xs">DOE_AGENT</span>
                                {annealingCount > 0 && (
                                    <span className="text-[10px] text-green-500 flex items-center gap-1">
                                        <Zap className="w-3 h-3" /> {annealingCount} learned
                                    </span>
                                )}
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:text-white text-gray-500">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Terminal Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div className={`max-w-[90%] p-3 border ${msg.role === 'user'
                                        ? 'bg-white/5 border-white/20 text-gray-300'
                                        : msg.role === 'system'
                                            ? 'bg-green-900/20 border-green-500/30 text-green-400'
                                            : 'bg-black border-[#E9C46A]/30 text-[#E9C46A]'
                                        }`}>
                                        <div className="mb-1 opacity-50 text-[10px] uppercase">
                                            {msg.role === 'user' ? '> USER_INPUT' : msg.role === 'system' ? '> SELF_ANNEALING' : '> SYSTEM_RESPONSE'}
                                        </div>
                                        <div className="whitespace-pre-wrap leading-relaxed">
                                            {msg.text}
                                        </div>
                                    </div>

                                    {/* Quick Actions (only for latest bot message) */}
                                    {msg.role === 'bot' && msg.options && i === messages.length - 1 && (
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {msg.options.map((opt, k) => (
                                                <button
                                                    key={k}
                                                    onClick={() => handleSend(opt)}
                                                    className="px-2 py-1 border border-white/10 text-[10px] text-gray-500 hover:border-[#E9C46A] hover:text-[#E9C46A] hover:bg-[#E9C46A]/10 transition-all uppercase"
                                                >
                                                    [{opt}]
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Loader2 className="w-3 h-3 animate-spin" />
                                    <span>PROCESSING...</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-[#0A0A0A] border-t border-white/10 flex gap-2">
                            <span className="text-[#E9C46A] py-2">{'>'}</span>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="EXECUTE_COMMAND..."
                                className="flex-1 bg-transparent border-none focus:ring-0 text-[#E9C46A] placeholder-gray-700 outline-none font-mono"
                                autoFocus
                            />
                            <button onClick={() => handleSend()} disabled={!input} className="text-gray-500 hover:text-white disabled:opacity-30">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
        </>
    );
}
