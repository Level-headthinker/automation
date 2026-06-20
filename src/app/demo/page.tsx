import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a free 30-minute demo and see how Raahnex can automate your clinic or service business — bookings, leads, reminders, and more.",
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-12">
        <CTA />
      </main>
      <Footer />
    </>
  );
}
