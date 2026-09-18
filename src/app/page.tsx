import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BrandStatement } from "@/components/BrandStatement";
import { AboutSection } from "@/components/AboutSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { InteractiveWindow } from "@/components/InteractiveWindow";
import { WhyAlucurv } from "@/components/WhyAlucurv";
import { ProjectGallery } from "@/components/ProjectGallery";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhatsAppCTASection } from "@/components/WhatsAppCTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07090b]">
      {/* Entrance Animation */}
      <Preloader />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Brand Statement Reveal */}
      <BrandStatement />

      {/* About Alucurv */}
      <AboutSection />

      {/* Products & Solutions Showcase */}
      <ProductShowcase />

      {/* Signature Interactive Window Showcase */}
      <InteractiveWindow />

      {/* Why Alucurv Feature Pillars */}
      <WhyAlucurv />

      {/* Architectural Project Portfolio */}
      <ProjectGallery />

      {/* Before / After Comparison */}
      <BeforeAfterSlider />

      {/* 6-Step Technical Process */}
      <ProcessTimeline />

      {/* High-Conversion WhatsApp CTA */}
      <WhatsAppCTASection />

      {/* Contact & Callback Request */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
