'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'SYNDICATE' },
        { href: '/produtos', label: 'SYSTEMS' },
        { href: '/#como-funciona', label: 'BOUNTY' },
        { href: '/#faq', label: 'CONTACT' },
    ];

    return (
        <nav
            className={`sticky top-0 z-40 transition-all duration-300 border-b-2 border-white/10 px-6 py-4 ${isScrolled
                ? 'bg-[#050505]/90 backdrop-blur-sm'
                : 'bg-[#050505]/50 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-end">
                {/* Logo Section */}
                <div className="flex items-end gap-3 group">
                    <Link href="/">
                        <div>
                            <h1 className="font-display text-5xl leading-none tracking-tighter text-white group-hover:text-[#2E5BFF] transition-colors">
                                AUTOMATIZE
                            </h1>
                            <p className="font-display text-xl tracking-widest text-[#2E5BFF]">
                                SYNDICATE
                            </p>
                        </div>
                    </Link>
                    <div className="font-japanese text-xs mb-1 opacity-60 text-white hidden sm:block">
                        オートマチゼ・シンジケート
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 font-display text-2xl tracking-wide">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-white hover:text-[#2E5BFF] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle & Settings */}
                <div className="flex items-center gap-4">
                    {/* Theme/Settings Button (Decorative now since we are dark-only) */}
                    <button className="hidden md:flex p-2 border border-white items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <Settings className="w-4 h-4" />
                    </button>

                    <button
                        className="md:hidden p-2 border border-white text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-[#050505] border-t border-white/10 mt-4"
                    >
                        <div className="flex flex-col p-4 space-y-4 font-display text-3xl">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white hover:text-[#2E5BFF]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
