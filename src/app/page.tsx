import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoWall } from "@/components/sections/LogoWall";
import { Products } from "@/components/sections/Products";
import { Engine } from "@/components/sections/Engine";
import { Testimonials } from "@/components/sections/Testimonials";
import { GetStarted } from "@/components/sections/GetStarted";

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* Alternating bands: light → dark → light → dark → light → dark */}
      <main className="flex-1">
        <Hero />          {/* light */}
        <LogoWall />      {/* dark  */}
        <Products />      {/* light */}
        <Engine />        {/* dark  */}
        <Testimonials />  {/* light */}
        <GetStarted />    {/* dark — "Get started" band above footer */}
      </main>
      <Footer />
    </>
  );
}
