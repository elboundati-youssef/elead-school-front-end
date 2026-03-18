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
import InstagramSection from "@/components/InstagramSection";
const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden w-full">
      {/* Navbar agit comme l'en-tête (idéalement, elle utilise la balise <header> à l'intérieur de son propre composant) */}
      <Navbar />

      {/* La balise <main> est cruciale pour le SEO. Elle dit à Google : "Voici le vrai contenu de la page !" */}
      <main className="flex-grow" id="main-content">
        <HeroSection />
        <ProgramsSection />
        <InstagramSection />
        <ExcellenceSection />
        
        <FeaturesSection />
        <GallerySection />
        <SuperstarsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      
      {/* Footer (idéalement, ce composant utilise la balise <footer>) */}
      <FooterSection />
      
      {/* Les boutons flottants ou widgets doivent rester en dehors de <main> car ce n'est pas du contenu texte pertinent pour Google */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;