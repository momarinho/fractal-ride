'use client';

import Link from 'next/link';
import { Settings, Share2, Terminal, Shield } from 'lucide-react';

const features = [
    {
        id: '01',
        title: 'CORE ENGINE',
        jpTitle: 'コアエンジン',
        desc: 'Optimized processing for high-frequency data streams. Built for speed, designed for stability.',
        icon: Settings,
        bg: 'bg-[#E63946]', // Red
        className: '',
        link: '/produtos?categoria=rh'
    },
    {
        id: '02',
        title: 'FLUX FLOWS',
        jpTitle: 'フラックスフロー',
        desc: 'Visual orchestration for complex dependencies. Connect everything, leave nothing behind.',
        icon: Share2, // Network/Flux icon
        bg: 'bg-[#2A9D8F]', // Green
        className: 'lg:mt-12',
        link: '/produtos?categoria=marketing'
    },
    {
        id: '03',
        title: 'PULSE CLI',
        jpTitle: 'パルス',
        desc: 'Direct terminal access for the true power users. Scriptable, hackable, indestructible.',
        icon: Terminal,
        bg: 'bg-[#E9C46A]', // Yellow
        className: '',
        link: '/produtos?categoria=financeiro'
    },
    {
        id: '04',
        title: 'SHIELD STACK',
        jpTitle: 'シールドスタック',
        desc: 'Encrypted tunnels for sensitive data migration. Keep the syndicate out of your business.',
        icon: Shield,
        bg: 'bg-[#2E5BFF]', // Blue
        className: 'lg:mt-24',
        link: '/produtos?categoria=vendas'
    }
];

export default function FeaturedProducts() {
    return (
        <section className="bg-[#050505] overflow-hidden">
            <div className="asymmetric-grid border-b-4 border-white/20 w-full max-w-[1920px] mx-auto">
                {features.map((feature) => (
                    <Link href={feature.link} key={feature.id} className={`block h-full border-r-2 border-white/10 ${feature.className}`}>
                        <div className={`${feature.bg} p-8 h-full flex flex-col justify-between group cursor-pointer transition-all hover:brightness-110 min-h-[450px]`}>
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <feature.icon className="w-16 h-16 text-black/80 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]" strokeWidth={1.5} />
                                    <span className="font-japanese text-4xl text-black opacity-40 font-bold">{feature.id}</span>
                                </div>
                                <h3 className="font-display text-4xl sm:text-6xl text-black leading-none mb-2">
                                    {feature.title}
                                </h3>
                                <span className="text-2xl font-japanese opacity-70 text-black font-bold block mb-4">
                                    {feature.jpTitle}
                                </span>
                            </div>

                            <p className="font-body text-black font-bold uppercase text-sm tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                {feature.desc}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Stats Band */}
            <div className="py-24 px-6 border-b-4 border-white/20 bg-[#050505]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left">
                        <h4 className="font-display text-8xl md:text-9xl mb-2 opacity-20 text-white">3,000+</h4>
                        <p className="font-display text-3xl tracking-widest text-[#2E5BFF]">BOUNTIES CLAIMED</p>
                    </div>
                    <div className="h-1 w-24 bg-[#2E5BFF] md:h-24 md:w-1 opacity-50"></div>
                    <div className="text-center md:text-left">
                        <h4 className="font-display text-8xl md:text-9xl mb-2 opacity-20 text-white">99.9%</h4>
                        <p className="font-display text-3xl tracking-widest text-[#E63946]">UPTIME STREAK</p>
                    </div>
                    <div className="h-1 w-24 bg-[#2E5BFF] md:h-24 md:w-1 opacity-50"></div>
                    <div className="text-center md:text-left">
                        <h4 className="font-display text-8xl md:text-9xl mb-2 opacity-20 text-white">0.02ms</h4>
                        <p className="font-display text-3xl tracking-widest text-[#2A9D8F]">LATENCY RESPONSE</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
