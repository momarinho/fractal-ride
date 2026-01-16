import { Bebas_Neue, Space_Grotesk, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-japanese',
  display: 'swap',
});

export const metadata = {
  title: 'BEBOP AUTOMATIONS | Retro-Futuristic Solutions',
  description: 'DOE Framework automations for reliable, production-ready agentic systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${bebas.variable} ${spaceGrotesk.variable} ${notoSansJP.variable} dark`}>
      <body className="bg-[#050505] text-white font-body overflow-x-hidden selection:bg-[#2E5BFF] selection:text-white" suppressHydrationWarning>
        {/* Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-50 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAY4DLNSuQR7SxoKtxxvLAsgeb8Bn_C0hd9yo6t8GfDblRwa50EECW-iRt5dg2If3XV5UkB7yUIDNTGMe7lys3LI66W8UCzrMI8GSxCWHUlkfb_ju6rb6JfsX3m1t20cZr8TfKylyCid1T4-4iE1rgpW9T-z0T5ZTliQJhyfdEZ737UkDsTSPYK3Gigpmwe2L7gIVVw_NCV3Tgk-d9WzgjsuKKFucTlJ4G1A-RFtlmSmbdxfyOljRz_eLB98vIGbSuuarM7l2SF9wf-')] mix-blend-overlay" />

        {children}
      </body>
    </html>
  );
}
