"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Botão de expandir/recolher que só existe no celular (some a partir de md).
 * No tablet e no desktop o conteúdo controlado fica sempre visível.
 */
export default function MobileToggle({
  expanded,
  onToggle,
  controls,
  showLabel,
  hideLabel,
  className,
}: {
  expanded: boolean;
  onToggle: () => void;
  controls: string;
  showLabel: string;
  hideLabel: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      aria-controls={controls}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border border-line/20 bg-card px-5 py-3 text-[15px] font-semibold text-fg transition-colors hover:border-accent hover:text-accent md:hidden",
        className
      )}
    >
      {expanded ? hideLabel : showLabel}
      <ChevronDown
        size={17}
        className={cn("transition-transform duration-300 ease-premium", expanded && "rotate-180")}
        aria-hidden="true"
      />
    </button>
  );
}
