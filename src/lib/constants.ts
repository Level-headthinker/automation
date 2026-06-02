// ═══════════════════════════════════════════════════════════
// RAAHNEX — All site copy, data, and config in one place.
// Update brand name, colors, or content here — everywhere updates.
// ═══════════════════════════════════════════════════════════

export const BRAND = {
  name: "Raahnex",
  tagline: "The AI Agency for the Next Generation of Service Businesses.",
  description:
    "Raahnex builds AI-powered systems that automate operations for clinics, restaurants, and service businesses — so you focus on growth, not admin.",
  email: "hello@raahnex.ai",
  phone: "+92 300 0000000",
  location: "Pakistan · Global",
  social: {
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
} as const;

// ── Navbar structure (used by the new mega-menu Navbar) ──────
export const NAV_LINKS = [
  { label: "Work", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

// Services shown in the mega-menu dropdown
export const NAV_SERVICES = [
  {
    icon: "Sparkles",
    title: "UI/UX Design",
    description: "Research-led product design from concept to handoff",
    href: "/#contact",
  },
  {
    icon: "Globe",
    title: "Website Design",
    description: "Brand-led, conversion-focused sites with motion",
    href: "/#contact",
  },
  {
    icon: "Code2",
    title: "Web Development",
    description: "Next.js, React, APIs & edge infrastructure",
    href: "/#contact",
  },
  {
    icon: "BrainCircuit",
    title: "AI Development",
    description: "LLM applications with evals, guardrails & monitoring",
    href: "/#contact",
  },
  {
    icon: "Bot",
    title: "AI Agents",
    description: "Voice and tool-using agents for workflow automation",
    href: "/#contact",
  },
  {
    icon: "Stethoscope",
    title: "Healthcare Apps",
    description: "AI-powered clinic management & patient automation",
    href: "/products/clinicbot",
  },
] as const;

export const SITE_URL = "https://raahnex.ai";

// ── Hero ────────────────────────────────────────────────────

export const HERO = {
  badge: "RAAHNEX · AI AGENCY",
  headline: "The AI Agency",
  cyclingWords: [
    "for Clinics",
    "for Restaurants",
    "for Real Estate",
    "for Service Businesses",
    "that Never Sleeps",
    "that Drives Growth",
  ],
  subheadline:
    "We build AI-powered systems that automate operations, capture every lead, and scale your service business — faster than you thought possible.",
  cta_primary: { label: "Start Your Project", href: "#contact" },
  cta_secondary: { label: "View Our Work", href: "/products" },
  trust_note: "Trusted by service businesses across Pakistan and beyond.",
} as const;

// ── Trust Bar ───────────────────────────────────────────────

export const TRUST_STATS = [
  { value: "24/7", label: "AI Availability" },
  { value: "500+", label: "Appointments Automated" },
  { value: "3", label: "Industries Served" },
  { value: "5 min", label: "Average Setup Time" },
] as const;

export const TRUST_INDUSTRIES = [
  "Healthcare",
  "Restaurants",
  "Real Estate",
  "Customer Support",
] as const;

// ── Problem ─────────────────────────────────────────────────

export const PROBLEMS = [
  {
    icon: "Phone",
    title: "Missed Calls & Lost Leads",
    description:
      "Every unanswered call is a patient or customer walking to your competitor. Manual follow-up is too slow.",
  },
  {
    icon: "Calendar",
    title: "Manual Appointment Chaos",
    description:
      "Double bookings, no-shows, and scheduling conflicts drain your staff's time and erode patient trust.",
  },
  {
    icon: "Clock",
    title: "Staff Overwhelmed by Repetition",
    description:
      "Your team spends hours answering the same questions. Hours that should be spent on real care and service.",
  },
] as const;

// ── Solution ────────────────────────────────────────────────

export const SOLUTION = {
  headline: "Introducing the Raahnex Platform",
  subheadline:
    "One AI platform. Multiple industry solutions. Your business runs itself.",
  points: [
    "AI handles bookings, enquiries, and follow-ups instantly",
    "WhatsApp, voice, and web — all channels automated",
    "Real-time CRM, analytics, and multi-branch management",
  ],
} as const;

// ── Products ────────────────────────────────────────────────

export type ProductStatus = "live" | "coming-soon" | "beta";

export const PRODUCTS = [
  {
    id: "clinicbot",
    name: "ClinicBot",
    tagline: "AI Receptionist for Clinics",
    description:
      "Automate appointment booking, patient enquiries, and lead capture — in English, Urdu, and Roman Urdu. Runs 24/7 without a single missed call.",
    icon: "Stethoscope",
    status: "live" as ProductStatus,
    color: "violet",
    features: [
      "AI chatbot (WhatsApp + Web)",
      "Smart appointment scheduling",
      "Patient records & CRM",
      "Multi-branch support",
      "Voice agent integration",
      "Real-time analytics",
    ],
    href: "#contact",
  },
  {
    id: "restaurantbot",
    name: "RestaurantBot",
    tagline: "AI Waiter & Reservation System",
    description:
      "Take table reservations, handle menu enquiries, and capture dine-in leads automatically — on WhatsApp and your website.",
    icon: "UtensilsCrossed",
    status: "coming-soon" as ProductStatus,
    color: "cyan",
    features: [
      "Table reservation automation",
      "WhatsApp menu ordering",
      "Customer loyalty CRM",
      "Peak-hour AI management",
      "Review & feedback capture",
      "Multi-outlet dashboard",
    ],
    href: "#contact",
  },
  {
    id: "realestate",
    name: "EstateAI",
    tagline: "AI Agent for Property Businesses",
    description:
      "Qualify leads, schedule viewings, and follow up automatically. Turn cold enquiries into hot prospects without manual effort.",
    icon: "Building2",
    status: "coming-soon" as ProductStatus,
    color: "violet",
    features: [
      "Lead qualification AI",
      "Viewing scheduler",
      "WhatsApp property tours",
      "Agent CRM dashboard",
      "Automated follow-ups",
      "Market insight reports",
    ],
    href: "#contact",
  },
  {
    id: "supportdesk",
    name: "SupportDesk AI",
    tagline: "AI Customer Support for Any Business",
    description:
      "Deploy an intelligent support agent across web, WhatsApp, and voice — that resolves 80% of queries without human intervention.",
    icon: "HeadphonesIcon",
    status: "coming-soon" as ProductStatus,
    color: "cyan",
    features: [
      "Multi-channel AI support",
      "Intelligent ticket routing",
      "Custom knowledge base",
      "Escalation workflows",
      "CSAT & analytics",
      "API integrations",
    ],
    href: "#contact",
  },
] as const;

// ── How It Works ────────────────────────────────────────────

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Connect Your Business",
    description:
      "Tell us your clinic name, doctors, timings, and services. Setup takes under 5 minutes — no technical knowledge needed.",
    icon: "Plug",
  },
  {
    step: "02",
    title: "AI Takes Over Operations",
    description:
      "Our AI agent handles patient enquiries, books appointments, captures leads, and sends reminders — 24 hours a day, 7 days a week.",
    icon: "Bot",
  },
  {
    step: "03",
    title: "Watch Your Business Grow",
    description:
      "See real-time metrics, track every lead, manage your team from a unified dashboard, and scale across branches effortlessly.",
    icon: "TrendingUp",
  },
] as const;

// ── Industries ──────────────────────────────────────────────

export const INDUSTRIES = [
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "Stethoscope",
    headline: "The AI Receptionist Your Clinic Deserves",
    description:
      "From solo GP practices in Karachi to multi-branch hospitals in London — ClinicBot handles appointment booking, patient enquiries, and follow-ups in any language, around the clock.",
    useCases: [
      "Patients book via WhatsApp or web widget in seconds",
      "Automatic reminders reduce no-shows by up to 40%",
      "Voice agent answers calls when staff are busy",
      "Multi-branch management from one dashboard",
      "Patient records, visit history, and billing — unified",
    ],
    status: "live" as ProductStatus,
  },
  {
    id: "restaurants",
    label: "Restaurants",
    icon: "UtensilsCrossed",
    headline: "Your Restaurant, Always Open for Reservations",
    description:
      "Let AI handle table bookings, menu enquiries, and customer follow-ups — so your front-of-house team focuses on the experience, not the inbox.",
    useCases: [
      "WhatsApp reservations without lifting a finger",
      "AI-powered menu recommendations and ordering",
      "Loyalty programme and customer CRM built in",
      "Peak hour queue management automation",
      "Review capture and reputation management",
    ],
    status: "coming-soon" as ProductStatus,
  },
  {
    id: "real-estate",
    label: "Real Estate",
    icon: "Building2",
    headline: "Convert Property Enquiries on Autopilot",
    description:
      "Stop losing leads to slow response times. EstateAI qualifies every enquiry, schedules viewings, and follows up until the deal is done.",
    useCases: [
      "Instant lead qualification via WhatsApp",
      "Automated viewing scheduling and confirmations",
      "AI property matching based on buyer criteria",
      "Follow-up sequences that convert cold leads warm",
      "Agent performance dashboard and pipeline tracking",
    ],
    status: "coming-soon" as ProductStatus,
  },
  {
    id: "support",
    label: "Customer Support",
    icon: "HeadphonesIcon",
    headline: "Support That Never Sleeps",
    description:
      "Deploy a fully trained AI support agent across all your channels. Resolves 80% of tickets automatically — escalates only what truly needs a human.",
    useCases: [
      "Resolves common queries instantly, 24/7",
      "Intelligently routes complex tickets to the right team",
      "Learns from your knowledge base and FAQs",
      "Integrates with existing CRM and helpdesk tools",
      "Full CSAT tracking and improvement analytics",
    ],
    status: "coming-soon" as ProductStatus,
  },
] as const;

// ── Metrics ─────────────────────────────────────────────────

export const METRICS = [
  { value: 500, suffix: "+", label: "Appointments Automated", icon: "Calendar" },
  { value: 24, suffix: "/7", label: "Hours of AI Availability", icon: "Zap" },
  { value: 40, suffix: "%", label: "Reduction in No-Shows", icon: "TrendingDown" },
  { value: 5, suffix: " min", label: "Average Setup Time", icon: "Timer" },
] as const;

// ── Features ────────────────────────────────────────────────

export const FEATURES = [
  {
    icon: "MessageSquare",
    title: "AI Chatbot",
    description:
      "Multilingual AI that handles enquiries in English, Urdu, and Roman Urdu. Embeds on any website or WhatsApp number.",
    color: "violet",
  },
  {
    icon: "Mic",
    title: "Voice Agent",
    description:
      "AI that answers your clinic phone line, books appointments, and handles routine calls without human intervention.",
    color: "cyan",
  },
  {
    icon: "MessageCircle",
    title: "WhatsApp Automation",
    description:
      "Send appointment reminders, confirmations, and follow-ups automatically via WhatsApp Business API.",
    color: "violet",
  },
  {
    icon: "Users",
    title: "Built-in CRM",
    description:
      "Full patient or customer records, visit history, lead tracking, and follow-up workflows — all in one dashboard.",
    color: "cyan",
  },
  {
    icon: "GitBranch",
    title: "Multi-Branch Ready",
    description:
      "Manage multiple clinic branches or business locations from a single unified admin dashboard.",
    color: "violet",
  },
  {
    icon: "BarChart3",
    title: "Real-Time Analytics",
    description:
      "Track appointments, leads, conversions, and AI performance with a live analytics dashboard.",
    color: "cyan",
  },
] as const;

// ── Pricing ─────────────────────────────────────────────────

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "15,000",
    currency: "PKR",
    period: "per month",
    description: "Perfect for solo clinics and small practices.",
    highlighted: false,
    features: [
      "1 branch / location",
      "AI web chatbot",
      "WhatsApp integration",
      "Up to 200 appointments/month",
      "Basic patient CRM",
      "Email notifications",
      "Email support",
    ],
    cta: "Get Started",
    href: "#contact",
  },
  {
    name: "Professional",
    price: "35,000",
    currency: "PKR",
    period: "per month",
    description: "For growing clinics that need full automation.",
    highlighted: true,
    features: [
      "Up to 5 branches",
      "AI web + WhatsApp chatbot",
      "Voice agent (AI phone)",
      "Unlimited appointments",
      "Advanced CRM & patient records",
      "Billing & invoicing",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "#contact",
  },
  {
    name: "Enterprise",
    price: "Custom",
    currency: "",
    period: "tailored to you",
    description: "For multi-branch chains and international clinics.",
    highlighted: false,
    features: [
      "Unlimited branches",
      "All Pro features",
      "Custom AI training",
      "Dedicated account manager",
      "API access & integrations",
      "SLA guarantee",
      "White-label option",
      "Onboarding & migration",
    ],
    cta: "Talk to Sales",
    href: "#contact",
  },
] as const;

// ── CTA / Contact ───────────────────────────────────────────

export const CTA_SECTION = {
  badge: "Get Started Today",
  headline: "Ready to Automate Your Business?",
  subheadline:
    "Book a free 30-minute demo and see how Raahnex can transform your operations starting this week.",
  form_note: "No commitment. No setup fees. We respond within 2 hours.",
} as const;

export const INDUSTRIES_DROPDOWN = [
  "Healthcare / Clinic",
  "Restaurant / F&B",
  "Real Estate",
  "Customer Support",
  "Other",
] as const;

// ── Case Studies ────────────────────────────────────────────

export const CASE_STUDIES = [
  {
    id: "city-clinic",
    title: "City Clinic, Karachi",
    industry: "Healthcare",
    tag: "ClinicBot",
    tagColor: "violet",
    result: "3× more appointments",
    metric: "68",
    metricLabel: "appointments/day",
    description:
      "A 3-doctor GP clinic in Karachi was missing 40% of patient calls daily. After deploying ClinicBot on WhatsApp and web, same-day booking rose 3× and no-shows dropped by 38%.",
    gradient: "from-violet-600 to-purple-800",
  },
  {
    id: "medcare-lahore",
    title: "MedCare Specialist Centre, Lahore",
    industry: "Multi-Branch Clinic",
    tag: "ClinicBot Pro",
    tagColor: "cyan",
    result: "5 branches unified",
    metric: "92%",
    metricLabel: "patient satisfaction",
    description:
      "A 5-branch specialist centre consolidated all appointment management into one Raahnex dashboard. Staff hours spent on admin dropped by 60% in the first month.",
    gradient: "from-cyan-600 to-blue-800",
  },
  {
    id: "diaspora-clinic",
    title: "Al-Shifa Clinic, Hertfordshire UK",
    industry: "Diaspora Healthcare",
    tag: "ClinicBot International",
    tagColor: "violet",
    result: "24/7 multilingual AI",
    metric: "0",
    metricLabel: "missed messages",
    description:
      "A UK-based Pakistani diaspora clinic needed Urdu and English support. ClinicBot handled both languages seamlessly, capturing every patient enquiry including out-of-hours.",
    gradient: "from-violet-500 to-cyan-600",
  },
] as const;

// ── Testimonials ─────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    quote:
      "Before Raahnex, I was personally answering WhatsApp messages at 11pm. Now ClinicBot handles everything — bookings, reminders, follow-ups. I just open the dashboard in the morning.",
    name: "Dr. Ayesha Malik",
    role: "GP, City Clinic Karachi",
    initials: "AM",
    rating: 5,
    color: "violet",
  },
  {
    quote:
      "The Roman Urdu support is what sold me. Our patients write exactly the way they talk. ClinicBot understands them instantly and responds naturally. No other system does this.",
    name: "Dr. Usman Tariq",
    role: "Orthopaedic Specialist, Lahore",
    initials: "UT",
    rating: 5,
    color: "cyan",
  },
  {
    quote:
      "Setup was 4 days. The team handled everything — WhatsApp API, website widget, staff training. We went live before I expected to. ROI was visible in the first week.",
    name: "Dr. Sara Ahmed",
    role: "Dermatologist, Islamabad",
    initials: "SA",
    rating: 5,
    color: "violet",
  },
] as const;

// ── Marquee Items ─────────────────────────────────────────────

export const MARQUEE_ITEMS = [
  "GP Clinics", "Specialist Centres", "Dental Practices",
  "Physiotherapy", "Dermatology", "Paediatrics",
  "Gynaecology", "Eye Clinics", "Cardiology",
  "Pharmacies", "Diagnostic Labs", "Rehabilitation",
  "Multi-Branch Hospitals", "Diaspora Clinics",
] as const;

// ── Footer ──────────────────────────────────────────────────

export const FOOTER_LINKS = {
  Products: [
    { label: "ClinicBot", href: "/products/clinicbot" },
    { label: "RestaurantBot", href: "/products" },
    { label: "EstateAI", href: "/products" },
    { label: "SupportDesk AI", href: "/products" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Documentation", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
} as const;
