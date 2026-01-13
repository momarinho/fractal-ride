'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Play,
    ShieldCheck,
    ArrowRight,
    Users,
    TrendingUp,
    Megaphone,
    Calculator,
    Settings,
    Package,
    Clock,
    Headphones,
    Download,
    ChevronLeft,
    Terminal,
    Cpu,
    Crosshair,
    Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/products';

const categoryIcons: any = {
    rh: Users,
    vendas: TrendingUp,
    marketing: Megaphone,
    financeiro: Calculator,
    operacional: Settings,
};

// Bebop V3 Colors - Solid Backgrounds for the Left Panel
const categoryColors: any = {
    rh: 'bg-[#D00000]',      // Red
    vendas: 'bg-[#0047AB]',  // Cobalt Blue
    marketing: 'bg-[#1B4D3E]', // Deep Green
    financeiro: 'bg-[#E9C46A]', // Yellow
    operacional: 'bg-[#333333]', // Dark Grey
};

// Tech Specs Data Mock based on reference
const techSpecs = [
    { label: 'SYSTEM LATENCY', value: '< 0.002 MS' },
    { label: 'PROTOCOL TYPE', value: 'SF-88-KABUTOMUSHI' },
    { label: 'CORE STATUS', value: '● [ STANDBY ]' },
];

interface ProductPageClientProps {
    product: Product;
    relatedProducts: Product[];
}

export default function ProductPageClient({ product, relatedProducts }: ProductPageClientProps) {
    const CategoryIcon = categoryIcons[product.category] || Settings;
    const leftPanelBg = categoryColors[product.category] || categoryColors.operacional;

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#E9C46A] selection:text-black font-sans flex flex-col items-center justify-center py-12 relative overflow-hidden">

            {/* Background Circuitry / Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            {/* Top Navigation Bar */}
            <div className="w-full max-w-7xl px-6 flex justify-between items-center mb-12 relative z-10">
                <Link href="/produtos" className="group">
                    <div className="bg-white text-black px-4 py-2 flex items-center gap-2 font-bold font-mono text-xs uppercase tracking-widest border border-transparent hover:border-[#E9C46A] hover:text-[#E9C46A] hover:bg-black transition-all">
                        <ChevronLeft className="w-4 h-4" />
                        BACK TO SYSTEMS / 01A
                    </div>
                </Link>
                <div className="hidden md:flex gap-8 text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">
                    <span>TERMINAL.VHS</span>
                    <span>PROTOCOLS</span>
                    <span className="text-white">BOUNTY</span>
                </div>
                <div className="border border-white/20 p-2">
                    <Settings className="w-4 h-4 text-gray-500" />
                </div>
            </div>

            {/* MAIN CONTENT BOX */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-7xl bg-[#080808] border border-white/10 relative z-10 shadow-2xl flex flex-col lg:flex-row overflow-hidden min-h-[600px]"
            >
                {/* LEFT PANEL - VISUAL (Dynamic Color) */}
                <div className={`w-full lg:w-1/2 ${leftPanelBg} relative flex flex-col items-center justify-center p-12`}>
                    <div className="absolute top-6 left-6 text-[10px] font-mono text-white/50 uppercase tracking-widest">
                        MODEL: 44-{product.category.toUpperCase()} // BLOCK.01
                    </div>

                    {/* Central Icon Visual */}
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse blur-xl" />
                        <div className="relative z-10 w-48 h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30">
                            <CategoryIcon className="w-24 h-24 text-white drop-shadow-lg" />
                        </div>
                        {/* Orbiting element mock */}
                        <div className="absolute w-full h-full border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                    </div>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-12 flex gap-3">
                        <div className="w-3 h-3 rounded-full bg-white" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                    </div>

                    {/* Vertical Lines Decoration */}
                    <div className="absolute bottom-0 w-full h-32 flex justify-center gap-16 opacity-20 pointer-events-none">
                        <div className="w-1 h-full bg-black" />
                        <div className="w-1 h-full bg-black" />
                    </div>
                </div>

                {/* RIGHT PANEL - INFO (Black) */}
                <div className="w-full lg:w-1/2 bg-[#0A0A0A] p-12 lg:p-16 flex flex-col justify-center relative">
                    {/* Japanese Label */}
                    <div className="bg-[#E9C46A]/20 text-[#E9C46A] px-2 py-1 inline-block text-xs font-japanese font-bold mb-4 w-max">
                        同期フロー
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-7xl lg:text-8xl italic uppercase leading-[0.85] text-white mb-8">
                        {product.name.split(' ')[0]}<br />
                        <span className="text-white">
                            {product.name.split(' ').slice(1).join(' ')}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="font-mono text-sm text-gray-400 leading-relaxed mb-12 max-w-md border-l-2 border-white/10 pl-6 uppercase">
                        {product.shortDescription}
                    </p>

                    {/* Tech Specs Box */}
                    <div className="border border-white/10 bg-[#050505] p-6 font-mono text-xs mb-10">
                        {techSpecs.map((spec, i) => (
                            <div key={i} className={`flex justify-between py-2 border-b border-white/5 last:border-0 ${i === 2 ? 'text-green-500' : 'text-gray-500'}`}>
                                <span className="uppercase tracking-widest">{spec.label}</span>
                                <span className={i === 0 ? 'text-green-400' : ''}>{spec.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-6">
                        <Button
                            asChild
                            className="bg-[#E9C46A] text-black hover:bg-[#D4AF37] h-16 px-10 text-xl font-bold uppercase tracking-wide rounded-none flex items-center gap-3 shrink-0"
                        >
                            <Link href="/checkout">
                                INITIALIZE SYSTEM <Zap className="w-5 h-5 fill-black" />
                            </Link>
                        </Button>
                        <div className="text-[10px] font-mono text-gray-600 uppercase">
                            AUTHORIZATION REQUIRED<br />
                            <span className="flex gap-1 mt-1">
                                <span className="w-6 h-1 bg-gray-700 block" />
                                <span className="w-6 h-1 bg-gray-700 block" />
                                <span className="w-4 h-1 bg-[#E9C46A] block" />
                            </span>
                        </div>
                    </div>

                    {/* Vert Text Decoration */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 font-mono text-xs text-gray-800 tracking-[0.5em] [writing-mode:vertical-rl] opacity-50 hidden lg:block select-none transform rotate-180">
                        AUTOMATION _ 004
                    </div>

                </div>
            </motion.div>

            {/* BOTTOM TECH SPECS */}
            <div className="w-full max-w-7xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 px-6 text-gray-500 font-mono text-[10px] uppercase tracking-wider relative z-10">
                <div>
                    <div className="flex items-center gap-2 text-[#E9C46A] mb-2 font-bold">
                        <div className="w-2 h-2 bg-[#E9C46A]" />
                        TECHNICAL SPECIFICATIONS
                    </div>
                    <p>Neural-linked data routing with adaptive frequency hopping for zero-interference terminal sync.</p>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-white mb-2 font-bold">
                        <div className="w-2 h-2 bg-white" />
                        HARDWARE REQUIREMENTS
                    </div>
                    <p>Compatible with most 90s era cyberdecks and modern quantum-based bounty terminals.</p>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-white mb-2 font-bold">
                        <div className="w-2 h-2 bg-white" />
                        LICENSE STATUS
                    </div>
                    <div className="flex items-center gap-4 text-white text-lg font-sans">
                        AE-99-821
                        <span className="px-2 py-0.5 border border-white/30 text-[8px]">VALID</span>
                    </div>
                </div>
            </div>

            {/* Footer Copyright */}
            <div className="fixed bottom-6 right-6 hidden md:flex gap-4">
                <div className="w-8 h-1 bg-red-600" />
                <div className="w-8 h-1 bg-yellow-400" />
                <div className="w-8 h-1 bg-blue-600" />
            </div>

        </main>
    );
}
