// Tipos para os produtos
export interface Product {
    id: string;
    slug: string;
    name: string;
    category: 'rh' | 'vendas' | 'marketing' | 'financeiro' | 'operacional' | 'neural' | 'sync' | 'void' | 'kinetic';
    shortDescription: string;
    longDescription: string;
    price: number;
    priceLabel?: string;
    originalPrice?: number;
    features: string[];
    whatYouGet: string[];
    forWho: string[];
    videoUrl?: string;
    kiwifyUrl: string;
    thumbnail: string;
    badge?: string;
    popular?: boolean;
    complexity?: string;
    framework?: string;
}

// Dados dos produtos
export const products: Product[] = [
    {
        id: '1',
        slug: 'seo-calculator',
        name: 'SEO Calculator',
        category: 'neural',
        shortDescription: 'Calculate SEO potential with Vibe Coding. Low complexity, high impact.',
        longDescription: `O SEO Calculator é um agente de Vibe Coding que permite gerar estimativas de ROI e projeções de tráfego orgânico instantaneamente.
        
        Não é apenas uma calculadora: é um agente que analisa inputs do cliente, compara com benchmarks de indústria e gera um relatório PDF pronto para fechar contratos.`,
        price: 0,
        priceLabel: '$39 - $99',
        complexity: 'Low',
        framework: 'Vibe Coding',
        features: [
            'ROI Projector',
            'Traffic Estimator',
            'Keyword Gap Analysis',
            'Competitor Benchmark',
            'PDF Report Generator'
        ],
        whatYouGet: [
            'Source Code (Python)',
            'Prompt Templates',
            'Streamlit UI',
            'Deployment Guide'
        ],
        forWho: [
            'SEO Agencies',
            'Freelancers',
            'Sales Teams'
        ],
        kiwifyUrl: '#',
        thumbnail: '/products/seo-calculator.png',
        badge: 'Entry Level',
        popular: true
    },
    {
        id: '2',
        slug: 'lead-scraper',
        name: 'Lead Scraper',
        category: 'sync',
        shortDescription: 'Autonomous lead generation using DOE & Self-Annealing agents.',
        longDescription: `O Lead Scraper é um sistema autônomo de geração de leads que utiliza a arquitetura DOE para navegar, extrair e enriquecer dados de contatos.
        
        Diferente de scrapers comuns que quebram com mudanças de layout, este agente possui Self-Annealing: ele detecta erros e ajusta seus seletores automaticamente.`,
        price: 0,
        priceLabel: '$300 - $800',
        complexity: 'Medium',
        framework: 'DOE / Self-Annealing',
        features: [
            'Multi-source Scraping',
            'Email Enrichment',
            'LinkedIn Validation',
            'CRM Sync',
            'Anti-detect Browsing'
        ],
        whatYouGet: [
            'DOE Agent Core',
            'Scraping Modules',
            'Docker Container',
            'API Documentation'
        ],
        forWho: [
            'Growth Hackers',
            'SDR Teams',
            'B2B Operations'
        ],
        kiwifyUrl: '#',
        thumbnail: '/products/lead-scraper.png',
        badge: 'Best Seller',
        popular: true
    },
    {
        id: '3',
        slug: 'proposal-engine',
        name: 'Proposal Engine',
        category: 'kinetic',
        shortDescription: 'Generate value-based proposals from transcripts using MCP.',
        longDescription: `O Proposal Engine ouve suas reuniões e cria propostas comerciais perfeitas.
        
        Usando o Model Context Protocol (MCP), ele ingere transcrições, entende o contexto do cliente, aplica seus templates de proposta e gera um documento final pronto para assinatura.`,
        price: 0,
        priceLabel: '$500 - $1,000',
        complexity: 'Medium',
        framework: 'MCP / Transcripts',
        features: [
            'Meeting Transcription',
            'Context Extraction',
            'Dynamic Pricing',
            'Legal Copilot',
            'CRM Integration'
        ],
        whatYouGet: [
            'MCP Server Config',
            'Proposal Templates',
            'Transcriber Module',
            'Obsidian Plugin'
        ],
        forWho: [
            'Consultants',
            'Agencies',
            'Enterprise Sales'
        ],
        kiwifyUrl: '#',
        thumbnail: '/products/proposal-engine.png'
    },
    {
        id: '4',
        slug: 'research-dossier',
        name: 'Research Dossier',
        category: 'void',
        shortDescription: 'Deep research using parallel sub-agents for comprehensive reports.',
        longDescription: `O Research Dossier é o estado da arte em pesquisa autônoma.
        
        Um agente orquestrador coordena múltiplos sub-agentes que navegam paralelamente pela web, papers acadêmicos e bases de dados para compilar um dossiê completo sobre qualquer tópico.`,
        price: 0,
        priceLabel: '$1,000 - $5,000',
        complexity: 'High',
        framework: 'Parallel Sub-agents',
        features: [
            'Recursive Search',
            'Fact Checking',
            'Source Citation',
            'Multi-language Support',
            'Executive Summary'
        ],
        whatYouGet: [
            'Orchestrator Code',
            'Sub-agent Templates',
            'Knowledge Graph',
            'Report Builder'
        ],
        forWho: [
            'Investment Firms',
            'R&D Departments',
            'Strategists'
        ],
        kiwifyUrl: '#',
        thumbnail: '/products/research-dossier.png',
        badge: 'Enterprise'
    }
];

// Funções auxiliares
export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
    if (category === 'todos') return products;
    // Map old categories to new ones if needed, or just filter strictly
    return products.filter(p => p.category === category);
}

export function getPopularProducts(): Product[] {
    return products.filter(p => p.popular);
}

export function getRelatedProducts(currentSlug: string, limit: number = 3): Product[] {
    const current = getProductBySlug(currentSlug);
    if (!current) return products.slice(0, limit);

    return products
        .filter(p => p.slug !== currentSlug)
        .slice(0, limit);
}

// Categorias disponíveis - Atualizadas para o tema Cyber
export const categories = [
    { id: 'todos', name: 'ALL SYSTEMS', icon: 'LayoutGrid' },
    { id: 'neural', name: 'NEURAL', icon: 'Users' }, // Vibe Coding
    { id: 'sync', name: 'SYNC', icon: 'TrendingUp' }, // DOE
    { id: 'kinetic', name: 'KINETIC', icon: 'Calculator' }, // MCP
    { id: 'void', name: 'VOID', icon: 'Megaphone' }, // Deep Research
];

// FAQs
export const faqs = [
    {
        question: 'What is the DOE Framework?',
        answer: 'DOE stands for Directive, Orchestration, and Execution. It is a framework for building reliable AI agents using Python and Zed, moving beyond simple workflow tools like n8n.'
    },
    {
        question: 'Why Python & Zed over n8n?',
        answer: 'While n8n is great for visual workflows, Python allows for more complex, deterministic logic, better error handling (Self-Annealing), and superior performance for production-grade agents.'
    },
    {
        question: 'What is "Self-Annealing"?',
        answer: 'It is a mechanism where the agent monitors its own execution steps. If a step fails or produces hallucinations, it self-corrects based on predefined guardrails, reducing error rates significantly.'
    },
    {
        question: 'Do I need to be a coder?',
        answer: 'Some familiarity with Python is helpful, but the framework is designed to be modular. We call it "Vibe Coding" – you direct the flow, the agents handle the heavy lifting.'
    },
    {
        question: 'How do I deploy this?',
        answer: 'The system is 100% self-hosted. You can run it on your local machine, a VPS, or any docker-compatible cloud environment. You own the code and the data.'
    },
    {
        question: 'What are "Parallel Sub-agents"?',
        answer: 'For complex tasks like the Research Dossier, we spawn multiple sub-agents that work simultaneously on different parts of the problem, then merge their findings for a comprehensive result.'
    }
];
