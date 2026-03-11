import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/212668288041?text=Bonjour, je souhaite inscrire mon enfant à Elead School.",
      "_blank"
    );
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 end-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.button>
  );
};

export default WhatsAppButton;
