'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Package,
    Search,
    ArrowRight,
    Users,
    TrendingUp,
    Megaphone,
    Calculator,
    Home,
    X
} from 'lucide-react';
import { products } from '@/lib/products';
import { useTranslation } from '@/lib/i18n';

// --- Configuration & Mocks ---

const sidebarItems = [
    { icon: Package, label: 'WAREHOUSE', active: true },
];

// Mapping categories to the massive color cards style
const cardStyles: { [key: string]: { bg: string; text: string; sub: string; icon: any; japanese: string } } = {
    neural: {
        bg: 'bg-[#E63946]', // Red
        text: 'text-white',
        sub: 'text-white/60',
        icon: Users,
        japanese: 'ニューラル'
    },
    sync: {
        bg: 'bg-[#2A9D8F]', // Green
        text: 'text-white',
        sub: 'text-white/60',
        icon: TrendingUp,
        japanese: '同期'
    },
    kinetic: {
        bg: 'bg-[#E9C46A]', // Yellow
        text: 'text-black',
        sub: 'text-black/60',
        icon: Calculator,
        japanese: 'キネティック'
    },
    void: {
        bg: 'bg-[#2E5BFF]', // Blue
        text: 'text-white',
        sub: 'text-white/60',
        icon: Megaphone,
        japanese: 'ボイド'
    }
};

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('ALL_SYS');
    const [showSearch, setShowSearch] = useState(false);
    const t = useTranslation();

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
                <div className="mb-8">
                    <Link href="/" className="block group">
                        <div className="flex items-center gap-2 mb-1 text-[#2E5BFF] animate-pulse">
                            <div className="w-2 h-2 rounded-full bg-[#2E5BFF]" />
                            <span className="text-[10px] font-mono tracking-widest">SYSTEM: ONLINE</span>
                        </div>
                        <h1 className="font-display text-2xl leading-none text-white uppercase group-hover:text-[#E9C46A] transition-colors">
                            DOE<br />FRAMEWORK
                        </h1>
                    </Link>
                </div>

                {/* Home Link */}
                <Link href="/" className="flex items-center gap-3 mb-6 text-gray-500 hover:text-[#E9C46A] transition-colors">
                    <Home className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">{t.nav.home}</span>
                </Link>

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

                {/* Footer */}
                <div className="mt-auto">
                    <div className="text-[10px] text-gray-600 font-mono">DOE FRAMEWORK v1.0</div>
                </div>
            </aside>


            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">

                {/* Header Bar */}
                <header className="h-16 sm:h-24 border-b border-white/10 flex items-center justify-between px-4 sm:px-8 bg-[#050505]/95 backdrop-blur z-10 shrink-0">
                    <div>
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl italic uppercase flex items-center gap-2">
                            {t.products.inventory} <span className="text-gray-600 not-italic font-light">/</span> <span className="text-[#2E5BFF]">{t.nav.products.toUpperCase()}</span>
                        </h2>
                        <p className="text-[9px] sm:text-[10px] text-gray-500 font-mono tracking-widest mt-1 hidden sm:block">
                            SELECT COMPONENT FOR EXTRACTION // SESSION 2026.04
                        </p>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-6">
                        {/* Filters - Hidden on small mobile */}
                        <div className="hidden sm:flex gap-1 md:gap-2 overflow-x-auto">
                            {['NEURAL', 'SYNC', 'KINETIC', 'VOID', 'ALL_SYS'].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f === 'ALL_SYS' ? 'ALL_SYS' : f)}
                                    className={`px-2 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-mono font-bold uppercase border transition-all whitespace-nowrap
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
                        <div className="relative flex items-center">
                            {showSearch && (
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t.products.search}
                                    className="bg-transparent border border-white/20 px-3 py-1.5 text-xs font-mono text-white placeholder-gray-500 focus:border-[#E9C46A] focus:outline-none w-32 sm:w-48"
                                    autoFocus
                                />
                            )}
                            <button
                                onClick={() => {
                                    if (showSearch && searchQuery) {
                                        setSearchQuery('');
                                    }
                                    setShowSearch(!showSearch);
                                }}
                                className="p-2 text-gray-500 hover:text-white transition-colors"
                            >
                                {showSearch ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                            </button>
                        </div>

                        {/* Home Button (Mobile) */}
                        <Link href="/" className="lg:hidden">
                            <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center border border-white/20 hover:border-[#E9C46A] transition-colors">
                                <Home className="w-5 h-5 text-gray-400" />
                            </div>
                        </Link>
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
                                            {/* Price Tag Mockup */}
                                            {product.priceLabel && (
                                                <div className={`px-2 py-0.5 rounded-sm bg-black/10 backdrop-blur-md ${style.sub} text-xs font-bold`}>
                                                    {product.priceLabel}
                                                </div>
                                            )}
                                        </div>

                                        {/* Title Block */}
                                        <h3 className={`font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.9] uppercase mb-2 break-words text-balance ${style.text}`}>
                                            {product.name.split(' ').map((word, w) => (
                                                <span key={w} className="block">{word}</span>
                                            ))}
                                        </h3>
                                        <div className={`font-japanese text-xl opacity-60 font-bold ${style.text}`}>
                                            {/* Using complexity as a sub-label if available */}
                                            {product.complexity ? `${product.complexity} LVL` : style.japanese}
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
