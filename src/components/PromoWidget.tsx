import React from 'react';
import { motion } from 'motion/react';

export default function PromoWidget() {
  return (
    <motion.a
      href="https://auroraadv.co/?tab=wizard"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-500 hover:scale-105 transition-all duration-300 py-3 px-6 font-bold text-sm sm:text-base whitespace-nowrap"
      aria-label="Get this website"
    >
      Get this website for only $999
    </motion.a>
  );
}
