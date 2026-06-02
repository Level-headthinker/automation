"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="flex justify-center mb-4">
            <SectionLabel variant="cyan">Testimonials</SectionLabel>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-display font-bold text-fg"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Doctors Who <GradientText>Chose Automation</GradientText>
          </motion.h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl border border-border p-6 sm:p-7 flex flex-col relative overflow-hidden group"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: t.color === "violet"
                    ? "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(124,58,237,0.06), transparent)"
                    : "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(6,182,212,0.06), transparent)"
                }} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-fg-muted leading-relaxed flex-1 mb-6 relative">
                <span className="text-3xl leading-none text-violet/30 font-serif absolute -top-2 -left-1">&ldquo;</span>
                <span className="relative">{t.quote}</span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: t.color === "violet" ? "var(--gradient)" : "linear-gradient(135deg, var(--cyan), #0284c7)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-fg text-sm">{t.name}</div>
                  <div className="text-xs text-fg-subtle">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
