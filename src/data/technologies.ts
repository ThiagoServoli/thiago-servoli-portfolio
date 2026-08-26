export type TechCategory = "frontend" | "backend" | "tools";

export interface Technology {
  name: string;
  category: TechCategory;
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
  { name: "SQL", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "APIs REST", category: "backend" },
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
];

export const categoryLabels: Record<TechCategory, string> = {
  frontend: "Front-End",
  backend: "Back-End & Dados",
  tools: "Ferramentas",
};
