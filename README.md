https://fractal-ride-three.vercel.app/

# Fractal Ride

E-commerce inteligente construído com **Next.js 15**, **TypeScript** e arquitetura de **agentes autônomos DOE** (Directive/Orchestration/Execution).

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-90%25-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Portfolio-green)](#licenca)

## Visao Geral

Plataforma de vendas online que utiliza agentes inteligentes para otimizacao continua de conversoes. Ao inves de automacoes estaticas, o sistema emprega o **DOE Framework** - metodologia propria para construcao de agentes adaptativos com Self-Annealing.

### Status do Projeto

| Componente | Status |
|------------|--------|
| Frontend Next.js 15 | Implementado |
| UI Components (shadcn/ui) | Implementado |
| Chatbot com LLM | Implementado |
| Internacionalizacao (pt-BR/en-US) | Implementado |
| Self-Annealing (build automation) | Implementado |
| Agentes DOE completos | Planejado |

## Stack Tecnologica

**Frontend**
- Next.js 15 (App Router)
- React 19
- TypeScript
- TailwindCSS + shadcn/ui
- Framer Motion
- next-intl (i18n)

**Backend & IA**
- DeepSeek API (chatbot)
- N8N (workflows)
- Python (Self-Annealing script)

## Arquitetura DOE

O **DOE Framework** organiza agentes em tres camadas:

```
Directive      ->  Define objetivos e restricoes
Orchestration  ->  Planeja e coordena tarefas
Execution      ->  Implementa acoes concretas
```

**Self-Annealing**: Inspirado no recozimento metalurgico, permite que agentes experimentem estrategias, avaliem resultados e refinem comportamentos gradualmente.

### Agentes Planejados

- **Conversacao**: Maximiza conversao via interacoes naturais
- **Precificacao**: Otimiza receita em tempo real
- **Recomendacao**: Aumenta ticket medio com cross-sell relevante

## Instalacao

### Pre-requisitos
- Node.js 18+
- npm ou pnpm

### Setup

```bash
# Clone o repositorio
git clone https://github.com/momarinho/fractal-ride.git
cd fractal-ride

# Instale dependencias
npm install

# Configure variaveis de ambiente
cp .env.example .env.local
```

Edite `.env.local`:
```env
DEEPSEEK_API_KEY=sua-chave-aqui
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

```bash
# Execute em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

```
fractal-ride/
├── src/
│   ├── app/           # App Router (paginas e API routes)
│   ├── components/    # Componentes React
│   ├── lib/           # Utilidades
│   └── i18n/          # Traducoes (pt-BR, en-US)
├── scripts/
│   └── self_anneal.py # Build automation com Self-Annealing
├── n8n-workflows/     # Workflows de chatbot
└── public/            # Assets estaticos
```

## Scripts

```bash
npm run dev       # Desenvolvimento
npm run build     # Build de producao
npm run start     # Servidor de producao
npm run lint      # Verificacao ESLint

# Self-Annealing
python scripts/self_anneal.py            # Build com otimizacao
python scripts/self_anneal.py --dry-run  # Simular sem aplicar
```

## Deploy

### Vercel (Recomendado)

```bash
npm run build
vercel --prod
```

Ou conecte o repositorio diretamente no dashboard Vercel.

Compativel tambem com Netlify, Railway e AWS Amplify.

## Metodologia de Desenvolvimento

Projeto desenvolvido com **AI-assisted coding** (Cursor/Copilot):

- **Arquitetura e conceitos**: 100% autoral
- **DOE Framework**: Metodologia propria
- **Componentes UI**: Gerados com assistencia de IA
- **Codigo boilerplate**: Acelerado por ferramentas de IA

## Uso do Codigo

**Permitido**
- Estudar arquitetura e conceitos
- Adaptar componentes para seus projetos
- Usar como referencia Next.js
- Fork para contribuicoes

**Nao Permitido**
- Revender como produto
- Usar design completo comercialmente
- Remover atribuicoes
- Clonar DOE Framework sem credito

## Contribuindo

1. Fork o projeto
2. Crie branch (`git checkout -b feature/MinhaFeature`)
3. Commit (`git commit -m 'Adiciona MinhaFeature'`)
4. Push (`git push origin feature/MinhaFeature`)
5. Abra Pull Request

## Autor

**Mateus Marinho**

- [LinkedIn](https://linkedin.com/in/momarinho94)
- [GitHub](https://github.com/momarinho)
- mateusomarinho@gmail.com

## Licenca

Codigo aberto para fins de portfolio. Implementacao completa do DOE Framework permanecera privada na versao comercial.

---

Construido com Next.js, TypeScript e agentes inteligentes.
