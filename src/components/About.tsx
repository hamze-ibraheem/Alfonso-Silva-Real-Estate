import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, PhoneCall, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <motion.section 
      id="about" 
      className="py-24 bg-transparent overflow-hidden relative border-t border-white/10 z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image & Badges Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop" 
                alt="Alfonso Silva - Miami Real Estate Agent" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-4 md:right-8 glass-panel bg-white/5 p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{t('about.philosophy')}</h4>
                  <p className="text-sm text-white/70 mt-1">{t('about.philosophy.desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mt-12 lg:mt-0"
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">{t('about.pretitle')}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t('about.title.1')} <span className="text-blue-400">{t('about.title.2')}</span> {t('about.title.3')}
            </h3>

            <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
              <p>
                {t('about.p1')}
              </p>
              <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
              <p>
                {t('about.p3')}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 glass-panel bg-white/5 hover:bg-white/10 transition-colors">
                <Clock className="w-6 h-6 text-blue-400 shrink-0" />
                <span className="font-semibold text-white">{t('about.feat.1')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 glass-panel bg-white/5 hover:bg-white/10 transition-colors">
                <PhoneCall className="w-6 h-6 text-blue-400 shrink-0" />
                <span className="font-semibold text-white">{t('about.feat.2')}</span>
              </div>
            </div>

            <div className="mt-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Miami_Skyline_2016.jpg" 
                alt="Miami Skyline Snippet" 
                className="w-full h-32 object-cover rounded-xl grayscale opacity-30 hover:grayscale-0 transition-all duration-500 mix-blend-screen"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
