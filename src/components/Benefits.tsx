import { motion } from 'motion/react';
import { Shield, TrendingUp, Zap, CheckCircle2, HeartHandshake, Lock, Headphones, Award } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { icon: Award, title: "Aumente sua credibilidade", desc: "Perfis com mais seguidores atraem mais negócios e parcerias." },
    { icon: TrendingUp, title: "Mais autoridade", desc: "Destaque-se e seja mais popular visto como uma referência." },
    { icon: Zap, title: "Crescimento acelerado", desc: "Pule etapas e impulsione seu perfil em questão de minutos." },
    { icon: CheckCircle2, title: "Entrega rápida", desc: "Processo otimizado entrega imediata." },
    { icon: Shield, title: "Processo simples", desc: "Basta escolher o pacote e nos enviar o seu @. Sem burocracia." },
    { icon: Headphones, title: "Suporte especializado", desc: "Nossa equipe está pronta para te atender via WhatsApp." },
    { icon: Lock, title: "Compra segura", desc: "Ambiente protegido e sigilo absoluto. Não pedimos senha." },
    { icon: HeartHandshake, title: "Atendimento humanizado", desc: "Fale com pessoas reais focadas no seu sucesso." }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Por que escolher a <span className="text-brand-red">InstaBoost</span>?
          </h2>
          <p className="text-gray-400 text-lg">
            Nós fornecemos os melhores serviços para alavancar sua presença digital com segurança, velocidade e qualidade garantida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer border-t border-brand-red/20"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-display">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
