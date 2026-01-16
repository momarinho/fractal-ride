import { NextRequest, NextResponse } from 'next/server';

// Esta é uma API básica de chatbot.
// Para integrar com um agente DOE/LLM, substitua a lógica abaixo
// por uma chamada ao seu webhook.

const responses: { [key: string]: string } = {
    'default': 'Hmm, não tenho certeza se entendi. Você pode reformular a pergunta? Ou acesse nossa página de FAQ para mais informações.',
    'preço': 'Nossos preços variam de R$ 127 a R$ 197, dependendo da automação. Todos são pagamentos únicos, sem mensalidades!',
    'garantia': 'Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do valor.',
    'suporte': 'Você tem acesso ao suporte via Telegram por 30 dias após a compra. Email: suporte@automatize.com.br',
    'doe': 'DOE (Directive, Orchestration, Execution) é uma arquitetura para transformar IA em automações confiáveis com SOPs, roteamento e scripts determinísticos.',
    'instalar': 'É super simples! Você alinha a diretiva, conecta credenciais, roda os scripts de execução e ativa o monitoramento seguindo os tutoriais.',
    'programar': 'Não precisa saber programar! Os protocolos DOE já vêm prontos, com guias mostrando cada etapa.',
};

function findResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    for (const [keyword, response] of Object.entries(responses)) {
        if (lowerMessage.includes(keyword)) {
            return response;
        }
    }

    return responses['default'];
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { message } = body;

        if (!message) {
            return NextResponse.json(
                { error: 'Mensagem não fornecida' },
                { status: 400 }
            );
        }

        // Simula um pequeno delay para parecer mais natural
        await new Promise(resolve => setTimeout(resolve, 500));

        // Encontra a resposta baseada em palavras-chave
        const answer = findResponse(message);

        // Para integrar com um agente DOE/LLM, descomente abaixo:
        // const n8nResponse = await fetch('SEU_WEBHOOK', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ message, productContext: 'protocolos DOE' })
        // });
        // const data = await n8nResponse.json();
        // return NextResponse.json({ answer: data.response });

        return NextResponse.json({ answer });
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}
