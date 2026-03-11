import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import FeaturesSection from "@/components/FeaturesSection";
import SuperstarsSection from "@/components/SuperstarsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <ExcellenceSection />
      <FeaturesSection />
      <GallerySection />
      <SuperstarsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
