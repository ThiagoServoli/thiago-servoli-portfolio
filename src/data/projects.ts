export interface Project {
  slug: string;
  code: string;
  name: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string | null;
  image: string;
  logo: string;
  accentColor: string;
  featured: boolean;
}

/**
 * IMPORTANTE — Regra de conteúdo:
 * Apenas nome e URL de cada projeto foram fornecidos até o momento.
 * Descrição, problema, contribuição e tecnologias específicas ainda
 * não foram detalhadas — os campos abaixo usam placeholders explícitos
 * ([...]) em vez de conteúdo inventado. Atualize este arquivo com as
 * informações reais assim que estiverem disponíveis; nenhum outro
 * componente precisa ser alterado.
 */
export const projects: Project[] = [
  {
    slug: "puglisystems",
    code: "PROJECT 01",
    name: "PugliSystems",
    description: "[DESCRIÇÃO DO PROJETO PUGLISYSTEMS]",
    problem: "[PROBLEMA QUE O PROJETO RESOLVE]",
    contribution: "[CONTRIBUIÇÃO DE THIAGO NO PROJETO]",
    technologies: ["[TECNOLOGIAS UTILIZADAS]"],
    liveUrl: "https://thiagoservoli.github.io/puglisystems/",
    repoUrl: "https://github.com/ThiagoServoli",
    image: "/images/projects/project-01.webp",
    logo: "/images/brands/pugli-full-dark.png",
    accentColor: "#2f6bff",
    featured: true,
  },
  {
    slug: "cogni",
    code: "PROJECT 02",
    name: "Cogni",
    description: "[DESCRIÇÃO DO PROJETO COGNI]",
    problem: "[PROBLEMA QUE O PROJETO RESOLVE]",
    contribution: "[CONTRIBUIÇÃO DE THIAGO NO PROJETO]",
    technologies: ["[TECNOLOGIAS UTILIZADAS]"],
    liveUrl: "https://thiagoservoli.github.io/puglisystems/cogni.html",
    repoUrl: "https://github.com/ThiagoServoli",
    image: "/images/projects/project-02.webp",
    logo: "/images/brands/cogni-full.png",
    accentColor: "#39ff88",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
