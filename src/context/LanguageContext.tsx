import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, values?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<string, Record<string, string>> = {
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.neighborhoods': 'Neighborhoods',
    'nav.properties': 'Properties',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.success': 'Success Stories',
    'nav.faq': 'FAQ',
    'nav.call': 'Call',
    'nav.contact': 'Contact (24/7)',
    'brand.title': 'ALFONSO SILVA',
    'brand.subtitle': 'MIAMI REAL ESTATE EXPERT',
    
    // Hero
    'hero.rating': '5.0 Rating (16 Verified Reviews)',
    'hero.title.1': 'Finding Your Perfect',
    'hero.title.2': 'Miami Home',
    'hero.title.3': 'Made Easy.',
    'hero.typewriter.1': 'Luxury Rentals.',
    'hero.typewriter.2': 'Smart Purchases.',
    'hero.typewriter.3': 'Relocation Assistance.',
    'hero.subtitle': 'Earning your trust through relentless availability and deep local expertise in Brickell Key & the greater Miami market.',
    'hero.btn.search': 'Start Your Search Today',
    'hero.btn.whatsapp': 'WhatsApp Me',
    'hero.form.title': 'Needs Urgent Attention?',
    'hero.form.subtitle': 'Fill out this quick form and I will get back to you immediately.',
    'hero.form.name': 'Full Name',
    'hero.form.phone': 'Phone Number',
    'hero.form.intent': 'I am looking to...',
    'hero.form.select': 'Select an option...',
    'hero.form.rent': 'Rent an Apartment',
    'hero.form.buy': 'Buy a Home',
    'hero.form.relocate': 'Relocate to Miami',
    'hero.form.submit': 'Get Immediate Response',
    'hero.form.responseTime': 'Average response time: < 5 minutes',
    
    // Stats
    'stats.1.title': '24/7 Availability',
    'stats.1.desc': 'Always ready to answer questions and show properties, even nights and weekends.',
    'stats.1.tooltip': 'Instant replies mean you never miss out on a fast-moving listing.',
    'stats.2.title': '16 Verified Reviews',
    'stats.2.desc': 'Consistent 5.0-star rating on Google from satisfied renters and buyers.',
    'stats.2.tooltip': 'Constant availability and clear communication lead to stellar client satisfaction.',
    'stats.3.title': 'Quick Turnarounds',
    'stats.3.desc': 'Securing tours at competitive properties to get you ahead of the line.',
    'stats.3.tooltip': 'Being always on allows us to secure viewings hours before competitors do.',
    'stats.4.title': 'Relocation Expert',
    'stats.4.desc': 'Making the transition to Miami seamless logistics a breeze.',
    'stats.4.tooltip': 'Handling off-hours logistics so your out-of-state move is completely stress-free.',
    
    // Services
    'services.pretitle': 'How I Can Help',
    'services.title': 'Real Estate Services Tailored to You',
    'services.subtitle': 'I don\'t just open doors; I provide dedicated, round-the-clock service to ensure you get exactly what you need in the fast-paced Miami market.',
    
    'services.1.title': 'Apartment Rentals',
    'services.1.subtitle': 'Miami & Brickell Key Specialist',
    'services.1.desc': 'Competitive market? No problem. I set up full days of tours at highly sought-after complexes and work tirelessly to find your perfect fit.',
    'services.1.f1': 'Luxury Apartments',
    'services.1.f2': 'Fast application assistance',
    'services.1.f3': 'Negotiation support',
    
    'services.2.title': 'Home Purchases',
    'services.2.subtitle': 'Your Buyer Representative',
    'services.2.desc': 'Buying a home should be exciting, not stressful. I listen closely to your needs, provide realistic options, and guide you through the closing process smoothly.',
    'services.2.f1': 'Personalized property matching',
    'services.2.f2': 'Market analysis',
    'services.2.f3': 'Offer strategy & closing',
    
    'services.3.title': 'Relocation Assistance',
    'services.3.subtitle': 'Moving to Miami Made Easy',
    'services.3.desc': 'Relocating to a new city is overwhelming. I help ease the transition by curating options remotely, handling local logistics, and ensuring your new home is ready.',
    'services.3.f1': 'Remote video tours',
    'services.3.f2': 'Neighborhood guidance',
    'services.3.f3': 'Turnkey move-in support',

    // Mortgage Calculator
    'calc.title': 'Mortgage Calculator',
    'calc.subtitle': 'Estimate Your Payments',
    'calc.desc': 'Use our simple calculator to estimate your monthly mortgage payments based on current market rates.',
    'calc.price': 'Home Price',
    'calc.downpayment': 'Down Payment (%)',
    'calc.interest': 'Interest Rate (%)',
    'calc.years': 'Loan Term (Years)',
    'calc.calculate': 'Calculate',
    'calc.monthly': 'Estimated Monthly Payment',

    // Map
    'map.pretitle': 'Service Areas',
    'map.title': 'Prime Miami Neighborhoods',
    'map.subtitle': 'Specializing in Miami\'s most coveted waterfront and urban districts. Hover over the map to explore area details and current market availability.',
    'map.interactive': 'Interactive Map',
    'map.profile': 'Area Profile',
    'map.active': 'Active Listings',
    'map.rent': 'Avg. Rental',
    'map.explore': 'Explore',

    // Properties
    'props.pretitle': 'Featured Listings',
    'props.title': 'Exclusive Market Opportunities',
    'props.subtitle': 'A curated selection of the finest apartments and homes currently available in the Miami market.',
    'props.request': 'Request Full List',
    'props.inquire': 'Inquire Now',
    'props.beds': 'Beds',
    'props.baths': 'Baths',
    'props.sqft': 'Sq Ft',
    'props.filter.all': 'All',
    'props.filter.rentals': 'Rentals',
    'props.filter.purchases': 'Purchases',
    'props.search.neighborhood': 'Neighborhood (e.g. Brickell)',
    'props.search.beds': 'Any Beds',
    'props.search.beds1': '1+ Beds',
    'props.search.beds2': '2+ Beds',
    'props.search.beds3': '3+ Beds',
    'props.search.beds4': '4+ Beds',
    'props.search.price': 'Any Price',
    'props.search.price1': 'Up to $5k/mo',
    'props.search.price2': 'Up to $10k/mo',
    'props.search.price3': 'Up to $1M',
    'props.search.price4': 'Up to $5M',

    // About
    'about.pretitle': 'Meet Alfonso Silva',
    'about.title.1': 'A Partner Who Listens & Works',
    'about.title.2': 'Tirelessly',
    'about.title.3': 'For You',
    'about.p1': 'Finding an apartment or buying a home in Miami can feel like a daunting task, especially in competitive markets like Brickell. My mission is to make the process smooth, fast, and completely tailored to you.',
    'about.p2': 'I don\'t believe in standard business hours. I know that great opportunities disappear quickly, which is why I am <strong class="text-white font-semibold">available 24/7</strong> to secure tours, answer your pressing questions, and follow up aggressively on applications.',
    'about.p3': 'Whether you are relocating to Miami for the first time, balancing a demanding professional schedule, or meticulously searching for your dream property, I am patient and detail-oriented. I listen to what you want and give realistic, curated options.',
    'about.philosophy': 'My Philosophy',
    'about.philosophy.desc': 'Patient, detail-oriented, and intensely focused on your specific needs.',
    'about.feat.1': 'Nights & Weekends Availability',
    'about.feat.2': 'Immediate Responsiveness',

    // Testimonials
    'test.pretitle': '5.0 Verified on Google',
    'test.title': 'Don\'t Just Take My Word For It',
    'test.subtitle': 'Read what recent buyers and renters have to say about their experience working together. Real reviews from real people who found their perfect Miami home.',
    'test.verified': 'Verified Client',
    'test.showing': 'Showing 6 of 16 verified 5-star reviews',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to find your Miami home? I am available 24/7. Reach out directly or fill out the form, and I will respond immediately.',
    'contact.call': 'Call Anytime',
    'contact.whatsapp': 'WhatsApp',
    'contact.message': 'Message Me',
    'contact.area': 'Service Area',
    'contact.areadesc': 'Miami & Brickell Key',
    'contact.status': 'STATUS: AVAILABLE',
    'contact.form.title': 'Schedule a Consultation',
    'contact.form.fname': 'First Name',
    'contact.form.lname': 'Last Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.type': 'Property Type',
    'contact.form.timeline': 'Desired Timeline',
    'contact.form.tellme': 'Tell me what you\'re looking for',
    'contact.form.submit': 'Send Inquiry',
    
    // Timeline options
    'timeline.asap': 'ASAP (Extremely Urgent)',
    'timeline.1m': 'Within 1 Month',
    'timeline.13m': '1 to 3 Months',
    'timeline.flex': 'Flexible',

    // Success Stories
    'success.title': 'Success Stories',
    'success.subtitle': 'Real clients, real results. See how we made their Miami real estate dreams come true.',
    'success.prev': 'Previous Story',
    'success.next': 'Next Story',

    // Footer
    'footer.desc': 'Meticulous, responsive, and available 24/7 to help you find your perfect home or apartment in Miami and Brickell Key.',
    'footer.links': 'Quick Links',
    'footer.specialties': 'Specialties',
    'footer.s1': 'Miami Apartment Rentals',
    'footer.s2': 'Brickell Key Properties',
    'footer.s3': 'First-Time Home Buyers',
    'footer.s4': 'Miami Relocation Assistance',
    'footer.s5': 'Luxury Rentals',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.newsletter.title': 'Join Our Mailing List',
    'footer.newsletter.desc': 'Get the latest Miami market updates and exclusive off-market listings sent directly to your inbox.',
    'footer.newsletter.placeholder': 'Email Address',
    'footer.newsletter.btn': 'Subscribe',

    // FAQ section
    'faq.pretitle': 'Clear up your doubts',
    'faq.title': 'Frequently Asked Questions',
    'faq.1.q': 'How much does it cost to use your services for renting?',
    'faq.1.a': 'In Miami, landlords typically pay the broker\'s commission. This means my services for helping you find an apartment and negotiate the lease are completely free to you as the renter.',
    'faq.2.q': 'How far in advance should I start looking for a rental?',
    'faq.2.a': 'I recommend starting your search 30 to 45 days before your ideal move-in date. Most properties require a 30-day notice from current tenants, so this window gives us access to the best available inventory.',
    'faq.3.q': 'What are the standard move-in costs in Miami?',
    'faq.3.a': 'Generally, expect to pay first month\'s rent, last month\'s rent, and a security deposit (equal to one month\'s rent). Some buildings may have lower deposit requirements depending on your credit, plus association application fees.',
    'faq.4.q': 'Can you help me buy a home if I\'m relocating from out of state?',
    'faq.4.a': 'Absolutely. We specialize in relocations. We can conduct remote video tours, provide detailed neighborhood breakdowns, and handle local logistics to ensure a seamless transition.'
  },
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.neighborhoods': 'Barrios',
    'nav.properties': 'Propiedades',
    'nav.about': 'Sobre Mí',
    'nav.testimonials': 'Testimonios',
    'nav.success': 'Casos de Éxito',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.call': 'Llamar al',
    'nav.contact': 'Contacto (24/7)',
    'brand.title': 'ALFONSO SILVA',
    'brand.subtitle': 'EXPERTO INMOBILIARIO EN MIAMI',
    
    // Hero
    'hero.rating': 'Calificación 5.0 (16 Reseñas Verificadas)',
    'hero.title.1': 'Encontrando tu Casa',
    'hero.title.2': 'Ideal en Miami',
    'hero.title.3': 'Fácilmente.',
    'hero.typewriter.1': 'Alquileres de Lujo.',
    'hero.typewriter.2': 'Compras Inteligentes.',
    'hero.typewriter.3': 'Asistencia de Reubicación.',
    'hero.subtitle': 'Ganando su confianza a través de una disponibilidad impecable y un profundo conocimiento local en Brickell Key y el mercado metropolitano de Miami.',
    'hero.btn.search': 'Comienza Tu Búsqueda',
    'hero.btn.whatsapp': 'Escríbeme al WhatsApp',
    'hero.form.title': '¿Necesitas Atención Urgente?',
    'hero.form.subtitle': 'Completa este formulario y te responderé inmediatamente.',
    'hero.form.name': 'Nombre Completo',
    'hero.form.phone': 'Número de Teléfono',
    'hero.form.intent': 'Estoy buscando...',
    'hero.form.select': 'Selecciona una opción...',
    'hero.form.rent': 'Alquilar un Apartamento',
    'hero.form.buy': 'Comprar una Casa',
    'hero.form.relocate': 'Mudarme a Miami',
    'hero.form.submit': 'Recibir Respuesta Inmediata',
    'hero.form.responseTime': 'Tiempo de respuesta: < 5 minutos',
    
    // Stats
    'stats.1.title': 'Disponibilidad 24/7',
    'stats.1.desc': 'Siempre listo para responder preguntas y mostrar propiedades, incluso de noche y fines de semana.',
    'stats.1.tooltip': 'Respuestas instantáneas significan que nunca te pierdes una propiedad de rápido movimiento.',
    'stats.2.title': '16 Reseñas Verificadas',
    'stats.2.desc': 'Calificación de 5.0 estrellas en Google por compradores e inquilinos satisfechos.',
    'stats.2.tooltip': 'La disponibilidad constante y la comunicación clara llevan a una excelente satisfacción del cliente.',
    'stats.3.title': 'Resultados Rápidos',
    'stats.3.desc': 'Asegurando visitas en propiedades competitivas para ponerte primero en la lista.',
    'stats.3.tooltip': 'Estar siempre alerta nos permite asegurar visitas horas antes que otros competidores.',
    'stats.4.title': 'Experto en Reubicación',
    'stats.4.desc': 'Haciendo que la logística y transición a Miami sea sumamente amena.',
    'stats.4.tooltip': 'Manejamos la logística fuera del horario normal para que tu mudanza sea completamente libre de estrés.',
    
    // Services
    'services.pretitle': 'Cómo Puedo Ayudarte',
    'services.title': 'Servicios Inmobiliarios a Tu Medida',
    'services.subtitle': 'No solo abro puertas; ofrezco un servicio dedicado 24 horas para asegurar que consigas lo que necesitas en el rápido mercado de Miami.',
    
    'services.1.title': 'Alquiler de Apartamentos',
    'services.1.subtitle': 'Especialista en Miami & Brickell Key',
    'services.1.desc': '¿Mercado competitivo? Sin problema. Coordino días completos de visitas en los complejos más demandados y trabajo sin descanso hasta encontrar tu lugar ideal.',
    'services.1.f1': 'Alquileres de Lujo',
    'services.1.f2': 'Asistencia de aplicación rápida',
    'services.1.f3': 'Soporte de negociación',
    
    'services.2.title': 'Compra de Propiedades',
    'services.2.subtitle': 'Tu Representante Exclusivo',
    'services.2.desc': 'Comprar una casa debe ser emocionante. Escucho atentamente tus necesidades, ofrezco opciones realistas y te guío hasta el cierre sin problemas.',
    'services.2.f1': 'Búsqueda personalizada',
    'services.2.f2': 'Análisis del mercado',
    'services.2.f3': 'Estrategia de oferta y cierre',
    
    'services.3.title': 'Ayuda de Reubicación',
    'services.3.subtitle': 'Mudarse a Miami, Sin Estrés',
    'services.3.desc': 'Mudarse abruma. Alivio la transición con filtrado remoto de opciones, manejando la logística en Miami y asegurando que tu nuevo hogar esté listo.',
    'services.3.f1': 'Visitas remotas por video',
    'services.3.f2': 'Guía comunitaria de barrios',
    'services.3.f3': 'Mudanza lista para entrar',

    // Mortgage Calculator
    'calc.title': 'Calculadora de Hipotecas',
    'calc.subtitle': 'Estima tus Pagos',
    'calc.desc': 'Usa nuestra calculadora simple para estimar tus pagos hipotecarios mensuales basados en las tasas de mercado actuales.',
    'calc.price': 'Precio de la Casa',
    'calc.downpayment': 'Pago Inicial (%)',
    'calc.interest': 'Tasa de Interés (%)',
    'calc.years': 'Plazo del Préstamo (Años)',
    'calc.calculate': 'Calcular',
    'calc.monthly': 'Pago Mensual Estimado',

    // Map
    'map.pretitle': 'Áreas de Servicio',
    'map.title': 'Barrios Exclusivos de Miami',
    'map.subtitle': 'Especializado en los distritos urbanos y costeros más demandados. Desliza el cursor sobre el mapa para ver los perfiles de los barrios.',
    'map.interactive': 'Mapa Interactivo',
    'map.profile': 'Perfil del Barrio',
    'map.active': 'Propiedades Activas',
    'map.rent': 'Alquiler Prom.',
    'map.explore': 'Explorar',

    // Properties
    'props.pretitle': 'Listados Destacados',
    'props.title': 'Oportunidades de Mercado',
    'props.subtitle': 'Una selección de los apartamentos y casas más destacadas que se encuentran disponibles en Miami.',
    'props.request': 'Solicitar la Lista Roja',
    'props.inquire': 'Enviar Consulta',
    'props.beds': 'Camas',
    'props.baths': 'Baños',
    'props.sqft': 'Pies Cuad.',
    'props.filter.all': 'Todos',
    'props.filter.rentals': 'Alquileres',
    'props.filter.purchases': 'Ventas',
    'props.search.neighborhood': 'Barrio (ej. Brickell)',
    'props.search.beds': 'Cualquier',
    'props.search.beds1': '1+ Camas',
    'props.search.beds2': '2+ Camas',
    'props.search.beds3': '3+ Camas',
    'props.search.beds4': '4+ Camas',
    'props.search.price': 'Cualquier Precio',
    'props.search.price1': 'Hasta $5k/mes',
    'props.search.price2': 'Hasta $10k/mes',
    'props.search.price3': 'Hasta $1M',
    'props.search.price4': 'Hasta $5M',

    // About
    'about.pretitle': 'Conoce a Alfonso Silva',
    'about.title.1': 'Un Aliado que Escucha y',
    'about.title.2': 'Trabaja Sin Cansancio',
    'about.title.3': 'Por Ti',
    'about.p1': 'Comprar una casa o encontrar alquiler en Miami puede ser agotador, especialmente en áreas competitivas como Brickell Key. Mi misión es hacerlo rápido, sin estrés y 100% hecho a tu medida.',
    'about.p2': 'No creo en el "horario de oficina". Sé que las grandes oportunidades vuelan, así que estoy <strong class="text-white font-semibold">disponible 24/7</strong> para asegurar tus visitas, responder dudas a tiempo y aplicar velozmente.',
    'about.p3': 'Ya sea porque te estás mudando desde lejos hacia Miami, tienes un itinerario muy ocupado, o simplemente buscas meticulosamente el hogar de tus sueños; soy muy detallista y paciente.',
    'about.philosophy': 'Mi Filosofía',
    'about.philosophy.desc': 'Paciencia, atención al detalle y enfoque absoluto en tus necesidades personales.',
    'about.feat.1': 'Disponible Noches y Fines de Semana',
    'about.feat.2': 'Tiempo de Respuesta Inmediato',

    // Testimonials
    'test.pretitle': 'Verificado 5 Estrellas en Google',
    'test.title': 'No Te Quedes Solo Con Mi Palabra',
    'test.subtitle': 'Lee lo que clientes reales dicen tras haber trabajado en equipo. Testimonios legítimos de personas que ya disfrutan de su hogar.',
    'test.verified': 'Cliente Verificado',
    'test.showing': 'Mostrando 6 de las 16 reseñas de 5 estrellas',

    // Contact
    'contact.title': 'Ponte En Contacto',
    'contact.subtitle': '¿Listo para encontrar tu casa? Estoy disponible las 24 horas del día, 7 días de la semana. Llámame o rellena el formulario y responderé rápido.',
    'contact.call': 'Llama Cuando Gustes',
    'contact.whatsapp': 'WhatsApp',
    'contact.message': 'Envíame un Mensaje',
    'contact.area': 'Zonas que atiendo',
    'contact.areadesc': 'Miami y Brickell Key',
    'contact.status': 'ESTADO: DISPONIBLE AHORA',
    'contact.form.title': 'Agendar Consulta',
    'contact.form.fname': 'Nombre (s)',
    'contact.form.lname': 'Apellidos',
    'contact.form.phone': 'Nro. de Teléfono',
    'contact.form.type': 'Tipo de Propiedad',
    'contact.form.timeline': 'Tiempo Estimado',
    'contact.form.tellme': 'Cuéntame lo que andas buscando...',
    'contact.form.submit': 'Enviar Mensaje',
    
    // Timeline options
    'timeline.asap': 'Búsqueda Urgente (Pronto)',
    'timeline.1m': 'En el transcurso del mes',
    'timeline.13m': 'De 1 a 3 Meses',
    'timeline.flex': 'Soy Flexible',

    // Success Stories
    'success.title': 'Casos de Éxito',
    'success.subtitle': 'Clientes reales, resultados reales. Mira cómo hicimos realidad sus sueños inmobiliarios en Miami.',
    'success.prev': 'Historia Anterior',
    'success.next': 'Siguiente Historia',

    // Footer
    'footer.desc': 'Un servicio meticuloso y disponible 24/7 para ayudarte a encontrar el hogar perfecto en el corazón de Miami.',
    'footer.links': 'Enlaces Rápidos',
    'footer.specialties': 'Especialidades',
    'footer.s1': 'Alquiler de Aptos en Miami',
    'footer.s2': 'Propiedades en Brickell Key',
    'footer.s3': 'Compradores de Primera Vez',
    'footer.s4': 'Lujosos Alquileres de Temporada',
    'footer.s5': 'Asesoramiento de Reubicación',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.newsletter.title': 'Únete a Nuestra Lista',
    'footer.newsletter.desc': 'Recibe actualizaciones del mercado de Miami y propiedades exclusivas en tu correo.',
    'footer.newsletter.placeholder': 'Correo Electrónico',
    'footer.newsletter.btn': 'Suscribirse',

    // FAQ section
    'faq.pretitle': 'Aclara tus dudas',
    'faq.title': 'Preguntas Frecuentes',
    'faq.1.q': '¿Cuánto cuesta usar tus servicios para alquilar?',
    'faq.1.a': 'En Miami, los propietarios suelen pagar la comisión del agente. Esto significa que mis servicios para ayudarte a encontrar un apartamento y negociar el contrato de arrendamiento son completamente gratuitos para ti como inquilino.',
    'faq.2.q': '¿Con cuánta anticipación debo empezar a buscar alquiler?',
    'faq.2.a': 'Recomiendo iniciar la búsqueda de 30 a 45 días antes de la fecha ideal para mudarte. La mayoría de las propiedades requieren un aviso de 30 días de los inquilinos actuales, por lo que esta ventana nos da acceso al mejor inventario.',
    'faq.3.q': '¿Cuáles son los costos estándar para mudarse en Miami?',
    'faq.3.a': 'Generalmente, debes pagar el primer mes de alquiler, el último mes y un depósito de seguridad (igual a un mes de alquiler). Algunos edificios pueden requerir depósitos menores dependiendo de tu crédito, además de las tarifas de solicitud de la asociación.',
    'faq.4.q': '¿Puedes ayudarme a comprar una casa si me mudo de otro estado?',
    'faq.4.a': 'Absolutamente. Nos especializamos en reubicaciones. Podemos realizar visitas por video a distancia, brindar un desglose detallado de los vecindarios y gestionar la logística local.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem('appLang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('appLang', lang);
  };

  const t = (key: string, values?: Record<string, string>): string => {
    let str = translations[language][key] || translations['en'][key] || key;
    if (values) {
      Object.keys(values).forEach(k => {
        str = str.replace(`{${k}}`, values[k]);
      });
    }
    return str;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
