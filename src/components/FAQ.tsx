'use client';

import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, Terminal } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { faqs } from '@/lib/products';

export default function FAQ() {
    return (
        <section id="faq" className="py-20 lg:py-32 relative overflow-hidden bg-[#050505]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 text-[#2E5BFF] font-body font-bold text-sm uppercase tracking-widest mb-4">
                            <Terminal className="w-4 h-4" />
                            <span>Database Search</span>
                        </div>
                        <h2 className="text-5xl sm:text-7xl font-display uppercase text-white mb-6">
                            System <span className="text-[#2E5BFF]">FAQ</span>
                        </h2>
                        <p className="text-gray-400 font-body text-lg mb-8 border-l-2 border-[#2E5BFF] pl-4">
                            Common data retrieval requests. Accessing knowledge base...
                        </p>

                        <div className="bg-[#0A0A0A] border border-white/10 p-8 shadow-[4px_4px_0px_#2E5BFF]">
                            <h3 className="font-display text-2xl uppercase text-white mb-2 tracking-wider">
                                Signal Lost?
                            </h3>
                            <p className="text-gray-400 font-body text-sm mb-6 uppercase">
                                Operators are standing by on secure channels.
                            </p>
                            <Button
                                className="w-full bg-white hover:bg-[#2E5BFF] hover:text-white text-black font-display text-xl uppercase tracking-widest rounded-none h-14 border-2 border-transparent transition-all"
                                asChild
                            >
                                <a href="mailto:suporte@automatize.com.br">
                                    Open Comms
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-[#0A0A0A] border border-white/5 data-[state=open]:border-[#E9C46A] transition-all duration-300"
                                >
                                    <AccordionTrigger className="text-left text-gray-300 hover:text-[#E9C46A] hover:no-underline py-6 px-6 font-display uppercase tracking-wider text-xl data-[state=open]:text-[#E9C46A]">
                                        {`[${String(index + 1).padStart(2, '0')}] ${faq.question}`}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-400 pb-6 px-6 font-body leading-relaxed border-t border-white/5 pt-4">
                                        {`> ${faq.answer}`}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
