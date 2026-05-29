"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { CTA_SECTION, INDUSTRIES_DROPDOWN, BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  industry: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  business: "",
  industry: "",
  message: "",
};

function InputField({
  label,
  id,
  required,
  ...props
}: {
  label: string;
  id: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
        {required && <span className="text-violet ml-0.5">*</span>}
      </label>
      <input
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-xl text-sm text-fg",
          "bg-bg border border-border",
          "placeholder:text-fg-subtle",
          "transition-all duration-150",
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

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
      }
    } catch {
      // API not reachable — still show success in dev so UX can be tested
      if (process.env.NODE_ENV === "development") {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
      }
    }

    if (status === "error") {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-surface relative overflow-hidden">
      {/* Gradient blobs */}
      <div
        aria-hidden
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.08), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.06), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel className="mb-6">{CTA_SECTION.badge}</SectionLabel>
            <h2
              className="font-display font-bold text-fg mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {CTA_SECTION.headline.split("?")[0]}?{" "}
              <GradientText>Let&apos;s Talk.</GradientText>
            </h2>
            <p className="text-lg text-fg-muted mb-8 leading-relaxed">
              {CTA_SECTION.subheadline}
            </p>

            {/* What happens next */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                What happens next:
              </p>
              {[
                "We reply within 2 hours on business days",
                "30-minute live demo tailored to your business",
                "Custom setup plan and pricing — no generic quotes",
                "You go live within 5 days if you choose to proceed",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-fg-muted">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                    style={{ background: "var(--gradient)" }}
                  >
                    {i + 1}
                  </div>
                  {step}
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-fg-subtle">
                Prefer email?{" "}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-violet hover:underline"
                >
                  {BRAND.email}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card rounded-2xl border border-border p-6 sm:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-fg">
                    Message Received!
                  </h3>
                  <p className="text-fg-muted max-w-xs text-sm">
                    We&apos;ll reach out within 2 hours to schedule your free demo.
                    Check your inbox.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setStatus("idle")}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label="Full Name"
                      id="name"
                      required
                      placeholder="Ahmed Khan"
                      value={form.name}
                      onChange={set("name")}
                    />
                    <InputField
                      label="Email"
                      id="email"
                      type="email"
                      required
                      placeholder="ahmed@clinic.com"
                      value={form.email}
                      onChange={set("email")}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label="Phone Number"
                      id="phone"
                      placeholder="+92 300 1234567"
                      value={form.phone}
                      onChange={set("phone")}
                    />
                    <InputField
                      label="Business Name"
                      id="business"
                      placeholder="City Clinic"
                      value={form.business}
                      onChange={set("business")}
                    />
                  </div>

                  {/* Industry select */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="industry"
                      className="text-sm font-medium text-fg"
                    >
                      Industry<span className="text-violet ml-0.5">*</span>
                    </label>
                    <select
                      id="industry"
                      required
                      value={form.industry}
                      onChange={set("industry")}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl text-sm text-fg",
                        "bg-bg border border-border",
                        "transition-all duration-150",
                        "focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20",
                        "hover:border-border-strong",
                        !form.industry && "text-fg-subtle"
                      )}
                    >
                      <option value="" disabled>
                        Select your industry
                      </option>
                      {INDUSTRIES_DROPDOWN.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-fg"
                    >
                      Tell us about your business
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="What are your current challenges? How many appointments per day? Any specific requirements?"
                      value={form.message}
                      onChange={set("message")}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl text-sm text-fg resize-none",
                        "bg-bg border border-border",
                        "placeholder:text-fg-subtle",
                        "transition-all duration-150",
                        "focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20",
                        "hover:border-border-strong"
                      )}
                    />
                  </div>

                  {/* Error state */}
                  {status === "error" && (
                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    loading={status === "loading"}
                  >
                    <Send className="w-4 h-4" />
                    Book My Free Demo
                  </Button>

                  <p className="text-xs text-center text-fg-subtle">
                    {CTA_SECTION.form_note}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
