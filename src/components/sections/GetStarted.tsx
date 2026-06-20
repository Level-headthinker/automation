"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";
import { GradientText } from "@/components/ui/GradientText";
import { BRAND } from "@/lib/constants";

export function GetStarted() {
  return (
    <section className="relative bg-[#070b14] overflow-hidden py-24 sm:py-32">
      {/* Top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT — particle funnel visual ── */}
          <div className="relative h-[260px] sm:h-[360px] hidden lg:block">
            {/* particle network confined to the left */}
            <ParticleNetwork count={60} maxDistance={110} speed={0.3} opacity={0.85} />

            {/* converging glow beam pointing toward the heading */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[3px] rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent, var(--violet), var(--cyan))",
                boxShadow: "0 0 24px rgba(0,102,204,0.6)",
              }} />
            {/* focal glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,102,204,0.25), transparent 70%)", filter: "blur(20px)" }} />
          </div>

          {/* ── RIGHT — copy + CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="dark"
          >
            <h2 className="font-display font-bold leading-[1.05] mb-6 text-fg"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Get started with <GradientText>{BRAND.name}</GradientText>
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white btn-primary">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border border-white/15 text-fg hover:bg-white/5 transition-colors">
                Book a Demo
              </Link>
            </div>

            <p className="text-base text-fg-muted leading-relaxed max-w-md">
              Use {BRAND.name}, the AI automation platform built for service
              businesses — to capture every lead and run your operations on autopilot.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
