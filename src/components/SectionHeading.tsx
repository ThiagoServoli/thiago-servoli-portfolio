import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
