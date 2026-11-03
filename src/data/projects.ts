export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  kind: "desktop" | "mobile";
}

/** Dados técnicos de cada projeto; os textos (estudo de caso) ficam em translations.ts */
export interface Project {
  slug: string;
  name: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string | null;
  image: string;
  /** Dimensões reais da captura — usadas para exibir sem recorte nem ampliação */
  imageWidth: number;
  imageHeight: number;
  /** Ícone quadrado com fundo próprio — legível em tema claro e escuro */
  icon: string;
  /** Capturas reais do projeto publicado, exibidas na página do estudo de caso */
  gallery: GalleryImage[];
}

const gallery = (slug: string): GalleryImage[] => [
  { src: `/images/projects/gallery/${slug}-desktop-1.webp`, width: 1440, height: 900, kind: "desktop" },
  { src: `/images/projects/gallery/${slug}-desktop-2.webp`, width: 1440, height: 900, kind: "desktop" },
  { src: `/images/projects/gallery/${slug}-mobile-1.webp`, width: 780, height: 1688, kind: "mobile" },
];

export const projects: Project[] = [
  {
    slug: "click",
    name: "Click. Consultoria Digital",
    technologies: ["Next.js", "React", "Vercel", "reCAPTCHA", "Google Analytics"],
    liveUrl: "https://www.clickconsultoriabr.com.br/",
    repoUrl: null,
    image: "/images/projects/screenclick.png",
    imageWidth: 1900,
    imageHeight: 908,
    icon: "/images/brands/click-icon.png",
    gallery: gallery("click"),
  },
  {
    slug: "portfolio",
    name: "Portfólio",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://thiagoservoli.vercel.app/",
    repoUrl: "https://github.com/ThiagoServoli",
    image: "/images/projects/screenportfolio.png",
    imageWidth: 1900,
    imageHeight: 908,
    icon: "/images/brands/portfolio-icon.png",
    gallery: gallery("portfolio"),
  },
  {
    slug: "puglisystems",
    name: "PugliSystems",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    liveUrl: "https://thiagoservoli.github.io/puglisystems/",
    repoUrl: "https://github.com/ThiagoServoli",
    image: "/images/projects/screenpugli.png",
    imageWidth: 1902,
    imageHeight: 909,
    icon: "/images/brands/pugli-icon.png",
    gallery: gallery("puglisystems"),
  },
  {
    slug: "cogni",
    name: "Cogni",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    liveUrl: "https://thiagoservoli.github.io/puglisystems/cogni.html",
    repoUrl: "https://github.com/ThiagoServoli",
    image: "/images/projects/screencogni.png",
    imageWidth: 1900,
    imageHeight: 907,
    icon: "/images/brands/cogni-icon.png",
    gallery: gallery("cogni"),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
