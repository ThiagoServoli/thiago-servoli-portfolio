export interface Project {
  slug: string;
  name: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string | null;
  image: string;
  /** Dimensões reais da captura — usadas para exibir sem recorte nem ampliação */
  imageWidth: number;
  imageHeight: number;
  /** Ícone quadrado com fundo próprio — legível em tema claro e escuro */
  icon: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "puglisystems",
    name: "PugliSystems",
    description:
      "Site institucional estático da Pugli Systems, apresentando o ecossistema da marca e sua primeira solução, a Cogni. Construído inteiramente em HTML, CSS e JavaScript puros, sem necessidade de build, bundler ou backend.",
    problem:
      "Projeto de página pessoal para apresentar habilidades e projetos de desenvolvimento web.",
    contribution: "Dev Front-End",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    liveUrl: "https://thiagoservoli.github.io/puglisystems/",
    repoUrl: "https://github.com/ThiagoServoli",
    image: "/images/projects/screenpugli.png",
    imageWidth: 1902,
    imageHeight: 909,
    icon: "/images/brands/pugli-icon.png",
    featured: true,
  },
  {
    slug: "cogni",
    name: "Cogni",
    description:
      "Landing page da Cogni, a primeira solução da Pugli Systems: uma plataforma de automação que identifica problemas a partir de eventos e decide com autonomia ajustável se apenas observa, sugere ou executa uma ação corretiva, sempre com trilha de auditoria completa.",
    problem:
      "Empresas recebem sinais operacionais (como um pagamento em atraso) que exigem reação rápida, mas hoje dependem de processos manuais lentos e sujeitos a falha humana.",
    contribution: "Dev Front-End",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    liveUrl: "https://thiagoservoli.github.io/puglisystems/cogni.html",
    repoUrl: "https://github.com/ThiagoServoli",
    image: "/images/projects/screencogni.png",
    imageWidth: 1900,
    imageHeight: 907,
    icon: "/images/brands/cogni-icon.png",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}