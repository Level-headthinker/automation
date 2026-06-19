"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Zap, TrendingDown, Timer } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { METRICS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  Zap,
  TrendingDown,
  Timer,
};

function AnimatedCounter({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,102,204,0.06), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center mb-4"
          >
            <SectionLabel variant="cyan">Results</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-fg"
            style={{ fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}
          >
            Numbers That Speak for Themselves
          </motion.h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {METRICS.map((metric, i) => {
            const Icon = iconMap[metric.icon];
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-2xl border border-border p-6 text-center hover:border-border-strong transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-5 h-5 text-violet" />
                </div>
                <div
                  className="font-display font-bold gradient-text mb-1"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
                >
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                    started={inView}
                  />
                </div>
                <div className="text-sm text-fg-muted">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
