import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceMap() {
  const { t, language } = useLanguage();
  
  const neighborhoods = [
    {
      id: 'edgewater',
      name: 'Edgewater',
      description: language === 'en' ? 'A rapidly growing waterfront neighborhood known for luxury high-rises, bayside parks, and panoramic views of Biscayne Bay.' : 'Un vecindario costero de rápido crecimiento conocido por rascacielos de lujo, parques frente a la bahía y vistas panorámicas.',
      propertyCount: 42,
      avgPrice: '$3,800/mo',
      path: 'M 80 50 L 160 50 Q 170 100 160 140 L 70 140 Z',
      cx: 120, cy: 95
    },
    {
      id: 'downtown',
      name: 'Downtown Miami',
      description: language === 'en' ? 'The urban core of Miami, featuring spectacular skyscrapers, cultural venues, sports arenas, and bustling city life.' : 'El núcleo urbano de Miami, con espectaculares rascacielos, lugares culturales, estadios deportivos y una bulliciosa vida urbana.',
      propertyCount: 85,
      avgPrice: '$4,200/mo',
      path: 'M 70 140 L 160 140 Q 155 190 165 240 L 60 240 Z',
      cx: 115, cy: 190
    },
    {
      id: 'brickell',
      name: 'Brickell',
      description: language === 'en' ? 'Miami\'s financial district and extremely popular residential neighborhood with world-class dining, shopping, and nightlife.' : 'El distrito financiero de Miami y un barrio residencial extremadamente popular con restaurantes, tiendas y vida nocturna de clase mundial.',
      propertyCount: 110,
      avgPrice: '$4,500/mo',
      path: 'M 60 240 L 165 240 Q 175 300 160 360 L 50 360 Z',
      cx: 110, cy: 300
    },
    {
      id: 'brickell-key',
      name: 'Brickell Key',
      description: language === 'en' ? 'An exclusive man-made island neighborhood offering privacy, resort-style amenities, and direct bay access just off the mainland.' : 'Una exclusiva isla artificial de estilo resort que ofrece privacidad, amenidades y acceso directo a la bahía justo al lado del continente.',
      propertyCount: 28,
      avgPrice: '$5,500/mo',
      path: 'M 210 240 Q 240 240 240 270 Q 240 300 210 300 Q 190 300 190 270 Q 190 240 210 240 Z',
      cx: 215, cy: 270
    }
  ];

  const [activeArea, setActiveArea] = useState(neighborhoods[2]); // Default Brickell

  return (
    <motion.section 
      id="neighborhoods" 
      className="py-24 relative z-10 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">{t('map.pretitle')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('map.title')}</h3>
          <p className="text-lg text-white/70">
            {t('map.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Map Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square glass-panel p-6 flex flex-col">
              <div className="absolute top-6 left-6 text-white/50 text-[10px] font-bold uppercase tracking-widest">{t('map.interactive')}</div>
              <svg viewBox="0 0 350 450" className="w-full h-full drop-shadow-2xl">
                {/* Abstract coastline / mainland */}
                <path 
                  d="M 10 0 L 155 0 Q 185 150 155 250 Q 185 350 155 450 L 10 450 Z" 
                  className="fill-white/5 stroke-white/10" 
                  strokeWidth="1" 
                />
                
                {neighborhoods.map((area) => (
                  <g 
                    key={area.id} 
                    onClick={() => setActiveArea(area)} 
                    onMouseEnter={() => setActiveArea(area)}
                    className="cursor-pointer outline-none group"
                  >
                    <path
                      d={area.path}
                      className={`transition-all duration-300 stroke-2 ${
                        activeArea.id === area.id 
                          ? 'fill-blue-500/40 stroke-blue-400' 
                          : 'fill-white/10 stroke-white/30 group-hover:fill-blue-500/20 group-hover:stroke-blue-400/50'
                      }`}
                    />
                    {activeArea.id === area.id && (
                      <circle cx={area.cx} cy={area.cy} r="6" fill="#60a5fa" className="animate-ping opacity-50" />
                    )}
                    <circle 
                      cx={area.cx} 
                      cy={area.cy} 
                      r={activeArea.id === area.id ? "4" : "3"} 
                      className={`transition-all duration-300 pointer-events-none ${
                        activeArea.id === area.id ? 'fill-white' : 'fill-white/80'
                      }`} 
                    />
                    <text 
                      x={area.cx} 
                      y={area.cy - 12} 
                      textAnchor="middle" 
                      className={`text-[10px] font-bold pointer-events-none uppercase tracking-wider drop-shadow-md transition-all duration-300 ${
                        activeArea.id === area.id ? 'fill-white text-[11px]' : 'fill-white/60'
                      }`}
                    >
                      {area.name}
                    </text>
                    
                    {/* Building Pins for Brickell */}
                    {activeArea.id === 'brickell' && area.id === 'brickell' && (
                      <g>
                        {[
                          { name: 'Icon Brickell', x: 80, y: 270 },
                          { name: 'SLS Lux', x: 100, y: 310 },
                          { name: 'Panorama Tower', x: 130, y: 290 },
                          { name: 'Brickell Flatiron', x: 90, y: 340 },
                          { name: 'Reach & Rise', x: 140, y: 320 }
                        ].map((building) => (
                          <g 
                            key={building.name} 
                            className="cursor-pointer group/pin"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.dispatchEvent(new CustomEvent('prefill-contact', { detail: building.name }));
                              window.location.hash = '#contact';
                            }}
                          >
                            <circle cx={building.x} cy={building.y} r="3" className="fill-orange-400 transition-transform group-hover/pin:scale-150" />
                            <text 
                              x={building.x} 
                              y={building.y - 8} 
                              textAnchor="middle" 
                              className="text-[6px] fill-white opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none drop-shadow-md bg-black/50"
                            >
                              {building.name}
                            </text>
                            <rect
                              x={building.x - 5}
                              y={building.y - 5}
                              width="10"
                              height="10"
                              fill="transparent"
                            />
                          </g>
                        ))}
                      </g>
                    )}
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-8 bg-white/5"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                  <MapPin className="w-3 h-3" /> {t('map.profile')}
                </div>
                
                <h4 className="text-3xl font-bold text-white mb-4">{activeArea.name}</h4>
                <p className="text-white/80 leading-relaxed mb-8">
                  {activeArea.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-black/20 border border-white/10 rounded-xl p-5 flex flex-col justify-center shadow-inner">
                    <div className="flex items-center gap-2 text-blue-400 mb-3">
                       <Building2 className="w-4 h-4" />
                       <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">{t('map.active')}</span>
                    </div>
                    <span className="text-3xl font-bold text-white">{activeArea.propertyCount}</span>
                  </div>
                  
                  <div className="bg-black/20 border border-white/10 rounded-xl p-5 flex flex-col justify-center shadow-inner">
                    <div className="flex items-center gap-2 text-blue-400 mb-3">
                       <TrendingUp className="w-4 h-4" />
                       <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">{t('map.rent')}</span>
                    </div>
                    <span className="text-3xl font-bold text-white">{activeArea.avgPrice}</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="btn-primary w-full py-4 flex justify-center items-center gap-2 font-bold text-sm tracking-widest uppercase shadow-lg shadow-blue-500/20 text-center"
                >
                  {t('map.explore')} {activeArea.name} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}
