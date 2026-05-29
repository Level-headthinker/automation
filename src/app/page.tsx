import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Products } from "@/components/sections/Products";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Industries } from "@/components/sections/Industries";
import { Metrics } from "@/components/sections/Metrics";
import { Features } from "@/components/sections/Features";
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
        <Industries />
        <Metrics />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
