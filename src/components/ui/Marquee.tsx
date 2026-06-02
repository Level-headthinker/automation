import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: readonly string[];
  reverse?: boolean;
  separator?: string;
  className?: string;
  itemClassName?: string;
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({
  items,
  reverse = false,
  separator = "·",
  className,
  itemClassName,
  speed = "normal",
}: MarqueeProps) {
  const duration = speed === "slow" ? "40s" : speed === "fast" ? "18s" : "28s";
  const doubled = [...items, ...items];

  return (
    <div className={cn("overflow-hidden relative", className)}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />

      <div
        className={cn(reverse ? "marquee-track-reverse" : "marquee-track")}
        style={{ animationDuration: duration }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              "flex items-center gap-3 sm:gap-4 px-3 sm:px-4 whitespace-nowrap text-sm font-medium",
              itemClassName
            )}
          >
            <span className="text-violet opacity-60">{separator}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
