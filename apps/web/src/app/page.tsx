"use client";

import LiveInvoicePreview from "@/components/layout/landing/live-invoice-preview";
import OurSponser from "@/components/layout/landing/our-sponser";
import Features from "@/components/layout/landing/features";
import Header from "@/components/layout/landing/header";
import Footer from "@/components/layout/landing/footer";
import Stats from "@/components/layout/landing/stats";
import Hero from "@/components/layout/landing/hero";

export default function Home() {
  return (
    <div className="new-container relative !border-none sm:!border-dashed">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <LiveInvoicePreview />
      <OurSponser />
      <Footer />
    </div>
  );
}
