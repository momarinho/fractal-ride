'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Rocket,
    Activity, // for Chart
    Sliders, // for Equalizer
    Terminal,
    Power,
    Wifi,
    Cpu,
    Database,
    Search,
    Bell,
    User
} from 'lucide-react';
import Link from 'next/link';

// --- MOCK DATA ---
const logs = [
    { time: '12:04:11', msg: 'BOUNTY_SYNC_COMPLETE ... OK', type: 'success' },
    { time: '12:05:22', msg: 'GATEWAY_INIT ... OK', type: 'success' },
    { time: '12:06:45', msg: 'NEURAL_LINK_STABLE ... 99%', type: 'info' },
    { time: '12:07:01', msg: 'FLUX_STABILIZER_WARNING ... CHECK', type: 'warning' },
    { time: '12:08:14', msg: 'ROUTING_PACKETS_TO_MARS ... PENDING', type: 'warning' },
    { time: '12:09:55', msg: 'DOWNLOAD_COMPLETE ... OK', type: 'success' },
    { time: '12:10:30', msg: 'SYSTEM_HEARTBEAT ... BEATING', type: 'info' },
    { time: '12:11:02', msg: 'AWAITING_INPUT_', type: 'wait' }
];

const database = [
    { target: 'V.VALENTINE', origin: 'EARTH', status: 'TRACKED', statusColor: 'text-green-500' },
    { target: 'J.BLACK', origin: 'GANYMEDE', status: 'LOST', statusColor: 'text-purple-500' },
];

// --- COMPONENTS ---

const RadarScanner = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-[#080808] border border-blue-900/30 overflow-hidden relative">
            {/* Grid Lines (Background) */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(30, 58, 138, 0.2) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }} />

            {/* Corner Labels */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] px-2 py-0.5 font-jap font-bold">レーダー</div>
            <div className="absolute top-12 left-12 text-blue-500 font-mono text-xs">EFFICIENCY 98%</div>
            <div className="absolute bottom-1/2 left-4 text-blue-500 font-mono text-xs">LOAD 42%</div>
            <div className="absolute bottom-1/2 right-4 text-blue-500 font-mono text-xs">LATENCY 12ms</div>
            <div className="absolute bottom-12 left-1/2 text-blue-500 font-mono text-xs">SYNC 1.0</div>
            <div className="absolute bottom-12 right-1/2 text-blue-500 font-mono text-xs ml-8">FLUX +1.2</div>

            {/* Radar Shapes (Rings) */}
            <div className="absolute w-[80%] h-[80%] border border-blue-900/50 rounded-full" />
            <div className="absolute w-[60%] h-[60%] border border-blue-900/50 rounded-full" />
            <div className="absolute w-[40%] h-[40%] border border-blue-900/50 rounded-full" />

            {/* Crosshairs */}
            <div className="absolute w-full h-[1px] bg-blue-900/30" />
            <div className="absolute h-full w-[1px] bg-blue-900/30" />

            {/* The Polygon Data Shape */}
            <svg viewBox="0 0 100 100" className="absolute w-[50%] h-[50%] drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                <polygon
                    points="50,10 90,40 70,90 30,90 10,40"
                    className="fill-blue-500/20 stroke-blue-500 stroke-[0.5]"
                />
            </svg>

            {/* Scanning Line Animation */}
            <div className="absolute w-full h-full animate-[spin_4s_linear_infinite]">
                <div className="w-[50%] h-[50%] border-r-2 border-green-500/80 absolute top-0 left-0 origin-bottom-right bg-gradient-to-t from-transparent via-green-500/10 to-transparent opacity-50 shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
            </div>
        </div>
    );
};

export default function DashboardPage() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#020202] text-white font-sans flex overflow-hidden selection:bg-green-500 selection:text-black">

            {/* 1. SIDEBAR (Icons Only) */}
            <aside className="w-16 border-r border-blue-900/20 flex flex-col items-center py-6 gap-8 bg-[#050505] z-20">
                <div className="text-yellow-400 mb-4">
                    <Rocket className="w-6 h-6" />
                </div>

                <nav className="flex flex-col gap-6 w-full">
                    {[Activity, Sliders, Terminal].map((Icon, i) => (
                        <button key={i} className={`w-full flex justify-center py-2 border-l-2 hover:bg-white/5 transition-all ${i === 0 ? 'border-yellow-400 text-yellow-400' : 'border-transparent text-gray-600 hover:text-white'}`}>
                            <Icon className="w-5 h-5" />
                        </button>
                    ))}
                </nav>

                <div className="mt-auto text-purple-600 hover:text-purple-400 cursor-pointer">
                    <Power className="w-5 h-5" />
                </div>
            </aside>

            {/* 2. MAIN CONTENT */}
            <main className="flex-1 flex flex-col relative">
                {/* Horizontal Grid Lines Overlay */}
                <div className="absolute top-24 left-0 w-full h-[1px] bg-blue-900/30" />
                <div className="absolute bottom-12 left-0 w-full h-[1px] bg-blue-900/30" />

                {/* HEADER */}
                <header className="h-16 flex items-center justify-between px-8 border-b border-blue-900/20 bg-[#020202]">
                    <div className="flex items-center gap-4">
                        <div className="text-[10px] font-mono text-green-500">
                            SYSTEM STATUS: <span className="font-bold">ACTIVE</span><br />
                            <span className="text-blue-500">BEBOP_OS // KERNEL v4.2.0</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 font-mono text-yellow-400 text-xl tracking-widest">
                        <span>{time || '23:59:59'}</span>
                        <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center text-black">
                            <User className="w-5 h-5" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 p-8 grid grid-cols-12 gap-8 overflow-y-auto">

                    {/* LEFT COLUMN (RADAR) - Spans 8 cols */}
                    <div className="col-span-12 lg:col-span-8 flex flex-col">
                        <div className="mb-4 flex justify-between items-end">
                            <div>
                                <h2 className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-1">TELEMETRY_RADAR</h2>
                                <h1 className="text-4xl font-display uppercase italic">ACTIVE FLUX SCAN</h1>
                            </div>
                            <div className="text-green-500 font-japanese text-sm">[ システム : 稼働中 ]</div>
                        </div>

                        {/* RADAR CONTAINER */}
                        <div className="flex-1 border border-blue-900/30 p-1 relative">
                            {/* Corners */}
                            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-500" />
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500" />
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-500" />

                            <RadarScanner />
                        </div>
                    </div>


                    {/* RIGHT COLUMN (STATS & LOGS) - Spans 4 cols */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

                        {/* Network Status */}
                        <div className="border border-green-900/50 bg-[#050505] p-4 relative">
                            <div className="absolute top-0 right-0 bg-green-500 text-black text-[10px] font-bold px-2 py-0.5">ステータス</div>
                            <h3 className="text-[10px] text-green-500 font-mono tracking-widest mb-1">NETWORK_OVERVIEW</h3>
                            <div className="flex justify-between items-end">
                                <div className="text-5xl font-mono text-white">98.4%</div>
                                <div className="text-green-500 font-bold text-sm">STABLE</div>
                            </div>
                        </div>

                        {/* Real-Time Logs */}
                        <div className="border border-blue-900/30 bg-[#050505] flex-1 min-h-[300px] flex flex-col relative">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5">データログ</div>
                            <h3 className="p-4 pb-2 text-[10px] text-blue-500 font-mono tracking-widest border-b border-blue-900/20">REAL-TIME_FLUX_LOGS</h3>
                            <div className="p-4 font-mono text-[10px] space-y-2 overflow-y-auto flex-1">
                                {logs.map((log, i) => (
                                    <div key={i} className="flex gap-2">
                                        <span className="text-green-700">[{log.time}]</span>
                                        <span className={
                                            log.type === 'warning' ? 'text-yellow-500' :
                                                log.type === 'wait' ? 'text-gray-500 animate-pulse' :
                                                    'text-green-400'
                                        }>
                                            {log.msg}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Small Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="border border-yellow-900/30 bg-[#050505] p-3 relative">
                                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[8px] font-bold px-1">同期</div>
                                <div className="text-[8px] text-yellow-500 font-mono mb-1">SYNC_RATE</div>
                                <div className="text-2xl font-mono text-white">1.044</div>
                            </div>
                            <div className="border border-blue-900/30 bg-[#050505] p-3 relative">
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[8px] font-bold px-1">メモリ</div>
                                <div className="text-[8px] text-blue-500 font-mono mb-1">MEM_USAGE</div>
                                <div className="text-2xl font-mono text-white">64GB</div>
                            </div>
                        </div>

                        {/* Database Table */}
                        <div className="border border-yellow-900/30 bg-[#050505] p-4 text-[10px] font-mono">
                            <h3 className="text-yellow-500 font-bold tracking-widest mb-3 uppercase">Active_Bounties_DB</h3>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-yellow-700 border-b border-yellow-900/20">
                                        <th className="pb-2">TARGET</th>
                                        <th className="pb-2">ORIGIN</th>
                                        <th className="pb-2">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    {database.map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 last:border-0">
                                            <td className="py-2 text-white">{row.target}</td>
                                            <td className="py-2">{row.origin}</td>
                                            <td className={`py-2 ${row.statusColor}`}>{row.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="text-center mt-4 text-blue-900 font-bold text-xs tracking-[0.5em] opacity-30">
                                SEE YOU SPACE COWBOY...
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}
