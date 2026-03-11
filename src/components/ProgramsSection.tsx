import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Lightbulb, Languages, Microscope } from "lucide-react";

const programs = [
  { icon: Lightbulb, key: "creative" as const },
  { icon: Languages, key: "career" as const },
  { icon: Microscope, key: "coding" as const },
];

const ProgramsSection = () => {
  const { t } = useI18n();

  return (
    <section id="programs" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t.programs.title}
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            {t.programs.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            const title = t.programs[prog.key];
            const desc = t.programs[`${prog.key}Desc` as keyof typeof t.programs];
            return (
              <motion.div
                key={prog.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow cursor-pointer border border-secondary/20 hover:border-secondary/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
