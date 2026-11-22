Atue como um Arquiteto de Software Front-End e Senior UI/UX Designer especialista em **Next.js (App Router), TypeScript, Tailwind CSS e Framer Motion**. Crie a estrutura completa e o código de um site institucional moderno, de alta performance e visual sofisticado para a **Vértice Tech** (empresa de desenvolvimento de sistemas, web design, infraestrutura cloud e inteligência artificial).

### 1. Stack & Arquitetura do Projeto (Next.js App Router)
Utilize **Next.js 15+ (App Router)** com **TypeScript**, **Tailwind CSS** e **Lucide React**. Organize o projeto seguindo boas práticas de componentização e separação de responsabilidades:

```text
src/
├── app/
│   ├── layout.tsx          # Fontes (Plus Jakarta Sans & Inter), Metadata SEO, Navbar e Footer globais
│   ├── page.tsx            # Home Page completa (Hero, Bento Grid, Soluções, Metodologia, Sócios, CTA)
│   ├── globals.css         # Variáveis CSS, utilitários de glow radial, grid de fundo e scrollbar customizada
│   ├── solucoes/
│   │   └── page.tsx        # Página detalhada dos 4 pilares de serviço com abas interativas e casos de uso
│   ├── sobre/
│   │   └── page.tsx        # História da Vértice Tech, pilares de engenharia e perfil dos 3 fundadores
│   └── contato/
│       └── page.tsx        # Página dedicada de diagnóstico técnico com formulário validado
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Header fixo com backdrop-blur, menu mobile responsivo e botão CTA
│   │   └── Footer.tsx      # Rodapé estruturado em 4 colunas com links rápidos e status de sistema
│   ├── home/
│   │   ├── HeroSection.tsx # Hero com arco de luz neon e dashboard interativo simulado
│   │   ├── BentoFeatures.tsx # Seção Bento Grid moderna mostrando arquitetura, IA e performance
│   │   ├── SolutionsGrid.tsx # Grid dos 4 serviços com card principal em destaque (#B8F22D)
│   │   ├── MethodologyList.tsx # Lista interativa numerada (01 a 05) com expansão de detalhes ao clicar/passar o mouse
│   │   └── FoundersAuthority.tsx # Bloco destacando a união de Gestão + Rigor Acadêmico + Execução Full-Stack
│   └── ui/
│       ├── Button.tsx      # Componente de botão reutilizável (variantes: primary-lime, outline, ghost)
│       ├── LeadModal.tsx   # Modal interativo de "Agendar Diagnóstico" acessível de qualquer botão CTA
│       └── MotionWrapper.tsx # Wrapper de animações suaves com Framer Motion (fade-up on scroll)
└── data/
    └── content.ts          # Arquivo centralizado com todos os textos, serviços, etapas e dados em PT-BR
