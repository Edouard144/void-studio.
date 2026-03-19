import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrustBadges from "@/components/TrustBadges";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProcessSection from "@/components/ProcessSection";
import CommitmentSection from "@/components/CommitmentSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <LoadingScreen onComplete={handleComplete} />
      {loaded && (
        <div className="bg-breathe">
          <Navbar />
          <FloatingElements />
          <main>
            <HeroSection />
            <AboutSection />
            <TrustBadges />
            <ServicesSection />
            <PortfolioSection />
            <CaseStudiesSection />
            <ProcessSection />
            <CommitmentSection />
            <TeamSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <BlogSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
