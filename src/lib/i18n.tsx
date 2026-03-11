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
    excellence: {
      badge: "And they excelled!",
      title: "A Track Record of Excellence",
      subtitle: "Our students shine through outstanding results and holistic development.",
      achievement1: "Student Success Rate",
      achievement1Stat: "98%",
      achievement2: "Certified Teachers",
      achievement2Stat: "100%",
      achievement3: "Satisfied Parents",
      achievement3Stat: "95%",
      achievement4: "Years of Excellence",
      achievement4Stat: "10+",
      quote: "Education is not the filling of a pail, but the lighting of a fire. At Elead School, we ignite the spark of excellence in every child.",
      quoteAuthor: "Elead School Team",
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
    testimonials: {
      title: "What Parents Say",
      subtitle: "Hear from families who trust Elead School with their children's education.",
      t1Name: "Fatima Zahra",
      t1Role: "Parent of Ayoub, 6 years old",
      t1Text: "Elead School transformed my son's confidence. The Montessori approach respects each child's rhythm. I highly recommend it!",
      t2Name: "Karim Bennani",
      t2Role: "Parent of Lina, 5 years old",
      t2Text: "The trilingual teaching is exceptional. My daughter speaks French, English and Arabic fluently. The team is very professional.",
      t3Name: "Sarah El Idrissi",
      t3Role: "Parent of Hamza, 7 years old",
      t3Text: "A warm and stimulating environment. My child loves going to school every morning. The results speak for themselves!",
    },
    gallery: {
      title: "Our Space",
      subtitle: "Discover our Montessori classrooms, play areas and learning spaces.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about enrolling your child at Elead School.",
      q1: "What is the admission age?",
      a1: "We welcome children from 2.5 years old for preschool and from 6 years old for primary school. Each child is assessed individually to ensure the best integration.",
      q2: "What are the school hours?",
      a2: "Classes run Monday to Friday, 8:30 AM to 4:30 PM. Supervised afterschool activities are available until 6:00 PM.",
      q3: "What languages are taught?",
      a3: "We offer a complete trilingual program: French, English and Arabic. All three languages are taught daily through immersive activities and interactive methods.",
      q4: "How does Montessori pedagogy work?",
      a4: "Montessori pedagogy is based on the child's autonomy. Each student progresses at their own pace with adapted materials, encouraging curiosity and love of learning.",
      q5: "How to enroll my child?",
      a5: "Contact us via WhatsApp at +212 6 68 28 80 41 or visit us at our Tanger address. We will guide you through a personalized enrollment process.",
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
    excellence: {
      badge: "Et ils excellaient !",
      title: "Un Parcours d'Excellence",
      subtitle: "Nos élèves brillent par des résultats exceptionnels et un développement global.",
      achievement1: "Taux de Réussite",
      achievement1Stat: "98%",
      achievement2: "Enseignants Certifiés",
      achievement2Stat: "100%",
      achievement3: "Parents Satisfaits",
      achievement3Stat: "95%",
      achievement4: "Années d'Excellence",
      achievement4Stat: "10+",
      quote: "L'éducation n'est pas le remplissage d'un seau, mais l'allumage d'un feu. À Elead School, nous allumons l'étincelle de l'excellence en chaque enfant.",
      quoteAuthor: "L'Équipe Elead School",
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
    testimonials: {
      title: "Paroles de Parents",
      subtitle: "Découvrez les témoignages des familles qui font confiance à Elead School.",
      t1Name: "Fatima Zahra",
      t1Role: "Maman d'Ayoub, 6 ans",
      t1Text: "Elead School a transformé la confiance de mon fils. L'approche Montessori respecte le rythme de chaque enfant. Je recommande vivement !",
      t2Name: "Karim Bennani",
      t2Role: "Papa de Lina, 5 ans",
      t2Text: "L'enseignement trilingue est exceptionnel. Ma fille parle couramment le français, l'anglais et l'arabe. L'équipe est très professionnelle.",
      t3Name: "Sarah El Idrissi",
      t3Role: "Maman de Hamza, 7 ans",
      t3Text: "Un environnement chaleureux et stimulant. Mon enfant adore aller à l'école chaque matin. Les résultats parlent d'eux-mêmes !",
    },
    gallery: {
      title: "Notre Espace",
      subtitle: "Découvrez nos salles Montessori, nos aires de jeux et nos espaces d'apprentissage.",
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir pour inscrire votre enfant à Elead School.",
      q1: "Quel est l'âge d'admission ?",
      a1: "Nous accueillons les enfants à partir de 2 ans et demi pour la maternelle et 6 ans pour le primaire. Chaque enfant est évalué individuellement pour garantir la meilleure intégration.",
      q2: "Quels sont les horaires ?",
      a2: "Les cours se déroulent du lundi au vendredi, de 8h30 à 16h30. Des activités parascolaires encadrées sont disponibles jusqu'à 18h00.",
      q3: "Quelles langues sont enseignées ?",
      a3: "Nous offrons un programme trilingue complet : français, anglais et arabe. Les trois langues sont enseignées quotidiennement à travers des activités immersives et des méthodes interactives.",
      q4: "Comment fonctionne la pédagogie Montessori ?",
      a4: "La pédagogie Montessori repose sur l'autonomie de l'enfant. Chaque élève progresse à son rythme avec du matériel adapté, favorisant la curiosité et l'amour de l'apprentissage.",
      q5: "Comment inscrire mon enfant ?",
      a5: "Contactez-nous via WhatsApp au +212 6 68 28 80 41 ou rendez-nous visite à notre adresse à Tanger. Nous vous guiderons à travers un processus d'inscription personnalisé.",
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
    excellence: {
      badge: "وتفوّقوا!",
      title: "سجل حافل بالتميّز",
      subtitle: "يتألق طلابنا من خلال نتائج استثنائية وتطوير شامل.",
      achievement1: "معدل النجاح",
      achievement1Stat: "98%",
      achievement2: "معلمون معتمدون",
      achievement2Stat: "100%",
      achievement3: "أولياء أمور راضون",
      achievement3Stat: "95%",
      achievement4: "سنوات من التميّز",
      achievement4Stat: "+10",
      quote: "التعليم ليس ملء دلو، بل إشعال نار. في مدرسة إيليد، نُشعل شرارة التميّز في كل طفل.",
      quoteAuthor: "فريق مدرسة إيليد",
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
    testimonials: {
      title: "آراء أولياء الأمور",
      subtitle: "اكتشف شهادات العائلات التي تثق بمدرسة إيليد.",
      t1Name: "فاطمة الزهراء",
      t1Role: "أم أيوب، 6 سنوات",
      t1Text: "غيّرت مدرسة إيليد ثقة ابني بنفسه. نهج مونتيسوري يحترم إيقاع كل طفل. أنصح بها بشدة!",
      t2Name: "كريم بناني",
      t2Role: "أب لينا، 5 سنوات",
      t2Text: "التعليم ثلاثي اللغات استثنائي. ابنتي تتحدث الفرنسية والإنجليزية والعربية بطلاقة. الفريق محترف جداً.",
      t3Name: "سارة الإدريسي",
      t3Role: "أم حمزة، 7 سنوات",
      t3Text: "بيئة دافئة ومحفزة. طفلي يحب الذهاب إلى المدرسة كل صباح. النتائج تتحدث عن نفسها!",
    },
    gallery: {
      title: "فضاؤنا",
      subtitle: "اكتشف فصولنا المونتيسورية ومناطق اللعب ومساحات التعلم.",
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج معرفته لتسجيل طفلك في مدرسة إيليد.",
      q1: "ما هو سن القبول؟",
      a1: "نرحب بالأطفال من عمر سنتين ونصف للحضانة ومن 6 سنوات للابتدائي. يتم تقييم كل طفل بشكل فردي لضمان أفضل اندماج.",
      q2: "ما هي ساعات الدراسة؟",
      a2: "الدروس من الاثنين إلى الجمعة، من الساعة 8:30 صباحاً حتى 4:30 مساءً. الأنشطة اللامنهجية المشرفة متاحة حتى 6:00 مساءً.",
      q3: "ما هي اللغات المُدرّسة؟",
      a3: "نقدم برنامجاً ثلاثي اللغات: الفرنسية والإنجليزية والعربية. تُدرّس اللغات الثلاث يومياً من خلال أنشطة غامرة وطرق تفاعلية.",
      q4: "كيف تعمل بيداغوجيا مونتيسوري؟",
      a4: "تعتمد بيداغوجيا مونتيسوري على استقلالية الطفل. يتقدم كل تلميذ بإيقاعه الخاص مع مواد مكيّفة، مما يعزز الفضول وحب التعلم.",
      q5: "كيف أسجّل طفلي؟",
      a5: "تواصل معنا عبر واتساب على +212 6 68 28 80 41 أو قم بزيارتنا في عنواننا بطنجة. سنرشدك خلال عملية تسجيل مخصصة.",
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
