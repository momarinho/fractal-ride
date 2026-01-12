'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Users,
    TrendingUp,
    Megaphone,
    Calculator,
    Settings,
    ArrowRight,
    Star,
    Crosshair
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/products';

const categoryIcons = {
    rh: Users,
    vendas: TrendingUp,
    marketing: Megaphone,
    financeiro: Calculator,
    operacional: Settings,
};

// Bebop Crew Colors Mapping
const categoryClasses = {
    rh: {
        border: 'border-[#23bd5a]', // Jet Green
        text: 'text-[#23bd5a]',
        bg: 'bg-[#23bd5a]',
        shadow: 'shadow-sharp-green'
    },
    vendas: {
        border: 'border-[#ff2e2e]', // Faye Red
        text: 'text-[#ff2e2e]',
        bg: 'bg-[#ff2e2e]',
        shadow: 'shadow-sharp-red'
    },
    marketing: {
        border: 'border-[#f2d024]', // Ed Yellow
        text: 'text-[#f2d024]',
        bg: 'bg-[#f2d024]',
        shadow: 'shadow-sharp'
    },
    financeiro: {
        border: 'border-[#2345bd]', // Spike Blue
        text: 'text-[#2345bd]',
        bg: 'bg-[#2345bd]',
        shadow: 'shadow-sharp-blue'
    },
    operacional: {
        border: 'border-white', // Neutral
        text: 'text-white',
        bg: 'bg-white',
        shadow: 'shadow-none'
    },
};

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const CategoryIcon = categoryIcons[product.category];
    const styles = categoryClasses[product.category] || categoryClasses.operacional;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Link href={`/produtos/${product.slug}`}>
                <div className={`group relative bg-[#15151a] border-l-4 ${styles.border} border-y border-r border-white/10 hover:border-white/50 transition-all duration-300 h-full flex flex-col`}>

                    {/* Header "BOUNTY" Badge */}
                    <div className="absolute -top-3 left-4 z-20">
                        <div className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${styles.bg} text-[#0f0f13] shadow-sm`}>
                            Bounty Available
                        </div>
                    </div>

                    {/* Image/Icon Area - Flat Color Block */}
                    <div className="relative h-32 bg-[#0f0f13] border-b border-white/10 flex items-center justify-center p-4 overflow-hidden group-hover:bg-white/5 transition-colors">
                        {/* Crosshair Background */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                            <Crosshair className={`w-32 h-32 ${styles.text}`} />
                        </div>

                        <div className={`relative z-10 w-16 h-16 flex items-center justify-center bg-[#15151a] border ${styles.border}`}>
                            <CategoryIcon className={`w-8 h-8 ${styles.text}`} />
                        </div>

                        {/* Top Right Price (Bounty Amount) */}
                        <div className="absolute top-0 right-0 p-2 bg-[#15151a] border-l border-b border-white/10">
                            <span className={`text-lg font-bold font-mono ${styles.text}`}>
                                R$ {product.price}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                        {/* Category Label */}
                        <div className={`text-xs font-mono uppercase mb-2 ${styles.text} opacity-80 tracking-widest`}>
                            Condition: New / {product.category}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold font-sans uppercase italic text-white mb-2 leading-none group-hover:text-[#f2d024] transition-colors">
                            {product.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-400 font-mono mb-6 line-clamp-3">
                            {product.shortDescription}
                        </p>

                        <div className="mt-auto">
                            {/* Stats/Badges */}
                            <div className="flex gap-2 mb-4 text-[10px] uppercase font-mono text-gray-500">
                                <span className="border border-white/10 px-1 py-0.5">Automated</span>
                                <span className="border border-white/10 px-1 py-0.5">Ver: 1.0</span>
                            </div>

                            {/* CTA Button */}
                            <Button
                                className={`w-full rounded-none font-bold uppercase tracking-widest bg-transparent border-2 ${styles.border} ${styles.text} hover:bg-white/5 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}
                            >
                                Capture Bounty
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
