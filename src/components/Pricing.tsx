import { motion } from 'motion/react';
import { brazilianPackages, internationalPackages, PHONE_NUMBER } from '../data';
import { MessageCircle, CheckCircle2, Flame } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/pixel';

interface Package {
  followers: string;
  price: string;
  bestSeller: boolean;
}

const PackageCard = ({ pkg, type }: { key?: string | number, pkg: Package; type: 'brasileiros' | 'internacionais' }) => {
  const message = 'Quero comprar seguidores.';
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative p-8 rounded-3xl ${
        pkg.bestSeller
          ? 'bg-gradient-to-b from-brand-gray-900 to-black border-2 border-brand-red shadow-[0_0_30px_rgba(225,6,0,0.15)]'
          : 'glass hover:bg-white/10'
      } flex flex-col h-full`}
    >
      {pkg.bestSeller && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1 shadow-lg">
          <Flame className="w-3 h-3" /> Mais Vendido
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-display font-bold text-white mb-2">{pkg.followers}</h3>
        <p className="text-gray-400 text-sm mb-4">Seguidores {type === 'brasileiros' ? 'BR' : 'Mundiais'}</p>
        <div className="flex items-start justify-center gap-1">
          <span className="text-gray-400 mt-2">R$</span>
          <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{pkg.price.split(',')[0]}</span>
          <span className="text-xl font-bold text-white mt-1">,{pkg.price.split(',')[1]}</span>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
          <span>Entrega rápida garantida</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
          <span>Não pedimos sua senha</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
          <span>Alta retenção no perfil</span>
        </div>
      </div>

      <a
        href={whatsappLink}
        onClick={() => trackWhatsAppClick(`Pacote ${pkg.followers} Seguidores ${type === 'brasileiros' ? 'BR' : 'Mundiais'}`, pkg.price)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-300 bg-brand-red hover:bg-brand-red-dark text-white shadow-lg shadow-brand-red/30"
      >
        <MessageCircle className="w-5 h-5" />
        Comprar agora
      </a>
    </motion.div>
  );
};

export default function Pricing() {
  return (
    <div className="pt-24 pb-12 space-y-32">
      {/* Brasileiros Section */}
      <section id="brasileiros" className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-brand-red/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Seguidores <span className="text-gradient-red">Brasileiros</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Perfis reais brasileiros para máxima relevância e autoridade no seu nicho. O investimento ideal para negócios locais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brazilianPackages.map((pkg, i) => (
              <PackageCard key={i} pkg={pkg} type="brasileiros" />
            ))}
          </div>
        </div>
      </section>

      {/* Internacionais Section */}
      <section id="internacionais" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Seguidores <span className="text-gradient">Internacionais</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Volume e impacto social pelo melhor custo-benefício. Perfeito para impulsionar a percepção de marca globalmente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalPackages.map((pkg, i) => (
              <PackageCard key={i} pkg={pkg} type="internacionais" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
