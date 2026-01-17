'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden relative">

            {/* --- MAIN CONTENT AREA (LEFT) --- */}
            <div className="flex-1 flex flex-col justify-center px-8 lg:px-24 mb-20 lg:mb-0 relative z-10">

                {/* Title Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-display text-7xl md:text-9xl leading-[0.85] uppercase tracking-tighter mb-4">
                        BOUNTY<br />SECURED
                    </h1>
                    <div className="text-[#E9C46A] font-japanese font-bold text-2xl mb-12 flex items-center gap-4">
                        賞金獲得 <div className="h-[1px] bg-[#E9C46A]/30 w-32" />
                    </div>
                </motion.div>

                {/* Holographic Ticket */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative w-full max-w-md p-6 border border-green-500/50 bg-green-900/5 rounded-sm shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)] mb-12 overflow-hidden group"
                >
                    {/* Scanlines inside ticket */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(34,197,94,0.05)_50%)] bg-[size:100%_4px] pointer-events-none" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-green-500/50 shadow-[0_0_10px_#22c55e] animate-[scan_3s_linear_infinite]" />

                    {/* Ticket Content */}
                    <div className="font-mono text-green-500 text-xs space-y-6 relative z-10">
                        <div>
                            <div className="opacity-50 text-[10px] mb-1">TRANSACTION AUTH-ID</div>
                            <div className="text-sm tracking-widest">TXN-2071-ALPHA-9</div>
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <div className="opacity-50 text-[10px] mb-1">AMOUNT</div>
                                <div className="text-xl font-bold text-white drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]">50,000 <span className="text-sm">W</span></div>
                            </div>
                            <div>
                                <div className="opacity-50 text-[10px] mb-1">VESSEL</div>
                                <div className="text-xl font-bold">BEBOP-01</div>
                            </div>
                        </div>

                        <div>
                            <div className="opacity-50 text-[10px] mb-1">PROCESSING NODE</div>
                            <div>MARS GATE #4</div>
                        </div>
                    </div>

                    {/* Stamp */}
                    <motion.div
                        initial={{ opacity: 0, scale: 2, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: -12 }}
                        transition={{ duration: 0.3, delay: 1 }}
                        className="absolute top-1/2 right-4 -translate-y-1/2 border-2 border-green-500 px-3 py-1 text-green-500 font-display text-xl uppercase tracking-widest bg-black/50 backdrop-blur-sm"
                    >
                        COMPLETED
                    </motion.div>
                </motion.div>

                {/* Return Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <Button
                        asChild
                        className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-6 font-bold uppercase tracking-widest text-lg"
                    >
                        <Link href="/produtos">
                            RETURN TO SHIP
                        </Link>
                    </Button>
                </motion.div>

                {/* Background Decoration (Star) */}
                <div className="absolute bottom-[-100px] left-[-50px] text-[#333] transform rotate-12 pointer-events-none">
                    <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </div>
            </div>

            {/* --- RED STRIP (RIGHT) --- */}
            <div className="w-16 md:w-32 lg:w-48 bg-[#E62405] h-screen fixed right-0 top-0 z-20 flex flex-col justify-end pb-12">
                {/* Optional texture or lines inside the red strip */}
            </div>


            {/* --- SIGNATURE TEXT --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 1.5 }}
                className="fixed bottom-8 right-8 md:right-40 lg:right-56 z-30 font-serif italic text-2xl md:text-4xl text-white drop-shadow-md select-none"
            >
                SEE YOU AUTOMATA COWBOY...
            </motion.div>

        </div>
    );
}
