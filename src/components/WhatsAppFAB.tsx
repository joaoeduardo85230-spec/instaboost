import { MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../data';
import { motion } from 'motion/react';
import { trackWhatsAppClick } from '../utils/pixel';

export default function WhatsAppFAB() {
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Quero comprar seguidores.')}`;

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      href={whatsappLink}
      onClick={() => trackWhatsAppClick()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-sm font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        Fale conosco!
        {/* Triangle */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white" />
      </span>
    </motion.a>
  );
}
