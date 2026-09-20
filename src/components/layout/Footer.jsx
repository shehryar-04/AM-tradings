import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { WhatsAppButton, WhatsAppIcon } from '../ui/WhatsAppButton';
import { LogoFull } from '../ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-petrol-950 text-slate-300 border-t border-white/10 pt-16 lg:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link to="/" className="inline-block">
              <LogoFull variant="dark" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Industrial dairy &amp; food processing machinery procurement, turnkey plant engineering, and strategic recipe formulation for Pakistan and international agro-markets.
            </p>

            <div className="flex items-center gap-2.5 p-3 bg-white/5 border border-white/10 rounded-sm">
              <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <p className="text-xs text-slate-300 font-mono">
                {company.philosophy}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold-400">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">
                  About Us &amp; Profile
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-300 transition-colors">
                  Services &amp; Machinery
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gold-300 transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">
                  Contact &amp; RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Consultancy Pillars */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold-400">
              Consulting Scope
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
              <li>Turnkey Greenfield Projects</li>
              <li>Tender &amp; Vendor Neutral Audit</li>
              <li>Dairy Recipe &amp; Formulation R&amp;D</li>
              <li>Hygienic 3D Plant Layout &amp; Zoning</li>
              <li>Sanitary Process Piping &amp; Automation</li>
              <li>QA Laboratory Setup &amp; PFA Compliance</li>
              <li>Genuine Spare Parts Sourcing</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold-400">
              Direct Contact
            </h3>
            <div className="flex flex-col gap-3 text-xs">
              <a
                href={getWhatsAppUrl("Hello Dr. Asif Iftikhar / AM Tradings Team, I am contacting you from the AM Tradings website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-200 hover:text-[#25D366] transition-colors font-medium"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>WhatsApp: {company.contacts.whatsapp}</span>
              </a>

              <a
                href={`tel:${company.contacts.whatsappRaw}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Direct: {company.contacts.phoneSecondary}</span>
              </a>

              <a
                href={`mailto:${company.contacts.emailPrimary}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="truncate">{company.contacts.emailPrimary}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>112 Broadway Heights 3, Bahria Orchard Phase 1, Lahore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            &copy; {currentYear} {company.legalEntity}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Beyond Trade — Beyond Boundaries</span>
            <span>NTN: 8856230-1 | SECP Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
