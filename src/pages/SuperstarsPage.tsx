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

          {/* 👇 Grille optimisée : grid-cols-2 sur mobile, gap-4 sur mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {allSuperstars.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -8 }}
                // 👇 p-4 sur mobile pour gagner de la place, p-6 sur desktop
                className="bg-card rounded-2xl p-4 md:p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border/50"
              >
                {/* 👇 Image w-16 h-16 sur mobile, w-24 h-24 sur desktop */}
                <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden bg-muted border-4 border-secondary/30 group-hover:border-secondary transition-colors duration-300">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                
                {/* 👇 Textes adaptés pour le mobile avec line-clamp pour éviter les débordements */}
                <h3 className="text-base md:text-lg font-bold text-card-foreground line-clamp-1">{s.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 line-clamp-1">{s.role}</p>
                
                {/* 👇 Étoiles légèrement plus petites et rapprochées sur mobile */}
                <div className="flex justify-center gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 md:w-4 md:h-4 fill-secondary text-secondary" />
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