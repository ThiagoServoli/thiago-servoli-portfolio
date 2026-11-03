import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverted" | "invertedOutline";
  className?: string;
  external?: boolean;
  /** Baixa o arquivo em vez de abrir (ex.: currículo em PDF) */
  download?: boolean;
}

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "border border-line/20 text-fg hover:border-accent hover:text-accent",
  // Para uso sobre fundos azul-marinho (ex.: seção de contato)
  inverted: "bg-white text-navy hover:bg-white/90",
  invertedOutline: "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  download = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download || undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-[15px] font-semibold transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </a>
  );
}
