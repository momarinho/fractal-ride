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
    Crosshair
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/products';

const categoryIcons: any = {
    rh: Users,
    vendas: TrendingUp,
    marketing: Megaphone,
    financeiro: Calculator,
    operacional: Settings,
};

// Bebop V3 Color Mapping
const categoryClasses: any = {
    rh: {
        border: 'border-[#E63946]', // Red
        text: 'text-[#E63946]',
        bg: 'bg-[#E63946]',
        shadow: 'shadow-[4px_4px_0px_#E63946]'
    },
    vendas: {
        border: 'border-[#2E5BFF]', // Blue
        text: 'text-[#2E5BFF]',
        bg: 'bg-[#2E5BFF]',
        shadow: 'shadow-[4px_4px_0px_#2E5BFF]'
    },
    marketing: {
        border: 'border-[#2A9D8F]', // Green
        text: 'text-[#2A9D8F]',
        bg: 'bg-[#2A9D8F]',
        shadow: 'shadow-[4px_4px_0px_#2A9D8F]'
    },
    financeiro: {
        border: 'border-[#E9C46A]', // Yellow
        text: 'text-[#E9C46A]',
        bg: 'bg-[#E9C46A]',
        shadow: 'shadow-[4px_4px_0px_#E9C46A]'
    },
    operacional: {
        border: 'border-white',
        text: 'text-white',
        bg: 'bg-white',
        shadow: 'shadow-[4px_4px_0px_white]'
    },
};

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const CategoryIcon = categoryIcons[product.category] || Settings;
    const styles = categoryClasses[product.category] || categoryClasses.operacional;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="h-full"
        >
            <Link href={`/produtos/${product.slug}`} className="h-full block">
                <div className={`group relative bg-[#0A0A0A] border-2 ${styles.border} hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200 h-full flex flex-col`}>

                    {/* Shadow Block (Hard Shadow simulated via div if needed, or CSS) */}
                    <div className={`absolute inset-0 ${styles.shadow} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10 translate-x-1 translate-y-1`} />

                    {/* Header Badge */}
                    <div className="absolute top-0 left-0 z-20">
                        <div className={`px-3 py-1 text-xs font-bold font-display uppercase tracking-widest ${styles.bg} text-black`}>
                            BOUNTY_{String(index + 1).padStart(2, '0')}
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="relative h-48 bg-[#050505] border-b-2 border-white/10 flex items-center justify-center p-6 overflow-hidden group-hover:bg-white/5 transition-colors">
                        {/* Background Deco */}
                        <Crosshair className={`absolute w-40 h-40 ${styles.text} opacity-10 rotate-45`} />

                        <div className={`relative z-10 w-20 h-20 flex items-center justify-center bg-[#0A0A0A] border-2 ${styles.border}`}>
                            <CategoryIcon className={`w-10 h-10 ${styles.text}`} />
                        </div>

                        {/* Price Tag */}
                        <div className="absolute bottom-0 right-0 p-2 bg-[#0A0A0A] border-l-2 border-t-2 border-white/10">
                            <span className={`text-xl font-display ${styles.text}`}>
                                R$ {product.price}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className={`text-xs font-mono uppercase mb-3 ${styles.text} tracking-widest`}>
                            // {product.category.toUpperCase()}
                        </div>

                        <h3 className="text-3xl font-display text-white mb-2 leading-none group-hover:text-white transition-colors">
                            {product.name}
                        </h3>

                        <p className="text-sm text-gray-400 font-mono mb-6 line-clamp-3 leading-relaxed">
                            {product.shortDescription}
                        </p>

                        <div className="mt-auto pt-6 border-t border-white/10">
                            <Button
                                className={`w-full rounded-none font-display text-xl uppercase tracking-widest bg-transparent border-2 ${styles.border} ${styles.text} hover:bg-white hover:text-black hover:border-white transition-all`}
                            >
                                <span className="mr-2">ACCESS SYSTEM</span> <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
