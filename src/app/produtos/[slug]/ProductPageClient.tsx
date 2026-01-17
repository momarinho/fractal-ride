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
    Zap,
    CheckCircle,
    Target,
    Code,
    FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Product } from '@/lib/products';
import { useTranslation } from '@/lib/i18n';

const categoryIcons: any = {
    neural: Users,
    sync: TrendingUp,
    kinetic: Calculator,
    void: Megaphone,
    operacional: Settings,
};

const categoryColors: any = {
    neural: 'bg-[#D00000]',
    sync: 'bg-[#1B4D3E]',
    kinetic: 'bg-[#E9C46A]',
    void: 'bg-[#0047AB]',
    operacional: 'bg-[#333333]',
};

const categoryJapanese: any = {
    neural: 'ニューラル',
    sync: '同期フロー',
    kinetic: 'キネティック',
    void: 'ボイド',
};

interface ProductPageClientProps {
    product: Product;
    relatedProducts: Product[];
}

export default function ProductPageClient({ product, relatedProducts }: ProductPageClientProps) {
    const CategoryIcon = categoryIcons[product.category] || Settings;
    const leftPanelBg = categoryColors[product.category] || categoryColors.operacional;
    const t = useTranslation();

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#E9C46A] selection:text-black font-sans">

            {/* Background Textures */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

            {/* Top Navigation Bar */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center relative z-10">
                <Link href="/produtos" className="group">
                    <div className="bg-white text-black px-3 sm:px-4 py-2 flex items-center gap-2 font-bold font-mono text-[10px] sm:text-xs uppercase tracking-widest border border-transparent hover:border-[#E9C46A] hover:text-[#E9C46A] hover:bg-black transition-all">
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">BACK TO SYSTEMS</span>
                        <span className="sm:hidden">BACK</span>
                    </div>
                </Link>
                <div className="hidden md:flex gap-8 text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">
                    <span>DOE_FRAMEWORK</span>
                    <span className="text-[#E9C46A]">{product.framework}</span>
                </div>
            </div>

            {/* MAIN CONTENT BOX */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-7xl mx-auto bg-[#080808] border border-white/10 relative z-10 shadow-2xl flex flex-col lg:flex-row overflow-hidden"
            >
                {/* LEFT PANEL - VISUAL */}
                <div className={`w-full lg:w-1/2 ${leftPanelBg} relative flex flex-col items-center justify-center p-8 sm:p-12 min-h-[300px] lg:min-h-[500px]`}>
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-[9px] sm:text-[10px] font-mono text-white/50 uppercase tracking-widest">
                        {product.category.toUpperCase()} // {product.complexity}
                    </div>

                    {/* Central Icon Visual */}
                    <div className="relative w-40 h-40 sm:w-64 sm:h-64 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse blur-xl" />
                        <div className="relative z-10 w-32 h-32 sm:w-48 sm:h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30">
                            <CategoryIcon className="w-16 h-16 sm:w-24 sm:h-24 text-white drop-shadow-lg" />
                        </div>
                        <div className="absolute w-full h-full border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                    </div>

                    {/* Badge */}
                    {product.badge && (
                        <div className="absolute bottom-6 bg-black/50 text-white px-4 py-2 text-xs font-mono uppercase tracking-widest backdrop-blur">
                            {product.badge}
                        </div>
                    )}
                </div>

                {/* RIGHT PANEL - INFO */}
                <div className="w-full lg:w-1/2 bg-[#0A0A0A] p-6 sm:p-12 lg:p-16 flex flex-col justify-center relative">
                    {/* Japanese Label */}
                    <div className="bg-[#E9C46A]/20 text-[#E9C46A] px-2 py-1 inline-block text-xs font-japanese font-bold mb-4 w-max">
                        {categoryJapanese[product.category] || 'オートメーション'}
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl italic uppercase leading-[0.85] text-white mb-6">
                        {product.name.split(' ')[0]}<br />
                        <span className="text-white/80">
                            {product.name.split(' ').slice(1).join(' ')}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="font-mono text-xs sm:text-sm text-gray-400 leading-relaxed mb-8 max-w-md border-l-2 border-white/10 pl-4 sm:pl-6">
                        {product.longDescription.split('\n')[0]}
                    </p>

                    {/* Price & Framework */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className="bg-[#E9C46A] text-black px-4 py-2 font-display text-xl sm:text-2xl">
                            {product.priceLabel}
                        </div>
                        <div className="text-xs font-mono text-gray-500 uppercase">
                            Framework: <span className="text-white">{product.framework}</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Button
                            asChild
                            className="bg-[#E9C46A] text-black hover:bg-[#D4AF37] h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold uppercase tracking-wide rounded-none flex items-center gap-3 w-full sm:w-auto justify-center"
                        >
                            <Link href="/checkout">
                                {t.products.buyNow} <Zap className="w-5 h-5 fill-black" />
                            </Link>
                        </Button>
                        <div className="text-[10px] font-mono text-gray-600 uppercase hidden sm:block">
                            AUTHORIZATION REQUIRED
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* FEATURES SECTION */}
            <section className="w-full max-w-7xl mx-auto mt-12 px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div className="bg-[#0A0A0A] border border-white/10 p-6 sm:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Terminal className="w-5 h-5 text-[#E9C46A]" />
                            <h2 className="font-display text-2xl uppercase">Features</h2>
                        </div>
                        <ul className="space-y-3">
                            {product.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400 font-mono text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What You Get */}
                    <div className="bg-[#0A0A0A] border border-white/10 p-6 sm:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Package className="w-5 h-5 text-[#E9C46A]" />
                            <h2 className="font-display text-2xl uppercase">What You Get</h2>
                        </div>
                        <ul className="space-y-3">
                            {product.whatYouGet.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400 font-mono text-sm">
                                    <Download className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* For Who */}
                <div className="bg-[#0A0A0A] border border-white/10 p-6 sm:p-8 mt-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Target className="w-5 h-5 text-[#E9C46A]" />
                        <h2 className="font-display text-2xl uppercase">Target Audience</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {product.forWho.map((item, i) => (
                            <span key={i} className="bg-[#E9C46A]/10 text-[#E9C46A] px-4 py-2 font-mono text-sm border border-[#E9C46A]/30">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* LONG DESCRIPTION */}
            <section className="w-full max-w-7xl mx-auto mt-12 px-4 sm:px-6">
                <div className="bg-[#0A0A0A] border border-white/10 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-5 h-5 text-[#E9C46A]" />
                        <h2 className="font-display text-2xl uppercase">About This Module</h2>
                    </div>
                    <div className="prose prose-invert max-w-none">
                        {product.longDescription.split('\n').map((paragraph, i) => (
                            paragraph.trim() && (
                                <p key={i} className="text-gray-400 font-mono text-sm leading-relaxed mb-4">
                                    {paragraph.trim()}
                                </p>
                            )
                        ))}
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS */}
            {relatedProducts.length > 0 && (
                <section className="w-full max-w-7xl mx-auto mt-12 mb-12 px-4 sm:px-6">
                    <h2 className="font-display text-3xl uppercase mb-8 flex items-center gap-3">
                        <Code className="w-6 h-6 text-[#E9C46A]" />
                        Related Modules
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedProducts.map((related) => {
                            const RelatedIcon = categoryIcons[related.category] || Settings;
                            const relatedBg = categoryColors[related.category] || 'bg-[#333]';
                            return (
                                <Link key={related.id} href={`/produtos/${related.slug}`} className="group">
                                    <div className={`${relatedBg} p-6 h-full flex flex-col transition-all hover:brightness-110`}>
                                        <RelatedIcon className="w-10 h-10 text-white/80 mb-4" />
                                        <h3 className="font-display text-2xl uppercase text-white mb-2">{related.name}</h3>
                                        <p className="font-mono text-xs text-white/60 mb-4 flex-grow">{related.shortDescription}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="font-display text-lg text-white">{related.priceLabel}</span>
                                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* Footer Decoration */}
            <div className="fixed bottom-6 right-6 hidden md:flex gap-4 z-10">
                <div className="w-8 h-1 bg-red-600" />
                <div className="w-8 h-1 bg-yellow-400" />
                <div className="w-8 h-1 bg-blue-600" />
            </div>

        </main>
    );
}
