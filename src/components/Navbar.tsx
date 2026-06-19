import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, Moon, Sun, Instagram, Linkedin, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.neighborhoods'), href: '#neighborhoods' },
    { name: t('nav.properties'), href: '#properties' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.success'), href: '#success-stories' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tight text-white`}>
                {t('brand.title')}
              </span>
              <span className={`text-xs uppercase tracking-widest font-semibold text-blue-400`}>
                {t('brand.subtitle')}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-400 text-white`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-3 mr-2 border-r border-white/20 pr-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors" title="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors" title="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors" title="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center text-white/80 hover:text-white transition-colors border border-white/20 rounded-full w-8 h-8 bg-white/5"
                title={theme === 'dark' ? "Switch to Blue Theme" : "Switch to Dark Theme"}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button 
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors border border-white/20 rounded-full px-3 py-1 bg-white/5"
              >
                <Globe className="w-3 h-3" />
                {language === 'en' ? 'ES' : 'EN'}
              </button>
              <a
                href="#contact"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-blue-500/20 bg-blue-500 text-white hover:bg-blue-600`}
              >
                <Phone className="w-4 h-4" />
                <span>+1 786-413-6816</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md text-white`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-white border-b border-white/10 mb-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <div className="flex gap-2 mb-2">
                  <button 
                    onClick={() => {
                      setLanguage(language === 'en' ? 'es' : 'en');
                      setMobileMenuOpen(false);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-md text-base font-semibold bg-white/10 text-white"
                  >
                    <Globe className="w-5 h-5" />
                    <span>{language === 'en' ? 'ES' : 'EN'}</span>
                  </button>
                  <button 
                    onClick={() => {
                      toggleTheme();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-md text-base font-semibold bg-white/10 text-white"
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md text-base font-semibold bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('nav.call')} +1 786-413-6816</span>
                </a>
                <div className="flex justify-center items-center gap-6 mt-6 mb-2">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
