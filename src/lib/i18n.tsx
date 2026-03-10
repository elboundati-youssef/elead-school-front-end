import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export type Language = "fr" | "en" | "ar";

const translations = {
  en: {
    nav: {
      about: "About Us",
      programs: "Programs",
      pricing: "Pricing",
      admissions: "Admissions",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Better Future For Your Kids",
      subtitle: "Let your child learn the skills, and the values that lead every day.",
      cta: "Get Started",
      stats1: "7.5k+",
      stats1Label: "Students enrolled in our programs",
      stats2: "50+",
      stats2Label: "Dedicated teachers & mentors",
    },
    programs: {
      title: "Programs",
      subtitle: "Our learning programs are designed to inspire, challenge and empower every child.",
      creative: "Creative Thinking",
      creativeDesc: "Encouraging imagination and innovation through hands-on projects.",
      career: "Career Planning",
      careerDesc: "Preparing students for the future with real-world skills.",
      coding: "Coding Academy",
      codingDesc: "Building digital literacy through interactive programming courses.",
    },
    resources: {
      title: "Our Resources",
      subtitle: "We develop rich and interactive materials for effective learning.",
    },
    features: {
      title: "Traditional in-person classroom encouraged students to",
      item1: "Build strong study habits early",
      item2: "Engage with classmates",
      item3: "Interactive learning of academic concepts",
      quizTitle: "Children will be tested with online quiz games",
      quizDesc: "Online quizzes help reinforce what students learn in class through fun, interactive challenges.",
    },
    superstars: {
      title: "Our October's Superstars",
      viewAll: "View All",
    },
    cta: {
      title: "Better Future for Your Kids",
      subtitle: "Join Elead School and give your child the best education experience.",
      button: "Join Now",
    },
    footer: {
      rights: "© 2024 Elead School. All rights reserved.",
      description: "Empowering the next generation through innovative education in Tanger.",
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      programs: "Programmes",
      pricing: "Tarifs",
      admissions: "Admissions",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Un Meilleur Avenir Pour Vos Enfants",
      subtitle: "Laissez votre enfant acquérir les compétences et les valeurs qui comptent chaque jour.",
      cta: "Commencer",
      stats1: "7.5k+",
      stats1Label: "Élèves inscrits dans nos programmes",
      stats2: "50+",
      stats2Label: "Enseignants et mentors dédiés",
    },
    programs: {
      title: "Programmes",
      subtitle: "Nos programmes d'apprentissage sont conçus pour inspirer, défier et responsabiliser chaque enfant.",
      creative: "Pensée Créative",
      creativeDesc: "Encourager l'imagination et l'innovation par des projets pratiques.",
      career: "Planification de Carrière",
      careerDesc: "Préparer les étudiants pour l'avenir avec des compétences concrètes.",
      coding: "Académie de Codage",
      codingDesc: "Développer la littératie numérique à travers des cours de programmation interactifs.",
    },
    resources: {
      title: "Nos Ressources",
      subtitle: "Nous développons des matériaux riches et interactifs pour un apprentissage efficace.",
    },
    features: {
      title: "L'enseignement traditionnel en classe encourage les élèves à",
      item1: "Développer de bonnes habitudes d'étude tôt",
      item2: "Interagir avec les camarades",
      item3: "Apprentissage interactif des concepts académiques",
      quizTitle: "Les enfants seront testés avec des quiz en ligne",
      quizDesc: "Les quiz en ligne renforcent ce que les élèves apprennent en classe grâce à des défis amusants et interactifs.",
    },
    superstars: {
      title: "Nos Stars d'Octobre",
      viewAll: "Voir Tout",
    },
    cta: {
      title: "Un Meilleur Avenir pour Vos Enfants",
      subtitle: "Rejoignez Elead School et offrez à votre enfant la meilleure expérience éducative.",
      button: "Rejoindre",
    },
    footer: {
      rights: "© 2024 Elead School. Tous droits réservés.",
      description: "Former la prochaine génération grâce à une éducation innovante à Tanger.",
    },
  },
  ar: {
    nav: {
      about: "من نحن",
      programs: "البرامج",
      pricing: "الأسعار",
      admissions: "القبول",
      blog: "المدونة",
      contact: "اتصل بنا",
    },
    hero: {
      title: "مستقبل أفضل لأطفالك",
      subtitle: "دع طفلك يتعلم المهارات والقيم التي تقود كل يوم.",
      cta: "ابدأ الآن",
      stats1: "+7.5k",
      stats1Label: "طالب مسجل في برامجنا",
      stats2: "+50",
      stats2Label: "معلمون ومرشدون متفانون",
    },
    programs: {
      title: "البرامج",
      subtitle: "تم تصميم برامجنا التعليمية لإلهام وتحدي وتمكين كل طفل.",
      creative: "التفكير الإبداعي",
      creativeDesc: "تشجيع الخيال والابتكار من خلال المشاريع العملية.",
      career: "التخطيط المهني",
      careerDesc: "إعداد الطلاب للمستقبل بمهارات واقعية.",
      coding: "أكاديمية البرمجة",
      codingDesc: "بناء المعرفة الرقمية من خلال دورات برمجة تفاعلية.",
    },
    resources: {
      title: "مواردنا",
      subtitle: "نقوم بتطوير مواد غنية وتفاعلية للتعلم الفعال.",
    },
    features: {
      title: "الفصول الدراسية التقليدية تشجع الطلاب على",
      item1: "بناء عادات دراسية قوية مبكراً",
      item2: "التفاعل مع زملاء الدراسة",
      item3: "التعلم التفاعلي للمفاهيم الأكاديمية",
      quizTitle: "سيتم اختبار الأطفال بألعاب اختبارات عبر الإنترنت",
      quizDesc: "تساعد الاختبارات عبر الإنترنت في تعزيز ما يتعلمه الطلاب في الفصل من خلال تحديات ممتعة وتفاعلية.",
    },
    superstars: {
      title: "نجوم شهر أكتوبر",
      viewAll: "عرض الكل",
    },
    cta: {
      title: "مستقبل أفضل لأطفالك",
      subtitle: "انضم إلى مدرسة إيليد وامنح طفلك أفضل تجربة تعليمية.",
      button: "انضم الآن",
    },
    footer: {
      rights: "© 2024 مدرسة إيليد. جميع الحقوق محفوظة.",
      description: "تمكين الجيل القادم من خلال التعليم المبتكر في طنجة.",
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
