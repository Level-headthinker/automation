import { GradientText } from "@/components/ui/GradientText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;
  labelVariant?: "violet" | "cyan";
  title: React.ReactNode;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  label,
  labelVariant = "violet",
  title,
  description,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden",
        className
      )}
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,102,204,0.1), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <div className="flex justify-center mb-5">
            <SectionLabel variant={labelVariant}>{label}</SectionLabel>
          </div>
        )}
        <h1
          className="font-display font-bold text-fg leading-tight mb-5"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
        >
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg lg:text-xl text-fg-muted max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export { GradientText };
