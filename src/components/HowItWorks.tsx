import { motion } from 'motion/react';
import { MousePointerClick, Smartphone, AtSign, CreditCard, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MousePointerClick,
      title: "Escolha seu pacote",
      desc: "Selecione o plano ideal para a sua necessidade e momento."
    },
    {
      icon: Smartphone,
      title: "Chame no WhatsApp",
      desc: "Clique no botão e fale diretamente com nossa equipe."
    },
    {
      icon: AtSign,
      title: "Informe seu @",
      desc: "Basta nos passar o link ou @ do seu perfil. Sem senhas!"
    },
    {
      icon: CreditCard,
      title: "Faça o pagamento",
      desc: "Pague com segurança via PIX ou Cartão de Crédito."
    },
    {
      icon: Rocket,
      title: "Receba rápido",
      desc: "Acompanhe o crescimento instantâneo da sua autoridade."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden bg-brand-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Tudo muito simples e <span className="text-brand-red">seguro</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Em menos de 5 minutos você realiza seu pedido e começa a ver os resultados no seu Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-brand-red/50 to-transparent -z-10" />
              )}
              
              <div className="w-20 h-20 rounded-2xl glass-red flex items-center justify-center text-brand-red mb-6 relative group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(225,6,0,0.3)] transition-all duration-300">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-black border border-brand-red flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>
                <step.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-lg font-bold mb-3 font-display">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
