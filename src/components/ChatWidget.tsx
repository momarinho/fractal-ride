'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageCircle,
    X,
    Send,
    Bot,
    User,
    Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
    role: 'user' | 'bot';
    text: string;
    options?: string[];
}

const initialMessages: Message[] = [
    {
        role: 'bot',
        text: '👋 Oi! Sou o assistente do Automatize. Como posso ajudar você hoje?',
        options: [
            'Tenho dúvida sobre uma automação',
            'Como funciona a entrega?',
            'Preciso de suporte técnico',
            'Quero falar com humano'
        ]
    }
];

// Respostas automáticas baseadas em palavras-chave
const responses: { [key: string]: Message } = {
    'dúvida sobre uma automação': {
        role: 'bot',
        text: 'Qual automação te interessa? Posso te dar detalhes sobre qualquer uma delas! 🚀',
        options: ['Point Control (RH)', 'LinkedIn Pro (Vendas)', 'Auto Post Social (Marketing)', 'Ver todas automações']
    },
    'como funciona a entrega': {
        role: 'bot',
        text: `A entrega é 100% automática! ⚡

1️⃣ Compra aprovada (PIX em segundos, cartão na hora)
2️⃣ Email com acesso em até 2 minutos
3️⃣ Área de membros com todos os arquivos

📦 Você recebe:
• Workflow n8n (JSON)
• Guia PDF completo
• Vídeos tutoriais
• Templates prontos

Tem garantia de 7 dias! Alguma outra dúvida?`,
        options: ['Como instalar o workflow?', 'Preciso saber programar?', 'Ver automações']
    },
    'suporte técnico': {
        role: 'bot',
        text: `Para suporte técnico, você tem várias opções:

📚 Base de conhecimento: Acesse nossos guias
💬 Grupo Telegram: Comunidade ativa (link no email de compra)
📧 Email: suporte@automatize.com.br

🕐 Tempo de resposta: até 24h

Primeira compra? Recomendo ver o FAQ primeiro! Posso ajudar em mais algo?`,
        options: ['Ver FAQ', 'Voltar ao início']
    },
    'falar com humano': {
        role: 'bot',
        text: `Claro! 🙋‍♂️ 

Para falar com nossa equipe:
📧 Email: contato@automatize.com.br
💬 Telegram: @automatize

Respondemos em até 24h (normalmente muito antes!).

Enquanto isso, posso te ajudar com alguma informação?`,
        options: ['Ver automações', 'Ver FAQ', 'Voltar ao início']
    },
    'point control': {
        role: 'bot',
        text: `**Point Control** - Controle de Ponto Automatizado 🕐

📦 O que você recebe:
• Workflow n8n completo
• Guia PDF 30 páginas
• 5 vídeos tutoriais
• Dashboard pronto

💰 Investimento: R$ 147 (pagamento único)
🏆 Ideal para: Empresas com 5-50 funcionários

É nosso produto mais vendido! Quer saber mais?`,
        options: ['Quero comprar', 'Como instalar?', 'Ver outros produtos']
    },
    'linkedin pro': {
        role: 'bot',
        text: `**LinkedIn Pro** - Prospecção Automatizada 🔗

📦 O que você recebe:
• Workflow n8n completo  
• 8 templates de mensagens
• 50 ganchos de abertura testados
• Planilha de tracking

💰 Investimento: R$ 197 (pagamento único)
📈 Resultado: Média de 50 leads/semana

Perfeito para vendedores B2B! Alguma dúvida?`,
        options: ['Quero comprar', 'É seguro usar?', 'Ver outros produtos']
    },
    'auto post': {
        role: 'bot',
        text: `**Auto Post Social** - Gestão de Redes Sociais 📱

📦 O que você recebe:
• Workflow n8n completo
• 100 templates de posts
• Calendário de conteúdo
• Guia de estratégia

💰 Investimento: R$ 127 (pagamento único)
🎯 Publica em: Instagram, Facebook, Twitter, LinkedIn, TikTok

Economia de 10h+ por semana! Interesse?`,
        options: ['Quero comprar', 'Funciona com todas as redes?', 'Ver outros produtos']
    },
    'instalar': {
        role: 'bot',
        text: `Instalar é super simples! 5 passos:

1️⃣ Crie conta gratuita no n8n.cloud
2️⃣ Importe o arquivo JSON (1 clique)
3️⃣ Configure suas credenciais (seguindo o vídeo)
4️⃣ Ative o workflow
5️⃣ Pronto! 🎉

Tempo médio: 15-30 minutos
Não precisa saber programar!

Os vídeos mostram cada clique. Mais alguma dúvida?`,
        options: ['O que é n8n?', 'Ver automações', 'Voltar ao início']
    },
    'programar': {
        role: 'bot',
        text: `**Não precisa saber programar!** 🙌

O n8n é 100% visual (arrasta e solta). 

Nossas automações já vêm prontas — você só:
✅ Importa o arquivo
✅ Configura suas credenciais (API keys, etc)
✅ Ativa

Os vídeos mostram cada passo. Se travar, o suporte ajuda!`,
        options: ['O que é n8n?', 'Como funciona a entrega?', 'Ver automações']
    },
    'n8n': {
        role: 'bot',
        text: `**n8n** é uma plataforma de automação (como Zapier ou Make), mas:

🆓 Versão gratuita muito generosa
💪 Muito mais poderosa
🔓 Open source

Você pode usar:
• n8n.cloud (mais fácil, tem plano grátis)
• Self-hosted (instala no seu servidor)

Nossas automações funcionam em ambos!`,
        options: ['Ver automações', 'Como instalar?', 'Voltar ao início']
    },
    'default': {
        role: 'bot',
        text: `Hmm, não tenho certeza se entendi. 🤔

Posso te ajudar com:
• Informações sobre automações
• Como funciona a entrega
• Suporte técnico
• Falar com nossa equipe

O que prefere?`,
        options: ['Ver automações', 'Como funciona?', 'Suporte', 'Falar com humano']
    }
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const findResponse = (text: string): Message => {
        const lowerText = text.toLowerCase();

        for (const [key, response] of Object.entries(responses)) {
            if (lowerText.includes(key)) {
                return response;
            }
        }

        // Palavras-chave específicas
        if (lowerText.includes('comprar') || lowerText.includes('preço') || lowerText.includes('valor')) {
            return {
                role: 'bot',
                text: 'Para comprar, é só acessar a página do produto e clicar em "Comprar Agora". O pagamento é processado pela Kiwify (PIX, cartão ou boleto) e a entrega é imediata! 🛒',
                options: ['Ver automações', 'Como funciona a entrega?']
            };
        }

        if (lowerText.includes('garantia')) {
            return {
                role: 'bot',
                text: '🛡️ Oferecemos **7 dias de garantia incondicional**!\n\nSe por qualquer motivo você não ficar satisfeito, basta enviar um email e devolvemos 100% do valor. Sem perguntas, sem burocracia.',
                options: ['Ver automações', 'Voltar ao início']
            };
        }

        return responses['default'];
    };

    const handleSend = async (text?: string) => {
        const messageText = text || input;
        if (!messageText.trim()) return;

        // Add user message
        const userMessage: Message = { role: 'user', text: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate typing delay
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));

        // Find and add bot response
        const botResponse = findResponse(messageText);
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
    };

    const handleOptionClick = (option: string) => {
        handleSend(option);
    };

    return (
        <>
            {/* Chat Bubble */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-cta rounded-full shadow-lg hover:shadow-glow flex items-center justify-center group"
                    >
                        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        {/* Pulse animation */}
                        <span className="absolute inset-0 rounded-full bg-[#f97316] animate-ping opacity-25" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-100px)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-brand p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Assistente</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                                        <span className="text-xs text-white/80">Online agora</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex items-start gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                        {/* Avatar */}
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user'
                                                ? 'bg-[#f97316]'
                                                : 'bg-gradient-brand'
                                            }`}>
                                            {msg.role === 'user'
                                                ? <User className="w-4 h-4 text-white" />
                                                : <Sparkles className="w-4 h-4 text-white" />
                                            }
                                        </div>

                                        {/* Message Bubble */}
                                        <div className="space-y-2">
                                            <div className={`rounded-2xl px-4 py-3 ${msg.role === 'user'
                                                    ? 'bg-[#f97316] text-white rounded-br-md'
                                                    : 'bg-muted text-foreground rounded-bl-md'
                                                }`}>
                                                <div className="text-sm whitespace-pre-line">{msg.text}</div>
                                            </div>

                                            {/* Options */}
                                            {msg.role === 'bot' && msg.options && (
                                                <div className="flex flex-wrap gap-2">
                                                    {msg.options.map((option, j) => (
                                                        <button
                                                            key={j}
                                                            onClick={() => handleOptionClick(option)}
                                                            className="text-xs bg-background border border-border hover:border-[#f97316] hover:text-[#f97316] rounded-full px-3 py-1.5 transition-colors"
                                                        >
                                                            {option}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-border">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex gap-2"
                            >
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Digite sua mensagem..."
                                    className="flex-1 bg-muted border-border focus:border-[#f97316]"
                                    disabled={isTyping}
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="bg-gradient-cta hover:opacity-90 text-white"
                                    disabled={isTyping || !input.trim()}
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
