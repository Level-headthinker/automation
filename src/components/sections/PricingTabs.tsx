"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, ArrowRight, Phone, MessageCircle, Calculator } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { PRICING_SERVICES, USAGE_PRICING, type PricingTier } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ── Tier cards ────────────────────────────────────────────────
function Tiers({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
      {tiers.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          whileHover={{ y: -4 }}
          className={cn(
            "relative rounded-2xl border flex flex-col overflow-hidden",
            plan.highlighted
              ? "border-violet/40 bg-violet-muted ring-1 ring-violet/30 shadow-[0_0_50px_rgba(0,102,204,0.18)]"
              : "glass-card border-border"
          )}
        >
          {plan.highlighted && <div className="h-1 w-full animated-gradient" />}
          {plan.highlighted && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                style={{ background: "var(--gradient)" }}>
                <Sparkles className="w-3 h-3" /> Popular
              </div>
            </div>
          )}
          <div className="p-6 sm:p-8 flex flex-col flex-1">
            <h3 className="font-display font-bold text-xl text-fg mb-1">{plan.name}</h3>
            <p className="text-sm text-fg-muted mb-6">{plan.description}</p>
            <div className="mb-7 pb-7 border-b border-border">
              <div className="flex items-end gap-1.5">
                {plan.currency && <span className="text-sm font-semibold text-fg-subtle self-end mb-0.5">{plan.currency}</span>}
                <span className={cn("font-display font-bold leading-none",
                  plan.price === "Custom" ? "text-3xl text-fg" : "text-4xl sm:text-5xl gradient-text")}>
                  {plan.price}
                </span>
              </div>
              <p className="text-xs text-fg-subtle mt-1.5">{plan.period}</p>
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-fg-muted">
                  <div className="w-5 h-5 rounded-full bg-violet flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/demo"
              className={cn(
                "w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold transition-all duration-200 group",
                plan.highlighted ? "btn-primary text-white" : "border border-border text-fg hover:border-border-strong hover:bg-elevated"
              )}>
              {plan.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Usage calculator ──────────────────────────────────────────
function fmt(n: number) {
  return n.toLocaleString("en-US");
}

function Calc() {
  const { platformBase, voice, message, currency } = USAGE_PRICING;
  const [minutes, setMinutes] = useState(500);
  const [messages, setMessages] = useState(3000);

  const voiceCost = Math.max(0, minutes - voice.includedMinutes) * voice.perMinute;
  const msgCost = Math.max(0, messages - message.includedMessages) * message.perMessage;
  const total = platformBase + voiceCost + msgCost;

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
      {/* Controls */}
      <div className="glass-card rounded-2xl border border-border p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-violet" />
          <h3 className="font-display font-bold text-lg text-fg">Build your plan</h3>
        </div>

        {/* Voice slider */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="flex items-center gap-2 text-sm font-medium text-fg">
              <Phone className="w-4 h-4 text-cyan" /> Call minutes / month
            </span>
            <span className="font-display font-bold text-fg">{fmt(minutes)}</span>
          </div>
          <input type="range" min={0} max={5000} step={50}
            value={minutes} onChange={(e) => setMinutes(Number(e.target.value))}
            className="w-full accent-violet cursor-pointer" />
          <p className="text-xs text-fg-subtle mt-2">
            First {fmt(voice.includedMinutes)} min free · then {currency} {voice.perMinute}/min
          </p>
        </div>

        {/* Message slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="flex items-center gap-2 text-sm font-medium text-fg">
              <MessageCircle className="w-4 h-4 text-violet" /> Messages / month
            </span>
            <span className="font-display font-bold text-fg">{fmt(messages)}</span>
          </div>
          <input type="range" min={0} max={20000} step={250}
            value={messages} onChange={(e) => setMessages(Number(e.target.value))}
            className="w-full accent-violet cursor-pointer" />
          <p className="text-xs text-fg-subtle mt-2">
            First {fmt(message.includedMessages)} messages free · then {currency} {message.perMessage}/message
          </p>
        </div>
      </div>

      {/* Result */}
      <div className="rounded-2xl border border-violet/40 bg-violet-muted ring-1 ring-violet/30 p-6 sm:p-8 flex flex-col">
        <div className="h-1 w-full animated-gradient rounded-full mb-6" />
        <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-2">
          Estimated monthly total
        </p>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-sm font-semibold text-fg-subtle mb-1.5">{currency}</span>
          <span className="font-display font-bold text-5xl gradient-text leading-none">{fmt(total)}</span>
          <span className="text-sm text-fg-subtle mb-1.5">/mo</span>
        </div>

        {/* Breakdown */}
        <div className="mt-6 space-y-2.5 text-sm flex-1">
          {[
            { l: "Platform base", v: platformBase },
            { l: `Voice (${fmt(Math.max(0, minutes - voice.includedMinutes))} billable min)`, v: voiceCost },
            { l: `Messaging (${fmt(Math.max(0, messages - message.includedMessages))} billable)`, v: msgCost },
          ].map((row) => (
            <div key={row.l} className="flex items-center justify-between text-fg-muted">
              <span>{row.l}</span>
              <span className="font-medium text-fg">{currency} {fmt(row.v)}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-3 border-t border-border font-semibold text-fg">
            <span>Total</span>
            <span>{currency} {fmt(total)}</span>
          </div>
        </div>

        <Link href="/demo"
          className="mt-7 w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold btn-primary text-white">
          Get this plan <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-fg-subtle text-center mt-3">Final pricing confirmed on your demo call.</p>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────
export function PricingTabs() {
  const [active, setActive] = useState(PRICING_SERVICES[0].id);
  const service = PRICING_SERVICES.find((s) => s.id === active)!;

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4"><SectionLabel>Pricing</SectionLabel></div>
          <h2 className="font-display font-bold text-fg mb-4" style={{ fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}>
            Pricing for <GradientText>Every Service</GradientText>
          </h2>
          <p className="text-base sm:text-lg text-fg-muted max-w-xl mx-auto">
            Pick a product, or build a custom voice &amp; messaging plan around your usage.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PRICING_SERVICES.map((s) => (
            <button key={s.id} onClick={() => setActive(s.id)}
              className={cn(
                "relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                active === s.id ? "text-white" : "bg-bg border border-border text-fg-muted hover:text-fg hover:border-border-strong"
              )}>
              {active === s.id && (
                <motion.div layoutId="pricing-tab" className="absolute inset-0 rounded-full"
                  style={{ background: "var(--gradient)" }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.4 }} />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {s.label}
                {s.status === "coming-soon" && (
                  <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full",
                    active === s.id ? "bg-white/20" : "bg-elevated text-fg-subtle")}>Soon</span>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}>
            <div className="text-center mb-8">
              <p className="text-sm text-fg-muted">{service.tagline}</p>
            </div>
            {service.type === "tiers" && service.tiers ? <Tiers tiers={service.tiers} /> : <Calc />}
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-sm text-fg-subtle mt-10">
          All plans include a 14-day free trial · no card required · cancel anytime.
        </p>
      </div>
    </section>
  );
}
