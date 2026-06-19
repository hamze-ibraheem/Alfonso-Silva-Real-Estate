import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import ServiceMap from './components/ServiceMap';
import FeaturedProperties from './components/FeaturedProperties';
import About from './components/About';
import Testimonials from './components/Testimonials';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-transparent font-sans text-white selection:bg-blue-500/30 selection:text-white relative">
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]"
            style={{ scaleX }}
          />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <Stats />
            <Services />
            <ServiceMap />
            <FeaturedProperties />
            <About />
            <Testimonials />
            <SuccessStories />
            <FAQ />
            <Contact />
          </main>
          <WhatsAppWidget />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

