import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "violet" | "cyan";
}

export function SectionLabel({
  children,
  className,
  variant = "violet",
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border",
        {
          "text-violet bg-violet-muted border-[rgba(124,58,237,0.2)]":
            variant === "violet",
          "text-cyan bg-cyan-muted border-[rgba(6,182,212,0.2)]":
            variant === "cyan",
        },
        className
      )}
    >
      <span
        className={cn("w-1.5 h-1.5 rounded-full animate-pulse", {
          "bg-violet": variant === "violet",
          "bg-cyan": variant === "cyan",
        })}
      />
      {children}
    </span>
  );
}
