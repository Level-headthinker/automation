import type { Metadata } from "next";
import Link from "next/link";
import {
  Check, ArrowRight, Stethoscope, MessageSquare, Mic,
  MessageCircle, Users, GitBranch, BarChart3, Shield, Zap, Globe,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero, GradientText } from "@/components/ui/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/ui/FAQ";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "ClinicBot — AI Receptionist for Clinics",
  description:
    "ClinicBot automates appointment booking, patient enquiries, and lead capture for clinics in Pakistan and worldwide. English, Urdu, and Roman Urdu supported.",
};

const DEEP_FEATURES = [
  {
    icon: MessageSquare,
    title: "AI Chatbot (Web + WhatsApp)",
    description:
      "Embed a chat widget on your website and connect your WhatsApp Business number. ClinicBot handles both channels simultaneously — collecting patient details, booking slots, and answering questions 24/7.",
    bullets: [
      "Instant response in under 2 seconds",
      "Handles English, Urdu script, and Roman Urdu",
      "Remembers returning patients automatically",
      "Embeds with a single line of code",
    ],
  },
  {
    icon: Mic,
    title: "AI Voice Agent",
    description:
      "When your clinic phone rings and no one is available, ClinicBot's voice agent answers, collects the patient's name, phone number, and concern, and creates a booking request automatically.",
    bullets: [
      "Never miss a patient call again",
      "Books appointments from voice conversations",
      "Escalates complex calls to clinic staff",
      "Works during lunch breaks, evenings, and holidays",
    ],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description:
      "Go beyond booking. ClinicBot sends appointment confirmations, reminders 24 hours and 2 hours before each slot, follow-up messages after visits, and re-engagement messages for inactive patients.",
    bullets: [
      "Reduces no-shows by up to 40%",
      "Automated confirmation and reminder sequence",
      "Post-visit follow-up and feedback collection",
      "All via official Meta WhatsApp Business API",
    ],
  },
  {
    icon: Users,
    title: "Patient CRM & Records",
    description:
      "Every patient who contacts your clinic is automatically added to the CRM. Track visit history, diagnoses, prescriptions, and follow-up dates from a unified dashboard.",
    bullets: [
      "Full patient profile with medical history",
      "Visit records with prescription support",
      "CNIC-based patient lookup",
      "Printable prescription and invoice PDFs",
    ],
  },
  {
    icon: GitBranch,
    title: "Multi-Branch Management",
    description:
      "Running more than one clinic location? Manage all branches from a single admin dashboard. Each branch has its own chatbot, doctors, schedule, and patient records — while you see everything from the top.",
    bullets: [
      "Unlimited branch locations",
      "Branch-specific doctors and schedules",
      "Consolidated analytics across branches",
      "Role-based staff access per branch",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "See exactly how your clinic is performing. Track appointment volume, lead conversion rates, no-show rates, busiest hours, and doctor utilisation — all in real time.",
    bullets: [
      "Daily, weekly, and monthly reports",
      "Lead source attribution",
      "Doctor performance metrics",
      "Busiest hours heatmap",
    ],
  },
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Patient reaches out",
    desc: "Via WhatsApp, your website widget, or a phone call — at any time of day or night.",
  },
  {
    num: "02",
    title: "AI collects details",
    desc: "ClinicBot asks for name, phone, and the nature of their concern in their preferred language.",
  },
  {
    num: "03",
    title: "Smart doctor matching",
    desc: "Based on the patient's concern, ClinicBot finds the right specialist and shows available slots.",
  },
  {
    num: "04",
    title: "Appointment confirmed",
    desc: "Patient confirms a slot. Booking is saved instantly. Confirmation sent via WhatsApp.",
  },
  {
    num: "05",
    title: "Automated reminders",
    desc: "Reminders go out 24h and 2h before the appointment. No-show rate drops significantly.",
  },
  {
    num: "06",
    title: "Staff see clean queue",
    desc: "Your team opens the dashboard and sees a structured, organised appointment list — no inbox chaos.",
  },
];

const FAQS = [
  {
    question: "How long does setup take?",
    answer:
      "Most clinics are live within 5 business days. We handle the WhatsApp Business API verification, website widget setup, and initial configuration. You provide your clinic details, doctors, and timings — we do the rest.",
  },
  {
    question: "Do I need technical knowledge to use ClinicBot?",
    answer:
      "None at all. The admin dashboard is designed for clinic owners and staff, not developers. If you can use WhatsApp, you can use ClinicBot. Our team handles all technical setup during onboarding.",
  },
  {
    question: "What languages does ClinicBot support?",
    answer:
      "ClinicBot currently supports English, Urdu script, and Roman Urdu — automatically detected from the patient's message. It responds in whichever language the patient uses, with no configuration required.",
  },
  {
    question: "What happens if a patient has a medical emergency?",
    answer:
      "ClinicBot is trained to detect emergency keywords in all supported languages. When detected, it immediately directs the patient to call 1122 and go to the nearest emergency room — before doing anything else.",
  },
  {
    question: "Can I use ClinicBot for more than one clinic branch?",
    answer:
      "Yes. The Professional and Enterprise plans support multiple branches. Each branch has its own chatbot, WhatsApp number, and doctor schedule, while you manage everything from one central admin account.",
  },
  {
    question: "Is patient data secure?",
    answer:
      "All patient data is stored in an encrypted PostgreSQL database. Data is never shared with third parties. We follow Pakistani data protection standards and are aligned with GDPR principles for international clinics.",
  },
  {
    question: "What if a patient asks something the AI cannot answer?",
    answer:
      "ClinicBot operates with a strict zero-invention policy. If it doesn't have the answer, it tells the patient to contact the clinic directly — it will never guess or fabricate information.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes. All plans are month-to-month with no long-term contracts. You can cancel or change your plan at any time.",
  },
];

const TRUST_POINTS = [
  { icon: Shield, text: "Patient data encrypted" },
  { icon: Zap, text: "99.9% uptime SLA" },
  { icon: Globe, text: "Pakistan, UK & UAE" },
];

export default function ClinicBotPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <PageHero
          label="ClinicBot — Live Now"
          labelVariant="violet"
          title={
            <>
              The AI Receptionist Your{" "}
              <GradientText>Clinic Deserves</GradientText>
            </>
          }
          description="Automate appointment booking, patient enquiries, and WhatsApp communication — in English, Urdu, and Roman Urdu. Running 24 hours a day without missing a single patient."
        >
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6 w-full max-w-sm sm:max-w-none mx-auto">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/demo">
                Book a Free Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <Link href="/#pricing">See Pricing</Link>
            </Button>
          </div>

          {/* Trust points */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-5">
            {TRUST_POINTS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-fg-subtle">
                <Icon className="w-4 h-4 text-violet flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </PageHero>

        {/* Live Chat Mockup */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl border border-border overflow-hidden shadow-md">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-b border-border bg-elevated">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2 ml-2 min-w-0">
                  <Stethoscope className="w-3.5 h-3.5 text-violet flex-shrink-0" />
                  <span className="text-xs text-fg-muted font-medium truncate">ClinicBot — City Clinic</span>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <Badge variant="success" dot>Online</Badge>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 bg-bg">
                {[
                  { role: "bot", text: "Assalam o alaikum! I'm ClinicBot, the AI assistant for City Clinic. How can I help you today?" },
                  { role: "user", text: "mujhe Dr. Ahmed se appointment chahiye, mere knee mein dard hai" },
                  { role: "bot", text: "Zaroor! Dr. Ahmed orthopaedic specialist hain. Kal (Friday) 10:00 AM ka slot available hai. Apna naam aur phone number share karein?" },
                  { role: "user", text: "Sara Khan, 0301-1234567" },
                  { role: "bot", text: "✅ Sara Khan ki appointment Dr. Ahmed ke saath Friday 10:00 AM pe confirm ho gayi. Ek din pehle WhatsApp reminder milega!" },
                ].map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "bot" && (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-violet flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <Stethoscope className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                      </div>
                    )}
                    {/* max-w is percentage-based on mobile, capped on larger screens */}
                    <div className={`max-w-[78%] sm:max-w-xs md:max-w-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-violet text-white rounded-tr-sm"
                        : "bg-surface border border-border text-fg-muted rounded-tl-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deep Features */}
        <section className="py-16 sm:py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <SectionLabel className="mb-4">Features</SectionLabel>
              <h2
                className="font-display font-bold text-fg"
                style={{ fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}
              >
                Everything Your Clinic Needs,{" "}
                <GradientText>Nothing You Don&apos;t</GradientText>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {DEEP_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="glass-card rounded-2xl border border-border p-5 sm:p-6 hover:border-border-strong transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-violet-muted flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-5 h-5 text-violet" />
                    </div>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-fg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-fg-muted leading-relaxed mb-3 sm:mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-fg-muted">
                          <Check className="w-3.5 h-3.5 text-violet flex-shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Patient Journey — dark band */}
        <section className="dark bg-[#070b14] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <SectionLabel variant="cyan" className="mb-4">Patient Journey</SectionLabel>
              <h2
                className="font-display font-bold text-fg"
                style={{ fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}
              >
                From First Message to{" "}
                <GradientText>Confirmed Appointment</GradientText>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={step.num} className="glass-card rounded-2xl border border-border p-5 sm:p-6 relative">
                  <div
                    className="text-4xl sm:text-5xl font-display font-bold mb-3 sm:mb-4 leading-none"
                    style={{
                      background: "var(--gradient-text)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.num}
                  </div>
                  <h3 className="font-display font-semibold text-fg text-base sm:text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{step.desc}</p>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="absolute top-6 -right-3 w-5 h-5 text-border hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <SectionLabel className="mb-4">FAQ</SectionLabel>
              <h2
                className="font-display font-bold text-fg"
                style={{ fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}
              >
                Questions About ClinicBot
              </h2>
            </div>
            <FAQ items={FAQS} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="rounded-2xl p-7 sm:p-10 lg:p-14 relative overflow-hidden"
              style={{ background: "var(--gradient)" }}
            >
              <div className="absolute inset-0 grid-pattern opacity-10" />
              <div className="relative">
                <h2 className="font-display font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
                  Ready to See ClinicBot in Action?
                </h2>
                <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto">
                  Book a free 30-minute demo. We&apos;ll set it up live for your clinic and show you exactly what patients will experience.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-violet hover:bg-white/90 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/demo">Book My Free Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
