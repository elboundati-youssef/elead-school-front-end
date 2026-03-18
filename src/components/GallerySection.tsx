import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Importation de l'icône de fermeture

import classroomImg from "@/assets/classroom.jpg";
import quizImg from "@/assets/quiz-game.jpg";
import heroKids from "@/assets/img7718.jpg";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";

const galleryImages = [
  { src: classroomImg, alt: "Montessori classroom", span: "md:col-span-2 md:row-span-2" },
  { src: student2, alt: "Creative activities", span: "" },
  { src: quizImg, alt: "Interactive activities", span: "" },
  { src: student1, alt: "Student learning", span: "" },
  { src: heroKids, alt: "Happy students", span: "md:col-span-2" },
  { src: student3, alt: "Student achievement", span: "" },
];

const GallerySection = () => {
  const { t } = useI18n();
  // 👇 Nouvel état pour gérer l'image sélectionnée
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-script text-2xl text-accent mb-2">📸</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
              onClick={() => setSelectedImg(img.src)} // 👇 Ouvre l'image au clic
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 👇 La fenêtre modale (Lightbox) qui s'affiche quand selectedImg n'est pas null */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)} // Ferme si on clique à côté
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          >
            {/* Bouton Fermer (X) */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* L'image en grand */}
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg}
              alt="Vue agrandie"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique directement sur l'image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;