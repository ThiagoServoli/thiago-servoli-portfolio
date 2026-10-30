import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Cota de desenho técnico: |◄──── rótulo ────►| */
export function DimensionLine({
  children,
  className,
  tone = "accent",
}: {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "light";
}) {
  const color = tone === "light" ? "text-white/60" : "text-accent/60";
  const arrow = (dir: "left" | "right") => (
    <svg
      viewBox="0 0 8 8"
      className={cn("h-2 w-2 shrink-0 fill-current", dir === "right" && "rotate-180")}
      aria-hidden="true"
    >
      <path d="M0 4 L8 0 L8 8 Z" />
    </svg>
  );

  return (
    <div className={cn("flex items-center", color, className)}>
      <span className="h-3 w-px bg-current" aria-hidden="true" />
      {arrow("left")}
      <span className="h-px flex-1 bg-current" aria-hidden="true" />
      <span className="px-3 text-xs font-semibold uppercase tracking-[0.16em]">{children}</span>
      <span className="h-px flex-1 bg-current" aria-hidden="true" />
      {arrow("right")}
      <span className="h-3 w-px bg-current" aria-hidden="true" />
    </div>
  );
}

/** Marca de registro (alvo de alinhamento usado em impressão e plantas) */
export function RegistrationMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} aria-hidden="true">
      <circle cx="12" cy="12" r="6" fill="none" className="bp-stroke" strokeWidth="1" />
      <path d="M12 0 V24 M0 12 H24" className="bp-stroke" strokeWidth="1" />
    </svg>
  );
}

/** Marcas de corte nos quatro cantos do elemento pai (que precisa ser relative) */
export function CropMarks({ className, inset = -10 }: { className?: string; inset?: number }) {
  const corners = [
    { top: inset, left: inset, rotate: 0 },
    { top: inset, right: inset, rotate: 90 },
    { bottom: inset, right: inset, rotate: 180 },
    { bottom: inset, left: inset, rotate: 270 },
  ];
  return (
    <>
      {corners.map(({ rotate, ...pos }) => (
        <svg
          key={rotate}
          viewBox="0 0 14 14"
          className={cn("pointer-events-none absolute h-3.5 w-3.5", className)}
          style={{ ...pos, transform: `rotate(${rotate}deg)` }}
          aria-hidden="true"
        >
          <path d="M0 14 V0 H14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ))}
    </>
  );
}

/**
 * Chamada de detalhe: círculo dividido ao meio, com o número da seção em cima
 * e o total de seções embaixo — como nas pranchas de arquitetura.
 */
export function SectionCallout({
  index,
  total = "07",
  tone = "accent",
  className,
}: {
  index: string;
  total?: string;
  tone?: "accent" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-full border-[1.5px] border-current",
        tone === "light" ? "text-white" : "text-accent",
        className
      )}
      aria-hidden="true"
    >
      <span className="text-[11px] font-bold leading-none">{index}</span>
      <span className="my-[3px] h-px w-full bg-current" />
      <span className="text-[9px] font-semibold leading-none opacity-70">{total}</span>
    </span>
  );
}
