import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const { t } = useI18n();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t.cta.title}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            {t.cta.subtitle}
          </p>
          <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
