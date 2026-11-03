import Reveal from "@/components/Reveal";

/**
 * Quebra de seção editorial: dois fios que se desenham das bordas para o
 * centro (.rule-draw / .rule-draw-end) em volta de um ornamento discreto.
 */
export default function SectionDivider() {
  return (
    <div className="px-6 lg:px-10" aria-hidden="true">
      <Reveal className="mx-auto flex max-w-content items-center gap-5">
        <span className="rule-draw h-px flex-1 bg-line/20" />
        <span className="flex items-center gap-2.5">
          <span className="h-1 w-1 rounded-full bg-accent/50" />
          <span className="h-2 w-2 rotate-45 bg-accent" />
          <span className="h-1 w-1 rounded-full bg-accent/50" />
        </span>
        <span className="rule-draw rule-draw-end h-px flex-1 bg-line/20" />
      </Reveal>
    </div>
  );
}
