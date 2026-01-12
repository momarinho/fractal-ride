'use client';

import { motion } from 'framer-motion';
import {
    ShoppingCart,
    Download,
    Rocket,
    ArrowRight,
    Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
    {
        session: 'SESSION_01',
        title: 'TARGET ACQUISITION',
        icon: ShoppingCart,
        description: 'Scan the database. Locate the automation protocol that fits your operation needs.',
        style: {
            bg: 'bg-[#2345bd]',
            border: 'border-[#2345bd]',
            text: 'text-[#2345bd]',
            shadow: 'shadow-sharp-blue'
        }
    },
    {
        session: 'SESSION_02',
        title: 'TRANSACTION',
        icon: Download,
        titleColor: 'text-white',
        description: 'Secure payment gateway. Instant transfer of JSON assets, blueprints and manuals.',
        style: {
            bg: 'bg-[#ff2e2e]',
            border: 'border-[#ff2e2e]',
            text: 'text-[#ff2e2e]',
            shadow: 'shadow-sharp-red'
        }
    },
    {
        session: 'SESSION_03',
        title: 'SYSTEM DEPLOY',
        icon: Rocket,
        description: 'Import protocol to n8n. Configure credentials. Launch operation. Mission Complete.',
        style: {
            bg: 'bg-[#23bd5a]',
            border: 'border-[#23bd5a]',
            text: 'text-[#23bd5a]',
            shadow: 'shadow-sharp-green'
        }
    },
];

export default function HowItWorks() {
    return (
        <section id="como-funciona" className="py-20 lg:py-32 relative overflow-hidden bg-[#0f0f13]">
            {/* Bebop Lines Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-px h-full bg-white/20" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-white/20" />
                <div className="absolute top-1/2 w-full h-px bg-white/20" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl sm:text-7xl font-bold font-sans uppercase italic text-white mb-6 relative inline-block">
                        <span className="relative z-10">Operation Guide</span>
                        <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#f2d024] -skew-x-12 opacity-80 z-0" />
                    </h2>
                    <p className="text-xl text-gray-400 font-mono tracking-wide">
                        The easiest bounty you'll ever catch.
                    </p>
                </motion.div>

                {/* Steps - Session Cards */}
                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connection Line layer */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-1 bg-white/10 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.session}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Card */}
                            <div className="bg-[#15151a] border-2 border-white/20 hover:border-white transition-colors p-8 relative group h-full flex flex-col items-center text-center">
                                {/* Number Diamond */}
                                <div className={`w-16 h-16 transform rotate-45 ${step.style.bg} border-2 border-white flex items-center justify-center mb-10 relative z-10 shadow-lg`}>
                                    <step.icon className="w-8 h-8 text-white transform -rotate-45" />
                                </div>

                                {/* Content */}
                                <div className={`text-xs font-mono font-bold uppercase tracking-widest mb-2 ${step.style.text}`}>
                                    {step.session}
                                </div>
                                <h3 className="text-3xl font-bold font-sans uppercase italic text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 font-mono leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <Button
                        size="lg"
                        className="bg-[#f2d024] hover:bg-[#ffe600] text-[#0f0f13] font-bold text-xl px-12 h-16 rounded-none uppercase tracking-widest shadow-sharp hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                        asChild
                    >
                        <Link href="/produtos">
                            Start Mission
                            <Play className="w-5 h-5 ml-3 fill-current" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
