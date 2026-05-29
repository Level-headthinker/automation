import Link from "next/link";
import { Zap, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-violet flex items-center justify-center shadow-[0_0_12px_rgba(124,58,237,0.3)]">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-xl text-fg tracking-tight">
                {BRAND.name}
              </span>
            </Link>
            <p className="text-sm text-fg-muted leading-relaxed max-w-xs mb-6">
              {BRAND.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: BRAND.social.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: BRAND.social.twitter, label: "Twitter" },
                { icon: Instagram, href: BRAND.social.instagram, label: "Instagram" },
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
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-fg-muted hover:text-fg transition-colors duration-150"
                    >
                      {link.label}
                    </a>
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
