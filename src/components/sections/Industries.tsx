"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, UtensilsCrossed, Building2, HeadphonesIcon, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  UtensilsCrossed,
  Building2,
  HeadphonesIcon,
};

export function Industries() {
  const [active, setActive] = useState(INDUSTRIES[0].id);
  const activeIndustry = INDUSTRIES.find((i) => i.id === active)!;

  return (
    <section id="industries" className="py-24 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>Industries</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-fg"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Built for <GradientText>Your Industry</GradientText>
          </motion.h2>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {INDUSTRIES.map((industry) => {
            const Icon = iconMap[industry.icon];
            return (
              <button
                key={industry.id}
                onClick={() => setActive(industry.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                  active === industry.id
                    ? "bg-violet text-white shadow-[0_0_16px_rgba(124,58,237,0.3)]"
                    : "bg-bg border border-border text-fg-muted hover:border-border-strong hover:text-fg"
                )}
              >
                <Icon className="w-4 h-4" />
                {industry.label}
              </button>
            );
          })}
        </div>

        {/* Active industry content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-2xl border border-border p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {activeIndustry.status === "live" ? (
                  <Badge variant="success" dot>Live</Badge>
                ) : (
                  <Badge variant="default" dot>Coming Soon</Badge>
                )}
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-fg mb-4">
                {activeIndustry.headline}
              </h3>
              <p className="text-fg-muted leading-relaxed mb-8">
                {activeIndustry.description}
              </p>
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {activeIndustry.status === "live"
                  ? "Get Started Free"
                  : "Join the Waitlist"}
              </Button>
            </div>

            {/* Use cases */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-4">
                What gets automated:
              </p>
              <ul className="space-y-3">
                {activeIndustry.useCases.map((useCase, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="flex items-start gap-3 text-fg-muted"
                  >
                    <div className="w-5 h-5 rounded-full bg-violet flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{useCase}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
