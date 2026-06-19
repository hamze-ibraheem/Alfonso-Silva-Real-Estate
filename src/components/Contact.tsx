import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Mail, MapPin, Send, MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    const handlePrefill = (e: any) => {
      setMessageText(`I am interested in learning more about ${e.detail}.`);
    };
    window.addEventListener('prefill-contact', handlePrefill);
    return () => window.removeEventListener('prefill-contact', handlePrefill);
  }, []);

  return (
    <motion.section 
      id="contact" 
      className="py-24 bg-transparent relative border-t border-white/10 z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Contact Info Panel */}
            <div className="lg:col-span-2 bg-white/5 border-r border-white/10 text-white p-10 md:p-12">
              <h3 className="text-3xl font-bold mb-4">{t('contact.title')}</h3>
              <p className="text-white/80 font-light mb-10 text-lg">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-8">
                <a href="tel:+17864136816" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                    <PhoneCall className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-1">{t('contact.call')}</p>
                    <p className="text-xl font-bold tracking-wide">+1 786-413-6816</p>
                  </div>
                </a>

                <a href="https://wa.me/17864136816" target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-1">{t('contact.whatsapp')}</p>
                    <p className="text-xl font-bold tracking-wide">{t('contact.message')}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-1">{t('contact.area')}</p>
                    <p className="text-lg font-bold">{t('contact.areadesc')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="font-bold text-sm tracking-wide text-white">{t('contact.status')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="#" className="text-white/50 hover:text-white transition-colors" title="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white/50 hover:text-white transition-colors" title="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white/50 hover:text-white transition-colors" title="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Form */}
            <div className="lg:col-span-3 p-10 md:p-12 relative">
              <div className="absolute top-[-200px] right-[-200px] w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-[10px] uppercase font-bold text-white/70 mb-2">{t('contact.form.fname')}</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[10px] uppercase font-bold text-white/70 mb-2">{t('contact.form.lname')}</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-[10px] uppercase font-bold text-white/70 mb-2">{t('contact.form.phone')}</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-[10px] uppercase font-bold text-white/70 mb-2">{t('contact.form.type')}</label>
                    <select id="interest" defaultValue="rent" className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all">
                      <option value="rent">{t('services.1.title')}</option>
                      <option value="buy">{t('services.2.title')}</option>
                      <option value="relocate">{t('services.3.title')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-[10px] uppercase font-bold text-white/70 mb-2">{t('contact.form.timeline')}</label>
                  <select id="timeline" defaultValue="asap" className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all">
                    <option value="asap">{t('timeline.asap')}</option>
                    <option value="1-month">{t('timeline.1m')}</option>
                    <option value="1-3-months">{t('timeline.13m')}</option>
                    <option value="flexible">{t('timeline.flex')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase font-bold text-white/70 mb-2">{t('contact.form.tellme')}</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all resize-none" value={messageText} onChange={(e) => setMessageText(e.target.value)}></textarea>
                </div>

                <button type="submit" className="w-full btn-primary text-white rounded-xl py-4 font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                  {t('contact.form.submit')} <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
