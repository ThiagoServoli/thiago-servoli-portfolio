"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
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
} from "react-icons/si";
import { Database, Webhook } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

interface Tech {
  name: string;
  icon: ReactNode;
  color: string;
}

const technologies: Tech[] = [
  { name: "HTML5", icon: <SiHtml5 />, color: "#ff6b4a" },
  { name: "CSS3", icon: <SiCss3 />, color: "#4a9fff" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#4a9fff" },
  { name: "React", icon: <SiReact />, color: "#61dafb" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#39ff88" },
  { name: "Python", icon: <SiPython />, color: "#4a9fff" },
  { name: "SQL", icon: <Database size={40} />, color: "#39ff88" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4a9fff" },
  { name: "APIs REST", icon: <Webhook size={40} />, color: "#39ff88" },
  { name: "Git", icon: <SiGit />, color: "#ff6b4a" },
  { name: "Docker", icon: <SiDocker />, color: "#4a9fff" },
];

function TechCard({ tech, index }: { tech: Tech; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -14;
    const rotateY = ((x - rect.width / 2) / rect.width) * 14;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(600px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <Reveal delay={index * 40}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor-hover
        className="card-glass card-neon-border group relative flex flex-col items-center gap-4 rounded-2xl px-6 py-8 text-center transition-transform duration-200 ease-out"
        style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(180px circle at var(--x) var(--y), ${tech.color}33, transparent 70%)`,
          }}
        />
        <div
          className="relative text-5xl transition-transform duration-300 group-hover:scale-110"
          style={{ color: tech.color, filter: `drop-shadow(0 0 14px ${tech.color}88)` }}
        >
          {tech.icon}
        </div>
        <span className="relative font-mono text-base font-bold text-fg">{tech.name}</span>
      </div>
    </Reveal>
  );
}

export default function Stack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="relative border-t border-line/10 px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-content">
        <Reveal className="mb-16 max-w-3xl">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-neon-green">
            {t.stack.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-fg sm:text-5xl">
            {t.stack.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
