import type { ContactLabels } from "@/lib/contact";

export type Locale = "pt" | "en" | "es";

export interface Dictionary {
  meta: {
    localeName: string;
    htmlLang: string;
    siteName: string;
    description: string;
  };
  nav: {
    home: string;
    education: string;
    backToTop: string;
    sectionsLabel: string;
    about: string;
    stack: string;
    projects: string;
    experience: string;
    contact: string;
    click: string;
    talk: string;
    skip: string;
    menuOpen: string;
    menuClose: string;
    navMain: string;
    navMobile: string;
    themeToLight: string;
    themeToDark: string;
    languageLabel: string;
  };
  hero: {
    titleBlock: {
      availability: string;
      availabilityValue: string;
      base: string;
      languages: string;
      focus: string;
      focusValue: string;
    };
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    cv: string;
    /** Cargos que alternam no topo do hero */
    roles: string[];
    currently: string;
    currentlyRole: string;
    currentlyText: string;
    currentlyJob: string;
    currentlyJobText: string;
    indexTitle: string;
    indexCount: string;
    languages: { name: string; level: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    summary: string[];
    statsLabels: string[];
    specTitle: string;
    specs: { label: string; value: string }[];
    pillars: string[];
  };
  stack: {
    eyebrow: string;
    title: string;
    learning: string;
    categories: Record<"frontend" | "backend" | "tools", string>;
  };
  projects: {
    eyebrow: string;
    title: string;
    challengeLabel: string;
    roleLabel: string;
    showMore: string;
    showLess: string;
    viewProject: string;
    viewCode: string;
    previewAlt: string;
    logoAlt: string;
    items: Record<string, ProjectCopy>;
  };
  journey: {
    eyebrow: string;
    title: string;
    items: { title: string; place: string | null; focus: string; tags: string[] }[];
  };
  education: {
    eyebrowEducation: string;
    titleEducation: string;
    eyebrowCerts: string;
    titleCerts: string;
    issuedAt: string;
    show: string;
    hide: string;
    items: { level: string; course: string }[];
    certifications: { title: string; issuedAt: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    github: string;
    linkedin: string;
    clickNote: string;
    clickCta: string;
    cv: string;
    availability: string;
    stepsTitle: string;
    steps: { title: string; text: string }[];
    form: ContactLabels & {
      title: string;
      optional: string;
      subjectPlaceholder: string;
      budgetPlaceholder: string;
      messagePlaceholder: string;
      /** "{n}/{max}" */
      counter: string;
      /** "{min}" */
      minHint: string;
      errors: { name: string; email: string; phone: string; subject: string; message: string };
      send: string;
      sending: string;
      success: string;
      error: string;
      unavailable: string;
      captcha: string;
      whatsapp: string;
      /** Primeira linha da mensagem enviada pelo WhatsApp */
      whatsappHeading: string;
      /** "{privacy}" e "{terms}" viram links */
      recaptcha: string;
      privacy: string;
      terms: string;
    };
  };
  footer: {
    founder: string;
    rights: string;
    githubAria: string;
    linkedinAria: string;
    mailAria: string;
  };
  projectPage: {
    back: string;
    visit: string;
    viewCode: string;
    caseStudy: string;
    roleLabel: string;
    technologiesLabel: string;
    linksLabel: string;
    contextLabel: string;
    challengeLabel: string;
    solutionLabel: string;
    resultLabel: string;
    galleryLabel: string;
    desktop: string;
    mobile: string;
    next: string;
    logoAlt: string;
    screenshotAlt: string;
  };
  common: {
    role: string;
    location: string;
    chapter: string;
    /** Currículo em PDF no idioma (inglês para en/es) */
    cvHref: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    text: string;
    home: string;
  };
  click: {
    eyebrow: string;
    role: string;
    /** Sem ponto final: o ponto laranja da marca é adicionado no componente */
    title: string;
    intro: string;
    roleTitle: string;
    roleText: string;
    facts: { label: string; value: string }[];
    ctaSite: string;
    ctaLinkedin: string;
  };
}

/** Estudo de caso de um projeto: contexto → desafio → solução → resultado */
export interface ProjectCopy {
  summary: string;
  role: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
}

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    meta: {
      localeName: "Português",
      htmlLang: "pt-BR",
      siteName: "Portfólio",
      description:
        "Portfólio de Thiago Servoli: desenvolvedor front-end no Grupo In Press, atuando em projetos full stack, e fundador e CEO da Click. Consultoria Digital. React, Next.js, TypeScript, Node.js e Python.",
    },
    nav: {
      home: "Início",
      education: "Formação",
      backToTop: "Voltar ao topo",
      sectionsLabel: "Seções da página",
      about: "Sobre",
      stack: "Stack",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      click: "Click.",
      talk: "Vamos conversar",
      skip: "Pular para o conteúdo",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
      navMain: "Navegação principal",
      navMobile: "Navegação mobile",
      themeToLight: "Ativar modo claro",
      themeToDark: "Ativar modo escuro",
      languageLabel: "Idioma",
    },
    hero: {
      titleBlock: {
        availability: "Disponibilidade",
        availabilityValue: "Aberto a novos projetos",
        base: "Base",
        languages: "Idiomas",
        focus: "Foco",
        focusValue: "React · Next.js · TypeScript",
      },
      subtitle:
        "Construo interfaces rápidas, responsivas e acessíveis com React, Next.js e TypeScript, integradas a APIs, e venho ampliando para o full stack com Node.js e Python. Na tecnologia desde 2019: comecei no suporte e hoje estou no código.",
      ctaProjects: "Ver projetos",
      ctaContact: "Entre em contato",
      cv: "Baixar currículo",
      roles: ["Desenvolvedor Full Stack", "Front-End no Grupo In Press", "Fundador e CEO da Click."],
      currently: "Atualmente",
      currentlyRole: "Fundador e CEO da Click. Consultoria Digital",
      currentlyText: "Sites, sistemas, aplicativos e automações sob medida.",
      currentlyJob: "Desenvolvedor Front-End Jr no Grupo In Press",
      currentlyJobText: "Interfaces web com React, Next.js e TypeScript, integradas a APIs.",
      indexTitle: "Sumário",
      indexCount: "{n} capítulos",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Wizard by Pearson" },
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Front-end como base, full stack na prática",
      summary: [
        "Atuo em tecnologia desde 2019. Comecei no suporte técnico e migrei para o desenvolvimento web: hoje construo interfaces rápidas, responsivas e acessíveis com React, Next.js e TypeScript.",
        "No Grupo In Press, integro o front-end a APIs como FastAPI e trabalho com os times de design e produto em layouts, protótipos e testes de usabilidade.",
        "Venho ampliando a atuação para o full stack com Node.js, Python, APIs REST e SQL. Na Click., que fundei em 2026, projeto e construo soluções do diagnóstico ao lançamento.",
        "Os anos de suporte me deram contato direto com os problemas reais dos usuários. É isso que levo para o código: soluções simples, bem estruturadas e pensadas para quem vai usar.",
      ],
      statsLabels: ["Anos em tecnologia", "Anos no Grupo In Press", "Tecnologias na stack"],
      specTitle: "Ficha técnica",
      specs: [
        { label: "Função", value: "Desenvolvedor Full Stack" },
        { label: "Atuação", value: "Desenvolvedor Front-End Jr — Grupo In Press" },
        { label: "Empresa", value: "Click. Consultoria Digital — Fundador e CEO" },
        { label: "Experiência", value: "Em tecnologia desde 2019" },
        { label: "Idiomas", value: "Português (nativo) · Inglês (certificação Wizard by Pearson)" },
        { label: "Especialidade", value: "Front-end — React, Next.js, TypeScript" },
        { label: "Em expansão", value: "Full stack — Node.js, Python, FastAPI, SQL" },
        { label: "Em estudo", value: "Docker · NoSQL" },
      ],
      pillars: ["No dia a dia", "Em expansão", "Abordagem"],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologias com que trabalho",
      learning: "Em estudo",
      categories: { frontend: "Front-end", backend: "Back-end e dados", tools: "Ferramentas" },
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos selecionados",
      challengeLabel: "Desafio",
      roleLabel: "Meu papel",
      showMore: "Confira mais projetos",
      showLess: "Ver menos projetos",
      viewProject: "Ver estudo de caso",
      viewCode: "Ver código",
      previewAlt: "Prévia do projeto {name}",
      logoAlt: "Logo {name}",
      items: {
        click: {
          summary:
            "Site da minha consultoria, criado por mim do zero: serviços, processo, casos e contato, em Next.js e publicado na Vercel.",
          role: "Projeto solo: conteúdo, design e desenvolvimento",
          context:
            "Ao fundar a Click., eu precisava de um site que explicasse com clareza o que a consultoria entrega, para empresas de todo o Brasil, e que fosse a porta de entrada para novos clientes.",
          challenge:
            "Apresentar cinco frentes de serviço, um processo em cinco etapas e casos reais sem perder a objetividade, com identidade própria, carregamento rápido e segurança, mantido por uma pessoa só.",
          solution:
            "Desenvolvi o site sozinho em Next.js, publicado na Vercel: home com serviços, processo, diferenciais, casos e perguntas frequentes, uma página para cada serviço, formulário de contato protegido por reCAPTCHA, atalho para o WhatsApp, cabeçalhos de segurança com CSP e métricas com Google Analytics, ativadas só com o consentimento de cookies.",
          result:
            "Site no ar em clickconsultoriabr.com.br, com páginas pré-renderizadas servidas pela Vercel, funcionando como a porta de entrada de novos clientes da Click.",
        },
        portfolio: {
          summary:
            "Este portfólio: aplicação Next.js com rotas por idioma, formulário de contato com back-end próprio e animações sem bibliotecas.",
          role: "Design e desenvolvimento full stack",
          context:
            "Eu precisava de um portfólio que mostrasse, na prática, o que eu entrego: um produto real, rápido, acessível e pronto para recrutadores e clientes em três idiomas.",
          challenge:
            "Unir uma identidade editorial com bastante movimento a uma página leve, segura e indexável em português, inglês e espanhol.",
          solution:
            "Next.js (App Router) com TypeScript e Tailwind CSS. Cada idioma tem a sua rota e as suas tags hreflang, o formulário de contato é uma rota de API em Node.js com validação e proteção contra spam, e os cabeçalhos de segurança incluem CSP. As animações usam só CSS e requestAnimationFrame, sem bibliotecas.",
          result:
            "Páginas geradas de forma estática nos três idiomas, prontas para o Google, e o conteúdo inteiro centralizado em arquivos de dados e traduções, fácil de manter.",
        },
        puglisystems: {
          summary:
            "Site institucional da Pugli Systems, que apresenta o ecossistema da marca e a sua primeira solução, a Cogni.",
          role: "Desenvolvimento front-end",
          context:
            "A Pugli Systems precisava de um site institucional para apresentar a marca e o ecossistema de soluções, começando pela Cogni.",
          challenge:
            "Comunicar uma proposta técnica com clareza e presença visual, num site leve e simples de publicar, sem depender de servidor.",
          solution:
            "Desenvolvi o front-end em HTML, CSS e JavaScript puros, com animações em GSAP. Sem build, bundler nem backend: o site é estático e publicado no GitHub Pages.",
          result:
            "Site no ar, servido como arquivos estáticos e fácil de manter, servindo de porta de entrada para a Cogni.",
        },
        cogni: {
          summary:
            "Landing page da Cogni, plataforma de automação que identifica problemas a partir de eventos e decide se observa, sugere ou executa uma ação corretiva.",
          role: "Desenvolvimento front-end",
          context:
            "Empresas recebem sinais operacionais, como um pagamento em atraso, que exigem reação rápida, mas ainda dependem de processos manuais lentos e sujeitos a falha humana. A Cogni foi criada para isso.",
          challenge:
            "Explicar um produto de automação com autonomia ajustável e trilha de auditoria de um jeito que um gestor entenda em poucos segundos.",
          solution:
            "Landing page em HTML, CSS e JavaScript com animações em GSAP, organizada em torno do problema, dos níveis de autonomia (observar, sugerir, executar) e da trilha de auditoria.",
          result:
            "Página publicada junto ao site da Pugli Systems, apresentando a primeira solução do ecossistema.",
        },
      },
    },
    journey: {
      eyebrow: "Trajetória",
      title: "Trajetória profissional",
      items: [
        {
          title: "Formação Técnica em Tecnologia da Informação",
          place: "Senac Brasil",
          focus: "Base técnica em TI. No curso, idealizei e desenvolvi um aplicativo de interações internas para o engajamento e a comunicação entre alunos.",
          tags: ["Tecnologia da Informação", "Lógica de programação"],
        },
        {
          title: "Jovem Aprendiz de TI",
          place: "Araujo Abreu Engenharia",
          focus: "Programa de aprendizagem em tecnologia da informação, com o primeiro contato profissional com suporte e infraestrutura de TI.",
          tags: ["Suporte", "Infraestrutura de TI"],
        },
        {
          title: "Tecnologia em Análise e Desenvolvimento de Sistemas",
          place: "Impacta Tecnologia",
          focus: "Graduação tecnológica com foco em engenharia de software, banco de dados e desenvolvimento de sistemas.",
          tags: ["Engenharia de Software", "SQL", "POO"],
        },
        {
          title: "Analista de Suporte",
          place: "Grupo In Press",
          focus: "Resolução de problemas técnicos e orientação de usuários no uso de sistemas e ferramentas. O contato direto com as dificuldades reais dos usuários hoje orienta minhas decisões de usabilidade no front-end.",
          tags: ["Suporte técnico", "Atendimento ao usuário"],
        },
        {
          title: "Desenvolvedor Front-End Jr",
          place: "Grupo In Press",
          focus: "Interfaces responsivas com React, Next.js e TypeScript, integração com APIs como FastAPI e testes de usabilidade junto aos times de design e produto.",
          tags: ["React", "Next.js", "TypeScript", "FastAPI"],
        },
        {
          title: "Fundador e CEO da Click.",
          place: "Click. Consultoria Digital",
          focus: "Fundei a Click. para ajudar empresas a tirar a operação das planilhas e dos processos manuais, com sites, sistemas, aplicativos e automações sob medida.",
          tags: ["Desenvolvimento web", "Arquitetura", "Gestão"],
        },
      ],
    },
    education: {
      eyebrowEducation: "Formação",
      titleEducation: "Base acadêmica",
      eyebrowCerts: "Certificações",
      titleCerts: "Aprendizado contínuo",
      issuedAt: "Emitida em",
      show: "Mostrar",
      hide: "Ocultar",
      items: [
        { level: "Curso Superior de Tecnologia (CST)", course: "Análise e Desenvolvimento de Sistemas" },
        { level: "Curso Técnico Integrado", course: "Tecnologia da Informação" },
      ],
      certifications: [
        { title: "User Experience", issuedAt: "Fevereiro de 2022" },
        { title: "Programação para Internet com JavaScript", issuedAt: "Maio de 2021" },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre o seu projeto",
      subtitle: "Estou aberto a novos desafios, projetos e oportunidades. Respondo em até um dia útil.",
      cta: "Enviar e-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
      clickNote: "Precisa de software para a sua empresa?",
      clickCta: "Fale com a Click.",
      cv: "Baixar currículo",
      availability: "Aberto a vagas, projetos freelance e parcerias",
      stepsTitle: "Como funciona",
      steps: [
        { title: "Você envia a mensagem", text: "Pelo formulário, por e-mail ou pelo WhatsApp. Ela chega direto para mim." },
        { title: "Eu respondo em até um dia útil", text: "Pelo canal que você preferir, com as perguntas certas para entender o contexto." },
        { title: "Definimos o próximo passo", text: "Uma conversa rápida, uma proposta ou uma indicação, se outro caminho fizer mais sentido." },
      ],
      form: {
        title: "Mande uma mensagem",
        optional: "opcional",
        name: "Nome",
        email: "E-mail",
        phone: "WhatsApp",
        company: "Empresa",
        subject: "Assunto",
        budget: "Faixa de investimento",
        preference: "Prefiro retorno por",
        message: "Mensagem",
        subjectPlaceholder: "Selecione o assunto",
        budgetPlaceholder: "Selecione uma faixa",
        messagePlaceholder: "Conte o contexto, o objetivo e o prazo que você tem em mente.",
        subjects: {
          job: "Vaga ou oportunidade de trabalho",
          freelance: "Projeto freelance",
          click: "Projeto para a minha empresa (Click.)",
          partnership: "Parceria",
          other: "Outro assunto",
        },
        budgets: {
          upTo15: "Até R$ 15 mil",
          from15to50: "R$ 15 mil a R$ 50 mil",
          from50to150: "R$ 50 mil a R$ 150 mil",
          over150: "Acima de R$ 150 mil",
          talk: "Prefiro conversar antes",
        },
        preferences: { email: "E-mail", whatsapp: "WhatsApp" },
        counter: "{n}/{max}",
        minHint: "Mínimo de {min} caracteres",
        errors: {
          name: "Informe seu nome.",
          email: "Informe um e-mail válido.",
          phone: "Informe um WhatsApp válido, com DDD.",
          subject: "Selecione um assunto.",
          message: "Escreva pelo menos {min} caracteres.",
        },
        send: "Enviar mensagem",
        sending: "Enviando…",
        success: "Mensagem enviada. Respondo em até um dia útil.",
        error: "Não foi possível enviar agora. Tente de novo ou fale comigo pelo WhatsApp.",
        unavailable: "O envio automático está indisponível no momento. Fale comigo pelo WhatsApp.",
        captcha: "Não foi possível confirmar que você não é um robô. Tente de novo ou fale comigo pelo WhatsApp.",
        whatsapp: "Enviar pelo WhatsApp",
        whatsappHeading: "Olá, Thiago! Vim pelo seu portfólio.",
        recaptcha: "Protegido pelo reCAPTCHA: valem a {privacy} e os {terms} do Google.",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço",
      },
    },
    footer: {
      founder: "Fundador e CEO da",
      rights: "Todos os direitos reservados.",
      githubAria: "GitHub de Thiago Servoli",
      linkedinAria: "LinkedIn de Thiago Servoli",
      mailAria: "Enviar e-mail para Thiago Servoli",
    },
    projectPage: {
      back: "Voltar aos projetos",
      visit: "Visitar projeto",
      viewCode: "Ver código",
      caseStudy: "Estudo de caso",
      roleLabel: "Papel",
      technologiesLabel: "Tecnologias",
      linksLabel: "Links",
      contextLabel: "Contexto",
      challengeLabel: "Desafio",
      solutionLabel: "Solução",
      resultLabel: "Resultado",
      galleryLabel: "Galeria",
      desktop: "Desktop",
      mobile: "Mobile",
      next: "Próximo projeto",
      logoAlt: "Logo {name}",
      screenshotAlt: "Captura de tela do projeto {name}",
    },
    common: {
      role: "Desenvolvedor Full Stack",
      location: "São Paulo - SP, Brasil",
      chapter: "Capítulo",
      cvHref: "/cv/thiago-servoli-cv.pdf",
    },
    click: {
      eyebrow: "Empreendimento",
      role: "Fundador e CEO",
      title: "Software sob medida para quem não cabe em template",
      intro:
        "A Click. projeta e constrói sites, sistemas, aplicativos e automações para empresas que querem operar melhor. Engenharia sênior, design cuidadoso e prazos que se cumprem.",
      roleTitle: "Meu papel",
      roleText:
        "Fundei a Click. em 2026 para ajudar empresas a tirar a operação das planilhas e dos processos manuais. Projeto e construo sites, sistemas web, aplicativos e automações sob medida, do diagnóstico ao lançamento. Como fundador, lidero o atendimento aos clientes, a arquitetura das soluções e o desenvolvimento.",
      facts: [
        { label: "Proposta", value: "Escopo, prazo e valor fechados após o diagnóstico" },
        { label: "Atendimento", value: "Remoto, para todo o Brasil" },
      ],
      ctaSite: "Conhecer a Click.",
      ctaLinkedin: "LinkedIn da Click.",
    },
    notFound: {
      eyebrow: "Página não encontrada",
      title: "Esta página não está no sumário.",
      text: "O endereço pode ter mudado ou nunca ter existido. O conteúdo continua a um clique.",
      home: "Voltar ao início",
    },
  },
  en: {
    meta: {
      localeName: "English",
      htmlLang: "en",
      siteName: "Portfolio",
      description:
        "Portfolio of Thiago Servoli: front-end developer at Grupo In Press working on full stack projects, and founder and CEO of Click. Consultoria Digital. React, Next.js, TypeScript, Node.js and Python.",
    },
    nav: {
      home: "Home",
      education: "Education",
      backToTop: "Back to top",
      sectionsLabel: "Page sections",
      about: "About",
      stack: "Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      click: "Click.",
      talk: "Let's talk",
      skip: "Skip to main content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      navMain: "Main navigation",
      navMobile: "Mobile navigation",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
      languageLabel: "Language",
    },
    hero: {
      titleBlock: {
        availability: "Availability",
        availabilityValue: "Open to new projects",
        base: "Based in",
        languages: "Languages",
        focus: "Focus",
        focusValue: "React · Next.js · TypeScript",
      },
      subtitle:
        "I build fast, responsive and accessible interfaces with React, Next.js and TypeScript, integrated with APIs, and I'm expanding into full stack with Node.js and Python. In tech since 2019: I started in support and now I write the code.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      cv: "Download resume",
      roles: ["Full Stack Developer", "Front-End at Grupo In Press", "Founder and CEO of Click."],
      currently: "Currently",
      currentlyRole: "Founder and CEO of Click. Consultoria Digital",
      currentlyText: "Custom websites, systems, apps and automations.",
      currentlyJob: "Junior Front-End Developer at Grupo In Press",
      currentlyJobText: "Web interfaces with React, Next.js and TypeScript, integrated with APIs.",
      indexTitle: "Contents",
      indexCount: "{n} chapters",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Wizard by Pearson" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Front-end at the core, full stack in practice",
      summary: [
        "I've worked in tech since 2019. I started in technical support and moved into web development: today I build fast, responsive and accessible interfaces with React, Next.js and TypeScript.",
        "At Grupo In Press, I integrate the front end with APIs such as FastAPI and work with the design and product teams on layouts, prototypes and usability tests.",
        "I'm expanding into full stack work with Node.js, Python, REST APIs and SQL. At Click., which I founded in 2026, I design and build solutions from diagnosis to launch.",
        "My years in support put me in direct contact with real user problems. That's what I bring to the code: simple, well-structured solutions designed for the people who use them.",
      ],
      statsLabels: ["Years in tech", "Years at Grupo In Press", "Technologies in the stack"],
      specTitle: "Spec sheet",
      specs: [
        { label: "Role", value: "Full Stack Developer" },
        { label: "Position", value: "Junior Front-End Developer — Grupo In Press" },
        { label: "Company", value: "Click. Consultoria Digital — Founder and CEO" },
        { label: "Experience", value: "In tech since 2019" },
        { label: "Languages", value: "Portuguese (native) · English (Wizard by Pearson certification)" },
        { label: "Specialty", value: "Front-end — React, Next.js, TypeScript" },
        { label: "Expanding into", value: "Full stack — Node.js, Python, FastAPI, SQL" },
        { label: "Learning", value: "Docker · NoSQL" },
      ],
      pillars: ["Day to day", "Expanding", "Approach"],
    },
    stack: {
      eyebrow: "Stack",
      title: "Technologies I work with",
      learning: "Learning",
      categories: { frontend: "Front-end", backend: "Back-end & data", tools: "Tools" },
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work",
      challengeLabel: "Challenge",
      roleLabel: "My role",
      showMore: "See more projects",
      showLess: "See fewer projects",
      viewProject: "View case study",
      viewCode: "View code",
      previewAlt: "Preview of the {name} project",
      logoAlt: "{name} logo",
      items: {
        click: {
          summary:
            "Website for my consultancy, built by me from scratch: services, process, cases and contact, in Next.js and deployed on Vercel.",
          role: "Solo project: content, design and development",
          context:
            "When I founded Click., I needed a website that clearly explains what the consultancy delivers to companies across Brazil and works as the entry point for new clients.",
          challenge:
            "Present five service areas, a five-stage process and real cases without losing clarity, with its own identity, fast loading and security, maintained by a single person.",
          solution:
            "I built the site on my own in Next.js, deployed on Vercel: a home page with services, process, differentiators, cases and FAQ, one page per service, a contact form protected by reCAPTCHA, a WhatsApp shortcut, security headers with CSP and Google Analytics metrics enabled only with cookie consent.",
          result:
            "Site live at clickconsultoriabr.com.br, with pre-rendered pages served by Vercel, working as the entry point for Click.'s new clients.",
        },
        portfolio: {
          summary:
            "This portfolio: a Next.js application with per-language routes, a contact form with its own back end and animations without libraries.",
          role: "Design and full stack development",
          context:
            "I needed a portfolio that shows what I deliver in practice: a real product, fast, accessible and ready for recruiters and clients in three languages.",
          challenge:
            "Combine an editorial identity with plenty of motion and a page that stays light, secure and indexable in Portuguese, English and Spanish.",
          solution:
            "Next.js (App Router) with TypeScript and Tailwind CSS. Each language has its own route and hreflang tags, the contact form is a Node.js API route with validation and spam protection, and the security headers include a CSP. Animations use only CSS and requestAnimationFrame, with no libraries.",
          result:
            "Statically generated pages in all three languages, ready for search engines, and all content centralized in data and translation files that are easy to maintain.",
        },
        puglisystems: {
          summary:
            "Institutional website for Pugli Systems, presenting the brand's ecosystem and its first solution, Cogni.",
          role: "Front-end development",
          context:
            "Pugli Systems needed an institutional website to present the brand and its ecosystem of solutions, starting with Cogni.",
          challenge:
            "Communicate a technical offering clearly and with visual presence, in a site that is light, simple to publish and doesn't depend on a server.",
          solution:
            "I built the front end in plain HTML, CSS and JavaScript, with GSAP animations. No build step, bundler or back end: the site is static and published on GitHub Pages.",
          result:
            "Site live, served as static files and easy to maintain, acting as the entry point to Cogni.",
        },
        cogni: {
          summary:
            "Landing page for Cogni, an automation platform that identifies problems from events and decides whether to observe, suggest or execute a corrective action.",
          role: "Front-end development",
          context:
            "Companies receive operational signals, such as a late payment, that require a fast reaction, yet still rely on slow manual processes prone to human error. Cogni was built for that.",
          challenge:
            "Explain an automation product with adjustable autonomy and an audit trail in a way a manager understands in seconds.",
          solution:
            "Landing page in HTML, CSS and JavaScript with GSAP animations, organized around the problem, the autonomy levels (observe, suggest, execute) and the audit trail.",
          result:
            "Page published alongside the Pugli Systems website, presenting the ecosystem's first solution.",
        },
      },
    },
    journey: {
      eyebrow: "Journey",
      title: "Career path",
      items: [
        {
          title: "Technical Degree in Information Technology",
          place: "Senac Brasil",
          focus: "Technical foundation in IT. During the course, I conceived and built an internal interactions app for student engagement and communication.",
          tags: ["Information Technology", "Programming logic"],
        },
        {
          title: "IT Apprentice",
          place: "Araujo Abreu Engenharia",
          focus: "Apprenticeship program in information technology, with my first professional exposure to IT support and infrastructure.",
          tags: ["Support", "IT infrastructure"],
        },
        {
          title: "Associate Degree in Systems Analysis and Development",
          place: "Impacta Tecnologia",
          focus: "Technology degree focused on software engineering, databases and systems development.",
          tags: ["Software Engineering", "SQL", "OOP"],
        },
        {
          title: "Support Analyst",
          place: "Grupo In Press",
          focus: "Resolved technical issues and guided users in the use of systems and tools. Working directly with real user pain points now informs my usability decisions on the front end.",
          tags: ["Technical support", "User support"],
        },
        {
          title: "Junior Front-End Developer",
          place: "Grupo In Press",
          focus: "Responsive interfaces with React, Next.js and TypeScript, API integrations such as FastAPI and usability tests with the design and product teams.",
          tags: ["React", "Next.js", "TypeScript", "FastAPI"],
        },
        {
          title: "Founder and CEO of Click.",
          place: "Click. Consultoria Digital",
          focus: "I founded Click. to help companies move their operations off spreadsheets and manual processes, with custom websites, systems, apps and automations.",
          tags: ["Web development", "Architecture", "Management"],
        },
      ],
    },
    education: {
      eyebrowEducation: "Education",
      titleEducation: "Academic background",
      eyebrowCerts: "Certifications",
      titleCerts: "Continuous learning",
      issuedAt: "Issued in",
      show: "Show",
      hide: "Hide",
      items: [
        { level: "Technology Degree (Associate)", course: "Systems Analysis and Development" },
        { level: "Integrated Technical Course", course: "Information Technology" },
      ],
      certifications: [
        { title: "User Experience", issuedAt: "February 2022" },
        { title: "Internet Programming with JavaScript", issuedAt: "May 2021" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project",
      subtitle: "I'm open to new challenges, projects and opportunities. I reply within one business day.",
      cta: "Send an email",
      github: "GitHub",
      linkedin: "LinkedIn",
      clickNote: "Need software for your company?",
      clickCta: "Talk to Click.",
      cv: "Download resume",
      availability: "Open to jobs, freelance projects and partnerships",
      stepsTitle: "How it works",
      steps: [
        { title: "You send a message", text: "Through the form, by email or on WhatsApp. It comes straight to me." },
        { title: "I reply within one business day", text: "On the channel you prefer, with the right questions to understand the context." },
        { title: "We agree on the next step", text: "A quick call, a proposal or a referral, if another path makes more sense." },
      ],
      form: {
        title: "Send a message",
        optional: "optional",
        name: "Name",
        email: "Email",
        phone: "WhatsApp",
        company: "Company",
        subject: "Subject",
        budget: "Budget range",
        preference: "I'd rather hear back by",
        message: "Message",
        subjectPlaceholder: "Select a subject",
        budgetPlaceholder: "Select a range",
        messagePlaceholder: "Share the context, the goal and the timeline you have in mind.",
        subjects: {
          job: "Job or work opportunity",
          freelance: "Freelance project",
          click: "Project for my company (Click.)",
          partnership: "Partnership",
          other: "Something else",
        },
        budgets: {
          upTo15: "Up to R$ 15k",
          from15to50: "R$ 15k to R$ 50k",
          from50to150: "R$ 50k to R$ 150k",
          over150: "Over R$ 150k",
          talk: "I'd rather talk first",
        },
        preferences: { email: "Email", whatsapp: "WhatsApp" },
        counter: "{n}/{max}",
        minHint: "At least {min} characters",
        errors: {
          name: "Please enter your name.",
          email: "Please enter a valid email.",
          phone: "Please enter a valid WhatsApp number, with area code.",
          subject: "Please select a subject.",
          message: "Please write at least {min} characters.",
        },
        send: "Send message",
        sending: "Sending…",
        success: "Message sent. I'll reply within one business day.",
        error: "The message couldn't be sent right now. Try again or reach me on WhatsApp.",
        unavailable: "Automatic sending is unavailable right now. Please reach me on WhatsApp.",
        captcha: "We couldn't confirm you're not a robot. Try again or reach me on WhatsApp.",
        whatsapp: "Send via WhatsApp",
        whatsappHeading: "Hi, Thiago! I found you through your portfolio.",
        recaptcha: "Protected by reCAPTCHA: Google's {privacy} and {terms} apply.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    footer: {
      founder: "Founder and CEO of",
      rights: "All rights reserved.",
      githubAria: "Thiago Servoli's GitHub",
      linkedinAria: "Thiago Servoli's LinkedIn",
      mailAria: "Send an email to Thiago Servoli",
    },
    projectPage: {
      back: "Back to projects",
      visit: "Visit project",
      viewCode: "View code",
      caseStudy: "Case study",
      roleLabel: "Role",
      technologiesLabel: "Technologies",
      linksLabel: "Links",
      contextLabel: "Context",
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      resultLabel: "Result",
      galleryLabel: "Gallery",
      desktop: "Desktop",
      mobile: "Mobile",
      next: "Next project",
      logoAlt: "{name} logo",
      screenshotAlt: "Screenshot of the {name} project",
    },
    common: {
      role: "Full Stack Developer",
      location: "São Paulo - SP, Brazil",
      chapter: "Chapter",
      cvHref: "/cv/thiago-servoli-resume.pdf",
    },
    click: {
      eyebrow: "Venture",
      role: "Founder and CEO",
      title: "Custom software for businesses that don't fit a template",
      intro:
        "Click. designs and builds websites, systems, apps and automations for companies that want to run better. Senior engineering, careful design and deadlines that are met.",
      roleTitle: "My role",
      roleText:
        "I founded Click. in 2026 to help companies move their operations off spreadsheets and manual processes. I design and build custom websites, web systems, apps and automations, from diagnosis to launch. As founder, I lead client relationships, solution architecture and development.",
      facts: [
        { label: "Proposal", value: "Fixed scope, timeline and price after the diagnosis" },
        { label: "Service", value: "Remote, across Brazil" },
      ],
      ctaSite: "Visit Click.",
      ctaLinkedin: "Click. on LinkedIn",
    },
    notFound: {
      eyebrow: "Page not found",
      title: "This page isn't in the contents.",
      text: "The address may have changed or never existed. Everything else is one click away.",
      home: "Back to home",
    },
  },
  es: {
    meta: {
      localeName: "Español",
      htmlLang: "es",
      siteName: "Portafolio",
      description:
        "Portafolio de Thiago Servoli: desarrollador front-end en Grupo In Press, con proyectos full stack, y fundador y CEO de Click. Consultoria Digital. React, Next.js, TypeScript, Node.js y Python.",
    },
    nav: {
      home: "Inicio",
      education: "Formación",
      backToTop: "Volver arriba",
      sectionsLabel: "Secciones de la página",
      about: "Acerca de",
      stack: "Stack",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      click: "Click.",
      talk: "Hablemos",
      skip: "Saltar al contenido principal",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      navMain: "Navegación principal",
      navMobile: "Navegación móvil",
      themeToLight: "Activar modo claro",
      themeToDark: "Activar modo oscuro",
      languageLabel: "Idioma",
    },
    hero: {
      titleBlock: {
        availability: "Disponibilidad",
        availabilityValue: "Abierto a nuevos proyectos",
        base: "Base",
        languages: "Idiomas",
        focus: "Enfoque",
        focusValue: "React · Next.js · TypeScript",
      },
      subtitle:
        "Construyo interfaces rápidas, responsivas y accesibles con React, Next.js y TypeScript, integradas con APIs, y estoy ampliando hacia el full stack con Node.js y Python. En tecnología desde 2019: empecé en soporte y hoy estoy en el código.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Ponte en contacto",
      cv: "Descargar currículum",
      roles: ["Desarrollador Full Stack", "Front-End en Grupo In Press", "Fundador y CEO de Click."],
      currently: "Actualmente",
      currentlyRole: "Fundador y CEO de Click. Consultoria Digital",
      currentlyText: "Sitios, sistemas, aplicaciones y automatizaciones a medida.",
      currentlyJob: "Desarrollador Front-End Jr en Grupo In Press",
      currentlyJobText: "Interfaces web con React, Next.js y TypeScript, integradas con APIs.",
      indexTitle: "Índice",
      indexCount: "{n} capítulos",
      languages: [
        { name: "Portugués", level: "Nativo" },
        { name: "Inglés", level: "Wizard by Pearson" },
      ],
    },
    about: {
      eyebrow: "Acerca de",
      title: "Front-end como base, full stack en la práctica",
      summary: [
        "Trabajo en tecnología desde 2019. Empecé en soporte técnico y pasé al desarrollo web: hoy construyo interfaces rápidas, responsivas y accesibles con React, Next.js y TypeScript.",
        "En Grupo In Press, integro el front-end con APIs como FastAPI y trabajo con los equipos de diseño y producto en layouts, prototipos y pruebas de usabilidad.",
        "Estoy ampliando mi actuación hacia el full stack con Node.js, Python, APIs REST y SQL. En Click., que fundé en 2026, diseño y construyo soluciones del diagnóstico al lanzamiento.",
        "Los años en soporte me pusieron en contacto directo con los problemas reales de los usuarios. Eso es lo que llevo al código: soluciones simples, bien estructuradas y pensadas para quien las usa.",
      ],
      statsLabels: ["Años en tecnología", "Años en Grupo In Press", "Tecnologías en el stack"],
      specTitle: "Ficha técnica",
      specs: [
        { label: "Rol", value: "Desarrollador Full Stack" },
        { label: "Puesto", value: "Desarrollador Front-End Jr — Grupo In Press" },
        { label: "Empresa", value: "Click. Consultoria Digital — Fundador y CEO" },
        { label: "Experiencia", value: "En tecnología desde 2019" },
        { label: "Idiomas", value: "Portugués (nativo) · Inglés (certificación Wizard by Pearson)" },
        { label: "Especialidad", value: "Front-end — React, Next.js, TypeScript" },
        { label: "En expansión", value: "Full stack — Node.js, Python, FastAPI, SQL" },
        { label: "Estudiando", value: "Docker · NoSQL" },
      ],
      pillars: ["Día a día", "En expansión", "Enfoque"],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologías con las que trabajo",
      learning: "Estudiando",
      categories: { frontend: "Front-end", backend: "Back-end y datos", tools: "Herramientas" },
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos seleccionados",
      challengeLabel: "Desafío",
      roleLabel: "Mi rol",
      showMore: "Ver más proyectos",
      showLess: "Ver menos proyectos",
      viewProject: "Ver caso de estudio",
      viewCode: "Ver código",
      previewAlt: "Vista previa del proyecto {name}",
      logoAlt: "Logo de {name}",
      items: {
        click: {
          summary:
            "Sitio de mi consultoría, creado por mí desde cero: servicios, proceso, casos y contacto, en Next.js y publicado en Vercel.",
          role: "Proyecto individual: contenido, diseño y desarrollo",
          context:
            "Al fundar Click., necesitaba un sitio que explicara con claridad lo que entrega la consultoría a empresas de todo Brasil y que fuera la puerta de entrada de nuevos clientes.",
          challenge:
            "Presentar cinco frentes de servicio, un proceso en cinco etapas y casos reales sin perder claridad, con identidad propia, carga rápida y seguridad, mantenido por una sola persona.",
          solution:
            "Desarrollé el sitio solo en Next.js, publicado en Vercel: home con servicios, proceso, diferenciales, casos y preguntas frecuentes, una página por servicio, formulario de contacto protegido con reCAPTCHA, acceso directo a WhatsApp, encabezados de seguridad con CSP y métricas con Google Analytics, activadas solo con el consentimiento de cookies.",
          result:
            "Sitio en línea en clickconsultoriabr.com.br, con páginas prerrenderizadas servidas por Vercel, funcionando como la puerta de entrada de nuevos clientes de Click.",
        },
        portfolio: {
          summary:
            "Este portafolio: una aplicación Next.js con rutas por idioma, formulario de contacto con back-end propio y animaciones sin librerías.",
          role: "Diseño y desarrollo full stack",
          context:
            "Necesitaba un portafolio que mostrara en la práctica lo que entrego: un producto real, rápido, accesible y listo para reclutadores y clientes en tres idiomas.",
          challenge:
            "Unir una identidad editorial con bastante movimiento a una página ligera, segura e indexable en portugués, inglés y español.",
          solution:
            "Next.js (App Router) con TypeScript y Tailwind CSS. Cada idioma tiene su ruta y sus etiquetas hreflang, el formulario de contacto es una ruta de API en Node.js con validación y protección contra spam, y los encabezados de seguridad incluyen CSP. Las animaciones usan solo CSS y requestAnimationFrame, sin librerías.",
          result:
            "Páginas generadas de forma estática en los tres idiomas, listas para los buscadores, y todo el contenido centralizado en archivos de datos y traducciones, fácil de mantener.",
        },
        puglisystems: {
          summary:
            "Sitio institucional de Pugli Systems, que presenta el ecosistema de la marca y su primera solución, Cogni.",
          role: "Desarrollo front-end",
          context:
            "Pugli Systems necesitaba un sitio institucional para presentar la marca y su ecosistema de soluciones, empezando por Cogni.",
          challenge:
            "Comunicar una propuesta técnica con claridad y presencia visual, en un sitio ligero, simple de publicar y sin depender de un servidor.",
          solution:
            "Desarrollé el front-end en HTML, CSS y JavaScript puros, con animaciones en GSAP. Sin build, bundler ni back-end: el sitio es estático y está publicado en GitHub Pages.",
          result:
            "Sitio en línea, servido como archivos estáticos y fácil de mantener, como puerta de entrada a Cogni.",
        },
        cogni: {
          summary:
            "Landing page de Cogni, una plataforma de automatización que identifica problemas a partir de eventos y decide si observa, sugiere o ejecuta una acción correctiva.",
          role: "Desarrollo front-end",
          context:
            "Las empresas reciben señales operativas, como un pago atrasado, que exigen una reacción rápida, pero aún dependen de procesos manuales lentos y propensos a fallos humanos. Cogni nació para eso.",
          challenge:
            "Explicar un producto de automatización con autonomía ajustable y registro de auditoría de forma que un gestor lo entienda en segundos.",
          solution:
            "Landing page en HTML, CSS y JavaScript con animaciones en GSAP, organizada en torno al problema, los niveles de autonomía (observar, sugerir, ejecutar) y el registro de auditoría.",
          result:
            "Página publicada junto al sitio de Pugli Systems, presentando la primera solución del ecosistema.",
        },
      },
    },
    journey: {
      eyebrow: "Trayectoria",
      title: "Trayectoria profesional",
      items: [
        {
          title: "Formación Técnica en Tecnología de la Información",
          place: "Senac Brasil",
          focus: "Base técnica en TI. En el curso, ideé y desarrollé una aplicación de interacciones internas para el compromiso y la comunicación entre alumnos.",
          tags: ["Tecnología de la Información", "Lógica de programación"],
        },
        {
          title: "Aprendiz de TI",
          place: "Araujo Abreu Engenharia",
          focus: "Programa de aprendizaje en tecnología de la información, con el primer contacto profesional con soporte e infraestructura de TI.",
          tags: ["Soporte", "Infraestructura de TI"],
        },
        {
          title: "Tecnología en Análisis y Desarrollo de Sistemas",
          place: "Impacta Tecnologia",
          focus: "Carrera tecnológica enfocada en ingeniería de software, bases de datos y desarrollo de sistemas.",
          tags: ["Ingeniería de Software", "SQL", "POO"],
        },
        {
          title: "Analista de Soporte",
          place: "Grupo In Press",
          focus: "Resolución de problemas técnicos y orientación de usuarios en el uso de sistemas y herramientas. El contacto directo con las dificultades reales de los usuarios hoy guía mis decisiones de usabilidad en el front-end.",
          tags: ["Soporte técnico", "Atención al usuario"],
        },
        {
          title: "Desarrollador Front-End Jr",
          place: "Grupo In Press",
          focus: "Interfaces responsivas con React, Next.js y TypeScript, integración con APIs como FastAPI y pruebas de usabilidad junto a los equipos de diseño y producto.",
          tags: ["React", "Next.js", "TypeScript", "FastAPI"],
        },
        {
          title: "Fundador y CEO de Click.",
          place: "Click. Consultoria Digital",
          focus: "Fundé Click. para ayudar a las empresas a sacar su operación de las hojas de cálculo y de los procesos manuales, con sitios, sistemas, aplicaciones y automatizaciones a medida.",
          tags: ["Desarrollo web", "Arquitectura", "Gestión"],
        },
      ],
    },
    education: {
      eyebrowEducation: "Formación",
      titleEducation: "Base académica",
      eyebrowCerts: "Certificaciones",
      titleCerts: "Aprendizaje continuo",
      issuedAt: "Emitida en",
      show: "Mostrar",
      hide: "Ocultar",
      items: [
        { level: "Curso Superior de Tecnología (CST)", course: "Análisis y Desarrollo de Sistemas" },
        { level: "Curso Técnico Integrado", course: "Tecnología de la Información" },
      ],
      certifications: [
        { title: "Experiencia de Usuario", issuedAt: "Febrero de 2022" },
        { title: "Programación para Internet con JavaScript", issuedAt: "Mayo de 2021" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de tu proyecto",
      subtitle: "Estoy abierto a nuevos desafíos, proyectos y oportunidades. Respondo en un día hábil.",
      cta: "Enviar un correo",
      github: "GitHub",
      linkedin: "LinkedIn",
      clickNote: "¿Necesitas software para tu empresa?",
      clickCta: "Habla con Click.",
      cv: "Descargar currículum",
      availability: "Abierto a vacantes, proyectos freelance y alianzas",
      stepsTitle: "Cómo funciona",
      steps: [
        { title: "Envías el mensaje", text: "Por el formulario, por correo o por WhatsApp. Me llega directamente." },
        { title: "Respondo en un día hábil", text: "Por el canal que prefieras, con las preguntas correctas para entender el contexto." },
        { title: "Definimos el siguiente paso", text: "Una conversación rápida, una propuesta o una recomendación, si otro camino tiene más sentido." },
      ],
      form: {
        title: "Envía un mensaje",
        optional: "opcional",
        name: "Nombre",
        email: "Correo",
        phone: "WhatsApp",
        company: "Empresa",
        subject: "Asunto",
        budget: "Rango de inversión",
        preference: "Prefiero respuesta por",
        message: "Mensaje",
        subjectPlaceholder: "Selecciona el asunto",
        budgetPlaceholder: "Selecciona un rango",
        messagePlaceholder: "Cuenta el contexto, el objetivo y el plazo que tienes en mente.",
        subjects: {
          job: "Vacante u oportunidad laboral",
          freelance: "Proyecto freelance",
          click: "Proyecto para mi empresa (Click.)",
          partnership: "Alianza",
          other: "Otro asunto",
        },
        budgets: {
          upTo15: "Hasta R$ 15 mil",
          from15to50: "R$ 15 mil a R$ 50 mil",
          from50to150: "R$ 50 mil a R$ 150 mil",
          over150: "Más de R$ 150 mil",
          talk: "Prefiero conversar antes",
        },
        preferences: { email: "Correo", whatsapp: "WhatsApp" },
        counter: "{n}/{max}",
        minHint: "Mínimo de {min} caracteres",
        errors: {
          name: "Escribe tu nombre.",
          email: "Escribe un correo válido.",
          phone: "Escribe un WhatsApp válido, con código de área.",
          subject: "Selecciona un asunto.",
          message: "Escribe al menos {min} caracteres.",
        },
        send: "Enviar mensaje",
        sending: "Enviando…",
        success: "Mensaje enviado. Respondo en un día hábil.",
        error: "No se pudo enviar ahora. Inténtalo de nuevo o escríbeme por WhatsApp.",
        unavailable: "El envío automático no está disponible ahora. Escríbeme por WhatsApp.",
        captcha: "No pudimos confirmar que no eres un robot. Inténtalo de nuevo o escríbeme por WhatsApp.",
        whatsapp: "Enviar por WhatsApp",
        whatsappHeading: "¡Hola, Thiago! Llegué por tu portafolio.",
        recaptcha: "Protegido por reCAPTCHA: se aplican la {privacy} y los {terms} de Google.",
        privacy: "Política de Privacidad",
        terms: "Términos del Servicio",
      },
    },
    footer: {
      founder: "Fundador y CEO de",
      rights: "Todos los derechos reservados.",
      githubAria: "GitHub de Thiago Servoli",
      linkedinAria: "LinkedIn de Thiago Servoli",
      mailAria: "Enviar un correo a Thiago Servoli",
    },
    projectPage: {
      back: "Volver a proyectos",
      visit: "Visitar proyecto",
      viewCode: "Ver código",
      caseStudy: "Caso de estudio",
      roleLabel: "Rol",
      technologiesLabel: "Tecnologías",
      linksLabel: "Enlaces",
      contextLabel: "Contexto",
      challengeLabel: "Desafío",
      solutionLabel: "Solución",
      resultLabel: "Resultado",
      galleryLabel: "Galería",
      desktop: "Escritorio",
      mobile: "Móvil",
      next: "Siguiente proyecto",
      logoAlt: "Logo de {name}",
      screenshotAlt: "Captura del proyecto {name}",
    },
    common: {
      role: "Desarrollador Full Stack",
      location: "São Paulo - SP, Brasil",
      chapter: "Capítulo",
      cvHref: "/cv/thiago-servoli-resume.pdf",
    },
    click: {
      eyebrow: "Emprendimiento",
      role: "Fundador y CEO",
      title: "Software a medida para quien no cabe en una plantilla",
      intro:
        "Click. diseña y construye sitios, sistemas, aplicaciones y automatizaciones para empresas que quieren operar mejor. Ingeniería sénior, diseño cuidadoso y plazos que se cumplen.",
      roleTitle: "Mi rol",
      roleText:
        "Fundé Click. en 2026 para ayudar a las empresas a sacar su operación de las hojas de cálculo y de los procesos manuales. Diseño y construyo sitios, sistemas web, aplicaciones y automatizaciones a medida, del diagnóstico al lanzamiento. Como fundador, lidero la atención a los clientes, la arquitectura de las soluciones y el desarrollo.",
      facts: [
        { label: "Propuesta", value: "Alcance, plazo y valor cerrados tras el diagnóstico" },
        { label: "Atención", value: "Remota, para todo Brasil" },
      ],
      ctaSite: "Conocer Click.",
      ctaLinkedin: "Click. en LinkedIn",
    },
    notFound: {
      eyebrow: "Página no encontrada",
      title: "Esta página no está en el índice.",
      text: "La dirección puede haber cambiado o no haber existido nunca. Todo lo demás está a un clic.",
      home: "Volver al inicio",
    },
  },
};
