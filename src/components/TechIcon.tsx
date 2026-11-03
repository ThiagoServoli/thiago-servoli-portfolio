import type { ReactNode } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFastapi,
  SiGithub,
} from "react-icons/si";
import { Database, Webhook } from "lucide-react";

interface TechBrand {
  icon: ReactNode;
  /** Cor oficial da marca. "currentColor" para logos monocromáticos (ex.: Next.js) */
  color: string;
}

export const techBrands: Record<string, TechBrand> = {
  HTML5: { icon: <SiHtml5 />, color: "#E34F26" },
  CSS3: { icon: <SiCss3 />, color: "#1572B6" },
  JavaScript: { icon: <SiJavascript />, color: "#F7DF1E" },
  TypeScript: { icon: <SiTypescript />, color: "#3178C6" },
  React: { icon: <SiReact />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs />, color: "currentColor" },
  "Node.js": { icon: <SiNodedotjs />, color: "#5FA04E" },
  Python: { icon: <SiPython />, color: "#3776AB" },
  FastAPI: { icon: <SiFastapi />, color: "#009688" },
  SQL: { icon: <Database size="1em" />, color: "#00758F" },
  PostgreSQL: { icon: <SiPostgresql />, color: "#4169E1" },
  "APIs REST": { icon: <Webhook size="1em" />, color: "#FF6C37" },
  Git: { icon: <SiGit />, color: "#F05032" },
  GitHub: { icon: <SiGithub />, color: "currentColor" },
  Docker: { icon: <SiDocker />, color: "#2496ED" },
};

export default function TechIcon({ name, className }: { name: string; className?: string }) {
  const brand = techBrands[name];
  if (!brand) return null;
  return (
    <span className={className} style={{ color: brand.color }} aria-hidden="true">
      {brand.icon}
    </span>
  );
}
