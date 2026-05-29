import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Target, Eye, Heart, ArrowRight, MapPin, Globe } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero, GradientText } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Tapzero",
  description:
    "Tapzero builds AI-powered automation systems for service businesses across Pakistan and beyond. Learn about our mission, vision, and the team behind the platform.",
};

const VALUES = [
  {
    icon: Target,
    title: "Radical Simplicity",
    description:
      "We believe the most powerful technology is the kind that feels invisible. ClinicBot should feel like a natural extension of your clinic — not a complex system your staff needs training to use.",
  },
  {
    icon: Heart,
    title: "Local First, Global Ready",
    description:
      "We built for Pakistani clinics first because we understand the language, the patient expectations, and the operational reality. But everything we build scales to London, Dubai, and beyond.",
  },
  {
    icon: Eye,
    title: "Zero Hallucination Policy",
    description:
      "Our AI never invents information. If a doctor isn't in your system, the chatbot won't mention one. If your clinic's address isn't configured, it won't guess. Trust is not negotiable in healthcare.",
  },
  {
    icon: Zap,
    title: "Speed Over Perfection",
    description:
      "A clinic running on Tapzero today, with real patients being served, is more valuable than a perfect system released in 18 months. We build, ship, and improve continuously.",
  },
];

const MILESTONES = [
  { year: "2025", label: "Company founded", desc: "Started with a simple question: why are clinics still booking appointments manually?" },
  { year: "2025 Q4", label: "ClinicBot v1 launched", desc: "First AI chatbot deployed for a solo GP clinic in Karachi. 24 appointments booked on day one." },
  { year: "2026 Q1", label: "Multi-branch support", desc: "Expanded ClinicBot to support clinics with multiple branches and role-based staff access." },
  { year: "2026 Q2", label: "Platform launch", desc: "Tapzero platform launched — the umbrella company for multiple industry AI products." },
  { year: "2026+", label: "What's next", desc: "Restaurant, real estate, and support automation. Pakistan, then MENA, then global." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <PageHero
          label="About Tapzero"
          title={
            <>
              We Build AI That Works<br />
              <GradientText>for Real Businesses</GradientText>
            </>
          }
          description="Not demos. Not prototypes. AI systems that your clinic runs on, every day, without thinking about it."
        />

        {/* Mission & Vision */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel className="mb-5">Our Mission</SectionLabel>
                <h2 className="font-display font-bold text-fg mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                  Make Automation Accessible to Every Service Business — Not Just Enterprises
                </h2>
                <p className="text-fg-muted leading-relaxed mb-6">
                  The largest hospital chains in Pakistan have IT departments. They have custom ERP systems, software budgets, and dedicated developers. A solo clinic in Faisalabad has none of that.
                </p>
                <p className="text-fg-muted leading-relaxed mb-6">
                  Tapzero exists to close that gap. We build AI-powered operating systems that give a solo GP the same capabilities as a 500-bed hospital — at a price that makes business sense.
                </p>
                <p className="text-fg-muted leading-relaxed">
                  We started with clinics because the problem was most acute. Every day, thousands of Pakistani patients try to book an appointment and fail — not because the clinic doesn't have capacity, but because no one answered the phone. That is a systems problem. We fix systems problems.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "500+", label: "Appointments automated", color: "violet" },
                  { value: "24/7", label: "AI availability", color: "cyan" },
                  { value: "3", label: "Countries served", color: "violet" },
                  { value: "5 min", label: "Average clinic setup time", color: "cyan" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card rounded-2xl border border-border p-6 text-center">
                    <div
                      className="font-display font-bold text-3xl mb-1"
                      style={{ color: `var(--${stat.color})` }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-fg-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionLabel variant="cyan" className="mb-5 mx-auto w-fit">Our Vision</SectionLabel>
            <blockquote className="font-display font-bold text-fg leading-tight mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
              &ldquo;A world where every service business — regardless of size or location — has access to AI automation that was previously reserved for Fortune 500 companies.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-fg text-sm">Tapzero Team</div>
                <div className="text-xs text-fg-subtle">Pakistan · Building for the world</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionLabel className="mb-4">Our Values</SectionLabel>
              <h2 className="font-display font-bold text-fg" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                What We Believe
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {VALUES.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="glass-card rounded-2xl border border-border p-8 group hover:border-border-strong transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-violet-muted flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-6 h-6 text-violet" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-fg mb-3">{value.title}</h3>
                    <p className="text-fg-muted leading-relaxed text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionLabel variant="cyan" className="mb-4">Journey</SectionLabel>
              <h2 className="font-display font-bold text-fg" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                How We Got Here
              </h2>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-6 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, var(--violet), var(--cyan))" }}
              />
              <div className="space-y-8">
                {MILESTONES.map((m, i) => (
                  <div key={i} className="flex gap-6 pl-16 relative">
                    <div
                      className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 border-bg"
                      style={{ background: i === MILESTONES.length - 1 ? "var(--cyan)" : "var(--violet)" }}
                    />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-1">{m.year}</div>
                      <div className="font-display font-bold text-fg text-lg mb-1">{m.label}</div>
                      <p className="text-sm text-fg-muted">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl border border-border p-8">
                <MapPin className="w-8 h-8 text-violet mb-4" />
                <h3 className="font-display font-bold text-xl text-fg mb-2">Based in Pakistan</h3>
                <p className="text-fg-muted leading-relaxed text-sm mb-4">
                  We are a Pakistan-first company. We understand the market, the language, the infrastructure, and the patient expectations. Our products are built here and tested here before they go anywhere else.
                </p>
                <p className="text-sm text-fg-subtle">{BRAND.location}</p>
              </div>
              <div className="glass-card rounded-2xl border border-border p-8">
                <Globe className="w-8 h-8 text-cyan mb-4" />
                <h3 className="font-display font-bold text-xl text-fg mb-2">Serving Globally</h3>
                <p className="text-fg-muted leading-relaxed text-sm mb-4">
                  Pakistani diaspora clinics in the UK, UAE, and Canada already operate with similar patient communication challenges. ClinicBot is fully ready for international deployment from day one.
                </p>
                <a href={`mailto:${BRAND.email}`} className="text-sm text-violet hover:underline">
                  {BRAND.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-fg text-3xl mb-4">
              Want to Work With Us?
            </h2>
            <p className="text-fg-muted mb-8">
              Whether you&apos;re a clinic owner, a healthcare investor, or someone who wants to bring Tapzero to a new market — we&apos;d love to hear from you.
            </p>
            <Button size="lg" asChild>
              <Link href="/#contact">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
