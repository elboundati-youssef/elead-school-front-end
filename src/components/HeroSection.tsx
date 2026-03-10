import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Users, GraduationCap } from "lucide-react";
import heroKids from "@/assets/hero-kids.png";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 start-10 w-20 h-20 rounded-full bg-secondary/20 animate-float" />
      <div className="absolute top-40 end-20 w-14 h-14 rounded-full bg-accent/20 animate-bounce-slow" />
      <div className="absolute bottom-20 start-1/4 w-10 h-10 rounded-2xl bg-primary/10 animate-float rotate-45" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-start"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>
            <button className="gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-card-hover">
              {t.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{t.hero.stats1}</p>
                  <p className="text-xs text-muted-foreground">{t.hero.stats1Label}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{t.hero.stats2}</p>
                  <p className="text-xs text-muted-foreground">{t.hero.stats2Label}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={heroKids}
              alt="Happy students at Elead School"
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
