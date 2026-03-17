import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import student1 from "@/assets/student1.png";
import student2 from "@/assets/student2.png";
import student3 from "@/assets/student3.png";
import { Link } from "react-router-dom";

// 👇 1. J'ai ajouté un 4ème élève (Sara Ali) dans la liste
const superstars = [
  { name: "Ayoub Khan", role: "Best Reader", img: student1 },
  { name: "Lina Fez", role: "Top Scorer", img: student2 },
  { name: "Hamza Mo", role: "Most Creative", img: student3 },
  { name: "Sara Ali", role: "Math Genius", img: student1 }, 
];

const SuperstarsSection = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.superstars.title}
          </h2>
          <Link 
            to="/superstars" 
            className="inline-block px-6 py-2.5 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 text-center"
          >
            {t.superstars.viewAll}
          </Link>
        </motion.div>

        {/* 2 colonnes sur mobile, 3 sur desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {superstars.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              // 👇 2. LE SECRET EST ICI : Si c'est la 4ème carte (index 3), on ajoute "md:hidden" pour la cacher sur PC !
              className={`bg-card rounded-2xl p-4 md:p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 group ${
                i === 3 ? "block md:hidden" : "block"
              }`}
            >
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden bg-muted border-4 border-secondary/30 group-hover:border-secondary transition-colors duration-300">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-card-foreground line-clamp-1">{s.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 line-clamp-1">{s.role}</p>
              
              <div className="flex justify-center gap-0.5 md:gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 md:w-4 md:h-4 fill-secondary text-secondary" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuperstarsSection;