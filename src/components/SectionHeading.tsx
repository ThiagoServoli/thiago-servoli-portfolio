interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  className?: string;
}

/**
 * Abertura de capítulo no estilo editorial: número, nome do capítulo e um fio
 * que se desenha quando o bloco é revelado (.rule-draw, ver globals.css).
 */
export default function SectionHeading({ index, eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em]">
        <span className="tabular-nums text-accent">{index}</span>
        <span className="text-fg3">{eyebrow}</span>
        <span className="rule-draw h-px flex-1 bg-line/15" aria-hidden="true" />
      </p>
      <h2 className="mt-6 max-w-3xl text-[2.1rem] font-bold leading-[1.08] tracking-[-0.025em] text-fg text-balance sm:text-[2.9rem]">
        {title}
      </h2>
    </div>
  );
}
