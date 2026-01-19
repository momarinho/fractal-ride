```markdown
# 🎨 Fractal Ride - E-commerce Inteligente com Agentes DOE

Plataforma de vendas online de próxima geração construída com **agentes autônomos** seguindo a **metodologia DOE (Directive/Orchestration/Execution)**. Combina Next.js 15, TypeScript e sistema de agentes com Self-Annealing para otimização contínua de conversões e experiência do usuário.

> 🧬 **Diferencial**: Ao invés de automações estáticas (N8N), utiliza agentes inteligentes que seguem o framework **DOE** para executar tarefas complexas de forma estruturada e adaptativa.

## ⚠️ Avisos Importantes

### Status do Projeto
Este é um projeto de **portfólio/demonstração** que apresenta a **arquitetura planejada** para o sistema completo. 

**Implementação atual:**
- ✅ Frontend Next.js 15 com TypeScript
- ✅ Componentes UI (shadcn/ui)
- ✅ Script Self-Annealing para build automation
- ✅ Workflows N8N básicos (chatbot)
- ✅ Internacionalização (i18n)

**Arquitetura planejada** (será implementada na versão comercial):
- 🔄 Sistema completo de agentes DOE
- 🔄 Agentes de precificação dinâmica
- 🔄 Agentes de recomendação inteligente
- 🔄 Framework DOE completo (Directive/Orchestration/Execution)

### Dados Fictícios
Os dados de produtos, preços e informações de negócio nos workflows N8N são fictícios e servem apenas para ilustrar funcionalidades.

---

## 🔧 Metodologia de Desenvolvimento

Este projeto foi desenvolvido utilizando **AI-assisted coding** (vibe coding) com ferramentas como Cursor/Copilot. A arquitetura, decisões de design e lógica de negócio são autorais, enquanto a geração de código boilerplate e componentes UI foi acelerada por IA.

### O que isso significa:
- **Conceito e arquitetura**: 100% autoral
- **Design do DOE Framework**: Metodologia própria
- **Componentes UI**: Gerados com assistência de IA (shadcn/ui + prompts)
- **Código boilerplate**: Acelerado por ferramentas de IA

Esse approach é uma realidade moderna no desenvolvimento e demonstra habilidade em **prompt engineering** e **orquestração de ferramentas de IA** para produtividade.

---

## 🤖 Arquitetura de Agentes DOE (Planejada)

### O Framework DOE (Directive/Orchestration/Execution)

O **DOE Framework** é uma metodologia própria para construção de agentes autônomos baseada em três camadas:

1. **Directive (Diretiva)**: Define objetivos, contexto e restrições
2. **Orchestration (Orquestração)**: Planeja e coordena tarefas entre múltiplos agentes
3. **Execution (Execução)**: Implementa ações concretas e coleta resultados

Com **Self-Annealing**, o sistema aprende e ajusta suas estratégias ao longo do tempo baseado em resultados.

### Agentes Planejados

**1. Agente de Conversação (Chatbot)**
- **Directive**: Maximizar conversão através de interações naturais
- **Orchestration**: Coordena LLM, base de conhecimento e analytics
- **Execution**: Responde perguntas, sugere produtos, coleta feedback
- **Self-Annealing**: Ajusta tom e estratégia baseado em taxas de conversão

**2. Agente de Precificação Dinâmica**
- **Directive**: Otimizar receita mantendo competitividade
- **Orchestration**: Analisa concorrência, demanda, perfil do usuário
- **Execution**: Aplica ajustes de preço em tempo real
- **Self-Annealing**: Converge para estratégias de precificação ótimas

**3. Agente de Recomendação**
- **Directive**: Aumentar ticket médio via cross-sell relevante
- **Orchestration**: Combina histórico, similaridade de produtos, tendências
- **Execution**: Sugere produtos complementares no momento certo
- **Self-Annealing**: Aprende padrões de compra e refina recomendações

### Self-Annealing: Otimização Contínua

Inspirado no processo metalúrgico de recozimento, o **Self-Annealing** permite que agentes:
- Experimentem diferentes estratégias (exploração)
- Avaliem resultados de forma quantitativa
- Refinam comportamentos gradualmente
- Evitem mínimos locais (não ficam presos em soluções subótimas)

**Status atual**: Implementado como script de build automation (`scripts/self_anneal.py`). A versão completa para agentes será implementada na versão comercial.

---

## 🧪 Por Que Agentes DOE ao Invés de Automações Tradicionais?

| Automações (N8N) | Agentes DOE |
|------------------|-------------|
| Fluxos fixos e previsíveis | Comportamento adaptativo |
| Regras if/else manuais | Planejamento dinâmico (Orchestration) |
| Manutenção constante | Auto-otimização (Self-Annealing) |
| Mesma ação sempre | Execução baseada em contexto |
| Escalabilidade limitada | Coordenação multi-agente |

**Exemplo conceitual**: Uma automação N8N envia o mesmo email promocional para todos. O agente DOE (planejado):
- **Directive**: Maximizar taxa de abertura
- **Orchestration**: Analisa histórico, hora ideal, dispositivo preferido
- **Execution**: Envia email personalizado no momento ótimo
- **Self-Annealing**: Testa variações de assunto/conteúdo e converge para os melhores

---

## 🚀 Tecnologias

### Frontend
- **Next.js 15** (App Router)
- **TypeScript** (90.6% do código)
- **React 19**
- **TailwindCSS** + **shadcn/ui**
- **Framer Motion** (animações)
- **Lucide React** (ícones)

### Backend & Inteligência (Planejado)
- **DOE Framework** (Directive/Orchestration/Execution) com Self-Annealing
- **Agentes Autônomos** (Python + TypeScript)
- **LLM Integration** (DeepSeek/OpenAI para agentes conversacionais)

### Automação Atual
- **N8N** (workflows de chatbot)
- **Self-Annealing** (build automation script)

### Ferramentas de Desenvolvimento
- **AI-Assisted Coding** (Cursor/GitHub Copilot)
- **Prompt Engineering** para geração de componentes
- **Git** + **GitHub** para versionamento

### Internacionalização
- **next-intl** (suporte pt-BR/en-US)

---

## 📦 Estrutura do Projeto

```
fractal-ride/
├── src/
│   ├── app/              # App Router (Next.js 15)
│   ├── components/       # Componentes React reutilizáveis
│   ├── lib/              # Utilidades e configurações
│   └── i18n/             # Traduções (pt-BR, en-US)
├── scripts/              
│   └── self_anneal.py    # Script de build automation com Self-Annealing
├── n8n-workflows/        # Workflows de chatbot (N8N)
│   ├── chatbot-automatize.json
│   ├── chatbot-simple.json
│   └── README.md
└── public/               # Assets estáticos
```

**Nota**: A estrutura completa do DOE Framework (com agentes de precificação, recomendação, orchestrator, etc.) será implementada na versão comercial privada.

---

## 🛠️ Instalação

### Pré-requisitos
- Node.js 18+ e npm/pnpm
- N8N (opcional, para workflows de chatbot)

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/momarinho/fractal-ride.git
cd fractal-ride
```

2. **Instale as dependências**
```bash
npm install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Edite `.env.local` com suas credenciais:
```env
# Build Automation (Self-Annealing)
DEEPSEEK_API_KEY=sua-chave-aqui
OPENAI_API_KEY=sua-chave-fallback

# N8N (opcional)
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://sua-instancia-n8n.com/webhook/chatbot

# Configurações
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📝 Nota sobre N8N Workflows

A pasta `n8n-workflows/` contém workflows básicos de chatbot. Na versão de portfólio, demonstram integração com LLMs (DeepSeek). Na versão comercial, serão substituídos pelo sistema de agentes DOE.

Instruções de configuração: [`n8n-workflows/README.md`](./n8n-workflows/README.md)

---

## 🎨 Personalização

### Tema e Cores
Edite `src/app/globals.css` para alterar as variáveis CSS do tema:
```css
:root {
  --background: 0 0% 100%;
  --primary: 240 5.9% 10%;
  /* ... */
}
```

### Traduções
Adicione/edite idiomas em `src/i18n/locales/`:
- `pt-BR.json` (Português Brasil)
- `en-US.json` (English)

---

## 📸 Screenshots

_(Adicione screenshots do seu projeto aqui)_

---

## 🚢 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

Ou conecte o repositório diretamente na interface do Vercel.

### Outras Plataformas
Compatível com Netlify, Railway, AWS Amplify e qualquer host que suporte Next.js.

---

## 🧪 Scripts Disponíveis

```bash
# Frontend
npm run dev          # Desenvolvimento (localhost:3000)
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verifica código com ESLint

# Build Automation
python scripts/self_anneal.py              # Build com Self-Annealing
python scripts/self_anneal.py --dry-run    # Simular correções sem aplicar
```

---

## 🎨 Sobre o Design e Uso do Código

### Design Visual e Assets
- O design, layout e identidade visual são **proprietários** e servem para demonstração de habilidades
- **Não utilize** o design completo ou assets visuais em projetos comerciais sem permissão
- Capturas de tela e menções em portfólios são permitidas com crédito apropriado

### Código e Implementação Técnica
- O código-fonte (incluindo partes geradas por IA) está disponível para **estudo e referência**
- A **arquitetura DOE e lógica de negócio** são proprietárias
- Você pode usar trechos de código em seus projetos com atribuição
- **Nota**: Parte do código foi gerada com assistência de IA, o que é comum em desenvolvimento moderno

### Uso Permitido
✅ Estudar a arquitetura e conceitos do DOE Framework  
✅ Adaptar componentes específicos para seus projetos  
✅ Usar como referência de arquitetura Next.js  
✅ Fork para contribuições ao projeto original  

### Uso NÃO Permitido
❌ Revender o template/código como produto  
❌ Usar o design completo em projetos comerciais  
❌ Remover atribuições e reivindicar autoria  
❌ Clonar o framework DOE conceitual sem crédito apropriado

**Para uso comercial ou licenciamento**: Entre em contato via email ou LinkedIn.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estas etapas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Áreas para Contribuição
- Melhorias nos componentes UI
- Otimizações de performance
- Testes unitários
- Documentação adicional

---

## 📚 Sobre o DOE Framework

O **DOE (Directive/Orchestration/Execution) Framework** é uma metodologia própria para construção de sistemas inteligentes baseados em agentes. Foi desenvolvido para este projeto e será implementado completamente na versão comercial.

### Conceitos-Chave
- **Separação de responsabilidades**: Cada camada tem propósito específico
- **Self-Annealing**: Otimização contínua através de aprendizado
- **Coordenação multi-agente**: Agentes trabalham em conjunto
- **Adaptabilidade**: Sistema responde a mudanças em tempo real

---

## 📄 Licença

Este projeto é de código aberto para fins de portfólio. A implementação completa do DOE Framework permanecerá privada na versão comercial.

---

## 👤 Autor

**Mateus Marinho**
- LinkedIn: [linkedin.com/in/momarinho94](https://linkedin.com/in/momarinho94)
- GitHub: [@momarinho](https://github.com/momarinho)
- Email: mateusomarinho@gmail.com

---

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) - Componentes React
- [N8N](https://n8n.io/) - Plataforma de automação
- [Vercel](https://vercel.com/) - Hospedagem
```
