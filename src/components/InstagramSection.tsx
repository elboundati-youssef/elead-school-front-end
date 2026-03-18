import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Instagram, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Tes vidéos locales
import vid1 from "@/assets/v1.mp4";
import vid2 from "@/assets/v2.mp4";
import vid3 from "@/assets/v3.mp4";
import vid4 from "@/assets/v4.mp4";

const InstagramSection = () => {
  const { t } = useI18n();
  
  const reelsVideos = [
    { id: 1, src: vid1, title: t.instagram.video1, link: "https://www.instagram.com/p/DLGA52EAOdh/" },
    { id: 2, src: vid2, title: t.instagram.video2, link: "https://www.instagram.com/p/DJccVXMAM2b/" },
    { id: 3, src: vid3, title: t.instagram.video3, link: "https://www.instagram.com/p/C9KN5a8o_sP/" },
    { id: 4, src: vid4, title: t.instagram.video4, link: "https://www.instagram.com/p/DS0QH-ODJ_W/" },
  ];

  const [isGlobalMuted, setIsGlobalMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0); 
  const [sectionInView, setSectionInView] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Détection Mobile/PC
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Observateur global (scroll de la page)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          videoRefs.current.forEach((vid) => vid?.pause());
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Magie mobile : gère la lecture auto selon le slider
  useEffect(() => {
    if (isMobile) {
      videoRefs.current.forEach((vid, i) => {
        if (vid) {
          if (i === activeMobileIdx && sectionInView) {
            vid.play().catch(() => {}); 
          } else {
            vid.pause();
          }
        }
      });
    }
  }, [activeMobileIdx, sectionInView, isMobile]);

  // Contrôles du slider
  const nextVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMobileIdx((prev) => (prev + 1) % reelsVideos.length);
  };

  const prevVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMobileIdx((prev) => (prev - 1 + reelsVideos.length) % reelsVideos.length);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsGlobalMuted(!isGlobalMuted);
  };

  // Clic sur la vidéo entière
  const handleCardClick = (e: React.MouseEvent, link: string, index: number) => {
    if (!isMobile) {
      window.open(link, "_blank");
    } else {
      e.preventDefault();
      const currentVid = videoRefs.current[index];
      if (currentVid) {
        if (currentVid.paused) currentVid.play().catch(() => {});
        else currentVid.pause();
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6"
        >
          {/* 👇 CORRECTION ICI : md:text-start remplace md:text-left pour s'adapter à l'Arabe */}
          <div className="text-center md:text-start">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              {t.instagram.title} <span className="text-primary">{t.instagram.highlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-sm md:text-base">
              {t.instagram.description}
            </p>
          </div>
          
          <a
            href="https://www.instagram.com/elead.schooltanger/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5 duration-300 whitespace-nowrap"
          >
            <Instagram className="w-5 h-5" />
            {t.instagram.followUs}
          </a>
        </motion.div>

        {/* CONTENEUR CARROUSEL MOBILE / GRILLE PC */}
        <div className="relative w-full max-w-[340px] md:max-w-none mx-auto">
          
          <div className="overflow-hidden md:overflow-visible rounded-3xl md:rounded-none">
            <div 
              className="flex md:grid md:grid-cols-4 md:gap-4 lg:gap-6 transition-transform duration-500 ease-in-out"
              style={isMobile ? { transform: `translateX(-${activeMobileIdx * 100}%)` } : {}}
            >
              {reelsVideos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="w-full shrink-0 md:w-auto relative aspect-[9/16] rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 cursor-pointer bg-muted"
                  
                  onClick={(e) => handleCardClick(e, video.link, i)}
                  
                  // LOGIQUE PC (Survol)
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      const currentVid = e.currentTarget.querySelector("video");
                      videoRefs.current.forEach((v) => { if (v && v !== currentVid) v.pause(); });
                      if (currentVid) currentVid.play().catch(() => {});
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      const vid = e.currentTarget.querySelector("video");
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
                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                    
                    <div className="flex flex-col items-start z-10">
                      <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-md pointer-events-none mb-2">
                        {video.title}
                      </h3>
                      
                      {/* 👇 CORRECTION ICI : Le bouton s'affiche sur mobile ET sur PC (au survol) */}
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} 
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white text-xs font-semibold transition-all duration-300 shadow-sm md:opacity-0 md:group-hover:opacity-100"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>{t.instagram.openInApp}</span>
                      </a>
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
          </div>

          {/* FLÈCHES DE NAVIGATION MOBILE */}
          <button 
            onClick={prevVideo} 
            className="md:hidden absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg z-20 active:scale-90 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextVideo} 
            className="md:hidden absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg z-20 active:scale-90 transition-transform"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* POINTS DE NAVIGATION MOBILE */}
          <div className="md:hidden flex justify-center gap-2 mt-5">
            {reelsVideos.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all duration-300 ${i === activeMobileIdx ? "w-6 bg-secondary" : "w-2 bg-secondary/30"}`} 
              />
            ))}
          </div>
          
        </div>

        {/* Bouton Général Mobile */}
        <div className="flex justify-center md:hidden mt-8">
          <a
            href="https://www.instagram.com/elead.schooltanger/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-lg w-full max-w-[340px] justify-center transition-all active:scale-95"
          >
            <Instagram className="w-5 h-5" />
            {t.instagram.followUsMobile}
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramSection;