export interface Solution {
  id: string;
  number: string;
  tag: string;
  title: string;
  shortDesc: string;
  description: string;
  badge?: string;
  isFeatured?: boolean;
  icon: string;
  tags: string[];
  features: string[];
  useCases: {
    title: string;
    description: string;
    metric: string;
  }[];
}

export interface Step {
  step: string;
  title: string;
  period: string;
  description: string;
  deliverables: string[];
}

export interface Founder {
  name: string;
  role: string;
  academicBackground: string;
  marketExperience: string;
  focus: string;
}

export interface Difference {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
}

export const siteContent = {
  brand: {
    name: 'Danter',
    shortName: 'Danter',
    tagline: 'Sistemas Inteligentes, Infraestrutura Sólida, Resultados Reais.',
    subtitle:
      'Transformamos desafios operacionais em software sob medida, automações com Inteligência Artificial e arquitetura em nuvem de alta disponibilidade para empresas em fase de expansão.',
    email: 'contato@danter.tech',
    phone: '+55 (11) 98765-4321',
    address: 'São Paulo - SP, Brasil',
    sla: '99.98%',
    dailyRequests: '+120k',
    latency: '14ms',
    aiExecutions: '9.840',
    efficiencyGain: '+48.6%',
    yearsGuarantee: 'Garantia Contratual & NDA',
  },

  navigation: [
    { label: 'Início', href: '/' },
    { label: 'Soluções', href: '/solucoes' },
    { label: 'Calculadora ROI', href: '/#simulador-roi' },
    { label: 'Metodologia', href: '/#metodologia' },
    { label: 'Sobre Nós', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],

  solutions: [
    {
      id: 'ia-automacao',
      number: '01',
      tag: 'Alta Demanda',
      badge: '✦ Core Competence',
      isFeatured: true,
      title: 'Inteligência Artificial & Automação',
      shortDesc:
        'Agentes inteligentes integrados ao WhatsApp, automação de fluxos repetitivos, RAG corporativo sobre documentos e modelos preditivos sob medida.',
      description:
        'Criamos ecossistemas autônomos que combinam modelos de linguagem de ponta (LLMs locais e em nuvem), bancos de dados vetoriais e integrações determinísticas. Seus times eliminam tarefas manuais enquanto a IA opera 24/7 com precisão milimétrica.',
      icon: 'Brain',
      tags: ['LLMs Privadas', 'RAG Corporativo', 'Agentes WhatsApp', 'LangChain', 'Python'],
      features: [
        'Agentes Autônomos de Atendimento e Triagem Comercial',
        'RAG (Retrieval-Augmented Generation) sobre bases de conhecimento internas',
        'OCR inteligente e extração determinística de documentos fiscais/contratos',
        'Integrações seguras com ERPs (Totvs, SAP, Salesforce, Postgres)',
        'Modelos de Machine Learning customizados para previsão de churn e demanda',
      ],
      useCases: [
        {
          title: 'Triagem e Qualificação Comercial 24/7',
          description: 'Agente integrado ao WhatsApp e CRM atendendo 100% dos leads em menos de 10 segundos.',
          metric: '3.8x mais conversão',
        },
        {
          title: 'Auditoria e Parsing de Contratos',
          description: 'Leitura de 500+ páginas de contratos em minutos com validação de cláusulas críticas de risco.',
          metric: '-85% tempo operacional',
        },
      ],
    },
    {
      id: 'sistemas-web',
      number: '02',
      tag: 'Core Engineering',
      badge: 'Alta Performance',
      isFeatured: false,
      title: 'Sistemas Sob Medida & Web Apps',
      shortDesc:
        'Desenvolvimento full-stack de ERPs setoriais, plataformas corporativas complexas, portais seguros e modernização completa de arquiteturas legadas.',
      description:
        'Construímos software do zero ou modernizamos seus legados aplicando Clean Architecture, Domain-Driven Design (DDD) e testes automatizados. Entregamos aplicações ultra-rápidas, modulares e preparadas para escalar.',
      icon: 'Code2',
      tags: ['React / Next.js', 'Node.js / Python', 'PostgreSQL', 'TypeScript', 'Clean Arch'],
      features: [
        'Sistemas ERP e CRM sob medida para nichos específicos',
        'Portais do Cliente e Dashboards Executivos de BI',
        'Refatoração e migração segura de código legado sem parada do negócio',
        'APIs RESTful e GraphQL de altíssimo throughput',
        'Bancos de dados relacionais e vetoriais otimizados',
      ],
      useCases: [
        {
          title: 'ERP Setorial de Logística e Faturamento',
          description: 'Unificação de 4 ferramentas desarticuladas em uma plataforma proprietária em tempo real.',
          metric: 'Zero retrabalho manual',
        },
        {
          title: 'Portal B2B Financeiro de Alto Volume',
          description: 'Processamento de conciliação bancária em escala sem travar interfaces de usuários.',
          metric: 'Sub-second queries',
        },
      ],
    },
    {
      id: 'web-design',
      number: '03',
      tag: 'Conversão & UX',
      badge: 'Visual Sofisticado',
      isFeatured: false,
      title: 'Web Design & Alta Conversão',
      shortDesc:
        'Sites institucionais ultrarrápidos, landing pages com foco obsessivo em taxas de conversão de leads e interfaces intuitivas que encantam e retêm clientes.',
      description:
        'Design não é apenas estética: é engenharia de percepção e conversão. Projetamos interfaces intuitivas no Figma e as transformamos em código Next.js com pontuação máxima no Google PageSpeed (95+).',
      icon: 'Sparkles',
      tags: ['UI/UX Design', 'Framer Motion', 'SEO Técnico', 'Tailwind CSS', 'Figma'],
      features: [
        'Design Systems customizados e componentizados',
        'Landing Pages otimizadas para campanhas de tráfego pago',
        'Animações sutis e interativas com Framer Motion',
        'SEO Técnico estruturado para rankeamento orgânico no Google',
        'Acessibilidade e responsividade absoluta (Mobile-First)',
      ],
      useCases: [
        {
          title: 'Redesign Institucional com Foco em M&A',
          description: 'Apresentação corporativa de alto impacto posicionando a marca como líder tecnológica.',
          metric: '+140% geração de leads',
        },
        {
          title: 'Landing Pages de Produto com 98 no PageSpeed',
          description: 'Carregamento instantâneo reduzindo bounce rate e custo por aquisição no Google Ads.',
          metric: '98/100 Core Web Vitals',
        },
      ],
    },
    {
      id: 'cloud-devops',
      number: '04',
      tag: 'Nuvem & DevOps',
      badge: '99.98% SLA',
      isFeatured: false,
      title: 'Cloud, DevOps & Sustentação',
      shortDesc:
        'Arquitetura Kubernetes e Docker, pipelines CI/CD automatizadas, observabilidade de logs 24/7 e planos de evolução técnica contínua sem sustos.',
      description:
        'Estruturamos ambientes de nuvem resilientes na AWS e GCP com Infrastructure as Code (IaC). Garantimos que seus sistemas aguentem picos de tráfego sem degradação de performance nem custos surpresa.',
      icon: 'Cloud',
      tags: ['AWS / GCP', 'Docker & K8s', 'CI/CD Pipelines', 'Terraform', 'Observabilidade'],
      features: [
        'Containers e orquestração com Docker e Kubernetes',
        'Pipelines de CI/CD automatizadas (GitHub Actions / GitLab CI)',
        'Monitoramento proativo e dashboards de telemetria com Grafana & Datadog',
        'FinOps: auditoria e redução de desperdícios em servidores cloud',
        'Políticas rígidas de backup, disaster recovery e conformidade LGPD/SOC2',
      ],
      useCases: [
        {
          title: 'Migração para Arquitetura Cloud Serverless',
          description: 'Redução de 45% nos custos mensais de servidores e escalabilidade elástica automática.',
          metric: '-45% custo cloud',
        },
        {
          title: 'Zero-Downtime Deployments',
          description: 'Implantação contínua de novas versões de software sem desconectar os usuários em uso.',
          metric: '99.98% disponibilidade',
        },
      ],
    },
  ] as Solution[],

  methodology: [
    {
      step: '01',
      title: 'Discovery & Diagnóstico',
      period: 'Semana 1',
      description:
        'Mapeamento profundo de gargalos, auditoria de código ou arquitetura existente, fluxos operacionais e identificação imediata de automações viáveis.',
      deliverables: [
        'Relatório de diagnóstico de infraestrutura e código',
        'Mapa de gargalos operacionais e oportunidades de IA',
        'Definição clara de metas de negócio e ROI esperado',
      ],
    },
    {
      step: '02',
      title: 'Arquitetura & Planejamento',
      period: 'Semana 2',
      description:
        'Desenho técnico escalável, modelagem de banco de dados, design system, requisitos de segurança em camadas e cronograma detalhado por sprint.',
      deliverables: [
        'Diagrama arquitetural completo (C4 Model)',
        'Protótipos de alta fidelidade no Figma',
        'Backlog técnico priorizado por impacto financeiro',
      ],
    },
    {
      step: '03',
      title: 'Desenvolvimento Ágil',
      period: 'Sprints Quinzenais',
      description:
        'Sprints quinzenais, entregas contínuas funcionais em ambiente de staging e canal direto e transparente no Slack/Discord com os líderes técnicos.',
      deliverables: [
        'Acesso contínuo ao ambiente de homologação (Staging)',
        'Demos gravadas a cada fechamento de sprint',
        'Codebase limpo com cobertura de testes unitários',
      ],
    },
    {
      step: '04',
      title: 'Deploy & Homologação',
      period: 'Go-Live Seguro',
      description:
        'Implantação em ambiente cloud de alto desempenho, testes de estresse, validação automatizada e treinamento prático da equipe operacional.',
      deliverables: [
        'Pipeline automatizada de deploy com rollback instantâneo',
        'Testes de carga e segurança sob estresse',
        'Documentação operacional e treinamento das equipes',
      ],
    },
    {
      step: '05',
      title: 'Sustentação & Evolução Contínua',
      period: 'SLA Contínuo',
      description:
        'Suporte especializado proativo, monitoramento contínuo de exceções, tuning de modelos de IA e roadmap prioritário de evolução do produto.',
      deliverables: [
        'Telemetria e alertas em tempo real 24/7',
        'Ajuste contínuo de prompts e acurácia de IA',
        'Reuniões mensais de alinhamento estratégico de engenharia',
      ],
    },
  ] as Step[],

  differences: [
    {
      id: 'academia',
      title: 'Fundamentação Acadêmica',
      description:
        'Rigor metodológico, engenharia de software baseada em padrões de projeto consolidados e pesquisa ativa em IA liderada por quem estuda e leciona o estado da arte da computação.',
      badge: '• Sem improvisos estruturais',
      icon: 'GraduationCap',
    },
    {
      id: 'mercado',
      title: 'Execução de Mercado Ágil',
      description:
        'Histórico comprovado em entregas de alto volume em produção. Sabemos que código bonito sem entrega no prazo não gera resultado para o seu balanço financeiro.',
      badge: '• Velocidade com previsibilidade',
      icon: 'Rocket',
    },
    {
      id: 'triade',
      title: 'A Tríade Completa',
      description:
        'Software Sob Medida + Arquitetura Cloud + Inteligência Artificial nativa. Você não precisa contratar 3 fornecedores diferentes para fazer um ecossistema conversar.',
      badge: '• Solução de ponta a ponta',
      icon: 'Network',
    },
  ] as Difference[],

  founders: [
    {
      name: 'Daniel Jorge',
      role: 'Tech Lead & Arquiteto de Software',
      academicBackground: 'Pesquisador em Computação Aplicada e Engenharia de Software Moderna',
      marketExperience:
        'Especialista em microsserviços, modelagem de sistemas distribuídos e integração de Agentes Autônomos de Inteligência Artificial de alta criticidade.',
      focus: 'Engenharia de Core, RAG & Agentes Autônomos',
    },
    {
      name: 'Lucas Guimarães',
      role: 'Head de Cloud Architecture & DevOps',
      academicBackground: 'Especialista em Redes e Infraestruturas Escaláveis de Alta Disponibilidade',
      marketExperience:
        'Liderança técnica em clusters Kubernetes, automação de pipelines CI/CD enterprise e observabilidade avançada em ambientes multinuvem.',
      focus: 'Kubernetes, Telemetria & Segurança Cloud',
    },
    {
      name: 'Mateus Silva',
      role: 'Lead UI/UX & Frontend Engineer',
      academicBackground: 'Designer de Interação Humano-Computador & Desenvolvedor Web Sênior',
      marketExperience:
        'Criação de design systems de classe mundial, interfaces de alta retenção e arquitetura frontend orientada a performance extrema e conversão.',
      focus: 'Front-End Next.js, Microinterações & CRO',
    },
  ] as Founder[],

  comparisonMatrix: [
    {
      dimension: 'Tempo de Resolução de Ticket / SLA',
      traditional: 'De 4 a 18 horas com intervenção humana',
      danter: '< 45 segundos com RAG e Agentes Autônomos',
      impact: '-92% tempo de resposta',
    },
    {
      dimension: 'Custo Marginal de Escala',
      traditional: 'Contratação linear obrigatória a cada salto de volume',
      danter: 'Custo plano de infraestrutura na nuvem / tokens otimizados',
      impact: 'Escala 10x sem dobrar time',
    },
    {
      dimension: 'Taxa de Erros e Retrabalho',
      traditional: '15% a 25% em digitação e repasse de planilhas',
      danter: '99.4% de acurácia com validação determinística',
      impact: 'Quase zero retrabalho',
    },
    {
      dimension: 'Auditoria e Governança LGPD',
      traditional: 'Logs descentralizados em caixas de e-mail e chats',
      danter: 'Trilha completa de auditoria imutável em VPC privada',
      impact: 'Conformidade total SOC2',
    },
  ],
};
