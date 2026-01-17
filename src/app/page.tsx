'use client';

import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import FAQ from '@/components/FAQ';
import SelfAnnealingDemo from '@/components/SelfAnnealingDemo';
import { Calculator, Database, FileText, BookOpen } from 'lucide-react';
import { faqs } from '@/lib/products';
import { useTranslation } from '@/lib/i18n';

export default function Home() {
  const t = useTranslation();

  const featuredProducts = [
    {
      id: '01',
      title: 'SEO CALCULATOR',
      jpTitle: 'SEO計算機',
      desc: 'Calculate SEO potential with Vibe Coding. Low complexity, high impact.',
      complexity: 'Low',
      framework: 'Vibe Coding',
      fee: '$39 - $99',
      icon: Calculator,
      bg: 'bg-[#E63946]',
      link: '/produtos/seo-calculator'
    },
    {
      id: '02',
      title: 'LEAD SCRAPER',
      jpTitle: 'リードスクレーパー',
      desc: 'Autonomous lead generation using DOE & Self-Annealing agents.',
      complexity: 'Medium',
      framework: 'DOE / Self-Annealing',
      fee: '$300 - $800',
      icon: Database,
      bg: 'bg-[#2A9D8F]',
      link: '/produtos/lead-scraper'
    },
    {
      id: '03',
      title: 'PROPOSAL ENGINE',
      jpTitle: '提案エンジン',
      desc: 'Transform meetings into winning proposals with MCP agents.',
      complexity: 'Medium',
      framework: 'MCP',
      fee: '$500 - $1,500',
      icon: FileText,
      bg: 'bg-[#E9C46A]',
      link: '/produtos/proposal-engine'
    },
    {
      id: '04',
      title: 'RESEARCH DOSSIER',
      jpTitle: '調査報告書',
      desc: 'Deep authority reports using parallel sub-agents for due diligence.',
      complexity: 'High',
      framework: 'Parallel Sub-agents',
      fee: '$2,000 - $5,000',
      icon: BookOpen,
      bg: 'bg-[#2E5BFF]',
      link: '/produtos/research-dossier'
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Hero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        ctaText={t.hero.cta}
        ctaLink="#products"
      />

      <div id="products">
        <FeaturedProducts products={featuredProducts} />
      </div>

      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">{t.why.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-4 md:gap-6">
              <div className="text-2xl md:text-3xl text-pink-500">🧬</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{t.why.stateManagement.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{t.why.stateManagement.desc}</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="text-2xl md:text-3xl text-blue-500">🛡️</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{t.why.selfAnnealing.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{t.why.selfAnnealing.desc}</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="text-2xl md:text-3xl text-yellow-500">🚀</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{t.why.performance.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{t.why.performance.desc}</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="text-2xl md:text-3xl text-green-500">💰</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{t.why.deliverables.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{t.why.deliverables.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SelfAnnealingDemo />

      <FAQ faqs={faqs} />
    </main>
  );
}
