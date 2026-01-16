// Tipos para os produtos
export interface Product {
    id: string;
    slug: string;
    name: string;
    category: 'rh' | 'vendas' | 'marketing' | 'financeiro' | 'operacional';
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
}

// Dados dos produtos
export const products: Product[] = [
    {
        id: '1',
        slug: 'point-control',
        name: 'Point Control',
        category: 'rh',
        shortDescription: 'Controle de ponto + relatórios automáticos para sua equipe',
        longDescription: `O Point Control é a solução completa para automatizar todo o processo de controle de ponto da sua empresa. 

Chega de perder horas compilando planilhas, calculando horas extras manualmente ou tendo dores de cabeça com a gestão de frequência.

Com essa automação, seus funcionários registram o ponto de forma simples (via WhatsApp, Telegram ou formulário), e o sistema cuida de todo o resto: cálculo de horas trabalhadas, horas extras, banco de horas, faltas e atrasos.

Todo mês, você recebe um relatório completo pronto para enviar ao RH ou contabilidade.`,
        price: 147,
        originalPrice: 297,
        features: [
            'Registro de ponto via WhatsApp ou Telegram',
            'Cálculo automático de horas trabalhadas',
            'Controle de horas extras e banco de horas',
            'Relatório mensal automático por email',
            'Dashboard em tempo real',
            'Alertas de atrasos e faltas',
            'Suporte a múltiplos turnos',
            'Exportação para Excel'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Guia de instalação PDF com 30 páginas',
            '5 vídeos tutoriais passo a passo',
            'Templates de mensagens prontos',
            'Dashboard Google Sheets configurado',
            'Suporte via grupo Telegram por 30 dias',
            'Atualizações gratuitas por 1 ano'
        ],
        forWho: [
            'Pequenas empresas com 5 a 50 funcionários',
            'Gestores de RH que querem economizar tempo',
            'Empreendedores cansados de planilhas manuais'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        kiwifyUrl: 'https://pay.kiwify.com.br/point-control',
        thumbnail: '/products/point-control.png',
        badge: 'Mais Vendido',
        popular: true
    },
    {
        id: '2',
        slug: 'linkedin-pro',
        name: 'LinkedIn Pro',
        category: 'vendas',
        shortDescription: 'Prospecção automatizada no LinkedIn - gere 50+ leads/semana',
        longDescription: `Pare de perder horas enviando mensagens manualmente no LinkedIn. O LinkedIn Pro automatiza todo o seu processo de prospecção.

Defina seu público-alvo ideal, configure suas mensagens personalizadas, e deixe a automação trabalhar por você 24/7.

O sistema envia convites, faz follow-up automático, identifica quem abriu suas mensagens e organiza tudo em um CRM simples.

Clientes que usam o LinkedIn Pro geram em média 50 leads qualificados por semana.`,
        price: 197,
        originalPrice: 397,
        features: [
            'Envio automático de convites',
            'Sequência de follow-up personalizada',
            'Mensagens personalizadas com variáveis',
            'Integração com Google Sheets/CRM',
            'Detecção de respostas positivas',
            'Limite de envios configurável (segurança)',
            'Relatório semanal de resultados',
            'Filtros avançados de público'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Guia de prospecção no LinkedIn (PDF 25 páginas)',
            '8 templates de mensagens que convertem',
            '4 vídeos tutoriais',
            'Planilha de tracking de leads',
            'Suporte via grupo Telegram por 30 dias',
            'Bônus: 50 ganchos de abertura testados'
        ],
        forWho: [
            'Vendedores B2B que prospectam no LinkedIn',
            'Agências que precisam de leads qualificados',
            'Consultores e freelancers buscando clientes'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        kiwifyUrl: 'https://pay.kiwify.com.br/linkedin-pro',
        thumbnail: '/products/linkedin-pro.png',
        badge: 'Alta Conversão',
        popular: true
    },
    {
        id: '3',
        slug: 'auto-post-social',
        name: 'Auto Post Social',
        category: 'marketing',
        shortDescription: 'Agende e publique automaticamente em todas as redes sociais',
        longDescription: `Gerencie todas as suas redes sociais de um só lugar, sem precisar acessar cada uma delas.

O Auto Post Social permite que você agende posts para Instagram, Facebook, Twitter (X), LinkedIn e TikTok de uma só vez.

Você pode criar todo o conteúdo da semana em uma única sessão e deixar a automação cuidar de publicar nos horários certos.

Inclui ainda sugestões de horários otimizados baseados no comportamento do seu público.`,
        price: 127,
        originalPrice: 247,
        features: [
            'Publicação em 5 redes sociais',
            'Agendamento visual (calendário)',
            'Horários otimizados por rede',
            'Upload de imagens e vídeos',
            'Preview antes de publicar',
            'Repost automático de conteúdo evergreen',
            'Relatório de engajamento',
            'Hashtags sugeridas por IA'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Guia de configuração PDF (20 páginas)',
            '6 vídeos tutoriais',
            'Calendário de conteúdo template',
            '100 templates de posts para cada nicho',
            'Suporte via grupo Telegram por 30 dias',
            'Bônus: Planilha de estratégia de conteúdo'
        ],
        forWho: [
            'Social media managers sobrecarregados',
            'Empreendedores que fazem tudo sozinhos',
            'Agências com múltiplos clientes'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        kiwifyUrl: 'https://pay.kiwify.com.br/auto-post-social',
        thumbnail: '/products/auto-post.png',
        badge: 'Novidade'
    },
    {
        id: '4',
        slug: 'invoice-master',
        name: 'Invoice Master',
        category: 'financeiro',
        shortDescription: 'Emita notas fiscais automaticamente e nunca perca um prazo',
        longDescription: `O Invoice Master é a automação definitiva para quem precisa emitir notas fiscais recorrentes.

Conectado ao seu sistema de vendas ou planilha, ele detecta automaticamente novos pagamentos e gera a nota fiscal correspondente.

Não importa se você usa NFe, NFSe ou nota de serviço — a automação se adapta ao seu modelo de negócio.

Ideal para infoprodutores, agências, consultores e qualquer negócio que vende de forma recorrente.`,
        price: 197,
        originalPrice: 397,
        features: [
            'Emissão automática de NF-e e NFS-e',
            'Integração com principais plataformas de venda',
            'Detecção automática de pagamentos',
            'Envio de NF por email ao cliente',
            'Armazenamento organizado em Drive',
            'Relatório fiscal mensal',
            'Alertas de notas pendentes',
            'Suporte a múltiplos CNPJs'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Guia de configuração fiscal (PDF 35 páginas)',
            '7 vídeos tutoriais',
            'Templates de email profissionais',
            'Checklist de configuração',
            'Suporte via grupo Telegram por 30 dias',
            'Bônus: Planilha de controle fiscal'
        ],
        forWho: [
            'Infoprodutores com vendas recorrentes',
            'Agências que precisam faturar clientes mensalmente',
            'Contadores que querem automatizar processos'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        kiwifyUrl: 'https://pay.kiwify.com.br/invoice-master',
        thumbnail: '/products/invoice-master.png'
    },
    {
        id: '5',
        slug: 'whatsapp-atendimento',
        name: 'WhatsApp Atendimento Pro',
        category: 'vendas',
        shortDescription: 'Chatbot inteligente + atendimento organizado por setores',
        longDescription: `Transforme seu WhatsApp comercial em uma central de atendimento profissional.

O WhatsApp Atendimento Pro cria um menu interativo, direciona clientes para os setores corretos, responde dúvidas frequentes automaticamente e organiza tudo em um painel de controle.

Funciona 24 horas por dia, mesmo quando você não está disponível.

Reduza em até 80% o tempo gasto respondendo as mesmas perguntas.`,
        price: 167,
        originalPrice: 347,
        features: [
            'Menu interativo automático',
            'Respostas a FAQs mais comuns',
            'Direcionamento por setor',
            'Atendimento 24/7',
            'Fila de espera inteligente',
            'Histórico de conversas',
            'Relatório de atendimentos',
            'Integração com CRM'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Guia de atendimento via WhatsApp (PDF 28 páginas)',
            '6 vídeos tutoriais',
            'Scripts de atendimento prontos',
            'Templates de mensagens (20+)',
            'Suporte via grupo Telegram por 30 dias',
            'Bônus: Playbook de atendimento ao cliente'
        ],
        forWho: [
            'Lojas que recebem muitas mensagens por dia',
            'Empresas de serviço com múltiplos departamentos',
            'Qualquer negócio que quer profissionalizar o WhatsApp'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        kiwifyUrl: 'https://pay.kiwify.com.br/whatsapp-atendimento',
        thumbnail: '/products/whatsapp-pro.png',
        badge: 'Melhor Custo-Benefício',
        popular: true
    },
    {
        id: '6',
        slug: 'email-ninja',
        name: 'Email Ninja',
        category: 'marketing',
        shortDescription: 'Sequências de email que vendem no piloto automático',
        longDescription: `O Email Ninja é o sistema completo para criar sequências de email que convertem.

A partir de um simples formulário de captura, o lead entra em um fluxo automatizado que nutre, engaja e converte — sem você fazer nada.

Inclui templates testados para diferentes nichos: e-commerce, infoprodutos, serviços e SaaS.

Ideal para quem quer vender mais com menos esforço.`,
        price: 147,
        originalPrice: 297,
        features: [
            'Sequências de email automatizadas',
            'Segmentação por comportamento',
            'A/B testing integrado',
            'Templates responsivos',
            'Relatórios de abertura e cliques',
            'Integração com principais ferramentas',
            'Automação de carrinho abandonado',
            'Emails de reengajamento'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Guia de email marketing (PDF 30 páginas)',
            '5 vídeos tutoriais',
            '30 templates de email que convertem',
            'Sequências prontas por nicho',
            'Suporte via grupo Telegram por 30 dias',
            'Bônus: Checklist de deliverability'
        ],
        forWho: [
            'Infoprodutores que querem nutrir leads',
            'E-commerces que precisam recuperar vendas',
            'Qualquer negócio que quer automatizar comunicação'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        kiwifyUrl: 'https://pay.kiwify.com.br/email-ninja',
        thumbnail: '/products/email-ninja.png'
    },
    {
        id: '7',
        slug: 'seo-calculator',
        name: 'SEO Calculator',
        category: 'operacional',
        shortDescription: 'Calculadora SEO para gerar propostas e projeções rápidas.',
        longDescription: `O SEO Calculator é um produto em desenvolvimento para gerar estimativas de ROI e projeções de tráfego com base em inputs simples.

Ideal para agências e consultores que precisam estimar valor de SEO rapidamente, com output claro para o cliente.`,
        price: 0,
        priceLabel: 'US$ 39–99',
        features: [
            'Complexidade: Low',
            'Framework principal: Vibe Coding',
            'Cálculo rápido de ROI SEO',
            'Exportação para PDF/planilha',
            'Inputs customizáveis por nicho'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Template de proposta SEO',
            'Guia de uso e calibração',
            'Roadmap de evolução do produto'
        ],
        forWho: [
            'Agências de SEO',
            'Consultores independentes',
            'Times de pré-vendas'
        ],
        kiwifyUrl: 'https://pay.kiwify.com.br/seo-calculator',
        thumbnail: '/products/seo-calculator.png',
        badge: 'Em desenvolvimento'
    },
    {
        id: '8',
        slug: 'lead-scraper',
        name: 'Lead Scraper',
        category: 'operacional',
        shortDescription: 'Coleta e enriquecimento de leads com foco em escala.',
        longDescription: `O Lead Scraper é um sistema em desenvolvimento para captura, normalização e enriquecimento de leads.

Projetado para rodar com autosserviço e se auto-reparar quando um fornecedor muda regras.`,
        price: 0,
        priceLabel: 'US$ 300–800',
        features: [
            'Complexidade: Medium',
            'Framework principal: DOE / Self-Annealing',
            'Scraping controlado por fontes',
            'Enriquecimento via APIs',
            'Monitoramento e alertas'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Checklist de compliance e fontes',
            'Playbook de manutenção',
            'Roadmap de integrações'
        ],
        forWho: [
            'Times de vendas',
            'Agências de prospecção',
            'Empresas B2B em crescimento'
        ],
        kiwifyUrl: 'https://pay.kiwify.com.br/lead-scraper',
        thumbnail: '/products/lead-scraper.png',
        badge: 'Em desenvolvimento'
    },
    {
        id: '9',
        slug: 'proposal-engine',
        name: 'Proposal Engine',
        category: 'operacional',
        shortDescription: 'Geração automática de propostas com templates dinâmicos.',
        longDescription: `O Proposal Engine transforma dados comerciais em propostas prontas para envio.

Ele usa templates, transcrições e fontes internas para acelerar o fechamento e padronizar o discurso.`,
        price: 0,
        priceLabel: 'US$ 500–1.000',
        features: [
            'Complexidade: Medium',
            'Framework principal: MCP / Transcripts',
            'Templates de proposta parametrizados',
            'Integração com CRM',
            'Aprovação com trilha de auditoria'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Biblioteca inicial de templates',
            'Guia de integração com CRM',
            'Roadmap de melhorias'
        ],
        forWho: [
            'Times comerciais',
            'Consultorias e agências',
            'Operações com alto volume de propostas'
        ],
        kiwifyUrl: 'https://pay.kiwify.com.br/proposal-engine',
        thumbnail: '/products/proposal-engine.png',
        badge: 'Em desenvolvimento'
    },
    {
        id: '10',
        slug: 'research-dossier',
        name: 'Research Dossier',
        category: 'operacional',
        shortDescription: 'Dossiês de pesquisa com agentes paralelos.',
        longDescription: `O Research Dossier é um sistema para produzir relatórios aprofundados usando subagentes paralelos.

Ideal para times que precisam reunir evidências rápidas com referências e análises estruturadas.`,
        price: 0,
        priceLabel: 'US$ 1.000–5.000',
        features: [
            'Complexidade: High',
            'Framework principal: Parallel Sub-agents',
            'Mapeamento de fontes e evidências',
            'Resumo executivo automatizado',
            'Anexos com referências'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Playbook de pesquisa',
            'Modelos de relatório',
            'Roadmap de automações'
        ],
        forWho: [
            'Agências estratégicas',
            'Times de produto e inovação',
            'Consultorias e research shops'
        ],
        kiwifyUrl: 'https://pay.kiwify.com.br/research-dossier',
        thumbnail: '/products/research-dossier.png',
        badge: 'Em desenvolvimento'
    },
    {
        id: '11',
        slug: 'brand-listening',
        name: 'Brand Listening',
        category: 'operacional',
        shortDescription: 'Monitoramento contínuo de marca com orquestração multi-modelo.',
        longDescription: `O Brand Listening monitora menções e sinais de reputação usando múltiplos modelos e fontes.

Pensado para operações que precisam reagir rápido a crises, oportunidades e tendências.`,
        price: 0,
        priceLabel: 'US$ 500–5.000/mo',
        features: [
            'Complexidade: High',
            'Framework principal: Multi-model Orchestration',
            'Coleta de sinais em tempo real',
            'Classificação de sentimento',
            'Alertas e dashboards'
        ],
        whatYouGet: [
            'Blueprint DOE completo (Directive + Orchestration + Execution)',
            'Guia de configuração de alertas',
            'Dashboard inicial',
            'Roadmap evolutivo'
        ],
        forWho: [
            'Times de marketing',
            'Relacionamento com o cliente',
            'Marcas com alta exposição'
        ],
        kiwifyUrl: 'https://pay.kiwify.com.br/brand-listening',
        thumbnail: '/products/brand-listening.png',
        badge: 'Em desenvolvimento'
    }
];

// Funções auxiliares
export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
    if (category === 'todos') return products;
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
        .filter(p => p.category === current.category || p.popular)
        .slice(0, limit);
}

// Categorias disponíveis
export const categories = [
    { id: 'todos', name: 'Todos', icon: 'LayoutGrid' },
    { id: 'rh', name: 'RH', icon: 'Users' },
    { id: 'vendas', name: 'Vendas', icon: 'TrendingUp' },
    { id: 'marketing', name: 'Marketing', icon: 'Megaphone' },
    { id: 'financeiro', name: 'Financeiro', icon: 'Calculator' },
    { id: 'operacional', name: 'Operacional', icon: 'Settings' }
];

// FAQs
export const faqs = [
    {
        question: 'Como funciona a entrega?',
        answer: 'A entrega é 100% automática! Após a confirmação do pagamento (geralmente em segundos para PIX ou cartão), você recebe um email com acesso à área de membros onde estão todos os arquivos: blueprint DOE (Directive + Orchestration + Execution), PDFs, vídeos e templates.'
    },
    {
        question: 'Preciso saber programar para usar?',
        answer: 'Não! Os protocolos DOE vêm prontos para colocar no ar. Nossos guias em PDF e vídeos explicam o passo a passo para conectar credenciais e executar os scripts, mesmo se você nunca implementou automações antes.'
    },
    {
        question: 'O que é DOE?',
        answer: 'DOE (Directive, Orchestration, Execution) é uma arquitetura para transformar IA em fluxos confiáveis. A Diretiva define objetivos e guardrails, a Orquestração roteia tarefas e a Execução roda scripts determinísticos com APIs e dados.'
    },
    {
        question: 'As automações funcionam para sempre?',
        answer: 'Sim! Uma vez configurada, a automação roda indefinidamente. Incluímos 1 ano de atualizações gratuitas caso alguma API mude. Após este período, você pode continuar usando normalmente ou adquirir atualizações avulsas.'
    },
    {
        question: 'E se eu não conseguir configurar?',
        answer: 'Você tem acesso ao nosso grupo de suporte no Telegram por 30 dias. Lá, nossa equipe e comunidade ajudam com dúvidas de configuração. Além disso, os vídeos tutoriais mostram cada etapa do processo.'
    },
    {
        question: 'Posso solicitar reembolso?',
        answer: 'Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta enviar um email e devolvemos 100% do valor. Sem perguntas, sem burocracia.'
    },
    {
        question: 'Quanto custa manter o DOE rodando?',
        answer: 'O DOE não exige licença. Os custos dependem das ferramentas e APIs que você conectar (ex.: WhatsApp, email, CRM) e da infraestrutura onde os scripts rodam. A maioria dos stacks modernos tem planos gratuitos ou de baixo custo.'
    },
    {
        question: 'Posso modificar as automações?',
        answer: 'Absolutamente! Os blueprints DOE são seus. Você pode ajustar a Diretiva, alterar roteiros de orquestração e estender scripts de execução conforme seu negócio.'
    },
    {
        question: 'Vocês fazem automações personalizadas?',
        answer: 'Sim! Se você precisa de algo específico para seu negócio, oferecemos serviço de automação sob medida. Entre em contato pelo email ou chat para um orçamento.'
    },
    {
        question: 'As automações funcionam com quais ferramentas?',
        answer: 'Os protocolos DOE funcionam com qualquer ferramenta que tenha API ou integração: Google Sheets, Gmail, Slack, WhatsApp, Telegram, Notion, Airtable, CRMs, APIs de pagamento, redes sociais e muito mais.'
    }
];
