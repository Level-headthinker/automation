"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, CheckCircle, Calendar, MessageCircle, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ParticleField } from "@/components/ui/ParticleField";
import { LightRays } from "@/components/ui/LightRays";
import { HERO } from "@/lib/constants";

/* ── word-by-word animation helper ── */
function AnimatedHeadline({ text, className, delay = 0 }: {
  text: string; className?: string; delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: delay + i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── floating notification badge ── */
function FloatBadge({ icon: Icon, text, color, className, delay = 0 }: {
  icon: React.ElementType; text: string; color: string;
  className?: string; delay?: number;
}) {
  return (
    <motion.div
      className={`absolute glass-card rounded-xl border border-border px-3 py-2 flex items-center gap-2 shadow-md z-20 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: color === "violet" ? "var(--violet)" : color === "cyan" ? "var(--cyan)" : "#10b981" }}
      >
        <Icon className="w-2.5 h-2.5 text-white" />
      </div>
      <span className="text-xs font-semibold text-fg whitespace-nowrap">{text}</span>
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── BACKGROUND LAYERS ── */}

      {/* 1. Light rays — volumetric burst from top center */}
      <LightRays intensity={0.9} />

      {/* 2. Animated gradient orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 60%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full animate-float-b"
          style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.12) 0%, transparent 65%)", filter: "blur(90px)" }} />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full animate-float-a"
          style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.1) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </motion.div>

      {/* 3. Dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-[0.3] pointer-events-none" />

      {/* 4. Particle field — 50 floating particles */}
      <ParticleField count={52} zone="hero" />

      {/* 5. Horizontal beam sweep */}
      <div className="beam top-1/2 opacity-30" />
      <div className="beam top-1/3 opacity-20" style={{ animationDelay: "2s" }} />

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Copy */}
          <motion.div style={{ y: contentY }}>
            {/* Badge */}
            <motion.div
              className="mb-7"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="violet" dot size="md">
                {HERO.badge}
              </Badge>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-bold leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}>
              <AnimatedHeadline text={HERO.headline[0]} className="block text-fg" delay={0.1} />
              <AnimatedHeadline text={HERO.headline[1]} className="block gradient-text" delay={0.25} />
            </h1>

            {/* Subheadline */}
            <motion.p
              className="text-base sm:text-lg text-fg-muted leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button size="lg" asChild className="group w-full sm:w-auto">
                <Link href="/#contact">
                  {HERO.cta_primary.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <Link href="#products">{HERO.cta_secondary.label}</Link>
              </Button>
            </motion.div>

            {/* Trust note */}
            <motion.p
              className="text-xs text-fg-subtle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              {HERO.trust_note}
            </motion.p>

            {/* Quick stats row */}
            <motion.div
              className="flex flex-wrap gap-5 mt-8 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
            >
              {[
                { v: "500+", l: "Appointments automated" },
                { v: "24/7", l: "AI availability" },
                { v: "5 min", l: "Setup time" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-bold text-xl gradient-text">{s.v}</div>
                  <div className="text-xs text-fg-subtle">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Dashboard Visual */}
          <motion.div
            className="relative hidden lg:block"
            style={{ y: dashboardY }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(124,58,237,0.25), transparent)", filter: "blur(30px)", transform: "translateY(16px)" }} />

            {/* Main dashboard card */}
            <div className="relative glass-card rounded-2xl border border-border overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.3)] animate-float-a">
              {/* Chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-elevated">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-bg border border-border rounded-md px-3 py-1 text-xs text-fg-subtle font-mono">
                    app.tapzero.ai/dashboard
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-fg-subtle">Live</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 bg-bg">
                {/* Stats row */}
                <div className="grid grid-cols-4 gap-3 mb-5">
                  {[
                    { v: "24", l: "Today", c: "violet" },
                    { v: "8", l: "Leads", c: "cyan" },
                    { v: "19", l: "Confirmed", c: "emerald" },
                    { v: "3", l: "Pending", c: "amber" },
                  ].map((s) => (
                    <div key={s.l} className="glass-card rounded-xl p-3 border border-border text-center">
                      <div className="font-display font-bold text-lg"
                        style={{ color: s.c === "violet" ? "var(--violet)" : s.c === "cyan" ? "var(--cyan)" : s.c === "emerald" ? "#10b981" : "#f59e0b" }}>
                        {s.v}
                      </div>
                      <div className="text-xs text-fg-subtle">{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* Chat */}
                <div className="glass-card rounded-xl border border-border p-4 space-y-2.5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-fg-subtle uppercase tracking-wider">ClinicBot Live</span>
                    <Badge variant="success" dot size="sm">Active</Badge>
                  </div>
                  {[
                    { r: "user", t: "I need to book with Dr. Ahmed" },
                    { r: "bot", t: "Available Friday 10 AM. Your name and phone?" },
                    { r: "user", t: "Sara, 0301-1234567" },
                    { r: "bot", t: "✅ Booked! Reminder will be sent via WhatsApp." },
                  ].map((m, i) => (
                    <div key={i} className={`flex ${m.r === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`px-3 py-1.5 rounded-xl text-xs max-w-[80%] leading-relaxed ${
                        m.r === "user" ? "bg-violet text-white" : "bg-surface border border-border text-fg-muted"
                      }`}>{m.t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification badges */}
            <FloatBadge icon={CheckCircle} text="Appointment confirmed" color="emerald"
              className="-top-4 -left-6 animate-float-b" delay={1.0} />
            <FloatBadge icon={Calendar} text="4 slots available" color="violet"
              className="top-1/3 -right-8 animate-float-a" delay={1.15} />
            <FloatBadge icon={MessageCircle} text="WhatsApp reminder sent" color="cyan"
              className="-bottom-3 left-4 animate-float-b" delay={1.3} />
            <FloatBadge icon={Users} text="New lead captured" color="violet"
              className="bottom-1/4 -right-6 animate-float-a" delay={1.45} />
          </motion.div>
        </div>
      </div>

      {/* Mobile visual — simplified card below content */}
      <motion.div
        className="lg:hidden w-full max-w-md mx-auto px-4 pb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="glass-card rounded-2xl border border-border overflow-hidden shadow-md">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-elevated">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-fg-subtle ml-2 font-mono">app.tapzero.ai</span>
            <div className="ml-auto flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-fg-subtle">Live</span>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                { v: "24", l: "Today's Appointments", c: "violet" },
                { v: "8", l: "New Leads", c: "cyan" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-3 border border-border">
                  <div className="font-display font-bold text-xl" style={{ color: `var(--${s.c})` }}>{s.v}</div>
                  <div className="text-xs text-fg-subtle">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="glass-card rounded-xl border border-border p-3 space-y-2">
              <div className="flex justify-end">
                <div className="bg-violet text-white text-xs px-3 py-1.5 rounded-xl max-w-[75%]">
                  I need to book with Dr. Ahmed
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-surface border border-border text-fg-muted text-xs px-3 py-1.5 rounded-xl max-w-[75%]">
                  ✅ Booked! Reminder sent via WhatsApp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-violet"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="text-xs text-fg-subtle">Scroll</span>
      </motion.div>
    </section>
  );
}
