export type TechCategory = "frontend" | "backend" | "tools";

export interface Technology {
  name: string;
  category: TechCategory;
  /** Em estudo (ainda não usada em produção) — aparece com selo próprio */
  learning?: boolean;
}

export const technologies: Technology[] = [
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "APIs REST", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Docker", category: "tools", learning: true },
];
