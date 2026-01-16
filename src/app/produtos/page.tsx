'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    LayoutGrid,
    Package,
    Target, // Use Target for 'Bounties' icon (Crosshair style)
    Radio,
    Settings,
    Search,
    ArrowRight,
    Users,
    TrendingUp,
    Megaphone,
    Calculator,
    Cpu,
    Database,
    Zap,
    Shield
} from 'lucide-react';
import { products } from '@/lib/products';

// --- Configuration & Mocks ---

const sidebarItems = [
    { icon: LayoutGrid, label: 'DASHBOARD', active: false },
    { icon: Package, label: 'WAREHOUSE', active: true }, // Active page
    { icon: Target, label: 'BOUNTIES', active: false },
    { icon: Radio, label: 'COMMUNICATIONS', active: false },
];

// Mapping categories to the massive color cards style
// Using the reference colors: Yellow, Blue, Red, Green
const cardStyles: { [key: string]: { bg: string; text: string; sub: string; icon: any; japanese: string } } = {
    rh: {
        bg: 'bg-[#E9C46A]', // Yellow
        text: 'text-black',
        sub: 'text-black/60',
        icon: Users,
        japanese: 'ニューラル' // Neural
    },
    vendas: {
        bg: 'bg-[#2E5BFF]', // Cobalt Blue
        text: 'text-white',
        sub: 'text-white/60',
        icon: TrendingUp,
        japanese: '同期' // Sync
    },
    marketing: {
        bg: 'bg-[#E63946]', // Red
        text: 'text-white',
        sub: 'text-white/60',
        icon: Megaphone,
        japanese: 'ボイド' // Void
    },
    financeiro: {
        bg: 'bg-[#2A9D8F]', // Green (Reference is darker, but keeping our palette cohesion)
        text: 'text-white',
        sub: 'text-white/60', // Darker text for contrast on teal
        icon: Calculator,
        japanese: 'キネティック' // Kinetic
    },
    operacional: {
        bg: 'bg-[#F4F4F4]',
        text: 'text-black',
        sub: 'text-black/60',
        icon: Settings,
        japanese: 'オペレー' // Ops
    }
};

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('ALL_SYS');

    // Filter Logic
    const filteredProducts = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filter === 'ALL_SYS' || p.category.toUpperCase() === filter; // Simplified filter
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="flex min-h-screen bg-[#050505] text-white font-sans overflow-hidden">

            {/* --- SIDEBAR --- */}
            <aside className="hidden lg:flex w-64 flex-col border-r border-white/10 pt-8 pb-6 px-6 relative z-20 bg-[#050505]">
                {/* Brand */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-1 text-[#2E5BFF] animate-pulse">
                        <div className="w-2 h-2 rounded-full bg-[#2E5BFF]" />
                        <span className="text-[10px] font-mono tracking-widest">SYSTEM: ONLINE</span>
                    </div>
                    <h1 className="font-display text-2xl leading-none text-white uppercase">
                        BEBOP<br />AUTOMATIONS
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-6">
                    {sidebarItems.map((item) => {
                        const isDashboard = item.label === 'DASHBOARD';

                        const Content = (
                            <div className={`flex items-center gap-4 text-sm font-bold tracking-widest uppercase transition-colors group w-full text-left cursor-pointer
                                ${item.active ? 'text-[#2E5BFF]' : 'text-gray-500 hover:text-white'}
                            `}>
                                <item.icon className={`w-5 h-5 ${item.active ? 'text-[#2E5BFF]' : 'text-gray-600 group-hover:text-white'}`} />
                                {item.label}
                                {item.active && <div className="ml-auto w-1 h-4 bg-[#2E5BFF]" />}
                            </div>
                        );

                        if (isDashboard) {
                            return (
                                <Link key={item.label} href="/dashboard" className="block w-full">
                                    {Content}
                                </Link>
                            );
                        }

                        return (
                            <button key={item.label} className="w-full">
                                {Content}
                            </button>
                        );
                    })}
                </nav>

                {/* Bottom Stats / Audio Viz Mock */}
                <div className="mt-auto">
                    <div className="flex items-end gap-1 h-8 mb-2">
                        {[40, 70, 30, 80, 50, 90, 20].map((h, i) => (
                            <div key={i} className="w-1 bg-[#2E5BFF]" style={{ height: `${h}%`, opacity: 0.5 + (i * 0.1) }} />
                        ))}
                    </div>
                    <div className="text-[10px] text-gray-600 font-mono">AUDIO FEED: BRIDGE-01 ACTIVE</div>

                    <button className="flex items-center gap-3 mt-6 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        <Settings className="w-4 h-4" />
                        SETTINGS
                    </button>
                </div>
            </aside>


            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">

                {/* Header Bar */}
                <header className="h-24 border-b border-white/10 flex items-center justify-between px-8 bg-[#050505]/95 backdrop-blur z-10 shrink-0">
                    <div>
                        <h2 className="font-display text-4xl italic uppercase flex items-center gap-2">
                            INVENTORY <span className="text-gray-600 not-italic font-light">/</span> <span className="text-[#2E5BFF]">PRODUCTS</span>
                        </h2>
                        <p className="text-[10px] text-gray-500 font-mono tracking-widest mt-1">
                            SELECT COMPONENT FOR EXTRACTION // SESSION 2026.04
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Filters */}
                        <div className="flex gap-2">
                            {['NEURAL', 'LOGIC', 'ALL_SYS'].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f === 'ALL_SYS' ? 'ALL_SYS' : f)} // Just mocking interaction
                                    className={`px-4 py-1.5 text-xs font-mono font-bold uppercase border transition-all
                                        ${filter === f || (f === 'ALL_SYS' && filter === 'ALL_SYS')
                                            ? 'bg-[#2E5BFF] border-[#2E5BFF] text-white'
                                            : 'border-white/20 text-gray-500 hover:border-white/50 hover:text-white'
                                        }
                                    `}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative group">
                            <Search className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors cursor-pointer" />
                        </div>

                        {/* Avatar */}
                        <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center border border-white/20">
                            <Users className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                </header>


                {/* SCROLLABLE GRID AREA */}
                <div className="flex-1 overflow-y-auto p-4 lg:p-8 scrollbar-hide">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 pb-20">

                        {filteredProducts.map((product, i) => {
                            const style = cardStyles[product.category] || cardStyles.operacional;
                            const Icon = style.icon;

                            return (
                                <Link href={`/produtos/${product.slug}`} key={product.id} className="block group">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className={`min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] ${style.bg} relative flex flex-col p-6 sm:p-7 lg:p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`}
                                    >
                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-6 border-b border-black/10 pb-4">
                                            <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${style.sub}`}>
                                                BEBOP-0{i + 1}
                                            </span>
                                        </div>

                                        {/* Title Block */}
                                        <h3 className={`font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.9] uppercase mb-2 break-words text-balance ${style.text}`}>
                                            {product.name.split(' ').map((word, w) => (
                                                <span key={w} className="block">{word}</span>
                                            ))}
                                        </h3>
                                        <div className={`font-japanese text-xl opacity-60 font-bold ${style.text}`}>
                                            {style.japanese}
                                        </div>

                                        {/* Center Icon (The "Diamond" or "Square") */}
                                        <div className="flex-1 flex items-center justify-center my-6 sm:my-8">
                                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-black/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 rounded-sm">
                                                {/* Decorative rotated square for some, normal for others to match ref variety */}
                                                <div className={`absolute inset-0 bg-black ${i % 2 === 0 ? 'rotate-45' : ''}`} />
                                                <Icon className={`w-12 h-12 sm:w-16 sm:h-16 ${style.bg} relative z-10`} />
                                            </div>
                                        </div>

                                        {/* Footer Arrow */}
                                        <div className="mt-auto flex justify-end">
                                            <ArrowRight className={`w-8 h-8 ${style.text} transform group-hover:translate-x-2 transition-transform`} />
                                        </div>

                                    </motion.div>
                                </Link>
                            );
                        })}

                    </div>

                    {/* Footer text in scroll area */}
                    <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-gray-600 border-t border-white/10 pt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500/50" />
                            DATA LINK: STABLE
                        </div>
                        <div>BUFFER: 98%</div>
                        <div>ENCRYPTION: AES-256-BEBOP</div>
                        <div className="text-[#2E5BFF]">TANK! . SESSION #01 . 2026</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
