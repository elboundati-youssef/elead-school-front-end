import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";
import quizImg from "@/assets/quiz-game.jpg";

const FeaturesSection = () => {
  const { t } = useI18n();

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        {/* Traditional classroom */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {t.features.title}
            </h2>
            <div className="space-y-4">
              {[t.features.item1, t.features.item2, t.features.item3].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                )
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              src={classroomImg}
              alt="Classroom"
              className="rounded-2xl shadow-card w-full object-cover aspect-video"
            />
          </motion.div>
        </div>

        {/* Quiz section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.features.quizTitle}
            </h2>
            <p className="text-muted-foreground">{t.features.quizDesc}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              src={quizImg}
              alt="Quiz games"
              className="rounded-2xl shadow-card w-full object-cover aspect-video"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
