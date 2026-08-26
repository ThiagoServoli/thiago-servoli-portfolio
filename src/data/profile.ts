export const profile = {
  name: "Thiago Servoli da Silva",
  displayName: "Thiago Servoli",
  role: "Desenvolvedor Full Stack",
  headline:
    "Full Stack Developer | JavaScript | TypeScript | React | Next.js | Python | SQL | Node.js",
  location: "São Paulo - SP, Brasil",
  email: "contatothisz@gmail.com",
  yearsOfExperience: 6,
  age: 25,
  summary: [
    "Desenvolvedor Full Stack com mais de 6 anos de experiência em tecnologia, atuando no desenvolvimento de aplicações web modernas, responsivas e escaláveis, com foco em performance, usabilidade e experiência do usuário.",
    "Tenho experiência com HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Python e SQL, além de Git para versionamento e boas práticas de desenvolvimento.",
    "Minha trajetória é fortemente voltada ao Front-End, mas venho ampliando minha atuação para o Back-End e arquitetura de aplicações, trabalhando com tecnologias como Node.js, Python, APIs, bancos de dados e Docker.",
    "Gosto de transformar problemas em soluções simples, eficientes e bem estruturadas, sempre buscando escrever código de qualidade e evoluir tecnicamente.",
  ],
  socials: {
    github: "https://github.com/ThiagoServoli",
    linkedin: null,
    instagram: null,
  },
  stats: [
    { value: 6, suffix: "+", label: "Anos de experiência" },
    { value: 13, suffix: "+", label: "Tecnologias" },
    { value: 2, suffix: "", label: "Projetos em destaque" },
    { value: 25, suffix: "", label: "Anos" },
  ],
  timeline: [
    {
      year: "2018",
      title: "Formação Técnica em Tecnologia da Informação",
      place: "Senac Brasil",
    },
    {
      year: "2020–2021",
      title: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      place: "Impacta Tecnologia",
    },
    {
      year: "2021+",
      title: "Desenvolvimento Web",
      place: "Experiência profissional",
    },
    {
      year: "2026",
      title: "Atuação como Desenvolvedor Full Stack",
      place: null,
    },
  ],
};

export type Profile = typeof profile;
