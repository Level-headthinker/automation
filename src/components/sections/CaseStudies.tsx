"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { ParticleField } from "@/components/ui/ParticleField";
import { CASE_STUDIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  return (
    <section className="py-20 sm:py-28 bg-surface relative overflow-hidden">
      <ParticleField count={18} zone="full" className="opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} className="mb-4">
              <SectionLabel variant="cyan">Case Studies</SectionLabel>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display font-bold text-fg"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Real Results from <GradientText>Real Clinics</GradientText>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/#contact"
              className="flex items-center gap-2 text-sm font-medium text-violet hover:gap-3 transition-all duration-200 whitespace-nowrap">
              Get your case study <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              className="glow-card glass-card-hover rounded-2xl border border-border overflow-hidden group cursor-pointer"
            >
              {/* Gradient header */}
              <div className="relative h-40 overflow-hidden"
                style={{ background: `linear-gradient(135deg, var(--violet), var(--cyan))` }}>
                <div className="absolute inset-0 dot-pattern opacity-20" />

                {/* Metric */}
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <div className="font-display font-bold text-white text-3xl sm:text-4xl leading-none mb-1">
                      {study.metric}
                    </div>
                    <div className="text-white/70 text-xs">{study.metricLabel}</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Beam effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05), transparent)" }} />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={study.tagColor === "violet" ? "violet" : "cyan"} size="sm">
                    {study.tag}
                  </Badge>
                  <span className="text-xs text-fg-subtle">{study.industry}</span>
                </div>
                <h3 className="font-display font-bold text-fg text-lg mb-2 group-hover:text-violet transition-colors duration-200">
                  {study.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed mb-4">{study.description}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-violet">
                  <span className="font-bold text-sm">{study.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-sm text-fg-subtle mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          All metrics are from real ClinicBot deployments. Results vary by clinic size and location.
        </motion.p>
      </div>
    </section>
  );
}
