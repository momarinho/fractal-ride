'use client';

import Link from 'next/link';

interface Product {
    id: string;
    title: string;
    jpTitle: string;
    desc: string;
    complexity: string;
    framework: string;
    fee: string;
    icon: any;
    bg: string;
    link: string;
}

interface FeaturedProductsProps {
    products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
    return (
        <section className="bg-[#050505] overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b-4 border-white/20 w-full max-w-[1920px] mx-auto">
                {products.map((product, index) => (
                    <Link href={product.link} key={product.id} className={`block h-full border-b sm:border-b-0 sm:border-r-2 border-white/10 last:border-r-0 ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}>
                        <div className={`${product.bg} p-6 md:p-8 h-full flex flex-col justify-between group cursor-pointer transition-all hover:brightness-110 min-h-[400px] md:min-h-[500px] relative overflow-hidden`}>

                            {/* Header */}
                            <div>
                                <div className="flex justify-between items-start mb-8 z-10 relative">
                                    <product.icon className="w-16 h-16 text-black/80 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]" strokeWidth={1.5} />
                                    <span className="font-japanese text-4xl text-black opacity-40 font-bold">{product.id}</span>
                                </div>
                                <h3 className="font-display text-4xl sm:text-5xl text-black leading-none mb-2 z-10 relative">
                                    {product.title}
                                </h3>
                                <span className="text-xl font-japanese opacity-70 text-black font-bold block mb-6 z-10 relative">
                                    {product.jpTitle}
                                </span>
                            </div>

                            {/* Details Overlay */}
                            <div className="space-y-4 z-10 relative">
                                <div className="bg-black/10 backdrop-blur-sm p-3 rounded-md border border-black/5">
                                    <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-1">Methodology</p>
                                    <p className="text-black font-bold text-lg leading-tight">{product.framework}</p>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="bg-black/10 backdrop-blur-sm px-3 py-2 rounded-md border border-black/5">
                                        <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-0.5">Complexity</p>
                                        <p className="text-black font-bold leading-tight">{product.complexity}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-0.5">Est. Fee</p>
                                        <p className="text-black font-extrabold text-2xl">{product.fee}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Description Effect */}
                            <div className="absolute inset-0 bg-black/90 p-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <p className="text-white font-bold text-xl text-center leading-relaxed">
                                    {product.desc}
                                </p>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>

            {/* Stats Band */}
            <div className="py-24 px-6 border-b-4 border-white/20 bg-[#050505]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left">
                        <h4 className="font-display text-8xl md:text-9xl mb-2 opacity-20 text-white">4</h4>
                        <p className="font-display text-3xl tracking-widest text-[#2E5BFF]">ACTIVE PROJECTS</p>
                    </div>
                    <div className="h-1 w-24 bg-[#2E5BFF] md:h-24 md:w-1 opacity-50"></div>
                    <div className="text-center md:text-left">
                        <h4 className="font-display text-8xl md:text-9xl mb-2 opacity-20 text-white">DOE</h4>
                        <p className="font-display text-3xl tracking-widest text-[#E63946]">FRAMEWORK</p>
                    </div>
                    <div className="h-1 w-24 bg-[#2E5BFF] md:h-24 md:w-1 opacity-50"></div>
                    <div className="text-center md:text-left">
                        <h4 className="font-display text-8xl md:text-9xl mb-2 opacity-20 text-white">100%</h4>
                        <p className="font-display text-3xl tracking-widest text-[#2A9D8F]">PYTHON POWER</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
