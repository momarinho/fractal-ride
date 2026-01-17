'use client';

import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import FAQ from '@/components/FAQ';
import SelfAnnealingDemo from '@/components/SelfAnnealingDemo';
import { Calculator, Database, FileText, BookOpen } from 'lucide-react';
import { faqs } from '@/lib/products';

export default function Home() {
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
        title="DOE Framework"
        subtitle="Build reliable AI agents with Python & Zed. From $50 tools to $5000 enterprise solutions."
        ctaText="Explore Modules"
        ctaLink="#products"
      />

      <div id="products">
        <FeaturedProducts products={featuredProducts} />
      </div>

      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Abandon n8n?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="text-3xl text-pink-500">🧬</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Complex State Management</h3>
                <p className="text-gray-400 leading-relaxed">Visual nodes become spaghetti when handling complex, looping conversations or multi-step reasoning. Python handles state elegantly.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-3xl text-blue-500">🛡️</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Self-Annealing Reliability</h3>
                <p className="text-gray-400 leading-relaxed">DOE agents fix themselves. If a step fails, they retry with new context or strategy, something hard to wire visually.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-3xl text-yellow-500">🚀</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Performance & Control</h3>
                <p className="text-gray-400 leading-relaxed">No overhead. Direct API calls, local file processing, and custom logic without the constraints of a no-code platform.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-3xl text-green-500">💰</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">High-Value Deliverables</h3>
                <p className="text-gray-400 leading-relaxed">Sell outcomes, not workflows. From $50 tools to $5000 enterprise research dossiers, build assets that scale.</p>
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
