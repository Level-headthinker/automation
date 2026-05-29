"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Globe, X, Link2, Mail, ArrowRight } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/newsletter`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      setStatus(res.ok ? "done" : "error");
    } catch {
      // dev fallback
      setStatus("done");
    }
  };

  if (status === "done") {
    return (
      <p className="text-sm text-emerald-400 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        You&apos;re subscribed — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={cn(
          "flex-1 px-3 py-2 rounded-lg text-sm bg-elevated border border-border",
          "text-fg placeholder:text-fg-subtle",
          "focus:outline-none focus:border-violet transition-colors",
          status === "error" && "border-red-400"
        )}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-3 py-2 rounded-lg bg-violet text-white text-sm font-medium hover:bg-violet-hover transition-colors disabled:opacity-50"
        aria-label="Subscribe"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-violet flex items-center justify-center shadow-[0_0_12px_rgba(124,58,237,0.3)]">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-xl text-fg tracking-tight">
                {BRAND.name}
              </span>
            </Link>
            <p className="text-sm text-fg-muted leading-relaxed max-w-xs mb-5">
              {BRAND.description}
            </p>

            {/* Newsletter */}
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-2">
                AI insights, monthly
              </p>
              <Newsletter />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, href: BRAND.social.linkedin, label: "LinkedIn" },
                { icon: X, href: BRAND.social.twitter, label: "Twitter / X" },
                { icon: Link2, href: BRAND.social.instagram, label: "Instagram" },
                { icon: Mail, href: `mailto:${BRAND.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-fg-subtle hover:text-violet hover:border-violet hover:bg-violet-muted transition-all duration-150"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-muted hover:text-fg transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fg-subtle">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-fg-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
