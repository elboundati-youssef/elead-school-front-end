import { useI18n } from "@/lib/i18n";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import logoImg from "@/assets/logo2222.png";
const FooterSection = () => {
  const { t } = useI18n();
  // Année dynamique (passera automatiquement à 2026, 2027...)
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="gradient-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">
              <img
              src={logoImg}
              alt="Logo Elead School"
              className="h-12 md:h-14 w-auto object-contain"
            />
            </h3>
            <p className="font-script text-accent text-sm mb-3">Maternelle — Primaire</p>
            <p className="text-primary-foreground/70 text-sm">{t.footer.description}</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-3">
              {t.nav.contact}
            </h4>
            <div className="space-y-2 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{t.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{t.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{t.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <span>{t.contact.instagram}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-3">
              {t.nav.programs}
            </h4>
            <div className="space-y-2 text-primary-foreground/70 text-sm">
              <p>{t.programs.creative}</p>
              <p>{t.programs.career}</p>
              <p>{t.programs.coding}</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <img src="https://flagcdn.com/w40/fr.png" alt="Français" className="w-8 h-auto rounded-sm shadow-sm" />
               <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-8 h-auto rounded-sm shadow-sm" />
               <img src="https://flagcdn.com/w40/ma.png" alt="Maroc" className="w-8 h-auto rounded-sm shadow-sm" />
            </div>
          </div>
        </div>

        {/* 👇 Nouvelle section Copyright et Signature Conceptify Pro */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Elead School. {t.footer.rights}
          </p>
          <p className="text-primary-foreground/60 text-sm text-center md:text-right">
            {t.footer.createdBy}{" "}
            <a 
              href="https://conceptify.pro/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-primary-foreground hover:text-secondary transition-colors duration-300"
            >
              Conceptify Pro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;