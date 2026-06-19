import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Property {
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  gallery: string[];
}

interface PropertyLightboxProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyLightbox({ property, onClose }: PropertyLightboxProps) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (property) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [property]);

  if (!property) return null;

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % property.gallery.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + property.gallery.length) % property.gallery.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="w-full max-w-6xl h-full max-h-[90vh] flex flex-col pt-16 pb-8 px-4 md:px-12 relative" onClick={(e) => e.stopPropagation()}>
          <div className="flex-grow w-full relative group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={property.gallery[currentIndex]}
                alt={`${property.title} - Image ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain rounded-lg"
              />
            </AnimatePresence>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-[#0a0f18]/80 p-6 rounded-2xl border border-white/10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{property.title}</h3>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-5 h-5" />
                <span>{property.location}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-4">
              <p className="text-3xl font-bold text-blue-400">{property.price}</p>
              <div className="flex gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-blue-400" />
                  <span className="font-bold">{property.beds}</span> {t('props.beds')}
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-blue-400" />
                  <span className="font-bold">{property.baths}</span> {t('props.baths')}
                </div>
                <div className="flex items-center gap-2">
                  <Square className="w-5 h-5 text-blue-400" />
                  <span className="font-bold">{property.sqft}</span> {t('props.sqft')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
