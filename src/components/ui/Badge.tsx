import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "violet" | "cyan" | "success" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border tracking-wide",
        {
          "text-xs px-2.5 py-1": size === "sm",
          "text-sm px-3.5 py-1.5": size === "md",
        },
        {
          "bg-surface border-border text-fg-muted": variant === "default",
          "bg-violet-muted border-[rgba(124,58,237,0.25)] text-violet": variant === "violet",
          "bg-cyan-muted border-[rgba(6,182,212,0.25)] text-cyan": variant === "cyan",
          "bg-[rgba(16,185,129,0.1)] border-[rgba(16,185,129,0.25)] text-emerald-400 dark:text-emerald-400 text-emerald-600":
            variant === "success",
          "bg-transparent border-border text-fg-muted": variant === "outline",
        },
        className
      )}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", {
            "bg-violet": variant === "violet",
            "bg-cyan": variant === "cyan",
            "bg-emerald-400": variant === "success",
            "bg-fg-subtle": variant === "default" || variant === "outline",
          })}
        />
      )}
      {children}
    </span>
  );
}
