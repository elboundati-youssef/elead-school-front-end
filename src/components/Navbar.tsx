import { useI18n, Language } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo2222.png";

const langLabels: Record<Language, string> = { fr: "FR", en: "EN", ar: "عر" };

const sectionIds = ["about", "programs", "excellence", "gallery", "cta", "contact"];

const Navbar = () => {
  const { t, language, setLanguage } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    t.nav.about,
    t.nav.programs,
    t.nav.montessori,
    t.nav.gallery,
    t.nav.admissions,
    t.nav.contact,
  ];

  const scrollTo = (index: number) => {
    const id = sectionIds[index];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
            ? "bg-background/70 backdrop-blur-xl border-border shadow-lg"
            : "bg-background/90 backdrop-blur-md border-transparent"
          }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img
              src={logoImg}
              alt="Logo Elead School"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, i) => (
              <button
                key={`desktop-${item}`}
                onClick={() => scrollTo(i)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
              >
                <Globe className="w-4 h-4" />
                {langLabels[language]}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    key="lang-dropdown"
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    className="absolute top-full mt-1 end-0 bg-card/95 backdrop-blur-lg border border-border rounded-xl shadow-lg overflow-hidden min-w-[80px]"
                  >
                    {(["fr", "en", "ar"] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setLangOpen(false);
                        }}
                        className={`block w-full px-4 py-2.5 text-sm text-start hover:bg-muted transition-colors ${language === lang
                            ? "text-primary font-bold bg-primary/5"
                            : "text-foreground"
                          }`}
                      >
                        {langLabels[lang]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileOpen(!mobileOpen);
              }}
              className="lg:hidden p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-over menu - Placé EN DEHORS du <nav> pour éviter le conflit avec backdrop-blur */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-foreground/20 backdrop-blur-sm z-[60]"
          />
        )}

        {mobileOpen && (
          <motion.div
            key="mobile-menu-panel"
            initial={{ x: language === "ar" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: language === "ar" ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed top-0 bottom-0 end-0 w-72 bg-card/95 backdrop-blur-xl border-s border-border shadow-2xl z-[70] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-display text-lg font-bold text-primary">
                ELEAD<span className="text-secondary"> School</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  type="button"
                  key={`mobile-${item}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(i);
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-xl px-4 py-3 text-start transition-all duration-200"
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <div className="p-4 border-t border-border flex items-center justify-center gap-3">
              <span className="text-xl">🇫🇷</span>
              <span className="text-xl">🇬🇧</span>
              <span className="text-xl">🇲🇦</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;