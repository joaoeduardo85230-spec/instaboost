import { motion } from 'motion/react';
import { Star, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../data';

import { trackWhatsAppClick } from '../utils/pixel';

export default function Hero() {
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Quero comprar seguidores.')}`;

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-red/30 mb-8"
        >
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-200">+1.000 clientes satisfeitos</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
        >
          Aumente sua Autoridade no <br className="hidden md:block" />
          <span className="text-gradient-red">Instagram Hoje Mesmo!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Milhares de pessoas já impulsionaram seus perfis. Escolha seu pacote e comece a crescer em poucos minutos com total segurança.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#brasileiros"
            className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-[0_0_30px_rgba(225,6,0,0.4)] hover:shadow-[0_0_50px_rgba(225,6,0,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5" />
            COMPRAR AGORA
          </a>
          <a
            href={whatsappLink}
            onClick={() => trackWhatsAppClick()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto glass hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            FALAR NO WHATSAPP
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-10"
        >
          {[
            { icon: Zap, text: "Entrega rápida" },
            { icon: ShieldCheck, text: "Pagamento seguro" },
            { icon: MessageCircle, text: "Suporte WhatsApp" },
            { icon: Star, text: "Alta qualidade" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full glass-red flex items-center justify-center text-brand-red">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-gray-400">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
