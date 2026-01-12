'use client';

import { Rss, Code, Terminal, Send } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#020202] text-white py-20 px-6 overflow-hidden relative border-t-4 border-white/20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                {/* Left Call to Action */}
                <div className="space-y-6 max-w-xl text-center md:text-left">
                    <h2 className="font-display text-7xl md:text-8xl leading-[0.8]">
                        SEE YOU IN <br /> <span className="text-[#2E5BFF] italic">THE CLOUD...</span>
                    </h2>
                    <p className="text-lg opacity-60 uppercase tracking-widest font-body max-w-md">
                        Ready to modernize your operations? The ship is leaving the dock. Don't get left on Mars.
                    </p>
                    <div className="flex gap-4 pt-4 justify-center md:justify-start">
                        <button className="crt-button bg-white text-black font-display text-3xl px-12 py-3 uppercase tracking-widest hover:bg-[#2E5BFF] hover:text-white transition-colors">
                            GET STARTED
                        </button>
                    </div>
                </div>

                {/* Right Info Block */}
                <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                    <div className="font-display text-4xl md:text-5xl">BEBOP AUTOMATIONS INC.</div>
                    <div className="text-xs opacity-40 uppercase tracking-widest max-w-[250px] font-mono">
                        EST. 2071 / MARS COLONY / JUPITER ORBITAL HUB
                    </div>

                    <div className="flex gap-4 mt-8">
                        <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-[#2E5BFF] transition-colors group">
                            <Rss className="w-6 h-6 group-hover:text-white" />
                        </a>
                        <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-[#2E5BFF] transition-colors group">
                            <Code className="w-6 h-6 group-hover:text-white" />
                        </a>
                        <a href="https://t.me/automatize" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-[#2E5BFF] transition-colors group">
                            <Terminal className="w-6 h-6 group-hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Kanji Background Overlay */}
            <div className="absolute -bottom-20 -right-20 font-japanese text-[15rem] md:text-[25rem] leading-none opacity-[0.03] select-none pointer-events-none text-white font-black">
                宇宙
            </div>

            {/* Newsletter Minimal Input (Hidden easter egg styled) */}
            <div className="absolute bottom-4 left-6 opacity-20 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 text-[10px] uppercase font-mono">
                    <span>Subspace Comm:</span>
                    <input type="email" placeholder="freq_id..." className="bg-transparent border-b border-white outline-none w-24 text-white placeholder:text-white/30" />
                </div>
            </div>
        </footer>
    );
}
