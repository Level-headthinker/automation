"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ParticleField } from "@/components/ui/ParticleField";
import { CTA_SECTION, INDUSTRIES_DROPDOWN, BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";
interface FormData { name: string; email: string; phone: string; business: string; industry: string; message: string; }
const INITIAL: FormData = { name: "", email: "", phone: "", business: "", industry: "", message: "" };

function Field({ label, id, required, ...props }: { label: string; id: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}{required && <span className="text-violet ml-0.5">*</span>}
      </label>
      <input id={id}
        className={cn(
          "w-full px-4 py-3 rounded-xl text-sm text-fg bg-bg border border-border",
          "placeholder:text-fg-subtle transition-all duration-150",
          "focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20",
          "hover:border-border-strong"
        )}
        {...props}
      />
    </div>
  );
}

export function CTA() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<FormState>("idle");

  const set = (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/contact`,
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }
      );
      if (res.ok) { setStatus("success"); setForm(INITIAL); }
      else setStatus("error");
    } catch {
      if (process.env.NODE_ENV === "development") { setStatus("success"); setForm(INITIAL); }
      else setStatus("error");
    }
    if (status === "error") setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* BG glows */}
      <ParticleField count={22} zone="full" className="opacity-50" />
      <div aria-hidden className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.1), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.08), transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute inset-0 dot-pattern opacity-[0.25] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionLabel className="mb-6">{CTA_SECTION.badge}</SectionLabel>
            <h2 className="font-display font-bold text-fg mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              {CTA_SECTION.headline.split("?")[0]}?{" "}
              <span className="gradient-text">Let&apos;s Talk.</span>
            </h2>
            <p className="text-base sm:text-lg text-fg-muted mb-10 leading-relaxed">
              {CTA_SECTION.subheadline}
            </p>

            {/* Steps */}
            <div className="space-y-5 mb-10">
              {[
                { n: "01", t: "We reply within 2 hours", d: "On business days — usually faster." },
                { n: "02", t: "30-minute live demo", d: "Tailored to your clinic, not a generic walkthrough." },
                { n: "03", t: "Custom setup plan", d: "Pricing and timeline designed for your practice." },
                { n: "04", t: "Live in 5 days", d: "If you choose to proceed — we handle everything." },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: "var(--gradient)" }}>{step.n}</div>
                  <div>
                    <div className="font-semibold text-fg text-sm">{step.t}</div>
                    <div className="text-xs text-fg-subtle mt-0.5">{step.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-fg-subtle">
                Prefer email?{" "}
                <a href={`mailto:${BRAND.email}`} className="text-violet hover:underline">{BRAND.email}</a>
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="gradient-border rounded-2xl overflow-hidden">
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                {status === "success" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10 gap-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-fg">Message Received!</h3>
                    <p className="text-fg-muted max-w-xs text-sm">
                      We&apos;ll reach out within 2 hours to schedule your free demo.
                    </p>
                    <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="mb-2">
                      <h3 className="font-display font-bold text-lg text-fg">Book a Free Demo</h3>
                      <p className="text-sm text-fg-subtle mt-0.5">{CTA_SECTION.form_note}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Full Name" id="name" required placeholder="Ahmed Khan"
                        value={form.name} onChange={set("name")} />
                      <Field label="Email" id="email" type="email" required placeholder="ahmed@clinic.com"
                        value={form.email} onChange={set("email")} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Phone" id="phone" placeholder="+92 300 1234567"
                        value={form.phone} onChange={set("phone")} />
                      <Field label="Business Name" id="business" placeholder="City Clinic"
                        value={form.business} onChange={set("business")} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="industry" className="text-sm font-medium text-fg">
                        Industry<span className="text-violet ml-0.5">*</span>
                      </label>
                      <select id="industry" required value={form.industry} onChange={set("industry")}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl text-sm text-fg bg-bg border border-border",
                          "transition-all duration-150 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20",
                          "hover:border-border-strong",
                          !form.industry && "text-fg-subtle"
                        )}>
                        <option value="" disabled>Select your industry</option>
                        {INDUSTRIES_DROPDOWN.map(ind => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm font-medium text-fg">
                        Tell us about your business
                      </label>
                      <textarea id="message" rows={3}
                        placeholder="How many appointments per day? Any specific challenges?"
                        value={form.message} onChange={set("message")}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl text-sm text-fg resize-none bg-bg border border-border",
                          "placeholder:text-fg-subtle transition-all duration-150",
                          "focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20",
                          "hover:border-border-strong"
                        )} />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {status === "loading" ? (
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                      ) : <Send className="w-4 h-4" />}
                      Book My Free Demo
                      {status !== "loading" && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
