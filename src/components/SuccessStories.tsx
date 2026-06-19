import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SuccessStories() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      id: 1,
      name: "Sarah & Mike",
      location: "Brickell Key",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2940&auto=format&fit=crop",
      story: "We were moving from New York and had exactly one weekend to find a place. Alfonso managed to schedule 10 showings in our short window and helped us secure our dream waterfront property. His 24/7 responsiveness made the out-of-state move completely stress-free."
    },
    {
      id: 2,
      name: "David L.",
      location: "Edgewater",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
      story: "First-time home buying seemed incredibly daunting, but Alfonso explained every contract detail. He answered my anxious midnight texts and ultimately got the seller to cover closing costs. I couldn't have asked for a better guide through this market."
    },
    {
      id: 3,
      name: "Elena M.",
      location: "Coral Gables",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop",
      story: "I needed a short-term luxury rental while my house was being renovated. The inventory was tight, but Alfonso used his network to find an off-market condo that was absolutely perfect. Quick turnaround and zero hassle."
    }
  ];

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  return (
    <motion.section 
      id="success-stories" 
      className="py-24 bg-[#0a0f18] text-white overflow-hidden relative border-t border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex glass-panel px-4 py-2 bg-white/5 mb-4 items-center gap-2">
            <span className="font-semibold text-sm uppercase tracking-widest text-blue-400">{t('success.title')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('success.title')}</h2>
          <p className="text-lg text-white/70 font-light">
            {t('success.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden glass-panel">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={stories[currentIndex].image}
                  alt={stories[currentIndex].name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            
            <div className="flex flex-col justify-center">
              <Quote className="w-12 h-12 text-blue-500/30 mb-6" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl md:text-3xl font-light leading-relaxed text-white/90 mb-8 italic">
                    "{stories[currentIndex].story}"
                  </p>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-white">{stories[currentIndex].name}</h4>
                    <p className="text-blue-400 tracking-wide uppercase text-sm mt-1">{stories[currentIndex].location}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 mt-12">
                <button 
                  onClick={prevStory}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all focus:outline-none"
                  aria-label={t('success.prev')}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <div className="flex gap-2">
                  {stories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-500 scale-125' : 'bg-white/20 hover:bg-white/40'}`}
                      aria-label={`Go to story ${idx + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextStory}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all focus:outline-none"
                  aria-label={t('success.next')}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
