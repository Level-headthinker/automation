import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Products } from "@/components/sections/Products";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Industries } from "@/components/sections/Industries";
import { Metrics } from "@/components/sections/Metrics";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Problem />
        <Products />
        <HowItWorks />
        <CaseStudies />
        <Features />
        <Testimonials />
        <Industries />
        <Metrics />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
