// Tipos para os produtos
export interface Product {
    id: string;
    slug: string;
    name: string;
    category: 'rh' | 'vendas' | 'marketing' | 'financeiro' | 'operacional';
    shortDescription: string;
    longDescription: string;
    price: number;
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
            'Workflow n8n completo (JSON pronto para importar)',
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
            'Workflow n8n completo (JSON pronto para importar)',
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
            'Workflow n8n completo (JSON pronto para importar)',
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
            'Workflow n8n completo (JSON pronto para importar)',
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
            'Workflow n8n completo (JSON pronto para importar)',
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
            'Workflow n8n completo (JSON pronto para importar)',
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
        answer: 'A entrega é 100% automática! Após a confirmação do pagamento (geralmente em segundos para PIX ou cartão), você recebe um email com acesso à área de membros onde estão todos os arquivos: workflow n8n (JSON), PDFs, vídeos e templates.'
    },
    {
        question: 'Preciso saber programar para usar?',
        answer: 'Não! As automações vêm prontas para importar. Nossos guias em PDF e vídeos explicam passo a passo como configurar, mesmo se você nunca usou n8n antes. É literalmente copiar, colar e configurar suas credenciais.'
    },
    {
        question: 'O que é n8n?',
        answer: 'n8n é uma plataforma de automação (como Zapier ou Make), mas gratuita e muito mais poderosa. Você pode usar a versão cloud (n8n.cloud) ou instalar no seu próprio servidor. Nossas automações funcionam em ambas as opções.'
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
        question: 'Quanto custa manter o n8n rodando?',
        answer: 'O n8n cloud tem plano gratuito que cobre a maioria das automações. Se preferir hospedar, recomendamos a Railway ou Render (gratuitos para uso básico). Apenas integrações como WhatsApp ou email podem ter custos adicionais dependendo do volume.'
    },
    {
        question: 'Posso modificar as automações?',
        answer: 'Absolutamente! O workflow é seu. Você pode modificar, adaptar ao seu negócio, adicionar novos passos — sem restrições. O n8n é visual, então mesmo modificações são intuitivas.'
    },
    {
        question: 'Vocês fazem automações personalizadas?',
        answer: 'Sim! Se você precisa de algo específico para seu negócio, oferecemos serviço de automação sob medida. Entre em contato pelo email ou chat para um orçamento.'
    },
    {
        question: 'As automações funcionam com quais ferramentas?',
        answer: 'O n8n integra com mais de 400 aplicativos: Google Sheets, Gmail, Slack, WhatsApp, Telegram, Notion, Airtable, CRMs, APIs de pagamento, redes sociais e muito mais. Nossas automações usam as ferramentas mais populares, mas você pode adaptar para as suas.'
    }
];
