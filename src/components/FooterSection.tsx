import { useI18n } from "@/lib/i18n";
import { MapPin, Phone, Mail } from "lucide-react";

const FooterSection = () => {
  const { t } = useI18n();

  return (
    <footer className="gradient-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              Elead<span className="text-secondary">.</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm">{t.footer.description}</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-3">
              {t.nav.contact}
            </h4>
            <div className="space-y-2 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tanger, Morocco</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+212 600 000 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@elead.school</span>
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
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
