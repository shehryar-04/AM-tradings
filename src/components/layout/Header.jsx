import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { clsx } from 'clsx';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Market Thesis', href: '#market-thesis' },
    { label: 'About', href: '#about' },
    { label: '7 Capabilities', href: '#capabilities' },
    { label: '8 Greenfield Stages', href: '#greenfield-methodology' },
    { label: 'Machinery Portfolio', href: '#machinery' },
    { label: 'Consultant', href: '#consultant' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        isScrolled
          ? 'bg-ivory-100/95 backdrop-blur-md shadow-sm py-3.5 border-b border-petrol-900/10'
          : 'bg-transparent py-5 border-b border-petrol-900/5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus-visible:outline-none"
            aria-label="AM Tradings and Consultants Homepage"
          >
            {/* Monogram Badge */}
            <div className="w-11 h-11 rounded-sm bg-gradient-to-br from-petrol-900 to-petrol-800 border border-gold-500/50 flex items-center justify-center shadow-md group-hover:border-gold-400 transition-colors">
              <span className="font-serif font-bold text-xl text-gold-400">AM</span>
            </div>
            {/* Brand Title & Tagline */}
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-petrol-900 tracking-tight leading-none group-hover:text-gold-700 transition-colors">
                AM Tradings
              </span>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-gold-700 mt-1">
                &amp; Consultants
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-gold-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <WhatsAppButton
              size="sm"
              variant="whatsapp"
              message="Hello Dr. Munib, I would like to arrange an initial consulting consultation for our dairy project."
              showArrow={false}
              pulse={true}
            >
              Consult Dr. Munib
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <WhatsAppButton
              size="sm"
              variant="whatsapp"
              message="Hello Dr. Munib, I would like to inquire about AM Tradings services."
              showArrow={false}
              className="sm:hidden text-xs py-1.5 px-2.5"
            >
              WhatsApp
            </WhatsAppButton>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-petrol-900 hover:text-gold-600 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-ivory-100/98 border-b border-petrol-900/10 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-5 pt-3 pb-8 flex flex-col gap-4">
              <div className="flex flex-col gap-1 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-serif font-semibold text-petrol-900 hover:text-gold-700 py-2.5 border-b border-petrol-900/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <WhatsAppButton
                  size="md"
                  message="Hello Dr. Munib, I am reaching out through the AM Tradings mobile website."
                  className="w-full justify-center"
                >
                  WhatsApp: {company.contacts.whatsapp}
                </WhatsAppButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
