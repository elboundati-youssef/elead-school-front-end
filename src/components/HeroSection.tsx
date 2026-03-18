import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Languages } from "lucide-react";
import heroKids from "@/assets/img7718.jpg";

const HeroSection = () => {
  const { t } = useI18n();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/212668288041?text=Bonjour, je souhaite inscrire mon enfant à Elead School.", "_blank");
  };

  return (
    <section id="about" className="relative pt-24 pb-16 min-h-[98vh] flex items-center overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 start-10 w-20 h-20 rounded-full bg-secondary/15 animate-float" />
      <div className="absolute top-40 end-20 w-14 h-14 rounded-full bg-accent/20 animate-bounce-slow" />
      <div className="absolute bottom-20 start-1/4 w-10 h-10 rounded-2xl bg-primary/10 animate-float rotate-45" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-start"
          >
            <p className="font-script text-xl sm:text-2xl md:text-3xl text-accent mb-3">
              {t.hero.slogan}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4 whitespace-pre-line">
              {t.hero.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 whitespace-pre-line">

              <span className="block md:hidden">
                {t.hero.subtitlemobile}
              </span>
              <span className="hidden md:block">
                {t.hero.subtitle}
              </span>
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={openWhatsApp}
                className="bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg inline-flex items-center gap-2 hover:opacity-90 transition-all shadow-card-hover hover:-translate-y-1 hover:shadow-xl duration-300"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 duration-300"
              >
                {t.nav.contact}
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-8 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/15 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{t.hero.stats1}</p>
                  <p className="text-xs text-muted-foreground">{t.hero.stats1Label}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-secondary/15 flex items-center justify-center">
                  <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{t.hero.stats2}</p>
                  <p className="text-xs text-muted-foreground">{t.hero.stats2Label}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image with magenta circle border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-[6px] border-secondary overflow-hidden shadow-card-hover">
                <img
                  src={heroKids}
                  alt="Happy students at Elead School"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-3 -end-3 w-8 h-8 rounded-full bg-accent animate-bounce-slow" />
              <div className="absolute -bottom-2 -start-2 w-6 h-6 rounded-full bg-secondary/60 animate-float" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
