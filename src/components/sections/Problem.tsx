"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Clock, ArrowRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { PROBLEMS, SOLUTION } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Phone,
  Calendar,
  Clock,
};

export function Problem() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(14,165,233,0.05), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Problem ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <SectionLabel variant="cyan">The Problem</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-fg mb-4"
            style={{ fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}
          >
            Running a Service Business{" "}
            <GradientText>Without Automation</GradientText>{" "}
            is Costing You Every Day
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-fg-muted max-w-2xl mx-auto"
          >
            While you&apos;re handling admin manually, your competitors are growing faster
            with AI. Every missed call is a missed patient. Every manual task is wasted
            time.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {PROBLEMS.map((problem, i) => {
            const Icon = iconMap[problem.icon];
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass-card rounded-2xl p-6 border border-border relative group hover:border-border-strong transition-all duration-300"
              >
                {/* Red X badge */}
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-display font-semibold text-fg text-lg mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Solution Bridge ── */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-violet opacity-60" />
            <div className="w-10 h-10 rounded-full bg-violet flex items-center justify-center shadow-[0_0_20px_rgba(0,102,204,0.4)]">
              <ArrowRight className="w-4 h-4 text-white rotate-90" />
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-violet via-border to-transparent opacity-60" />
          </div>
        </div>

        {/* ── Solution ── */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <SectionLabel variant="violet">The Solution</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-fg mb-4"
            style={{ fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}
          >
            {SOLUTION.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-fg-muted mb-8"
          >
            {SOLUTION.subheadline}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3 text-left inline-block"
          >
            {SOLUTION.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-fg-muted">
                <div className="w-5 h-5 rounded-full bg-violet flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
