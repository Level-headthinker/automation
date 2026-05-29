"use client";

import { motion } from "framer-motion";
import { Plug, Bot, TrendingUp } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { HOW_IT_WORKS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Plug,
  Bot,
  TrendingUp,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(124,58,237,0.05), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center mb-4"
          >
            <SectionLabel variant="cyan">How It Works</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-fg"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Up and Running in{" "}
            <GradientText>Three Simple Steps</GradientText>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden
            className="absolute top-16 left-1/2 -translate-x-1/2 w-[calc(66%-4rem)] h-px hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--violet), var(--cyan), transparent)",
              opacity: 0.3,
            }}
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = iconMap[step.icon];
              const isMiddle = i === 1;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-0 relative z-10"
                      style={{
                        background: isMiddle
                          ? "var(--gradient)"
                          : i === 0
                          ? "var(--violet-muted)"
                          : "var(--cyan-muted)",
                        boxShadow: isMiddle
                          ? "0 0 30px rgba(124,58,237,0.3)"
                          : "none",
                      }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{
                          color: isMiddle
                            ? "#fff"
                            : i === 0
                            ? "var(--violet)"
                            : "var(--cyan)",
                        }}
                      />
                    </div>
                    {/* Step badge */}
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "var(--gradient)" }}
                    >
                      {parseInt(step.step)}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-fg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
