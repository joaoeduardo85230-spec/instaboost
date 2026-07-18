import { Rocket, Instagram, Facebook, Twitter } from 'lucide-react';
import { PHONE_NUMBER } from '../data';
import { trackWhatsAppClick } from '../utils/pixel';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="text-brand-red w-8 h-8" />
              <span className="font-display font-bold text-2xl tracking-tight">Insta<span className="text-brand-red">Boost</span></span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Ajudando perfis e empresas a alcançarem a máxima autoridade digital com segurança e velocidade.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-display">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#brasileiros" className="text-gray-400 hover:text-white transition-colors">Seguidores BR</a></li>
              <li><a href="#internacionais" className="text-gray-400 hover:text-white transition-colors">Seguidores Mundiais</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-display">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li>
                <a 
                  href={`https://wa.me/${PHONE_NUMBER}?text=Olá, tenho uma dúvida.`}
                  onClick={() => trackWhatsAppClick()}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:text-brand-red-dark transition-colors font-semibold"
                >
                  Suporte WhatsApp
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} InstaBoost. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm text-center md:text-right">
            Este site não é afiliado ou endossado pelo Instagram.
          </p>
        </div>
      </div>
    </footer>
  );
}
