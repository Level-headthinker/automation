"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.05), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>Pricing</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-fg mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Simple, <GradientText>Transparent Pricing</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="text-lg text-fg-muted max-w-xl mx-auto"
          >
            Start with what you need. Scale when you grow. Cancel anytime — no
            lock-in, no hidden fees.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative rounded-2xl border flex flex-col",
                plan.highlighted
                  ? "border-violet bg-violet-muted ring-1 ring-violet/30 shadow-[0_0_40px_rgba(124,58,237,0.15)]"
                  : "glass-card border-border"
              )}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div
                    className="flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "var(--gradient)" }}
                  >
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Plan name */}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-fg mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-fg-muted">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    {plan.currency && (
                      <span className="text-sm font-semibold text-fg-muted mb-1">
                        {plan.currency}
                      </span>
                    )}
                    <span
                      className={cn(
                        "font-display font-bold leading-none",
                        plan.price === "Custom"
                          ? "text-3xl text-fg"
                          : "text-4xl gradient-text"
                      )}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-fg-subtle mt-1">{plan.period}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-fg-muted"
                    >
                      <div className="w-5 h-5 rounded-full bg-violet flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="w-full"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-fg-subtle mt-8"
        >
          All plans include a 14-day free trial. No credit card required to start.
          Pricing shown for ClinicBot — other products priced similarly.
        </motion.p>
      </div>
    </section>
  );
}
