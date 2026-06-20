import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero, GradientText } from "@/components/ui/PageHero";
import { PricingTabs } from "@/components/sections/PricingTabs";
import { GetStarted } from "@/components/sections/GetStarted";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent per-service pricing for Raahnex AI products — ClinicBot, RestaurantBot, SupportDesk AI — plus a usage-based calculator for voice and messaging agents.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          label="Pricing"
          title={<>Simple, <GradientText>Per-Service Pricing</GradientText></>}
          description="Each product is priced for its industry. Choose a plan, or build a custom voice & messaging plan around exactly how much you use."
        />
        <PricingTabs />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
