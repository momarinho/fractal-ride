import { NextRequest, NextResponse } from 'next/server';

// Product context for the LLM
const SYSTEM_PROMPT = `You are DOE Agent, a helpful AI assistant for the DOE Framework website.

## About DOE Framework
DOE (Directive, Orchestration, Execution) is a framework for building reliable AI agents using Python. It features Self-Annealing - agents that detect errors and fix themselves automatically.

## Products We Sell (ready-to-use systems):

1. **SEO Calculator** ($39-$99)
   - Category: Neural / Vibe Coding
   - Complexity: Low
   - Features: ROI Projector, Traffic Estimator, Keyword Gap Analysis, PDF Report Generator
   - For: SEO Agencies, Freelancers, Sales Teams

2. **Lead Scraper** ($300-$800)
   - Category: Sync / Self-Annealing
   - Complexity: Medium
   - Features: Multi-source Scraping, Email Enrichment, LinkedIn Validation, CRM Sync, Anti-detect Browsing
   - Differentiator: Uses Self-Annealing to auto-fix broken selectors
   - For: Growth Hackers, SDR Teams, B2B Operations

3. **Proposal Engine** ($500-$1,500)
   - Category: Kinetic / MCP
   - Features: Meeting Transcription, Context Extraction, Dynamic Pricing, Legal Copilot, CRM Integration
   - Uses MCP (Model Context Protocol) to understand client needs from transcripts
   - For: Consultants, Agencies, Enterprise Sales

4. **Research Dossier** ($2,000-$5,000)
   - Category: Void / Parallel Sub-agents
   - Complexity: High
   - Features: Recursive Search, Fact Checking, Source Citation, Multi-language, Executive Summary
   - Uses parallel sub-agents for comprehensive research
   - For: Investment Firms, R&D Departments, Strategists

## Key Differentiators
- NOT n8n or visual workflow tools
- Python-based for complex state management
- Self-Annealing: agents fix themselves when errors occur
- Production-ready, not just demos

## Response Guidelines
- Be helpful, concise, and professional
- Speak in the user's language (detect PT-BR or English)
- Guide users towards products that match their needs
- Emphasize Self-Annealing as our key differentiator
- For pricing questions, give the price ranges
- For technical questions, explain at appropriate level
- Maximum 3-4 sentences per response`;

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

async function callDeepSeek(messages: Message[]): Promise<string> {
    const apiKey = process.env.DEEPSEEK_API_KEY;

    if (!apiKey) {
        // Fallback to simple responses if no API key
        return getFallbackResponse(messages[messages.length - 1].content);
    }

    try {
        const response = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...messages
                ],
                max_tokens: 300,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            console.error('DeepSeek API error:', response.status);
            return getFallbackResponse(messages[messages.length - 1].content);
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || getFallbackResponse(messages[messages.length - 1].content);
    } catch (error) {
        console.error('DeepSeek call failed:', error);
        return getFallbackResponse(messages[messages.length - 1].content);
    }
}

function getFallbackResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    const responses: { [key: string]: string } = {
        'preço': 'Nossos sistemas variam de $39 (SEO Calculator) até $5,000 (Research Dossier). Qual tipo de automação você precisa?',
        'price': 'Our systems range from $39 (SEO Calculator) to $5,000 (Research Dossier). What kind of automation do you need?',
        'self-annealing': 'Self-Annealing é nossa tecnologia onde agentes detectam erros e se auto-corrigem. Por exemplo, se um seletor quebra, o agente analisa o novo DOM e corrige o código sozinho.',
        'doe': 'DOE (Directive, Orchestration, Execution) é nosso framework para agentes de IA confiáveis. Diferente de n8n, usamos Python para lógica complexa e Self-Annealing para auto-correção.',
        'lead': 'O Lead Scraper ($300-$800) usa Self-Annealing para scraping autônomo. Ele se adapta automaticamente quando layouts de sites mudam.',
        'seo': 'O SEO Calculator ($39-$99) gera relatórios de ROI e projeções de tráfego. Perfeito para agências e freelancers fecharem contratos.',
        'proposal': 'O Proposal Engine ($500-$1,500) transforma reuniões em propostas comerciais. Usa MCP para extrair contexto de transcrições.',
        'research': 'O Research Dossier ($2,000-$5,000) é nosso produto enterprise. Múltiplos sub-agentes trabalham em paralelo para pesquisa profunda.',
        'hello': 'Hello! I\'m DOE Agent. I can help you learn about our Self-Annealing AI automation systems. What are you looking for?',
        'olá': 'Olá! Sou o DOE Agent. Posso ajudar você a conhecer nossos sistemas de automação com Self-Annealing. O que você procura?',
        'oi': 'Oi! Sou o DOE Agent. Posso ajudar você a encontrar o sistema de automação ideal. O que você precisa automatizar?',
    };

    for (const [keyword, response] of Object.entries(responses)) {
        if (lowerMessage.includes(keyword)) {
            return response;
        }
    }

    // Detect language for default response
    const isPtBr = /[ãáàâéêíóôõúç]/i.test(message) ||
        ['como', 'qual', 'quero', 'preciso', 'pode'].some(w => lowerMessage.includes(w));

    return isPtBr
        ? 'Posso ajudar com informações sobre nossos sistemas de automação: SEO Calculator, Lead Scraper, Proposal Engine ou Research Dossier. Qual te interessa?'
        : 'I can help you with our automation systems: SEO Calculator, Lead Scraper, Proposal Engine, or Research Dossier. Which interests you?';
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { message, history = [] } = body;

        if (!message) {
            return NextResponse.json(
                { error: 'Message not provided' },
                { status: 400 }
            );
        }

        // Build conversation history
        const messages: Message[] = [
            ...history.slice(-6).map((m: { role: string; text: string }) => ({
                role: m.role === 'user' ? 'user' : 'assistant',
                content: m.text
            })),
            { role: 'user' as const, content: message }
        ];

        const answer = await callDeepSeek(messages);

        return NextResponse.json({ answer });
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
