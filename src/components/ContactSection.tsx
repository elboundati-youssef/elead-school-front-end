import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  const { t } = useI18n();

  const contactItems = [
    { icon: Phone, value: t.contact.phone, href: "tel:+212668288041" },
    { icon: Mail, value: t.contact.email, href: "mailto:eleadschool1@gmail.com" },
    { icon: MapPin, value: t.contact.address, href: "#" },
    { icon: Instagram, value: t.contact.instagram, href: "https://instagram.com/elead.schooltanger" },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 shadow-card space-y-6">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {item.value}
                  </span>
                </a>
              );
            })}

            {/* Language flags */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
              <span className="text-2xl">🇫🇷</span>
              <span className="text-2xl">🇬🇧</span>
              <span className="text-2xl">🇲🇦</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
