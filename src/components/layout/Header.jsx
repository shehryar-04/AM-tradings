import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { LogoFull } from '../ui/Logo';
import { clsx } from 'clsx';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact / Enquire', path: '/contact' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-ivory-100/95 backdrop-blur-md shadow-sm py-3 border-b border-petrol-900/10'
          : 'bg-ivory-100/90 backdrop-blur-sm py-4 border-b border-petrol-900/5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Lockup */}
          <Link
            to="/"
            className="group focus-visible:outline-none hover:opacity-95 transition-opacity"
            aria-label="AM Tradings and Consultants Homepage"
          >
            <LogoFull variant="light" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    'text-xs font-mono font-bold uppercase tracking-wider py-1.5 relative transition-colors',
                    isActive
                      ? 'text-petrol-900 after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gold-500'
                      : 'text-slate-600 hover:text-gold-700 after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
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
          <div className="flex items-center gap-2 lg:hidden">
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
            className="lg:hidden bg-ivory-100/98 border-b border-petrol-900/10 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-5 pt-3 pb-8 flex flex-col gap-4">
              <div className="flex flex-col gap-1 py-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        'text-base font-display font-bold py-2.5 border-b border-petrol-900/5 transition-colors',
                        isActive
                          ? 'text-gold-600 pl-2 border-l-2 border-l-gold-500'
                          : 'text-petrol-900 hover:text-gold-700'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
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
