'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b-4 border-white/20 bg-[#050505]">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-[#2E5BFF]/5 z-0" />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                {/* Left Content */}
                <div className="flex flex-col justify-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-[#2E5BFF] text-white px-4 py-1 font-display text-2xl tracking-widest w-fit"
                    >
                        SYSTEMS_ONLINE // V3.0
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-7xl md:text-9xl font-display leading-[0.85] uppercase tracking-tighter italic text-white"
                    >
                        Fast. Jazzy. <br /> <span className="text-[#2E5BFF]">Autonomous.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-md text-xl opacity-80 uppercase font-light tracking-wide font-body text-gray-300"
                    >
                        The frontier of digital workflow is wild. We provide the tools to navigate it. High-contrast, low-friction automation for the modern drifter.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex gap-4 pt-4"
                    >
                        <Link href="/produtos">
                            <button className="crt-button bg-[#2E5BFF] text-white font-display text-3xl px-12 py-4 uppercase tracking-widest hover:brightness-110 border border-[#2E5BFF]">
                                Launch System
                            </button>
                        </Link>
                        <Link href="/#como-funciona">
                            <button className="border-2 border-white font-display text-3xl px-8 py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                Specs
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Visual - Silhouette */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full h-[600px] bg-[#0A0A0A] overflow-hidden shadow-2xl border border-white/10">
                        {/* Imagem do braço robótico da referência ou similar */}
                        <img
                            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1287&auto=format&fit=crop"
                            alt="Robotic Arm Silhouette"
                            className="w-full h-full object-cover negative-space-img opacity-60 mix-blend-screen grayscale contrast-125"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#2E5BFF]/40 via-transparent to-transparent mix-blend-overlay" />

                        {/* Japanese Vertical Text */}
                        <div className="absolute bottom-8 right-8 text-white/10 font-japanese text-9xl japanese-vertical select-none font-black">
                            自動化
                        </div>
                    </div>

                    {/* Corner Decors */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#2E5BFF]" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#2E5BFF]" />
                </motion.div>
            </div>
        </section>
    );
}
