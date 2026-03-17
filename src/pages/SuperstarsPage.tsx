import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom"; 
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

// Importe tes images ici
import student1 from "@/assets/student1.png";
import student2 from "@/assets/student2.png";
import student3 from "@/assets/student3.png";

// Plus de données pour la page complète
const allSuperstars = [
  { name: "Ayoub Khan", role: "Best Reader", img: student1 },
  { name: "Lina Fez", role: "Top Scorer", img: student2 },
  { name: "Hamza Mo", role: "Most Creative", img: student3 },
  { name: "Sara Ali", role: "Math Genius", img: student1 },
  { name: "Omar Ziyad", role: "Star Athlete", img: student2 },
  { name: "Rania Nour", role: "Helpful Friend", img: student3 },
  { name: "Tariq Ben", role: "Science Whiz", img: student1 },
  { name: "Ines Tariq", role: "Art Master", img: student2 },
];

const SuperstarsPage = () => {
  const { t } = useI18n();
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden w-full">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          
          {/* En-tête de la page avec bouton retour */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                {/* Remplace par t.common.back si tu l'as dans tes traductions */}
                <span>Retour à l'accueil</span> 
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t.superstars.title}
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Découvrez tous nos élèves exceptionnels qui brillent par leurs talents, leur créativité et leur comportement exemplaire au sein de Elead School.
              </p>
            </div>
          </div>

          {/* Grille complète des élèves */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allSuperstars.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border/50"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-4 border-secondary/30 group-hover:border-secondary transition-colors duration-300">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">{s.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.role}</p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default SuperstarsPage;