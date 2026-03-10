import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export type Language = "fr" | "en" | "ar";

const translations = {
  en: {
    nav: {
      about: "About Us",
      programs: "Programs",
      montessori: "Montessori",
      admissions: "Admissions",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      slogan: "School of elites, school of leaders",
      title: "Registrations Open 2025-2026",
      subtitle: "100% Montessori Pedagogy — Preschool & Primary. Give your child a premium education in Tanger.",
      cta: "Enroll Now",
      stats1: "100%",
      stats1Label: "Montessori Pedagogy",
      stats2: "3",
      stats2Label: "Languages (FR / EN / AR)",
    },
    programs: {
      title: "Our Programs",
      subtitle: "Our Montessori-based programs are designed to inspire, challenge and empower every child.",
      creative: "Creative Thinking",
      creativeDesc: "Encouraging imagination and innovation through hands-on Montessori projects.",
      career: "Language Immersion",
      careerDesc: "Trilingual education in French, English, and Arabic from day one.",
      coding: "STEM Discovery",
      codingDesc: "Building curiosity through interactive science and technology activities.",
    },
    resources: {
      title: "Our Resources",
      subtitle: "We develop rich and interactive Montessori materials for effective learning.",
    },
    features: {
      title: "Our Montessori approach encourages students to",
      item1: "Build independence and confidence early",
      item2: "Learn at their own rhythm",
      item3: "Discover through hands-on experiences",
      quizTitle: "Interactive learning with playful activities",
      quizDesc: "Playful activities reinforce what students learn through fun, interactive challenges tailored to each child.",
    },
    superstars: {
      title: "Our Superstars",
      viewAll: "View All",
    },
    cta: {
      title: "Give Your Child the Best Start",
      subtitle: "Join Elead School — 100% Montessori Pedagogy in Tanger.",
      button: "Enroll Now",
    },
    contact: {
      title: "Contact Us",
      phone: "+212 6 68 28 80 41 / 42",
      email: "eleadschool1@gmail.com",
      address: "Al-mowaddifine, près du centre de dialyse, Tanger",
      instagram: "@elead.schooltanger",
    },
    footer: {
      rights: "© 2025 Elead School. All rights reserved.",
      description: "School of elites, school of leaders — 100% Montessori Pedagogy in Tanger.",
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      programs: "Programmes",
      montessori: "Montessori",
      admissions: "Inscriptions",
      gallery: "Galerie",
      contact: "Contact",
    },
    hero: {
      slogan: "École des élites, école des leaders",
      title: "Inscriptions Ouvertes 2025-2026",
      subtitle: "100% Pédagogie Montessori — Maternelle & Primaire. Offrez à votre enfant une éducation premium à Tanger.",
      cta: "Inscrire Mon Enfant",
      stats1: "100%",
      stats1Label: "Pédagogie Montessori",
      stats2: "3",
      stats2Label: "Langues (FR / EN / AR)",
    },
    programs: {
      title: "Nos Programmes",
      subtitle: "Nos programmes basés sur Montessori sont conçus pour inspirer, défier et responsabiliser chaque enfant.",
      creative: "Pensée Créative",
      creativeDesc: "Encourager l'imagination et l'innovation par des projets pratiques Montessori.",
      career: "Immersion Linguistique",
      careerDesc: "Éducation trilingue en français, anglais et arabe dès le premier jour.",
      coding: "Découverte STEM",
      codingDesc: "Développer la curiosité à travers des activités scientifiques et technologiques interactives.",
    },
    resources: {
      title: "Nos Ressources",
      subtitle: "Nous développons des matériaux Montessori riches et interactifs pour un apprentissage efficace.",
    },
    features: {
      title: "Notre approche Montessori encourage les élèves à",
      item1: "Développer l'autonomie et la confiance en soi",
      item2: "Apprendre à leur propre rythme",
      item3: "Découvrir par l'expérience concrète",
      quizTitle: "Apprentissage interactif avec des activités ludiques",
      quizDesc: "Les activités ludiques renforcent l'apprentissage par des défis amusants et interactifs adaptés à chaque enfant.",
    },
    superstars: {
      title: "Nos Stars",
      viewAll: "Voir Tout",
    },
    cta: {
      title: "Offrez à Votre Enfant le Meilleur Départ",
      subtitle: "Rejoignez Elead School — 100% Pédagogie Montessori à Tanger.",
      button: "Inscrire Mon Enfant",
    },
    contact: {
      title: "Contactez-nous",
      phone: "+212 6 68 28 80 41 / 42",
      email: "eleadschool1@gmail.com",
      address: "Al-mowaddifine, près du centre de dialyse, Tanger",
      instagram: "@elead.schooltanger",
    },
    footer: {
      rights: "© 2025 Elead School. Tous droits réservés.",
      description: "École des élites, école des leaders — 100% Pédagogie Montessori à Tanger.",
    },
  },
  ar: {
    nav: {
      about: "من نحن",
      programs: "البرامج",
      montessori: "مونتيسوري",
      admissions: "التسجيل",
      gallery: "المعرض",
      contact: "اتصل بنا",
    },
    hero: {
      slogan: "مدرسة النخبة، مدرسة القادة",
      title: "التسجيل مفتوح 2025-2026",
      subtitle: "بيداغوجيا مونتيسوري 100% — حضانة وابتدائي. امنح طفلك تعليمًا متميزًا في طنجة.",
      cta: "سجّل طفلك الآن",
      stats1: "100%",
      stats1Label: "بيداغوجيا مونتيسوري",
      stats2: "3",
      stats2Label: "لغات (فر / إن / عر)",
    },
    programs: {
      title: "برامجنا",
      subtitle: "برامجنا المبنية على مونتيسوري مصممة لإلهام وتحدي وتمكين كل طفل.",
      creative: "التفكير الإبداعي",
      creativeDesc: "تشجيع الخيال والابتكار من خلال مشاريع مونتيسوري العملية.",
      career: "الانغماس اللغوي",
      careerDesc: "تعليم ثلاثي اللغات بالفرنسية والإنجليزية والعربية منذ اليوم الأول.",
      coding: "اكتشاف العلوم والتكنولوجيا",
      codingDesc: "بناء الفضول من خلال أنشطة علمية وتكنولوجية تفاعلية.",
    },
    resources: {
      title: "مواردنا",
      subtitle: "نقوم بتطوير مواد مونتيسوري غنية وتفاعلية للتعلم الفعال.",
    },
    features: {
      title: "نهجنا في مونتيسوري يشجع الطلاب على",
      item1: "بناء الاستقلالية والثقة بالنفس مبكراً",
      item2: "التعلم بإيقاعهم الخاص",
      item3: "الاكتشاف من خلال التجارب العملية",
      quizTitle: "تعلم تفاعلي مع أنشطة ترفيهية",
      quizDesc: "تعزز الأنشطة الترفيهية ما يتعلمه الطلاب من خلال تحديات ممتعة وتفاعلية مصممة لكل طفل.",
    },
    superstars: {
      title: "نجومنا",
      viewAll: "عرض الكل",
    },
    cta: {
      title: "امنح طفلك أفضل بداية",
      subtitle: "انضم إلى مدرسة إيليد — بيداغوجيا مونتيسوري 100% في طنجة.",
      button: "سجّل طفلك الآن",
    },
    contact: {
      title: "اتصل بنا",
      phone: "+212 6 68 28 80 41 / 42",
      email: "eleadschool1@gmail.com",
      address: "الموظفين، بالقرب من مركز غسيل الكلى، طنجة",
      instagram: "@elead.schooltanger",
    },
    footer: {
      rights: "© 2025 مدرسة إيليد. جميع الحقوق محفوظة.",
      description: "مدرسة النخبة، مدرسة القادة — بيداغوجيا مونتيسوري 100% في طنجة.",
    },
  },
};

type Translations = typeof translations.en;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("fr");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const dir = language === "ar" ? "rtl" : "ltr";
  const t = translations[language];

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
