import { technologies } from "@/data/technologies";
import TechIcon from "@/components/TechIcon";

/** Faixa contínua com os logos da stack. Animação 100% CSS (transform). */
export default function TechMarquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={hidden || undefined}>
      {technologies.map((tech) => (
        <li key={tech.name} className="flex items-center gap-3 whitespace-nowrap">
          <TechIcon name={tech.name} className="text-2xl" />
          <span className="text-[15px] font-semibold text-fg2">{tech.name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mask-fade-x group overflow-hidden border-y border-line/10 bg-card/60 py-5">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
