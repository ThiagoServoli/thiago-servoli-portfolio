export type Locale = "pt" | "en" | "es";

export interface Dictionary {
  meta: {
    localeName: string;
    htmlLang: string;
  };
  nav: {
    about: string;
    stack: string;
    projects: string;
    experience: string;
    contact: string;
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
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
    scrollAria: string;
    photoAlt: string;
    languages: { name: string; level: string }[];
  };
  about: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    summary: string[];
    statsLabels: string[];
  };
  stack: {
    eyebrow: string;
    title: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    problemLabel: string;
    contributionLabel: string;
    viewProject: string;
    viewCode: string;
    previewAlt: string;
    logoAlt: string;
    items: Record<string, { description: string; problem: string; contribution: string }>;
  };
  journey: {
    eyebrow: string;
    title: string;
    items: { title: string; place: string | null }[];
  };
  education: {
    eyebrowEducation: string;
    titleEducation: string;
    eyebrowCerts: string;
    titleCerts: string;
    issuedAt: string;
    items: { level: string; course: string }[];
    knowledgeAreas: string[];
    certifications: { title: string; issuedAt: string }[];
  };
  contact: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    cta: string;
    github: string;
    linkedin: string;
  };
  footer: {
    rights: string;
    githubAria: string;
    linkedinAria: string;
    mailAria: string;
  };
  projectPage: {
    back: string;
    visit: string;
    viewCode: string;
    problemLabel: string;
    contributionLabel: string;
    technologiesLabel: string;
    logoAlt: string;
    screenshotAlt: string;
  };
  common: {
    role: string;
    location: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    meta: { localeName: "Português", htmlLang: "pt-BR" },
    nav: {
      about: "Sobre",
      stack: "Stack",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
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
      badge: "Full Stack Developer",
      titleBefore: "Transformando ideias em ",
      titleHighlight: "experiências digitais",
      subtitle:
        "Desenvolvedor Full Stack especializado em criar aplicações web modernas, performáticas e escaláveis.",
      ctaProjects: "Ver projetos",
      ctaContact: "Entre em contato",
      scroll: "scroll",
      scrollAria: "Rolar para a seção Stack",
      photoAlt: "Foto de {name}",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Fluente" },
      ],
    },
    about: {
      eyebrow: "Sobre",
      titleBefore: "Front-end no coração, ",
      titleHighlight: "full stack",
      titleAfter: " na prática",
      summary: [
        "Desenvolvedor Full Stack com mais de 6 anos de experiência em tecnologia, atuando no desenvolvimento de aplicações web modernas, responsivas e escaláveis, com foco em performance, usabilidade e experiência do usuário.",
        "Tenho experiência com HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Python e SQL, além de Git para versionamento e boas práticas de desenvolvimento.",
        "Minha trajetória é fortemente voltada ao Front-End, mas venho ampliando minha atuação para o Back-End e arquitetura de aplicações, trabalhando com tecnologias como Node.js, Python, APIs, bancos de dados e Docker.",
        "Gosto de transformar problemas em soluções simples, eficientes e bem estruturadas, sempre buscando escrever código de qualidade e evoluir tecnicamente.",
      ],
      statsLabels: ["Anos de experiência", "Tecnologias", "Projetos em destaque", "Anos"],
    },
    stack: {
      eyebrow: "Stack",
      title: "Ferramentas que uso para dar vida a um produto",
    },
    projects: {
      eyebrow: "Projetos",
      title: "Produtos reais, do problema à solução",
      problemLabel: "Problema",
      contributionLabel: "Contribuição",
      viewProject: "Ver projeto",
      viewCode: "Ver código",
      previewAlt: "Prévia do projeto {name}",
      logoAlt: "Logo {name}",
      items: {
        puglisystems: {
          description:
            "Site institucional estático da Pugli Systems, apresentando o ecossistema da marca e sua primeira solução, a Cogni. Construído inteiramente em HTML, CSS e JavaScript puros, sem necessidade de build, bundler ou backend.",
          problem:
            "Projeto de página pessoal para apresentar habilidades e projetos de desenvolvimento web.",
          contribution: "Dev Front-End",
        },
        cogni: {
          description:
            "Landing page da Cogni, a primeira solução da Pugli Systems: uma plataforma de automação que identifica problemas a partir de eventos e decide com autonomia ajustável se apenas observa, sugere ou executa uma ação corretiva, sempre com trilha de auditoria completa.",
          problem:
            "Empresas recebem sinais operacionais (como um pagamento em atraso) que exigem reação rápida, mas hoje dependem de processos manuais lentos e sujeitos a falha humana.",
          contribution: "Dev Front-End",
        },
      },
    },
    journey: {
      eyebrow: "Trajetória",
      title: "Cada etapa, um novo commit",
      items: [
        { title: "Formação Técnica em Tecnologia da Informação", place: "Senac Brasil" },
        { title: "Tecnologia em Análise e Desenvolvimento de Sistemas", place: "Impacta Tecnologia" },
        { title: "Desenvolvimento Web", place: "Experiência profissional" },
        { title: "Atuação como Desenvolvedor Full Stack", place: null },
      ],
    },
    education: {
      eyebrowEducation: "Formação",
      titleEducation: "Base acadêmica",
      eyebrowCerts: "Certificações",
      titleCerts: "Aprendizado contínuo",
      issuedAt: "Emitida em",
      items: [
        { level: "Curso Superior de Tecnologia (CST)", course: "Análise e Desenvolvimento de Sistemas" },
        { level: "Curso Técnico Integrado", course: "Tecnologia da Informação" },
      ],
      knowledgeAreas: [
        "Desenvolvimento Web",
        "Programação Orientada a Objetos",
        "Engenharia de Software",
        "Python",
        "Banco de Dados",
        "SQL",
        "Estruturas de Dados",
        "Segurança da Informação",
        "Testes de Software",
        "Análise de Sistemas",
        "Redes",
        "Sistemas Operacionais",
      ],
      certifications: [
        { title: "User Experience", issuedAt: "Fevereiro de 2022" },
        { title: "Programação para Internet com JavaScript", issuedAt: "Maio de 2021" },
      ],
    },
    contact: {
      eyebrow: "Contato",
      titleBefore: "Vamos construir algo ",
      titleHighlight: "incrível",
      titleAfter: "?",
      subtitle: "Estou aberto a novos desafios, projetos e oportunidades.",
      cta: "Entrar em contato",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      githubAria: "GitHub de Thiago Servoli",
      linkedinAria: "LinkedIn de Thiago Servoli",
      mailAria: "Enviar e-mail para Thiago Servoli",
    },
    projectPage: {
      back: "Voltar aos projetos",
      visit: "Visitar projeto",
      viewCode: "Ver código",
      problemLabel: "Problema",
      contributionLabel: "Contribuição",
      technologiesLabel: "Tecnologias",
      logoAlt: "Logo {name}",
      screenshotAlt: "Screenshot do projeto {name}",
    },
    common: {
      role: "Desenvolvedor Full Stack",
      location: "São Paulo - SP, Brasil",
    },
  },
  en: {
    meta: { localeName: "English", htmlLang: "en" },
    nav: {
      about: "About",
      stack: "Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
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
      badge: "Full Stack Developer",
      titleBefore: "Turning ideas into ",
      titleHighlight: "digital experiences",
      subtitle:
        "Full Stack Developer specialized in building modern, high-performance and scalable web applications.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      scroll: "scroll",
      scrollAria: "Scroll to the Stack section",
      photoAlt: "Photo of {name}",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Fluent" },
      ],
    },
    about: {
      eyebrow: "About",
      titleBefore: "Front-end at heart, ",
      titleHighlight: "full stack",
      titleAfter: " in practice",
      summary: [
        "Full Stack Developer with over 6 years of experience in technology, building modern, responsive and scalable web applications with a focus on performance, usability and user experience.",
        "I have experience with HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Python and SQL, as well as Git for version control and development best practices.",
        "My background is strongly Front-End focused, but I've been expanding into Back-End and application architecture, working with technologies like Node.js, Python, APIs, databases and Docker.",
        "I enjoy turning problems into simple, efficient and well-structured solutions, always striving to write quality code and grow technically.",
      ],
      statsLabels: ["Years of experience", "Technologies", "Featured projects", "Years old"],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tools I use to bring a product to life",
    },
    projects: {
      eyebrow: "Projects",
      title: "Real products, from problem to solution",
      problemLabel: "Problem",
      contributionLabel: "Contribution",
      viewProject: "View project",
      viewCode: "View code",
      previewAlt: "Preview of the {name} project",
      logoAlt: "{name} logo",
      items: {
        puglisystems: {
          description:
            "Static institutional website for Pugli Systems, showcasing the brand's ecosystem and its first solution, Cogni. Built entirely with plain HTML, CSS and JavaScript, with no build step, bundler or backend required.",
          problem: "Personal page project to showcase web development skills and projects.",
          contribution: "Front-End Developer",
        },
        cogni: {
          description:
            "Landing page for Cogni, Pugli Systems' first solution: an automation platform that identifies problems from events and, with adjustable autonomy, decides whether to simply observe, suggest, or execute a corrective action — always with a complete audit trail.",
          problem:
            "Companies receive operational signals (such as a late payment) that require a fast reaction, but today rely on slow manual processes prone to human error.",
          contribution: "Front-End Developer",
        },
      },
    },
    journey: {
      eyebrow: "Journey",
      title: "Every step, a new commit",
      items: [
        { title: "Technical Degree in Information Technology", place: "Senac Brasil" },
        { title: "Associate Degree in Systems Analysis and Development", place: "Impacta Tecnologia" },
        { title: "Web Development", place: "Professional experience" },
        { title: "Working as a Full Stack Developer", place: null },
      ],
    },
    education: {
      eyebrowEducation: "Education",
      titleEducation: "Academic background",
      eyebrowCerts: "Certifications",
      titleCerts: "Continuous learning",
      issuedAt: "Issued in",
      items: [
        { level: "Technology Degree (Associate)", course: "Systems Analysis and Development" },
        { level: "Integrated Technical Course", course: "Information Technology" },
      ],
      knowledgeAreas: [
        "Web Development",
        "Object-Oriented Programming",
        "Software Engineering",
        "Python",
        "Databases",
        "SQL",
        "Data Structures",
        "Information Security",
        "Software Testing",
        "Systems Analysis",
        "Networking",
        "Operating Systems",
      ],
      certifications: [
        { title: "User Experience", issuedAt: "February 2022" },
        { title: "Internet Programming with JavaScript", issuedAt: "May 2021" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      titleBefore: "Let's build something ",
      titleHighlight: "amazing",
      titleAfter: "?",
      subtitle: "I'm open to new challenges, projects and opportunities.",
      cta: "Get in touch",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
      githubAria: "Thiago Servoli's GitHub",
      linkedinAria: "Thiago Servoli's LinkedIn",
      mailAria: "Send an email to Thiago Servoli",
    },
    projectPage: {
      back: "Back to projects",
      visit: "Visit project",
      viewCode: "View code",
      problemLabel: "Problem",
      contributionLabel: "Contribution",
      technologiesLabel: "Technologies",
      logoAlt: "{name} logo",
      screenshotAlt: "Screenshot of the {name} project",
    },
    common: {
      role: "Full Stack Developer",
      location: "São Paulo - SP, Brazil",
    },
  },
  es: {
    meta: { localeName: "Español", htmlLang: "es" },
    nav: {
      about: "Acerca de",
      stack: "Stack",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
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
      badge: "Desarrollador Full Stack",
      titleBefore: "Transformando ideas en ",
      titleHighlight: "experiencias digitales",
      subtitle:
        "Desarrollador Full Stack especializado en crear aplicaciones web modernas, performantes y escalables.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Ponte en contacto",
      scroll: "scroll",
      scrollAria: "Desplazarse a la sección Stack",
      photoAlt: "Foto de {name}",
      languages: [
        { name: "Portugués", level: "Nativo" },
        { name: "Inglés", level: "Fluido" },
      ],
    },
    about: {
      eyebrow: "Acerca de",
      titleBefore: "Front-end de corazón, ",
      titleHighlight: "full stack",
      titleAfter: " en la práctica",
      summary: [
        "Desarrollador Full Stack con más de 6 años de experiencia en tecnología, dedicado al desarrollo de aplicaciones web modernas, responsivas y escalables, con foco en rendimiento, usabilidad y experiencia de usuario.",
        "Tengo experiencia con HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Python y SQL, además de Git para control de versiones y buenas prácticas de desarrollo.",
        "Mi trayectoria está fuertemente orientada al Front-End, pero he ido ampliando mi actuación hacia el Back-End y la arquitectura de aplicaciones, trabajando con tecnologías como Node.js, Python, APIs, bases de datos y Docker.",
        "Me gusta transformar problemas en soluciones simples, eficientes y bien estructuradas, siempre buscando escribir código de calidad y evolucionar técnicamente.",
      ],
      statsLabels: ["Años de experiencia", "Tecnologías", "Proyectos destacados", "Años"],
    },
    stack: {
      eyebrow: "Stack",
      title: "Herramientas que uso para darle vida a un producto",
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Productos reales, del problema a la solución",
      problemLabel: "Problema",
      contributionLabel: "Contribución",
      viewProject: "Ver proyecto",
      viewCode: "Ver código",
      previewAlt: "Vista previa del proyecto {name}",
      logoAlt: "Logo de {name}",
      items: {
        puglisystems: {
          description:
            "Sitio institucional estático de Pugli Systems, que presenta el ecosistema de la marca y su primera solución, Cogni. Construido íntegramente en HTML, CSS y JavaScript puros, sin necesidad de build, bundler ni backend.",
          problem: "Proyecto de página personal para presentar habilidades y proyectos de desarrollo web.",
          contribution: "Dev Front-End",
        },
        cogni: {
          description:
            "Landing page de Cogni, la primera solución de Pugli Systems: una plataforma de automatización que identifica problemas a partir de eventos y decide, con autonomía ajustable, si solo observa, sugiere o ejecuta una acción correctiva, siempre con un registro de auditoría completo.",
          problem:
            "Las empresas reciben señales operativas (como un pago atrasado) que exigen una reacción rápida, pero hoy dependen de procesos manuales lentos y propensos a fallos humanos.",
          contribution: "Dev Front-End",
        },
      },
    },
    journey: {
      eyebrow: "Trayectoria",
      title: "Cada etapa, un nuevo commit",
      items: [
        { title: "Formación Técnica en Tecnología de la Información", place: "Senac Brasil" },
        { title: "Tecnología en Análisis y Desarrollo de Sistemas", place: "Impacta Tecnologia" },
        { title: "Desarrollo Web", place: "Experiencia profesional" },
        { title: "Actuación como Desarrollador Full Stack", place: null },
      ],
    },
    education: {
      eyebrowEducation: "Formación",
      titleEducation: "Base académica",
      eyebrowCerts: "Certificaciones",
      titleCerts: "Aprendizaje continuo",
      issuedAt: "Emitida en",
      items: [
        { level: "Curso Superior de Tecnología (CST)", course: "Análisis y Desarrollo de Sistemas" },
        { level: "Curso Técnico Integrado", course: "Tecnología de la Información" },
      ],
      knowledgeAreas: [
        "Desarrollo Web",
        "Programación Orientada a Objetos",
        "Ingeniería de Software",
        "Python",
        "Bases de Datos",
        "SQL",
        "Estructuras de Datos",
        "Seguridad de la Información",
        "Pruebas de Software",
        "Análisis de Sistemas",
        "Redes",
        "Sistemas Operativos",
      ],
      certifications: [
        { title: "Experiencia de Usuario", issuedAt: "Febrero de 2022" },
        { title: "Programación para Internet con JavaScript", issuedAt: "Mayo de 2021" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      titleBefore: "¿Construimos algo ",
      titleHighlight: "increíble",
      titleAfter: "?",
      subtitle: "Estoy abierto a nuevos desafíos, proyectos y oportunidades.",
      cta: "Ponte en contacto",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      githubAria: "GitHub de Thiago Servoli",
      linkedinAria: "LinkedIn de Thiago Servoli",
      mailAria: "Enviar un correo a Thiago Servoli",
    },
    projectPage: {
      back: "Volver a proyectos",
      visit: "Visitar proyecto",
      viewCode: "Ver código",
      problemLabel: "Problema",
      contributionLabel: "Contribución",
      technologiesLabel: "Tecnologías",
      logoAlt: "Logo de {name}",
      screenshotAlt: "Captura del proyecto {name}",
    },
    common: {
      role: "Desarrollador Full Stack",
      location: "São Paulo - SP, Brasil",
    },
  },
};
