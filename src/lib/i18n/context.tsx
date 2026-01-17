'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale, TranslationKeys } from './translations';

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: TranslationKeys;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('pt-BR');

    useEffect(() => {
        // Check localStorage for saved preference
        const saved = localStorage.getItem('locale') as Locale;
        if (saved && translations[saved]) {
            setLocaleState(saved);
        } else {
            // Detect browser language
            const browserLang = navigator.language;
            if (browserLang.startsWith('pt')) {
                setLocaleState('pt-BR');
            } else {
                setLocaleState('en');
            }
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('locale', newLocale);
    };

    const t = translations[locale];

    return (
        <I18nContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}

export function useTranslation() {
    const { t } = useI18n();
    return t;
}
