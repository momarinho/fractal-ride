export const translations = {
    'pt-BR': {
        // Hero
        hero: {
            title: 'DOE Framework',
            subtitle: 'Construa agentes de IA confiáveis com Python & Zed. De ferramentas de $50 a soluções enterprise de $5000.',
            cta: 'Explorar Módulos',
        },
        // Navigation
        nav: {
            products: 'Produtos',
            home: 'Início',
            contact: 'Contato',
        },
        // Products
        products: {
            title: 'Nossos Produtos',
            complexity: 'Complexidade',
            framework: 'Framework',
            fee: 'Investimento',
            viewDetails: 'Ver Detalhes',
            buyNow: 'Comprar Agora',
            inventory: 'INVENTÁRIO',
            search: 'Buscar...',
            noResults: 'Nenhum produto encontrado',
        },
        // Why Section
        why: {
            title: 'Por que Abandonar n8n?',
            stateManagement: {
                title: 'Gerenciamento de Estado Complexo',
                desc: 'Nós visuais viram espaguete ao lidar com conversas complexas ou raciocínio multi-etapa. Python lida com estado de forma elegante.',
            },
            selfAnnealing: {
                title: 'Confiabilidade Self-Annealing',
                desc: 'Agentes DOE se corrigem. Se uma etapa falha, eles retentam com novo contexto ou estratégia, algo difícil de conectar visualmente.',
            },
            performance: {
                title: 'Performance & Controle',
                desc: 'Sem overhead. Chamadas diretas à API, processamento local de arquivos e lógica customizada sem as restrições de uma plataforma no-code.',
            },
            deliverables: {
                title: 'Entregas de Alto Valor',
                desc: 'Venda resultados, não workflows. De ferramentas de $50 a dossiês de pesquisa enterprise de $5000, construa ativos que escalam.',
            },
        },
        // Self-Annealing Demo
        demo: {
            title: 'Self-Annealing em Ação',
            subtitle: 'Veja como um agente DOE detecta um seletor quebrado, analisa a nova estrutura DOM com um LLM, corrige seu próprio código e continua rodando — tudo sem intervenção humana.',
            runSimulation: 'Rodar Simulação',
            reset: 'Resetar',
            detect: 'Detectar',
            detectDesc: 'Agente captura erros de runtime e contexto completo',
            analyze: 'Analisar',
            analyzeDesc: 'LLM identifica causa raiz e gera correção cirúrgica',
            heal: 'Curar',
            healDesc: 'Patch é aplicado, build retentado, sistema endurece',
        },
        // FAQ
        faq: {
            title: 'Perguntas Frequentes',
        },
        // Chatbot
        chat: {
            title: 'DOE_AGENT_V1.0',
            placeholder: 'EXECUTAR_COMANDO...',
            learned: 'aprendido',
        },
        // Footer/Common
        common: {
            language: 'Idioma',
            portuguese: 'Português',
            english: 'English',
        },
    },
    'en': {
        // Hero
        hero: {
            title: 'DOE Framework',
            subtitle: 'Build reliable AI agents with Python & Zed. From $50 tools to $5000 enterprise solutions.',
            cta: 'Explore Modules',
        },
        // Navigation
        nav: {
            products: 'Products',
            home: 'Home',
            contact: 'Contact',
        },
        // Products
        products: {
            title: 'Our Products',
            complexity: 'Complexity',
            framework: 'Framework',
            fee: 'Investment',
            viewDetails: 'View Details',
            buyNow: 'Buy Now',
            inventory: 'INVENTORY',
            search: 'Search...',
            noResults: 'No products found',
        },
        // Why Section
        why: {
            title: 'Why Abandon n8n?',
            stateManagement: {
                title: 'Complex State Management',
                desc: 'Visual nodes become spaghetti when handling complex, looping conversations or multi-step reasoning. Python handles state elegantly.',
            },
            selfAnnealing: {
                title: 'Self-Annealing Reliability',
                desc: 'DOE agents fix themselves. If a step fails, they retry with new context or strategy, something hard to wire visually.',
            },
            performance: {
                title: 'Performance & Control',
                desc: 'No overhead. Direct API calls, local file processing, and custom logic without the constraints of a no-code platform.',
            },
            deliverables: {
                title: 'High-Value Deliverables',
                desc: 'Sell outcomes, not workflows. From $50 tools to $5000 enterprise research dossiers, build assets that scale.',
            },
        },
        // Self-Annealing Demo
        demo: {
            title: 'Self-Annealing in Action',
            subtitle: 'Watch how a DOE agent detects a broken selector, analyzes the new DOM structure with an LLM, patches its own code, and continues running — all without human intervention.',
            runSimulation: 'Run Simulation',
            reset: 'Reset',
            detect: 'Detect',
            detectDesc: 'Agent catches runtime errors and captures full context',
            analyze: 'Analyze',
            analyzeDesc: 'LLM identifies root cause and generates surgical fix',
            heal: 'Heal',
            healDesc: 'Patch is applied, build retried, system hardens',
        },
        // FAQ
        faq: {
            title: 'Frequently Asked Questions',
        },
        // Chatbot
        chat: {
            title: 'DOE_AGENT_V1.0',
            placeholder: 'EXECUTE_COMMAND...',
            learned: 'learned',
        },
        // Footer/Common
        common: {
            language: 'Language',
            portuguese: 'Português',
            english: 'English',
        },
    },
};

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations['en'];
