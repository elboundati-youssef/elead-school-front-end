import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import classroomImg from "@/assets/classroom-t.jpg";
import quizImg from "@/assets/quiz-game-t.jpg";

const FeaturesSection = () => {
  const { t } = useI18n();

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        {/* Traditional classroom */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8">
              {t.features.title}
            </h2>
            <div className="space-y-4">
              {[t.features.item1, t.features.item2, t.features.item3].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <img
              src={classroomImg}
              alt="Classroom"
              className="rounded-2xl shadow-card w-full object-cover aspect-video hover:shadow-card-hover transition-shadow duration-300"
            />
          </motion.div>
        </div>

        {/* Quiz section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.features.quizTitle}
            </h2>
            <p className="text-muted-foreground">{t.features.quizDesc}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <img
              src={quizImg}
              alt="Quiz games"
              className="rounded-2xl shadow-card w-full object-cover aspect-video hover:shadow-card-hover transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
