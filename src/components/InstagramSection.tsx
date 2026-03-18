import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Instagram, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Tes vidéos locales
import vid1 from "@/assets/v1.mp4";
import vid2 from "@/assets/v2.mp4";
import vid3 from "@/assets/v3.mp4";
import vid4 from "@/assets/v4.mp4";

const bentoVideos = [
  { id: 1, src: vid1, span: "md:col-span-2 md:row-span-2", title: "L'excellence au quotidien", link: "https://www.instagram.com/p/DLGA52EAOdh/" },
  { id: 2, src: vid2, span: "md:col-span-2 md:row-span-1", title: "Méthode Montessori", link: "https://www.instagram.com/p/DJccVXMAM2b/" },
  { id: 3, src: vid3, span: "md:col-span-1 md:row-span-1", title: "Éveil & Jeux", link: "https://www.instagram.com/p/C9KN5a8o_sP/" },
  { id: 4, src: vid4, span: "md:col-span-1 md:row-span-1", title: "Créativité", link: "https://www.instagram.com/p/DS0QH-ODJ_W/" },
];

const InstagramSection = () => {
  const { t } = useI18n();
  const [isGlobalMuted, setIsGlobalMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // 👇 L'observateur ne sert plus qu'à UNE chose : couper la vidéo au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          
          // Si la vidéo sort de l'écran (sur mobile ou PC), on la met en pause
          if (!entry.isIntersecting) {
            video.pause();
          }
        });
      },
      { threshold: 0.2 } // Déclenche l'arrêt quand il reste moins de 20% de la vidéo visible
    );

    videoRefs.current.forEach((vid) => {
      if (vid) observer.observe(vid);
    });

    return () => observer.disconnect();
  }, []);

  // Gestion du son global
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsGlobalMuted(!isGlobalMuted);
  };

  // 👇 NOUVELLE FONCTION : Gère le comportement différent entre Mobile et PC
  const handleCardClick = (e: React.MouseEvent, videoId: number, link: string) => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      // COMPORTEMENT PC : Ouvre Instagram
      window.open(link, "_blank");
    } else {
      // COMPORTEMENT MOBILE : Lecture / Pause de la vidéo (sans aller sur Instagram)
      e.preventDefault();
      
      const vidIndex = bentoVideos.findIndex(v => v.id === videoId);
      const currentVid = videoRefs.current[vidIndex];

      // On coupe toutes les autres vidéos
      videoRefs.current.forEach((v) => {
        if (v && v !== currentVid) v.pause();
      });

      // On lance ou met en pause la vidéo touchée
      if (currentVid) {
        if (currentVid.paused) {
          currentVid.play().catch(() => {});
        } else {
          currentVid.pause();
        }
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6"
        >
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Vivez l'expérience <span className="text-primary">Elead</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-sm md:text-base">
              Plongez dans le quotidien de nos élèves. Des moments d'apprentissage, de joie et de découverte, capturés sur le vif.
            </p>
          </div>
          
          <a
            href="https://www.instagram.com/elead.schooltanger/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5 duration-300 whitespace-nowrap"
          >
            <Instagram className="w-5 h-5" />
            Nous suivre
          </a>
        </motion.div>

        {/* LA GRILLE BENTO BOX */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] mb-10">
          {bentoVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 cursor-pointer bg-muted ${video.span}`}
              
              // 👇 C'est ici qu'on appelle la nouvelle logique de clic
              onClick={(e) => handleCardClick(e, video.id, video.link)}
              
              onMouseEnter={(e) => {
                if (window.innerWidth >= 768) {
                  const currentVid = e.currentTarget.querySelector('video');
                  
                  // Coupe les autres si la souris bouge vite
                  videoRefs.current.forEach((v) => {
                    if (v && v !== currentVid) v.pause();
                  });

                  if (currentVid) currentVid.play().catch(() => {});
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth >= 768) {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) vid.pause();
                }
              }}
            >
              <video 
                ref={(el) => (videoRefs.current[i] = el)}
                src={video.src}
                loop 
                muted={isGlobalMuted}
                playsInline
                preload="metadata" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="pointer-events-none">
                  <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <Instagram className="w-4 h-4" />
                    <span>Voir sur Instagram</span>
                  </div>
                </div>
                
                {/* BOUTON SON */}
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-lg border border-white/20 z-10"
                >
                  {isGlobalMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-accent animate-pulse" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton mobile uniquement */}
        <div className="flex justify-center md:hidden">
          <a
            href="https://www.instagram.com/elead.schooltanger/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-lg w-full justify-center transition-all active:scale-95"
          >
            <Instagram className="w-5 h-5" />
            Nous suivre sur Instagram
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramSection;