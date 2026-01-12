'use client';

import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';

const testimonials = [
    {
        name: 'RICARDO.MENDES',
        role: 'AGENCY_OWNER',
        text: 'Deploy do LinkedIn Pro completo. Target acquisition subiu 300% em 2 semanas. ROI positivo confirmado.',
        product: 'PROTOCOL: LINKEDIN_PRO',
        date: 'LOG: 2023.11.15',
        id: '4821'
    },
    {
        name: 'CARLA.SANTOS',
        role: 'HR_COMMANDER',
        text: 'Automação Point Control ativa. Tempo de processamento manual reduzido a zero. Eficiência do setor em 100%.',
        product: 'PROTOCOL: POINT_CONTROL',
        date: 'LOG: 2023.12.02',
        id: '9932'
    },
    {
        name: 'BRUNO.OLIVEIRA',
        role: 'INFO_CREATOR',
        text: 'Email Ninja hackeou o sistema. Taxa de abertura triplicada. Sequências executadas com precisão.',
        product: 'PROTOCOL: EMAIL_NINJA',
        date: 'LOG: 2024.01.10',
        id: '1104'
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 lg:py-32 relative overflow-hidden bg-[#050505] border-b-4 border-white/20">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-[#2A9D8F] font-body font-bold text-sm uppercase tracking-widest mb-4">
                        <Radio className="w-4 h-4 animate-pulse" />
                        <span>Incoming Transmissions</span>
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-display uppercase text-white mb-4">
                        Crew <span className="text-[#2A9D8F]">Logs</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="h-full bg-black border border-[#2A9D8F]/30 p-6 relative group hover:bg-[#2A9D8F]/10 transition-colors">
                                {/* Corners */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#2A9D8F]" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#2A9D8F]" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#2A9D8F]" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#2A9D8F]" />

                                <div className="flex justify-between items-center mb-6 border-b border-[#2A9D8F]/20 pb-2 font-mono text-xs text-[#2A9D8F]/70">
                                    <span>{testimonial.date}</span>
                                    <span>ID: {testimonial.id}</span>
                                </div>

                                <p className="text-[#2A9D8F] font-mono text-sm leading-relaxed mb-6 opacity-90">
                                    "{testimonial.text}"
                                </p>

                                <div className="mt-auto">
                                    <div className="font-bold text-white font-display uppercase tracking-wider text-xl">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-[10px] text-[#2A9D8F] font-mono uppercase">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
