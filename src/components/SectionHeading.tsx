import { cn } from "@/lib/utils";
import { SectionCallout } from "@/components/Blueprint";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ index, eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
        <SectionCallout index={index} />
        {eyebrow}
        <span className="flex items-center" aria-hidden="true">
          <span className="h-px w-10 bg-accent/40" />
          <span className="h-2 w-px bg-accent/40" />
        </span>
      </p>
      <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-fg sm:text-[2.6rem]">
        {title}
      </h2>
    </div>
  );
}
