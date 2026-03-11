import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Trophy, GraduationCap, Heart, Sparkles } from "lucide-react";

const ExcellenceSection = () => {
  const { t } = useI18n();

  const achievements = [
    { icon: Trophy, key: "achievement1" as const, color: "bg-secondary/15 text-secondary" },
    { icon: GraduationCap, key: "achievement2" as const, color: "bg-primary/15 text-primary" },
    { icon: Heart, key: "achievement3" as const, color: "bg-accent/15 text-accent" },
    { icon: Sparkles, key: "achievement4" as const, color: "bg-secondary/15 text-secondary" },
  ];

  return (
    <section id="excellence" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-script text-2xl text-accent mb-2">{t.excellence.badge}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.excellence.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.excellence.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl p-4 sm:p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  {t.excellence[`${item.key}Stat` as keyof typeof t.excellence]}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {t.excellence[item.key]}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Excellence quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute -top-6 -end-6 w-24 h-24 rounded-full border-4 border-secondary/30" />
          <div className="absolute -bottom-4 -start-4 w-16 h-16 rounded-full border-4 border-accent/20" />
          <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl italic max-w-3xl mx-auto relative z-10 leading-relaxed">
            "{t.excellence.quote}"
          </p>
          <p className="text-primary-foreground/60 mt-4 font-semibold relative z-10">
            — {t.excellence.quoteAuthor}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
