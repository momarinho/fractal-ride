import { NextRequest, NextResponse } from 'next/server';

// Esta é uma API básica de chatbot. 
// Para integrar com Claude/GPT via n8n, substitua a lógica abaixo
// por uma chamada ao seu webhook n8n.

const responses: { [key: string]: string } = {
    'default': 'Hmm, não tenho certeza se entendi. Você pode reformular a pergunta? Ou acesse nossa página de FAQ para mais informações.',
    'preço': 'Nossos preços variam de R$ 127 a R$ 197, dependendo da automação. Todos são pagamentos únicos, sem mensalidades!',
    'garantia': 'Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do valor.',
    'suporte': 'Você tem acesso ao suporte via Telegram por 30 dias após a compra. Email: suporte@automatize.com.br',
    'n8n': 'O n8n é uma plataforma de automação gratuita e open source. Nossas automações são workflows prontos para importar no n8n.',
    'instalar': 'É super simples! Você importa o arquivo JSON no n8n, configura suas credenciais seguindo o vídeo tutorial, e pronto!',
    'programar': 'Não precisa saber programar! O n8n é visual (arrasta e solta) e nossos tutoriais mostram cada passo.',
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

        // Para integrar com n8n/Claude, descomente abaixo:
        // const n8nResponse = await fetch('SEU_WEBHOOK_N8N', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ message, productContext: 'automações n8n' })
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
