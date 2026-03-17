import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const { t } = useI18n();

  const openWhatsApp = () => {
    window.open("https://wa.me/212668288041?text=Bonjour, je souhaite inscrire mon enfant à Elead School.", "_blank");
  };

  return (
    <section id="cta" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute -top-10 -end-10 w-40 h-40 rounded-full border-4 border-secondary/30" />
          <div className="absolute -bottom-8 -start-8 w-32 h-32 rounded-full border-4 border-accent/20" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 relative z-10">
            {t.cta.title}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto relative z-10 whitespace-pre-line">
           
             <span className="block md:hidden">
                 {t.cta.subtitlemobile}
              </span>
              <span className="hidden md:block">
                 {t.cta.subtitle}
              </span>
          </p>
          <button
            onClick={openWhatsApp}
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-all relative z-10 hover:-translate-y-0.5 shadow-card-hover"
          >
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
