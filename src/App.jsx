import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ContactPage } from './pages/ContactPage';
import { WhatsAppIcon } from './components/ui/WhatsAppButton';
import { company, getWhatsAppUrl } from './data/company';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll initialization with Lenis
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
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
    <BrowserRouter>
      <ScrollToTop />
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-gold-600 via-gold-400 to-amber-300 origin-left z-[60] shadow-[0_0_12px_rgba(214,158,46,0.6)] pointer-events-none"
        style={{ scaleX }}
      />
      <div className="relative min-h-screen bg-ivory-100 text-petrol-900 flex flex-col font-sans overflow-x-hidden selection:bg-gold-500 selection:text-white">
        {/* Top Header */}
        <Header />

        {/* Dynamic Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Global WhatsApp Direct Button */}
        <a
          href={getWhatsAppUrl("Hello Dr. Asif Iftikhar, I am contacting you directly through the AM Tradings official website.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with Dr. Asif Iftikhar on WhatsApp at ${company.contacts.whatsapp}`}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 border-2 border-white/40"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
          </span>
          <WhatsAppIcon className="w-7 h-7" />
        </a>
      </div>
    </BrowserRouter>
  );
}
