import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Bed, Bath, Square, ArrowRight, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PropertyLightbox from './PropertyLightbox';

export default function FeaturedProperties() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'rentals' | 'purchases'>('all');
  const [searchLocation, setSearchLocation] = useState('');
  const [minBeds, setMinBeds] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [activeProperty, setActiveProperty] = useState<any | null>(null);
  
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1e52db06ac?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
      ],
      title: language === 'en' ? 'Luxury Penthouse with Bay Views' : 'Penthouse de lujo con vistas a la bahía',
      location: 'Brickell Key, Miami',
      price: '$8,500/mo',
      priceValue: 8500,
      beds: 3,
      baths: 3.5,
      sqft: '2,400',
      status: language === 'en' ? 'Just Listed' : 'Nuevo',
      type: language === 'en' ? 'Rental' : 'Alquiler'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
      ],
      title: language === 'en' ? 'Modern Waterfront Condo' : 'Condominio Moderno frente al mar',
      location: 'Edgewater, Miami',
      price: '$1,250,000',
      priceValue: 1250000,
      beds: 2,
      baths: 2,
      sqft: '1,650',
      status: language === 'en' ? 'Available' : 'Disponible',
      type: language === 'en' ? 'Purchase' : 'Venta'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600121848594-ce2a781b21ee?q=80&w=1200&auto=format&fit=crop',
      ],
      title: language === 'en' ? 'Exclusive Boutique Apartment' : 'Exclusivo Apartamento Boutique',
      location: 'Coral Gables, Miami',
      price: '$4,200/mo',
      priceValue: 4200,
      beds: 1,
      baths: 1.5,
      sqft: '950',
      status: language === 'en' ? 'High Demand' : 'Alta Demanda',
      type: language === 'en' ? 'Rental' : 'Alquiler'
    }
  ];

  const filteredProperties = properties.filter((property) => {
    // Type Filter
    if (filter === 'rentals' && property.type !== 'Rental' && property.type !== 'Alquiler') return false;
    if (filter === 'purchases' && property.type !== 'Purchase' && property.type !== 'Venta') return false;
    
    // Search Filters
    if (searchLocation && !property.location.toLowerCase().includes(searchLocation.toLowerCase())) return false;
    if (minBeds !== '' && property.beds < minBeds) return false;
    if (maxPrice !== '' && property.priceValue > maxPrice) return false;
    
    return true;
  });

  return (
    <motion.section 
      id="properties" 
      className="py-24 relative z-10 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">{t('props.pretitle')}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('props.title')}</h3>
            <p className="text-lg text-white/70">
              {t('props.subtitle')}
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 rounded-full text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide"
          >
            {t('props.request')} <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 mb-12"
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
            >
              {t('props.filter.all')}
            </button>
            <button
              onClick={() => setFilter('rentals')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === 'rentals' ? 'bg-blue-500 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
            >
              {t('props.filter.rentals')}
            </button>
            <button
              onClick={() => setFilter('purchases')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === 'purchases' ? 'bg-blue-500 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
            >
              {t('props.filter.purchases')}
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text"
              placeholder={t('props.search.neighborhood')}
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="bg-[#0f172a]/50 text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-sm w-full transition-colors"
            />
            <select
              value={minBeds}
              onChange={(e) => setMinBeds(e.target.value ? Number(e.target.value) : '')}
              className="bg-[#0f172a]/50 text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-sm w-full transition-colors appearance-none"
            >
              <option value="">{t('props.search.beds')}</option>
              <option value="1">{t('props.search.beds1')}</option>
              <option value="2">{t('props.search.beds2')}</option>
              <option value="3">{t('props.search.beds3')}</option>
              <option value="4">{t('props.search.beds4')}</option>
            </select>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
              className="bg-[#0f172a]/50 text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-sm w-full transition-colors appearance-none"
            >
              <option value="">{t('props.search.price')}</option>
              <option value="5000">{t('props.search.price1')}</option>
              <option value="10000">{t('props.search.price2')}</option>
              <option value="1000000">{t('props.search.price3')}</option>
              <option value="5000000">{t('props.search.price4')}</option>
            </select>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property, idx) => (
              <motion.div 
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-panel overflow-hidden group hover:bg-white/10 transition-colors flex flex-col"
              >
              <div className="h-64 overflow-hidden relative border-b border-white/10 cursor-pointer" onClick={() => setActiveProperty(property)}>
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-blue-500 text-white text-[10px] font-bold uppercase py-1 px-3 rounded-full tracking-wider shadow-lg">
                    {property.status}
                  </span>
                  <span className="bg-[#0f172a]/80 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase py-1 px-3 rounded-full tracking-wider">
                    {property.type}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white border border-white/20 p-2 rounded-full cursor-pointer hover:bg-black/80 transition-colors" title="View Gallery">
                  <Camera className="w-4 h-4" />
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-2xl font-bold text-white shadow-sm">{property.price}</p>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-2">{property.title}</h4>
                <div className="flex items-center gap-2 text-white/60 mb-6 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mt-auto">
                  <div className="flex flex-col items-center justify-center">
                    <Bed className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-white font-bold">{property.beds}</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-widest">{t('props.beds')}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center border-x border-white/10">
                    <Bath className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-white font-bold">{property.baths}</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-widest">{t('props.baths')}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Square className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-white font-bold">{property.sqft}</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-widest">{t('props.sqft')}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="w-full btn-primary py-3 flex justify-center items-center gap-2 font-bold text-sm tracking-widest uppercase shadow-lg shadow-blue-500/20"
                  >
                    {t('props.inquire')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </div>
      <PropertyLightbox property={activeProperty} onClose={() => setActiveProperty(null)} />
    </motion.section>
  );
}
