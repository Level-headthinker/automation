"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-card border-b border-border backdrop-blur-xl"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-violet flex items-center justify-center shadow-[0_0_12px_rgba(124,58,237,0.4)] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] transition-shadow duration-200">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-xl text-fg tracking-tight">
                {BRAND.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150",
                    isActive(link.href)
                      ? "text-fg bg-surface"
                      : "text-fg-muted hover:text-fg hover:bg-surface"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-fg-muted hover:text-fg hover:bg-surface transition-all duration-150"
              >
                {mounted ? (
                  theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
                ) : (
                  <div className="w-4 h-4" />
                )}
              </button>

              <Button asChild size="sm" className="hidden sm:inline-flex">
                <Link href="/#contact">Book a Demo</Link>
              </Button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-fg-muted hover:text-fg hover:bg-surface transition-all duration-150"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass-card border-b border-border shadow-md md:hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-150",
                    isActive(link.href)
                      ? "text-fg bg-elevated"
                      : "text-fg-muted hover:text-fg hover:bg-elevated"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border mt-2">
                <Button asChild className="w-full">
                  <Link href="/#contact">Book a Free Demo</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
