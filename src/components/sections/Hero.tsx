"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, CheckCircle, Calendar, MessageCircle, Users, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";
import { LightRays } from "@/components/ui/LightRays";
import { HERO } from "@/lib/constants";

// ── Cycling text component ────────────────────────────────────
function CyclingText({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-block" style={{ minWidth: "1em" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-block gradient-text"
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -22, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ── Floating notification badge ───────────────────────────────
function FloatBadge({ icon: Icon, text, color, className, delay = 0 }: {
  icon: React.ElementType; text: string; color: "violet" | "cyan" | "green";
  className?: string; delay?: number;
}) {
  const bg = color === "violet" ? "var(--violet)" : color === "cyan" ? "var(--cyan)" : "#10b981";
  return (
    <motion.div
      className={`absolute glass-card rounded-xl border border-border px-3 py-2 flex items-center gap-2 z-20 ${className}`}
      style={{ boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 12px ${bg}22` }}
      initial={{ opacity: 0, scale: 0.75, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: bg, boxShadow: `0 0 8px ${bg}60` }}>
        <Icon className="w-2.5 h-2.5 text-white" />
      </div>
      <span className="text-xs font-semibold text-fg whitespace-nowrap">{text}</span>
    </motion.div>
  );
}

// ── Main Hero ─────────────────────────────────────────────────
export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── 1. Canvas particle network (behind everything) ── */}
      <ParticleNetwork count={78} maxDistance={128} speed={0.28} opacity={0.68} />

      {/* ── 2. Light rays from top center ── */}
      <LightRays intensity={1} />

      {/* ── 3. Deep gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "900px", height: "600px",
            background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(124,58,237,0.2), transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.12), transparent 70%)", filter: "blur(80px)" }} />
      </div>

      {/* ── 4. Dot grid pattern ── */}
      <div className="absolute inset-0 dot-pattern opacity-[0.28] pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── LEFT — Copy ── */}
          <motion.div style={{ y: contentY }}>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-7 flex items-center gap-3"
            >
              <Badge variant="violet" dot size="md">
                {HERO.badge}
              </Badge>
              <motion.div
                className="flex items-center gap-1.5 text-xs font-medium text-fg-subtle"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live & deployed
              </motion.div>
            </motion.div>

            {/* Main headline */}
            <div className="mb-6 space-y-1">
              <motion.h1
                className="font-display font-black text-fg leading-[1.0] tracking-tighter"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
              >
                {/* Line 1 — static */}
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  {HERO.headline}
                </motion.span>

                {/* Line 2 — cycling gradient word */}
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.22, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CyclingText words={HERO.cyclingWords} />
                </motion.span>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              className="text-base sm:text-lg text-fg-muted leading-relaxed mb-9 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-9"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto">
                <Button size="lg" asChild className="group w-full sm:w-auto">
                  <Link href="/#contact">
                    {HERO.cta_primary.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto group">
                  <Link href="/products">
                    <Play className="w-4 h-4 text-violet group-hover:scale-110 transition-transform" />
                    {HERO.cta_secondary.label}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust note */}
            <motion.p
              className="text-xs text-fg-subtle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {HERO.trust_note}
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-6 mt-9 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82 }}
            >
              {[
                { v: "500+", l: "Appointments automated" },
                { v: "24/7", l: "AI availability" },
                { v: "5 min", l: "Setup time" },
              ].map((s, i) => (
                <motion.div key={s.l}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}>
                  <div className="font-display font-black text-xl gradient-text leading-none">{s.v}</div>
                  <div className="text-xs text-fg-subtle mt-0.5">{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Dashboard visual ── */}
          <motion.div
            className="relative hidden lg:block"
            style={{ y: dashboardY }}
            initial={{ opacity: 0, x: 50, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow behind dashboard */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 50% at 50% 65%, rgba(124,58,237,0.28), transparent)",
                filter: "blur(36px)",
                transform: "translateY(20px)",
              }} />

            {/* Main card */}
            <motion.div
              className="relative glass-card rounded-2xl border border-border overflow-hidden"
              style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.15)" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-elevated">
                <div className="flex gap-1.5">
                  {["bg-red-400","bg-yellow-400","bg-green-400"].map(c => (
                    <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                  ))}
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-bg border border-border rounded-md px-3 py-1 text-xs text-fg-subtle font-mono">
                    app.raahnex.ai/dashboard
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                  <span className="text-xs text-fg-subtle">Live</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 bg-bg">
                {/* Stat cards */}
                <div className="grid grid-cols-4 gap-2.5 mb-4">
                  {[
                    { v: "24", l: "Today", c: "violet" },
                    { v: "8",  l: "Leads",  c: "cyan"   },
                    { v: "19", l: "Done",   c: "green"  },
                    { v: "3",  l: "Wait",   c: "amber"  },
                  ].map((s, i) => (
                    <motion.div key={s.l}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + i * 0.08 }}
                      className="glass-card rounded-xl p-3 border border-border text-center">
                      <div className="font-display font-bold text-xl leading-none mb-0.5"
                        style={{ color: s.c === "violet" ? "var(--violet)" : s.c === "cyan" ? "var(--cyan)" : s.c === "green" ? "#10b981" : "#f59e0b" }}>
                        {s.v}
                      </div>
                      <div className="text-[10px] text-fg-subtle">{s.l}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Chat */}
                <div className="glass-card rounded-xl border border-border p-4 space-y-2.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-fg-subtle uppercase tracking-wider">
                      Raahnex AI · Live
                    </span>
                    <Badge variant="success" dot size="sm">Active</Badge>
                  </div>
                  {[
                    { r: "user", t: "I need to book with Dr. Ahmed" },
                    { r: "bot",  t: "Friday 10 AM is available. Name & phone?" },
                    { r: "user", t: "Sara Khan, 0301-1234567" },
                    { r: "bot",  t: "✅ Booked! WhatsApp reminder will be sent." },
                  ].map((m, i) => (
                    <motion.div key={i}
                      className={`flex ${m.r === "user" ? "justify-end" : "justify-start"}`}
                      initial={{ opacity: 0, x: m.r === "user" ? 10 : -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 + i * 0.15 }}>
                      <div className={`px-3 py-1.5 rounded-xl text-[11px] max-w-[80%] leading-relaxed ${
                        m.r === "user" ? "bg-violet text-white" : "bg-surface border border-border text-fg-muted"
                      }`}>{m.t}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <FloatBadge icon={CheckCircle} text="Appointment confirmed" color="green"
              className="-top-5 -left-8 animate-float-b" delay={1.1} />
            <FloatBadge icon={Calendar} text="4 slots available today" color="violet"
              className="top-1/3 -right-10 animate-float-a" delay={1.25} />
            <FloatBadge icon={MessageCircle} text="WhatsApp reminder sent" color="cyan"
              className="-bottom-4 left-6 animate-float-b" delay={1.4} />
            <FloatBadge icon={Users} text="New lead captured" color="violet"
              className="bottom-1/4 -right-8 animate-float-a" delay={1.55} />
          </motion.div>
        </div>
      </div>

      {/* Mobile card */}
      <motion.div
        className="lg:hidden relative z-10 w-full max-w-sm mx-auto px-4 pb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
      >
        <div className="glass-card rounded-2xl border border-border overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,58,237,0.1)" }}>
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-elevated">
            <div className="flex gap-1.5">
              {["bg-red-400","bg-yellow-400","bg-green-400"].map(c => (
                <div key={c} className={`w-2 h-2 rounded-full ${c}`} />
              ))}
            </div>
            <span className="text-xs text-fg-subtle ml-2 font-mono">app.raahnex.ai</span>
            <div className="ml-auto flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-fg-subtle">Live</span>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[{ v: "24", l: "Today's Appointments", c: "violet" }, { v: "8", l: "New Leads", c: "cyan" }].map(s => (
                <div key={s.l} className="glass-card rounded-xl p-3 border border-border">
                  <div className="font-display font-bold text-xl" style={{ color: `var(--${s.c})` }}>{s.v}</div>
                  <div className="text-xs text-fg-subtle">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="glass-card rounded-xl border border-border p-3 space-y-2">
              <div className="flex justify-end">
                <div className="bg-violet text-white text-xs px-3 py-1.5 rounded-xl max-w-[78%]">
                  I need to book with Dr. Ahmed
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-surface border border-border text-fg-muted text-xs px-3 py-1.5 rounded-xl max-w-[78%]">
                  ✅ Booked! WhatsApp reminder sent.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
          animate={{ borderColor: ["rgba(124,58,237,0.3)", "rgba(124,58,237,0.8)", "rgba(124,58,237,0.3)"] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-violet"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="text-[10px] text-fg-subtle tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
