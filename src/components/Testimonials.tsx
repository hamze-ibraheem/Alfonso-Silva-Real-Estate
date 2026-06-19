import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const reviews: Review[] = [
    {
      id: "1",
      author: "Daniela Gardere",
      rating: 5,
      text: "Alfonso made the process such a breeze. He is super patient, and goes above and beyond to make sure you find what you are looking for. Extremely responsive night and weekends. Would highly recommend his services!",
    },
    {
      id: "2",
      author: "Alexandra Johns",
      rating: 5,
      text: "Alfonso is helpful and kind. Moving is a huge undertaking and he made things a bit easier by continuing to check on things, setting up tours at highly sought out complexes, and continuing to follow up after move in.",
    },
    {
      id: "3",
      author: "Brendan D'Orio",
      rating: 5,
      text: "Alfonso was amazingly helpful from start to finish! Within the same day I inquired, Alfonso had set up a full day worth of apartment tours. Very fast, reliable, and answered any questions I had.",
    },
    {
      id: "4",
      author: "Sahil Sachdev",
      rating: 5,
      text: "Alfonso was great throughout the process and helped find me the perfect apartment in Brickell Key! Found everything I was looking for super quick and takes huge pride in his work.",
    },
    {
      id: "5",
      author: "Patrick Gagne",
      rating: 5,
      text: "Alfonso was very responsive and courteous. He helped us get into an apartment we wanted, and got ahead of everyone in line. Very professional, highly recommend.",
    },
    {
      id: "6",
      author: "Mariano Alvear",
      rating: 5,
      text: "Excellent service. He really listens to what we needed and provided options that made sense for us. If you want someone who understands what you are looking for, Alfonso is the agent.",
    }
  ];

  return (
    <motion.section 
      id="testimonials" 
      className="py-24 bg-transparent text-white overflow-hidden relative border-t border-white/10 z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px] opacity-20 z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex glass-panel px-4 py-2 bg-white/5 mb-4 items-center gap-2">
            <span className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </span>
            <span className="font-semibold text-sm">{t('test.pretitle')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('test.title')}</h2>
          <p className="text-lg text-white/70 font-light">
            {t('test.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 relative group hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-blue-500/20 transition-colors" />
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6 font-light text-sm sm:text-base line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{review.author}</h4>
                  <p className="text-xs text-white/50">{t('test.verified')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="inline-block px-4 py-2 border border-white/20 rounded-full text-sm font-medium text-white/60 bg-white/5">
            {t('test.showing')}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
