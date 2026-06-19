"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 relative overflow-hidden">
      {/* BG */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,102,204,0.05), transparent 70%)" }} />
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="flex justify-center mb-4">
            <SectionLabel>Pricing</SectionLabel>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-display font-bold text-fg mb-4"
            style={{ fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}>
            <GradientText>Transparent</GradientText> Pricing. No Surprises.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-fg-muted max-w-xl mx-auto">
            Start free for 14 days. No card required. Cancel anytime.
          </motion.p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: plan.highlighted ? -6 : -3 }}
              className={cn(
                "relative rounded-2xl border flex flex-col overflow-hidden",
                plan.highlighted
                  ? "border-violet/40 shadow-[0_0_60px_rgba(0,102,204,0.2)] bg-violet-muted"
                  : "glass-card border-border"
              )}
            >
              {/* Highlighted gradient top bar */}
              {plan.highlighted && (
                <div className="h-1 w-full animated-gradient" />
              )}

              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "var(--gradient)" }}>
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Plan name */}
                <h3 className="font-display font-bold text-xl text-fg mb-1">{plan.name}</h3>
                <p className="text-sm text-fg-muted mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-7 pb-7 border-b border-border">
                  <div className="flex items-end gap-1.5">
                    {plan.currency && (
                      <span className="text-sm font-semibold text-fg-subtle self-end mb-0.5">{plan.currency}</span>
                    )}
                    <span className={cn(
                      "font-display font-bold leading-none",
                      plan.price === "Custom" ? "text-3xl text-fg" : "text-4xl sm:text-5xl gradient-text"
                    )}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-fg-subtle mt-1.5">{plan.period}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-fg-muted">
                      <div className="w-5 h-5 rounded-full bg-violet flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/#contact"
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold",
                    "transition-all duration-200 group",
                    plan.highlighted
                      ? "btn-primary text-white"
                      : "border border-border text-fg hover:border-border-strong hover:bg-elevated"
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="text-center text-sm text-fg-subtle mt-8"
        >
          14-day free trial included. Pricing shown for ClinicBot — other products priced similarly.
        </motion.p>
      </div>
    </section>
  );
}
