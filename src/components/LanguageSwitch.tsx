'use client';

import { useI18n } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export default function LanguageSwitch() {
    const { locale, setLocale, t } = useI18n();

    const toggleLanguage = () => {
        setLocale(locale === 'pt-BR' ? 'en' : 'pt-BR');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-2 right-2 sm:top-4 sm:right-4 z-40 flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/90 backdrop-blur border border-white/20 hover:border-[#E9C46A] text-[10px] sm:text-xs font-mono text-gray-400 hover:text-[#E9C46A] transition-all"
            title={t.common.language}
        >
            <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{locale === 'pt-BR' ? 'PT' : 'EN'}</span>
        </button>
    );
}
