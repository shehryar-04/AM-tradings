import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { MarketThesis } from './components/sections/MarketThesis';
import { About } from './components/sections/About';
import { BusinessAreas } from './components/sections/BusinessAreas';
import { GreenfieldStages } from './components/sections/GreenfieldStages';
import { Products } from './components/sections/Products';
import { WhyUs } from './components/sections/WhyUs';
import { Gallery } from './components/sections/Gallery';
import { Credentials } from './components/sections/Credentials';
import { ContactCTA } from './components/sections/ContactCTA';
import { WhatsAppIcon } from './components/ui/WhatsAppButton';
import { company, getWhatsAppUrl } from './data/company';

export default function App() {
  // Smooth scroll initialization with Lenis
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-ivory-100 text-petrol-900 flex flex-col font-sans overflow-x-hidden selection:bg-gold-500 selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <MarketThesis />
        <About />
        <BusinessAreas />
        <GreenfieldStages />
        <Products />
        <WhyUs />
        <Gallery />
        <Credentials />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Global WhatsApp Direct Button */}
      <a
        href={getWhatsAppUrl("Hello Dr. Munib Siddiqui, I am contacting you directly through the AM Tradings website.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Dr. Munib on WhatsApp at ${company.contacts.whatsapp}`}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 border-2 border-white/40"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
        </span>
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
