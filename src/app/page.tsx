'use client';

import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  const products = [
    {
      id: 'starter',
      name: 'Starter Pack',
      price: 'R$ 497',
      description: 'Codigo-fonte completo + Docker + Documentation',
      features: [
        '✅ Codigo-fonte 100% seu',
        '✅ Docker Compose pronto',
        '✅ README detalhado',
        '✅ Sample transcript incluido',
        '⚠️ Setup manual em 30min',
      ],
      cta: 'Comprar Agora',
      ctaLink: 'https://gumroad.com/momarinho',
      highlight: false,
    },
    {
      id: 'pro',
      name: 'Pro Pack',
      price: 'R$ 1.497',
      description: '+ Playbooks DevOps + Setup guiado + 2h suporte',
      features: [
        '✅ Tudo do Starter +',
        '✅ Playbooks de deployment',
        '✅ Templates customizaveis',
        '✅ PLAYBOOK.md com 3 opcoes deploy',
        '✅ Email suporte por 30 dias',
      ],
      cta: 'Comprar Agora',
      ctaLink: 'https://gumroad.com/momarinho',
      highlight: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'R$ 2.997+',
      description: '+ White-label + Customizacoes leves + Suporte prioritario',
      features: [
        '✅ Tudo do Pro +',
        '✅ Customizacao de branding',
        '✅ Integracao com seu sistema',
        '✅ Suporte email prioritario',
        '✅ Atualizacoes automaticas',
      ],
      cta: 'Contactar',
      ctaLink: 'mailto:momarinho@email.com',
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: 'O que e Vector Spirit?',
      answer: 'Vector Spirit e um agente DOE que transforma transcricoes de reunioes de vendas em propostas value-based em menos de 15 minutos. Combina IA com automacao deterministica para evitar falhas.',
    },
    {
      question: 'Preciso de conhecimento tecnico?',
      answer: 'Nao! Com Docker, voce faz deploy em 15 minutos. docker-compose up -d. Se nao quiser Docker, so Python venv. PLAYBOOK.md guia cada passo.',
    },
    {
      question: 'E LGPD e GDPR compliant?',
      answer: 'Sim! Ver SECURITY.md. Nao armazenamos transcripts. Processamento em memoria, depois descartados. Voce tem controle total da infra.',
    },
    {
      question: 'Posso usar como SaaS publico?',
      answer: 'Nao sem licenca comercial. Use internamente ou em servico maior. SaaS publico: momarinho@email.com',
    },
    {
      question: 'Qual e o tempo de setup?',
      answer: 'Docker: 15 min. Python: 30 min. Cloud (Railway): 5 min. Tudo no PLAYBOOK.md',
    },
    {
      question: 'Funciona com qual LLM?',
      answer: 'OpenAI (GPT-4o-mini), Claude, ou DeepSeek. Voce configura sua chave. Nenhuma chave fica conosco.',
    },
    {
      question: 'E se quiser customizar?',
      answer: 'Claro! Codigo e seu. Edit agents.md, customize prompts, adicione ferramentas. Enterprise: customizacoes profissionais.',
    },
    {
      question: 'Tem suporte?',
      answer: 'Starter: comunidade. Pro: email 30 dias. Enterprise: prioritario. Docs resolvem 90% das duvidas.',
    },
  ];

  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero
        title="DOE Agents: Automatize Propostas em Segundos"
        subtitle="Transforme transcricoes em propostas value-based com IA. Self-hosted, sem lock-in."
        ctaText="Ver Demo"
        ctaLink="https://github.com/momarinho/vector-spirit"
      />
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Arquitetura DOE</h2>
          <p className="text-center text-gray-400 mb-12">
            Directive → Orchestration → Execution
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-3">Directive</h3>
              <p className="text-gray-400">Instrucoes em Markdown com SOPs, guardrails, sucesso</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="text-3xl mb-4">🔀</div>
              <h3 className="text-xl font-bold text-white mb-3">Orchestration</h3>
              <p className="text-gray-400">Agente que auto-corrige erros (self-annealing)</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-3">Execution</h3>
              <p className="text-gray-400">Scripts deterministicos em Python</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts products={products} />

      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Por que Vector Spirit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-2xl">✨</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Self-Annealing</h3>
                <p className="text-gray-400">Erro 10% por step vira 0,1% no pipeline</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🔒</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">100% Self-Hosted</h3>
                <p className="text-gray-400">Seu codigo, sua infra, seus dados. LGPD/GDPR</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">📊</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Observavel</h3>
                <p className="text-gray-400">Cada passo em state.json</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">⚡</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Setup Rapido</h3>
                <p className="text-gray-400">Docker 15min ou Python 30min</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ faqs={faqs} />
    </main>
  );
}
