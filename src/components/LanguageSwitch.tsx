'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Globe, GripVertical } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LanguageSwitch() {
    const { locale, setLocale, t } = useI18n();
    const [isDragging, setIsDragging] = useState(false);

    const toggleLanguage = () => {
        if (!isDragging) {
            setLocale(locale === 'pt-BR' ? 'en' : 'pt-BR');
        }
    };

    return (
        <motion.button
            drag
            dragMomentum={false}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
            whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
            onClick={toggleLanguage}
            className="fixed top-2 left-2 sm:top-4 sm:left-4 z-40 flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/90 backdrop-blur border border-white/20 hover:border-[#E9C46A] text-[10px] sm:text-xs font-mono text-gray-400 hover:text-[#E9C46A] transition-colors cursor-grab active:cursor-grabbing select-none"
            title={t.common.language}
            style={{ touchAction: 'none' }}
        >
            <GripVertical className="w-3 h-3 opacity-50" />
            <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{locale === 'pt-BR' ? 'PT' : 'EN'}</span>
        </motion.button>
    );
}
