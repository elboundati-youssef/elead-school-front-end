import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import classroomImg from "@/assets/classroom.jpg";
import quizImg from "@/assets/quiz-game.jpg";
import heroKids from "@/assets/hero-kids.png";
import student1 from "@/assets/student1.png";
import student2 from "@/assets/student2.png";
import student3 from "@/assets/student3.png";

const galleryImages = [
  { src: classroomImg, alt: "Montessori classroom", span: "md:col-span-2 md:row-span-2" },
  { src: heroKids, alt: "Happy students", span: "" },
  { src: quizImg, alt: "Interactive activities", span: "" },
  { src: student1, alt: "Student learning", span: "" },
  { src: student2, alt: "Creative activities", span: "md:col-span-2" },
  { src: student3, alt: "Student achievement", span: "" },
];

const GallerySection = () => {
  const { t } = useI18n();

  return (
    <section id="gallery" className="py-20">
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
    </section>
  );
};

export default GallerySection;
