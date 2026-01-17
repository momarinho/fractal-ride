'use client';

import { I18nProvider } from '@/lib/i18n';
import LanguageSwitch from '@/components/LanguageSwitch';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <I18nProvider>
            <LanguageSwitch />
            {children}
        </I18nProvider>
    );
}
