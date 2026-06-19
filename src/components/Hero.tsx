import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Search, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Typewriter from './Typewriter';

export default function Hero() {
  const { t, language } = useLanguage();
  return (
    <section className="relative px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
        >
          <source src="https://cdn.pixabay.com/video/2018/10/24/18933-298375631_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-blue-400 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <span className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </span>
              <span className="mx-1 border-l border-white/30 h-3"></span>
              <span>{t('hero.rating')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              {t('hero.title.1')} {language === 'en' && <br className="hidden sm:block" />}<span className="text-blue-400">{t('hero.title.2')}</span> {t('hero.title.3')}
            </h1>
            
            <div className="text-xl sm:text-2xl font-medium text-white/90 mb-4 h-8 flex items-center justify-center lg:justify-start">
              <span className="mr-2">{language === 'en' ? 'Expertise in' : 'Especialista en'}</span>
              <Typewriter words={[t('hero.typewriter.1'), t('hero.typewriter.2'), t('hero.typewriter.3')]} />
            </div>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg transition-all hover:bg-white/20 hover:shadow-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <Search className="w-5 h-5" />
                {t('hero.btn.search')}
              </a>
              <a
                href="https://wa.me/17864136816"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 btn-primary font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 rounded-full"
              >
                <MessageCircle className="w-5 h-5" />
                {t('hero.btn.whatsapp')}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                Available 24/7
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                Miami & Brickell Key Specialist
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md glass-panel p-6 sm:p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t('hero.form.title')}</h3>
              <p className="text-white/70 text-sm">{t('hero.form.subtitle')}</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="hero-name" className="text-[10px] uppercase font-bold text-white/70">{t('hero.form.name')}</label>
                <input type="text" id="hero-name" placeholder={t('hero.form.name')} className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="hero-phone" className="text-[10px] uppercase font-bold text-white/70">{t('hero.form.phone')}</label>
                <input type="tel" id="hero-phone" placeholder={t('hero.form.phone')} className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="hero-type" className="text-[10px] uppercase font-bold text-white/70">{t('hero.form.intent')}</label>
                <select id="hero-type" defaultValue="" className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors">
                  <option value="" disabled>{t('hero.form.select')}</option>
                  <option value="rent">{t('hero.form.rent')}</option>
                  <option value="buy">{t('hero.form.buy')}</option>
                  <option value="relocate">{t('hero.form.relocate')}</option>
                </select>
              </div>
              <button type="submit" className="w-full btn-primary font-bold py-3.5 mt-2 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 uppercase tracking-wide text-sm">
                {t('hero.form.submit')} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-center text-white/60 mt-4 flex items-center justify-center gap-1">
              <span className="block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {t('hero.form.responseTime')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
