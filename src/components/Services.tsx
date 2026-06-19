import React from 'react';
import { motion } from 'motion/react';
import { Building2, Home, Map } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import MortgageCalculator from './MortgageCalculator';

export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      icon: Building2,
      title: t('services.1.title'),
      subtitle: t('services.1.subtitle'),
      description: t('services.1.desc'),
      features: [t('services.1.f1'), t('services.1.f2'), t('services.1.f3')],
      image: 'https://images.unsplash.com/photo-1545324422-9214d02636ab?q=80&w=800&auto=format&fit=crop'
    },
    {
      icon: Home,
      title: t('services.2.title'),
      subtitle: t('services.2.subtitle'),
      description: t('services.2.desc'),
      features: [t('services.2.f1'), t('services.2.f2'), t('services.2.f3')],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop'
    },
    {
      icon: Map,
      title: t('services.3.title'),
      subtitle: t('services.3.subtitle'),
      description: t('services.3.desc'),
      features: [t('services.3.f1'), t('services.3.f2'), t('services.3.f3')],
      image: 'https://images.unsplash.com/photo-1533604101087-dd7eb123b38c?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <motion.section 
      id="services" 
      className="py-24 relative z-10 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">{t('services.pretitle')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('services.title')}</h3>
          <p className="text-lg text-white/70">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div className="h-48 overflow-hidden relative border-b border-white/10">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl">{service.title}</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">{service.subtitle}</p>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-white/90">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <MortgageCalculator />
      </div>
    </motion.section>
  );
}
