import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import FeaturesSection from "@/components/FeaturesSection";
import SuperstarsSection from "@/components/SuperstarsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <FeaturesSection />
      <SuperstarsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
