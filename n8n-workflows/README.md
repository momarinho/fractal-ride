# 🤖 Workflows n8n - Chatbot Automatize

Este diretório contém dois workflows n8n para o chatbot do marketplace:

## 📁 Arquivos

| Arquivo | Descrição | Requer IA? |
|---------|-----------|------------|
| `chatbot-automatize.json` | Chatbot completo com Claude AI | ✅ Sim (API Anthropic) |
| `chatbot-simple.json` | Chatbot baseado em regras simples | ❌ Não |

---

## 🚀 Instalação Rápida

### 1. Importe o workflow no n8n

1. Acesse seu n8n (n8n.cloud ou self-hosted)
2. Vá em **Workflows** → **Import from File**
3. Selecione o arquivo JSON desejado
4. Clique em **Import**

### 2. Configure as credenciais

#### Para o `chatbot-automatize.json` (com Claude):
- **Anthropic API**: Crie uma conta em [console.anthropic.com](https://console.anthropic.com) e gere uma API key
- No n8n, vá em **Credentials** → **Add Credential** → **Anthropic API**
- Cole sua API key

#### Para o `chatbot-simple.json`:
- Não precisa de credenciais! É 100% baseado em regras.

### 3. Ative o webhook

1. Clique no nó **"Webhook - Recebe Mensagem"**
2. Copie a URL do webhook (algo como `https://seu-n8n.app.n8n.cloud/webhook/chatbot-automatize`)
3. Use essa URL no site

### 4. Configure o site para usar o webhook

Edite o arquivo `/src/app/api/chat/route.ts` no projeto Next.js:

```typescript
import { NextRequest, NextResponse } from 'next/server';

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

    // Chama o webhook n8n
    const n8nResponse = await fetch('SUA_URL_WEBHOOK_N8N', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        message,
        sessionId: crypto.randomUUID() // ou pegue de cookies
      })
    });

    const data = await n8nResponse.json();
    
    return NextResponse.json({ 
      answer: data.answer,
      options: data.options || [],
      suggestedProduct: data.suggestedProduct || null
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { answer: 'Ops, erro. Tenta de novo ou fala com suporte@automatize.com.br' },
      { status: 500 }
    );
  }
}
```

---

## 📊 Estrutura dos Workflows

### chatbot-automatize.json (Claude AI)

```
[Webhook] → [Prepara Contexto] → [Claude AI] → [Formata Resposta] → [Responde]
                                                        ↓
                                              [Airtable] (opcional)
                                              [Telegram] (opcional)
```

**Nós:**
1. **Webhook - Recebe Mensagem**: Endpoint POST que recebe `{ message, sessionId }`
2. **Prepara Contexto**: Monta o prompt com informações dos produtos
3. **Claude AI - Resposta**: Gera resposta usando Claude Sonnet
4. **Formata Resposta**: Extrai texto e detecta produtos sugeridos
5. **Responde ao Site**: Retorna JSON com `{ answer, suggestedProducts }`
6. **Salva no Airtable** (desativado): Loga conversas (ative se quiser)
7. **Notifica Telegram** (desativado): Envia notificação de novas perguntas

### chatbot-simple.json (Regras)

```
[Webhook] → [Processa Mensagem] → [Responde]
```

**Nós:**
1. **Webhook - Recebe Mensagem**: Endpoint POST
2. **Processa Mensagem (Regras)**: Detecta intenção e retorna resposta pré-definida
3. **Responde ao Site**: Retorna JSON

---

## 💬 Request/Response

### Request (POST)
```json
{
  "message": "Quanto custa o Point Control?",
  "sessionId": "abc123"
}
```

### Response
```json
{
  "answer": "O Point Control custa R$ 147 (pagamento único)...",
  "options": ["Quero comprar", "Ver outros produtos"],
  "suggestedProduct": "point-control",
  "sessionId": "abc123",
  "timestamp": "2025-01-11T18:00:00.000Z"
}
```

---

## 🔧 Personalizações

### Adicionar novo produto

No workflow Claude, edite o nó **"Prepara Contexto"** e adicione o produto ao `productsCatalog`.

No workflow simples, edite o nó **"Processa Mensagem"** e adicione:
1. O produto no objeto `products`
2. Uma nova condição em `detectIntent()`
3. Uma nova resposta em `responses`

### Mudar personalidade do bot

No workflow Claude, edite a variável `systemPrompt` no nó **"Prepara Contexto"**.

### Ativar logs no Airtable

1. Crie uma base no Airtable com as colunas: `Message`, `Response`, `Session ID`, `Timestamp`
2. Adicione sua credencial Airtable no n8n
3. No nó **"Salva no Airtable"**, configure o ID da base e tabela
4. Ative o nó (clique e desmarque "Disabled")

### Ativar notificações no Telegram

1. Crie um bot no Telegram via [@BotFather](https://t.me/botfather)
2. Pegue o token e seu Chat ID
3. Adicione a credencial Telegram no n8n
4. Configure o nó **"Notifica Telegram"** com seu Chat ID
5. Ative o nó

---

## 💰 Custos

| Workflow | Custo |
|----------|-------|
| `chatbot-simple.json` | **Grátis** |
| `chatbot-automatize.json` | ~$0.003 por mensagem (Claude Sonnet) |

Para um site com 1000 mensagens/mês, o custo com Claude seria aproximadamente $3/mês.

---

## 🐛 Troubleshooting

### Webhook não responde
- Verifique se o workflow está **ativo** (toggle no canto superior direito)
- Confirme que a URL está correta (copie direto do nó Webhook)
- Teste no Thunder Client ou Postman antes de integrar

### Resposta demora muito
- O Claude pode levar 2-5 segundos para responder
- Se usar o Simple, a resposta é instantânea (<100ms)

### Erro de credencial
- Verifique se a API key do Anthropic está correta
- Confirme que tem créditos na conta Anthropic

---

## 📞 Suporte

Dúvidas? Entre em contato:
- Email: suporte@automatize.com.br
- Telegram: @automatize
