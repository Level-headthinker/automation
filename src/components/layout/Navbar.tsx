"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Moon, Sun, Menu, X, Zap, ChevronDown,
  Sparkles, Globe, Code2, BrainCircuit, Bot, Stethoscope,
  UtensilsCrossed, Building2, HeadphonesIcon, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BRAND, NAV_LINKS, NAV_SERVICES, PRODUCTS } from "@/lib/constants";

// ── Icon map ─────────────────────────────────────────────────
const SERVICE_ICONS: Record<string, React.ElementType> = {
  Sparkles, Globe, Code2, BrainCircuit, Bot, Stethoscope,
};

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  Stethoscope, UtensilsCrossed, Building2, HeadphonesIcon,
};

// ── Dropdown panel variants ───────────────────────────────────
const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0, y: -8, scale: 0.97,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.04, duration: 0.25 },
  }),
};

// ── Services mega-menu ────────────────────────────────────────
function ServicesMenu() {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden" animate="visible" exit="exit"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] z-50"
      style={{ transformOrigin: "top center" }}
    >
      {/* Glass panel */}
      <div className="glass-card rounded-2xl border border-border shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden"
        style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}>

        {/* Header */}
        <div className="px-5 py-3.5 border-b border-border flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
            What We Build
          </span>
          <Link href="/demo"
            className="text-xs font-semibold text-violet hover:opacity-80 transition-opacity flex items-center gap-1">
            Start a project <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-2 gap-0 p-3">
          {NAV_SERVICES.map((svc, i) => {
            const Icon = SERVICE_ICONS[svc.icon];
            return (
              <motion.div key={svc.title} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                <Link href={svc.href}
                  className="flex items-start gap-3 px-3.5 py-3 rounded-xl group hover:bg-elevated transition-colors duration-150">
                  <div className="w-8 h-8 rounded-lg bg-violet-muted flex items-center justify-center flex-shrink-0 mt-0.5
                      group-hover:bg-violet group-hover:shadow-[0_0_12px_rgba(0,102,204,0.4)] transition-all duration-200">
                    <Icon className="w-4 h-4 text-violet group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-fg group-hover:text-violet transition-colors duration-150">
                      {svc.title}
                    </div>
                    <div className="text-xs text-fg-subtle leading-snug mt-0.5">{svc.description}</div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// ── Products mega-menu (Atom AI style) ────────────────────────
function ProductsMenu() {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden" animate="visible" exit="exit"
      className="absolute top-full right-0 mt-3 w-[460px] z-50"
      style={{ transformOrigin: "top right" }}
    >
      <div className="glass-card rounded-2xl border border-violet/25 shadow-[0_24px_80px_rgba(0,102,204,0.2),0_0_0_1px_rgba(0,102,204,0.1)] overflow-hidden"
        style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}>

        {/* Header */}
        <div className="px-5 py-3.5 border-b border-border flex items-center justify-between"
          style={{ background: "linear-gradient(135deg, rgba(0,102,204,0.08), rgba(14,165,233,0.04))" }}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-violet flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" fill="white" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-violet">
              Raahnex Products
            </span>
          </div>
          <Link href="/products"
            className="text-xs font-semibold text-fg-subtle hover:text-fg transition-colors flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Products list */}
        <div className="p-3 space-y-0.5">
          {PRODUCTS.map((p, i) => {
            const Icon = PRODUCT_ICONS[p.icon];
            const isViolet = p.color === "violet";
            return (
              <motion.div key={p.id} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                <Link href={p.status === "live" ? "/products/clinicbot" : "/demo"}
                  className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl group hover:bg-elevated transition-colors duration-150">
                  <div className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200",
                    isViolet ? "bg-violet-muted group-hover:bg-violet" : "bg-cyan-muted group-hover:bg-cyan",
                  )}>
                    <Icon className={cn(
                      "w-4 h-4 transition-colors duration-200",
                      isViolet ? "text-violet group-hover:text-white" : "text-cyan group-hover:text-white"
                    )} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-fg group-hover:text-fg transition-colors">
                        {p.name}
                      </span>
                      {p.status === "live"
                        ? <Badge variant="success" dot size="sm">Live</Badge>
                        : <Badge variant="default" size="sm">Soon</Badge>}
                    </div>
                    <div className="text-xs text-fg-subtle truncate">{p.tagline}</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-fg-subtle opacity-0 group-hover:opacity-100 transition-all duration-150 flex-shrink-0" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA footer */}
        <div className="px-5 py-4 border-t border-border"
          style={{ background: "rgba(0,102,204,0.04)" }}>
          <Link href="/demo"
            className="flex items-center gap-2 text-sm font-semibold text-violet hover:opacity-80 transition-opacity">
            <Zap className="w-3.5 h-3.5" fill="currentColor" />
            Get early access to all products
            <ArrowRight className="w-3.5 h-3.5 ml-auto" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "products" | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const menuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveMenu(null); }, [pathname]);

  const openMenu = (menu: "services" | "products") => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const keepOpen = () => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            : "border-b border-transparent",
          scrolled ? "bg-[rgba(4,6,14,0.85)]" : "bg-transparent",
          "backdrop-blur-xl"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <motion.div
                className="w-8 h-8 rounded-lg bg-violet flex items-center justify-center"
                style={{ boxShadow: "0 0 14px rgba(0,102,204,0.5)" }}
                whileHover={{ scale: 1.08, boxShadow: "0 0 24px rgba(0,102,204,0.7)" }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="w-4 h-4 text-white" fill="white" />
              </motion.div>
              <span className="font-display font-black text-xl text-fg tracking-tighter uppercase">
                {BRAND.name}
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1">

              {/* Services dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={() => openMenu("services")}
                onMouseLeave={closeMenu}
              >
                <button
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                    activeMenu === "services"
                      ? "text-fg bg-surface"
                      : "text-fg-muted hover:text-fg hover:bg-surface"
                  )}
                >
                  Services
                  <motion.div animate={{ rotate: activeMenu === "services" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeMenu === "services" && (
                    <div onMouseEnter={keepOpen} onMouseLeave={closeMenu}>
                      <ServicesMenu />
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Regular links */}
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150",
                    pathname === link.href
                      ? "text-fg bg-surface"
                      : "text-fg-muted hover:text-fg hover:bg-surface"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Products — Atom AI-style glowing trigger */}
              <div
                className="relative"
                onMouseEnter={() => openMenu("products")}
                onMouseLeave={closeMenu}
              >
                <motion.button
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold",
                    "border transition-all duration-200 relative overflow-hidden",
                    activeMenu === "products"
                      ? "border-violet/50 text-violet bg-violet-muted"
                      : "border-violet/25 text-violet hover:border-violet/50 hover:bg-violet-muted"
                  )}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    boxShadow: activeMenu === "products"
                      ? "0 0 16px rgba(0,102,204,0.25), inset 0 0 10px rgba(0,102,204,0.05)"
                      : "0 0 8px rgba(0,102,204,0.1)",
                  }}
                >
                  <Zap className="w-3.5 h-3.5" />
                  Products
                  <motion.div animate={{ rotate: activeMenu === "products" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-3 h-3 opacity-70" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeMenu === "products" && (
                    <div onMouseEnter={keepOpen} onMouseLeave={closeMenu}>
                      <ProductsMenu />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-2.5">
              {/* Theme toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-fg-muted hover:text-fg hover:bg-surface transition-all duration-150"
              >
                {mounted
                  ? theme === "dark"
                    ? <Sun className="w-4 h-4" />
                    : <Moon className="w-4 h-4" />
                  : <div className="w-4 h-4" />}
              </button>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="hidden sm:block">
                <Button asChild size="sm" className="font-semibold">
                  <Link href="/demo">Start Your Project</Link>
                </Button>
              </motion.div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-fg-muted hover:text-fg hover:bg-surface transition-all duration-150"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-40 border-b border-border overflow-hidden lg:hidden"
            style={{ background: "rgba(4,6,14,0.97)", backdropFilter: "blur(20px)" }}
          >
            <nav className="flex flex-col px-4 py-5 gap-1 max-h-[80vh] overflow-y-auto">
              {/* Services */}
              <div className="mb-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle px-3 mb-2">Services</p>
                {NAV_SERVICES.map((svc) => {
                  const Icon = SERVICE_ICONS[svc.icon];
                  return (
                    <Link key={svc.title} href={svc.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-fg-muted hover:text-fg hover:bg-elevated transition-all duration-150">
                      <Icon className="w-4 h-4 text-violet flex-shrink-0" />
                      {svc.title}
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-border pt-2 mb-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle px-3 mb-2">Products</p>
                {PRODUCTS.map((p) => {
                  const Icon = PRODUCT_ICONS[p.icon];
                  return (
                    <Link key={p.id}
                      href={p.status === "live" ? "/products/clinicbot" : "/demo"}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-fg-muted hover:text-fg hover:bg-elevated transition-all duration-150">
                      <Icon className="w-4 h-4 text-cyan flex-shrink-0" />
                      <span>{p.name}</span>
                      {p.status === "live" && <Badge variant="success" dot size="sm">Live</Badge>}
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-border pt-2 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link key={link.label} href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-sm font-medium text-fg-muted hover:text-fg hover:bg-elevated transition-all duration-150">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-3 border-t border-border mt-1">
                <Button asChild className="w-full">
                  <Link href="/demo" onClick={() => setMobileOpen(false)}>
                    Start Your Project
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
