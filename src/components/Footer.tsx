import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-white/5 backdrop-blur-md pt-16 pb-8 border-t border-white/10 text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col mb-4">
              <span className="font-bold text-2xl tracking-tight">
                ALFONSO SILVA
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-blue-400">
                Miami Real Estate
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">{t('nav.services')}</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">{t('nav.about')}</a></li>
              <li><a href="#testimonials" className="text-white/60 hover:text-white transition-colors text-sm">{t('nav.testimonials')}</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.specialties')}</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>{t('footer.s1')}</li>
              <li>{t('footer.s2')}</li>
              <li>{t('footer.s3')}</li>
              <li>{t('footer.s4')}</li>
              <li>{t('footer.s5')}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.newsletter.title')}</h4>
            <p className="text-white/60 text-sm mb-4">
              {t('footer.newsletter.desc')}
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={t('footer.newsletter.placeholder')}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors text-sm"
              />
              <button 
                type="submit"
                className="btn-primary w-full py-3 flex justify-center items-center font-bold text-sm shadow-md"
              >
                {t('footer.newsletter.btn')}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[10px] tracking-widest uppercase text-center md:text-left font-bold">
            &copy; {new Date().getFullYear()} Alfonso Silva. {t('footer.rights')}
          </p>
          <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-white/40">
            <span className="cursor-pointer hover:text-white transition-colors">{t('footer.privacy')}</span>
            <span className="cursor-pointer hover:text-white transition-colors">{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
