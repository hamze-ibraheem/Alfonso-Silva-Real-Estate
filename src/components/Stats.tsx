import React from 'react';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, TrendingUp, Handshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Clock,
      title: t('stats.1.title'),
      description: t('stats.1.desc'),
      tooltip: t('stats.1.tooltip')
    },
    {
      icon: CheckCircle2,
      title: t('stats.2.title'),
      description: t('stats.2.desc'),
      tooltip: t('stats.2.tooltip')
    },
    {
      icon: TrendingUp,
      title: t('stats.3.title'),
      description: t('stats.3.desc'),
      tooltip: t('stats.3.tooltip')
    },
    {
      icon: Handshake,
      title: t('stats.4.title'),
      description: t('stats.4.desc'),
      tooltip: t('stats.4.tooltip')
    }
  ];

  return (
    <motion.section 
      className="py-12 bg-transparent relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel bg-white/5 p-6 flex flex-col items-start stat-box hover:bg-white/10 transition-colors group relative cursor-help"
            >
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4 border border-blue-500/30">
                <stat.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{stat.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{stat.description}</p>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-3 bg-black/90 border border-white/10 text-xs text-white/90 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-xl pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                <div className="relative">
                  {stat.tooltip}
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mb-4 w-2 h-2 bg-black border-r border-b border-white/10 transform rotate-45"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
