export type Locale = "pt" | "en" | "es";

export interface Dictionary {
  meta: {
    localeName: string;
    htmlLang: string;
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
    photoAlt: string;
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
    categories: Record<"frontend" | "backend" | "tools", string>;
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
    items: { title: string; place: string | null; focus: string; tags: string[] }[];
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
    title: string;
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
  /** Falas do avatar, uma por seção da página */
  avatar: Record<"inicio" | "sobre" | "stack" | "projetos" | "trajetoria" | "formacao" | "contato", string>;
}

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    meta: { localeName: "Português", htmlLang: "pt-BR" },
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
        focusValue: "React · Next.js · Node.js",
      },
      subtitle:
        "Desenvolvo aplicações web com React, Next.js, TypeScript e Node.js, do front-end à integração com APIs e bancos de dados. Mais de 6 anos em tecnologia, com foco em código bem estruturado, performance e boa experiência de uso.",
      ctaProjects: "Ver projetos",
      ctaContact: "Entre em contato",
      photoAlt: "Foto de {name}",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Fluente" },
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Front-end como base, full stack na prática",
      summary: [
        "Desenvolvedor Full Stack com mais de 6 anos de experiência em tecnologia, atuando no desenvolvimento de aplicações web modernas, responsivas e escaláveis, com foco em performance, usabilidade e experiência do usuário.",
        "Tenho experiência com HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Python e SQL, além de Git para versionamento e boas práticas de desenvolvimento.",
        "Minha trajetória é fortemente voltada ao Front-End, mas venho ampliando minha atuação para o Back-End e arquitetura de aplicações, trabalhando com tecnologias como Node.js, Python, APIs, bancos de dados e Docker.",
        "Gosto de transformar problemas em soluções simples, eficientes e bem estruturadas, sempre buscando escrever código de qualidade e evoluir tecnicamente.",
      ],
      statsLabels: ["Anos em tecnologia", "Tecnologias", "Projetos em destaque"],
      specTitle: "Ficha técnica",
      specs: [
        { label: "Nome", value: "Thiago Servoli da Silva" },
        { label: "Função", value: "Desenvolvedor Full Stack" },
        { label: "Base", value: "São Paulo — SP, Brasil" },
        { label: "Experiência", value: "6+ anos em tecnologia" },
        { label: "Idiomas", value: "Português (nativo) · Inglês (fluente)" },
        { label: "Especialidade", value: "Front-end — React, Next.js, TypeScript" },
        { label: "Em expansão", value: "Back-end — Node.js, Python, APIs, Docker" },
      ],
      pillars: ["Stack", "Trajetória", "Abordagem"],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologias com que trabalho",
      categories: { frontend: "Front-end", backend: "Back-end e dados", tools: "Ferramentas" },
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos selecionados",
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
      title: "Trajetória profissional",
      items: [
        {
          title: "Formação Técnica em Tecnologia da Informação",
          place: "Senac Brasil",
          focus: "Base técnica em Tecnologia da Informação — o ponto de partida na área.",
          tags: ["Tecnologia da Informação", "Lógica de programação"],
        },
        {
          title: "Tecnologia em Análise e Desenvolvimento de Sistemas",
          place: "Impacta Tecnologia",
          focus: "Graduação tecnológica com foco em engenharia de software, banco de dados e desenvolvimento de sistemas.",
          tags: ["Engenharia de Software", "SQL", "POO"],
        },
        {
          title: "Desenvolvimento Web",
          place: "Experiência profissional",
          focus: "Atuação profissional em desenvolvimento web, com foco em front-end: interfaces responsivas, performance e experiência do usuário.",
          tags: ["HTML5", "CSS3", "JavaScript", "React"],
        },
        {
          title: "Atuação como Desenvolvedor Full Stack",
          place: null,
          focus: "Ampliando a atuação para back-end e arquitetura de aplicações.",
          tags: ["Next.js", "Node.js", "Python", "Docker"],
        },
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
      title: "Vamos conversar sobre o seu projeto",
      subtitle: "Estou aberto a novos desafios, projetos e oportunidades.",
      cta: "Enviar e-mail",
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
    avatar: {
      inicio: "Oi! Esse sou eu, em versão ilustrada.",
      sobre: "Um pouco sobre mim.",
      stack: "Minhas ferramentas do dia a dia.",
      projetos: "Dá uma olhada nesses projetos!",
      trajetoria: "Vem comigo pela minha trajetória.",
      formacao: "Estudar faz parte do trabalho.",
      contato: "Bora conversar?",
    },
  },
  en: {
    meta: { localeName: "English", htmlLang: "en" },
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
        focusValue: "React · Next.js · Node.js",
      },
      subtitle:
        "I build web applications with React, Next.js, TypeScript and Node.js, from the front end to API and database integration. Over 6 years in technology, focused on well-structured code, performance and a good user experience.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      photoAlt: "Photo of {name}",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Fluent" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Front-end at the core, full stack in practice",
      summary: [
        "Full Stack Developer with over 6 years of experience in technology, building modern, responsive and scalable web applications with a focus on performance, usability and user experience.",
        "I have experience with HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Python and SQL, as well as Git for version control and development best practices.",
        "My background is strongly Front-End focused, but I've been expanding into Back-End and application architecture, working with technologies like Node.js, Python, APIs, databases and Docker.",
        "I enjoy turning problems into simple, efficient and well-structured solutions, always striving to write quality code and grow technically.",
      ],
      statsLabels: ["Years in technology", "Technologies", "Featured projects"],
      specTitle: "Spec sheet",
      specs: [
        { label: "Name", value: "Thiago Servoli da Silva" },
        { label: "Role", value: "Full Stack Developer" },
        { label: "Based in", value: "São Paulo — SP, Brazil" },
        { label: "Experience", value: "6+ years in technology" },
        { label: "Languages", value: "Portuguese (native) · English (fluent)" },
        { label: "Specialty", value: "Front-end — React, Next.js, TypeScript" },
        { label: "Expanding into", value: "Back-end — Node.js, Python, APIs, Docker" },
      ],
      pillars: ["Stack", "Path", "Approach"],
    },
    stack: {
      eyebrow: "Stack",
      title: "Technologies I work with",
      categories: { frontend: "Front-end", backend: "Back-end & data", tools: "Tools" },
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work",
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
      title: "Career path",
      items: [
        {
          title: "Technical Degree in Information Technology",
          place: "Senac Brasil",
          focus: "Technical foundation in Information Technology — where it all started.",
          tags: ["Information Technology", "Programming logic"],
        },
        {
          title: "Associate Degree in Systems Analysis and Development",
          place: "Impacta Tecnologia",
          focus: "Technology degree focused on software engineering, databases and systems development.",
          tags: ["Software Engineering", "SQL", "OOP"],
        },
        {
          title: "Web Development",
          place: "Professional experience",
          focus: "Professional web development work, focused on the front end: responsive interfaces, performance and user experience.",
          tags: ["HTML5", "CSS3", "JavaScript", "React"],
        },
        {
          title: "Working as a Full Stack Developer",
          place: null,
          focus: "Expanding into back-end and application architecture.",
          tags: ["Next.js", "Node.js", "Python", "Docker"],
        },
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
      title: "Let's talk about your project",
      subtitle: "I'm open to new challenges, projects and opportunities.",
      cta: "Send an email",
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
    avatar: {
      inicio: "Hi! That's me, illustrated.",
      sobre: "A little about me.",
      stack: "My everyday tools.",
      projetos: "Take a look at these projects!",
      trajetoria: "Walk with me through my path.",
      formacao: "Learning is part of the job.",
      contato: "Shall we talk?",
    },
  },
  es: {
    meta: { localeName: "Español", htmlLang: "es" },
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
        focusValue: "React · Next.js · Node.js",
      },
      subtitle:
        "Desarrollo aplicaciones web con React, Next.js, TypeScript y Node.js, desde el front-end hasta la integración con APIs y bases de datos. Más de 6 años en tecnología, con foco en código bien estructurado, rendimiento y una buena experiencia de uso.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Ponte en contacto",
      photoAlt: "Foto de {name}",
      languages: [
        { name: "Portugués", level: "Nativo" },
        { name: "Inglés", level: "Fluido" },
      ],
    },
    about: {
      eyebrow: "Acerca de",
      title: "Front-end como base, full stack en la práctica",
      summary: [
        "Desarrollador Full Stack con más de 6 años de experiencia en tecnología, dedicado al desarrollo de aplicaciones web modernas, responsivas y escalables, con foco en rendimiento, usabilidad y experiencia de usuario.",
        "Tengo experiencia con HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Python y SQL, además de Git para control de versiones y buenas prácticas de desarrollo.",
        "Mi trayectoria está fuertemente orientada al Front-End, pero he ido ampliando mi actuación hacia el Back-End y la arquitectura de aplicaciones, trabajando con tecnologías como Node.js, Python, APIs, bases de datos y Docker.",
        "Me gusta transformar problemas en soluciones simples, eficientes y bien estructuradas, siempre buscando escribir código de calidad y evolucionar técnicamente.",
      ],
      statsLabels: ["Años en tecnología", "Tecnologías", "Proyectos destacados"],
      specTitle: "Ficha técnica",
      specs: [
        { label: "Nombre", value: "Thiago Servoli da Silva" },
        { label: "Rol", value: "Desarrollador Full Stack" },
        { label: "Base", value: "São Paulo — SP, Brasil" },
        { label: "Experiencia", value: "6+ años en tecnología" },
        { label: "Idiomas", value: "Portugués (nativo) · Inglés (fluido)" },
        { label: "Especialidad", value: "Front-end — React, Next.js, TypeScript" },
        { label: "En expansión", value: "Back-end — Node.js, Python, APIs, Docker" },
      ],
      pillars: ["Stack", "Trayectoria", "Enfoque"],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologías con las que trabajo",
      categories: { frontend: "Front-end", backend: "Back-end y datos", tools: "Herramientas" },
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos seleccionados",
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
      title: "Trayectoria profesional",
      items: [
        {
          title: "Formación Técnica en Tecnología de la Información",
          place: "Senac Brasil",
          focus: "Base técnica en Tecnología de la Información — el punto de partida.",
          tags: ["Tecnología de la Información", "Lógica de programación"],
        },
        {
          title: "Tecnología en Análisis y Desarrollo de Sistemas",
          place: "Impacta Tecnologia",
          focus: "Carrera tecnológica enfocada en ingeniería de software, bases de datos y desarrollo de sistemas.",
          tags: ["Ingeniería de Software", "SQL", "POO"],
        },
        {
          title: "Desarrollo Web",
          place: "Experiencia profesional",
          focus: "Trabajo profesional en desarrollo web, con foco en front-end: interfaces responsivas, rendimiento y experiencia de usuario.",
          tags: ["HTML5", "CSS3", "JavaScript", "React"],
        },
        {
          title: "Actuación como Desarrollador Full Stack",
          place: null,
          focus: "Ampliando mi actuación hacia el back-end y la arquitectura de aplicaciones.",
          tags: ["Next.js", "Node.js", "Python", "Docker"],
        },
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
      title: "Hablemos de tu proyecto",
      subtitle: "Estoy abierto a nuevos desafíos, proyectos y oportunidades.",
      cta: "Enviar un correo",
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
    avatar: {
      inicio: "¡Hola! Ese soy yo, en versión ilustrada.",
      sobre: "Un poco sobre mí.",
      stack: "Mis herramientas del día a día.",
      projetos: "¡Échale un vistazo a estos proyectos!",
      trajetoria: "Acompáñame por mi trayectoria.",
      formacao: "Estudiar es parte del trabajo.",
      contato: "¿Hablamos?",
    },
  },
};
