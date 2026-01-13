'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ArrowRight, Lock, Stamp } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleInput = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-[#1a1212] flex items-center justify-center p-4 lg:p-12 font-sans selection:bg-red-600 selection:text-white overflow-hidden relative">

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />

            {/* MAIN VOUCHER CONTAINER */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="w-full max-w-6xl bg-[#EADBC8] shadow-2xl relative flex flex-col lg:flex-row overflow-hidden rounded-sm"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cardboard-flat.png")' }}
            >
                {/* --- LEFT PANEL: WANTED POSTER --- */}
                <div className="w-full lg:w-[40%] border-r-4 border-dashed border-[#5A4A42]/30 p-8 lg:p-12 flex flex-col items-center justify-center relative bg-[#E2D1BD]">

                    {/* Top Lines */}
                    <div className="w-full h-1 bg-black mb-1" />
                    <div className="w-full h-0.5 bg-black mb-8" />

                    <h1 className="font-display text-7xl lg:text-9xl tracking-tighter text-[#2a2a2a] mb-2 uppercase text-center leading-none">
                        WANTED
                    </h1>
                    <p className="font-mono text-center text-[#2a2a2a] uppercase tracking-[0.3em] text-sm mb-8">
                        SYNC-FLOW AUTOMATION
                    </p>

                    {/* MUGSHOT FRAME */}
                    <div className="w-full aspect-[3/4] bg-black p-4 relative shadow-lg">
                        <div className="w-full h-full border border-white/20 flex items-center justify-center relative overflow-hidden">
                            {/* Abstract Tech Circle */}
                            <div className="absolute inset-0 border-[20px] border-white/5 rounded-full scale-150" />
                            <div className="absolute inset-0 border border-white/20 rounded-full scale-75 border-dashed animate-[spin_20s_linear_infinite]" />

                            {/* Central Icon */}
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-4 h-12 bg-white rounded-sm" />
                                    <div className="w-4 h-12 bg-white rounded-sm translate-y-4" />
                                    <div className="w-4 h-12 bg-white rounded-sm" />
                                </div>
                                <div className="font-mono text-xs text-white tracking-[0.5em] mt-4">SUBJECT ID: 09982</div>
                            </div>

                            {/* Scanlines */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-30 pointer-events-none" />
                        </div>
                    </div>

                    {/* STAMP */}
                    <div className="absolute bottom-12 -right-4 transform -rotate-12 border-4 border-red-600 px-4 py-2 text-red-600 font-bold font-display text-4xl uppercase opacity-80 mix-blend-multiply mask-image:grunge">
                        ALIVE OR DATA-DEAD
                    </div>
                </div>


                {/* --- RIGHT PANEL: FORM --- */}
                <div className="w-full lg:w-[60%] p-8 lg:p-16 relative">
                    <div className="absolute top-8 right-8 text-[#5A4A42] font-mono text-xs uppercase tracking-widest opacity-60">
                        OFFICIAL ISSP BOUNTY VOUCHER
                    </div>

                    <div className="mt-12 mb-12">
                        <h2 className="font-display text-5xl text-[#2a2a2a] mb-2">
                            REWARD: <span className="text-[#D00000]">50,000 WOOLON</span>
                        </h2>
                    </div>

                    {/* FORM SECTIONS */}
                    <div className="space-y-10">

                        {/* Contractor Info */}
                        <div>
                            <div className="flex justify-between items-end border-b border-[#5A4A42]/30 pb-2 mb-6">
                                <h3 className="font-bold text-[#2a2a2a] uppercase tracking-wide text-sm">Contractor Information</h3>
                                <span className="font-japanese text-xs text-gray-500">契約者情報</span>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 group-focus-within:text-[#D00000]">Full Name / 氏名</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="SPIKE SPIEGEL"
                                        className="w-full bg-transparent border-b-2 border-[#5A4A42]/20 py-2 font-mono text-xl text-[#2a2a2a] placeholder-[#5A4A42]/20 focus:outline-none focus:border-[#D00000] uppercase transition-colors"
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 group-focus-within:text-[#D00000]">Email Address / メール</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="BEBOP@GATE.NET"
                                        className="w-full bg-transparent border-b-2 border-[#5A4A42]/20 py-2 font-mono text-xl text-[#2a2a2a] placeholder-[#5A4A42]/20 focus:outline-none focus:border-[#D00000] uppercase transition-colors"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Transaction Credentials */}
                        <div>
                            <div className="flex justify-between items-end border-b border-[#5A4A42]/30 pb-2 mb-6">
                                <h3 className="font-bold text-[#2a2a2a] uppercase tracking-wide text-sm">Transaction Credentials</h3>
                                <span className="font-japanese text-xs text-gray-500">取引の詳細</span>
                            </div>

                            <div className="relative group mb-6">
                                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 group-focus-within:text-[#D00000]">Interstellar Credit Card / クレジットカード</label>
                                <div className="absolute right-0 bottom-3 text-gray-400">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="**** **** **** ****"
                                    className="w-full bg-transparent border-b-2 border-[#5A4A42]/20 py-2 font-mono text-xl text-[#2a2a2a] placeholder-[#5A4A42]/20 focus:outline-none focus:border-[#D00000] tracking-[0.2em] transition-colors"
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 group-focus-within:text-[#D00000]">Expiry / 有効期限</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        placeholder="MM/YY"
                                        className="w-full bg-transparent border-b-2 border-[#5A4A42]/20 py-2 font-mono text-xl text-[#2a2a2a] placeholder-[#5A4A42]/20 focus:outline-none focus:border-[#D00000] uppercase transition-colors"
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 group-focus-within:text-[#D00000]">CVV / セキュリティ</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        placeholder="***"
                                        className="w-full bg-transparent border-b-2 border-[#5A4A42]/20 py-2 font-mono text-xl text-[#2a2a2a] placeholder-[#5A4A42]/20 focus:outline-none focus:border-[#D00000] transition-colors"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* CONFIDENTIAL STAMP DECORATION */}
                    <div className="absolute bottom-24 right-16 opacity-10 pointer-events-none transform -rotate-12">
                        <div className="border-8 border-red-900 px-8 py-2 text-red-900 font-black text-6xl uppercase tracking-tighter">
                            CONFIDENTIAL
                        </div>
                    </div>

                    {/* BUTTON AREA */}
                    <div className="mt-16">
                        <Link href="/checkout/success">
                            <button className="w-full bg-[#E62405] text-white font-display text-3xl italic uppercase py-4 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-4 group">
                                CLAIM BOUNTY
                                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </Link>

                        <p className="text-center text-[8px] uppercase text-[#5A4A42] opacity-60 mt-6 font-mono leading-relaxed">
                            I THINK IT'S TIME WE BLOW THIS SCENE. GET EVERYBODY AND THE STUFF TOGETHER. OK, THREE, TWO, ONE LET'S JAM!
                            <br />© 2071 BEBOP AUTOMATIONS - SOLAR SYSTEM TERRITORIAL AUTHORITY
                        </p>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
