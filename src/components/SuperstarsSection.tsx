import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3-t.jpg";
import student4 from "@/assets/etudiants5-t.jpg";
import { Link } from "react-router-dom";

const superstars = [
  { name: "Ayoub Khan", role: "Best Reader", img: student2 },
  { name: "Lina Fez", role: "Top Scorer", img: student1 },
  { name: "Sara Ali", role: "Most Creative", img: student3 },
  { name: "Hamza Mo", role: "Math Genius", img: student4 }, 
];

const SuperstarsSection = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        
        {/* En-tête (Titre + Bouton Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-10 md:mb-12 gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center sm:text-left">
            {t.superstars.title}
          </h2>
          
          
          <Link 
            to="/superstars" 
            className="hidden sm:inline-block px-6 py-2.5 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 text-center"
          >
            {t.superstars.viewAll}
          </Link>
        </motion.div>

        {/* La grille des élèves */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {superstars.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
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

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center sm:hidden"
        >
          <Link 
            to="/superstars" 
            className="inline-block px-8 py-3 w-full max-w-[250px] rounded-xl border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 text-center"
          >
            {t.superstars.viewAll}
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default SuperstarsSection;