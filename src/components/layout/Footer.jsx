import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { WhatsAppButton, WhatsAppIcon } from '../ui/WhatsAppButton';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-petrol-950 text-slate-300 border-t border-white/10 pt-16 lg:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-petrol-900 border border-gold-500/60 flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-gold-400">AM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white tracking-tight">
                  {company.name}
                </span>
                <span className="text-[10px] font-mono font-medium text-gold-400 tracking-[0.16em] uppercase">
                  {company.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Independent technical consultancy, plant architecture, machinery procurement, and recipe engineering for Pakistan's dairy and industrial food processing sector.
            </p>

            <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-sm max-w-sm">
              <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <p className="text-xs text-slate-300 font-mono">
                {company.philosophy}
              </p>
            </div>
          </div>

          {/* Core Areas */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold-400">
              Capability Pillars
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#capabilities" className="hover:text-gold-300 transition-colors">
                  Turnkey Dairy Plant Consulting
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-gold-300 transition-colors">
                  Machinery Sourcing &amp; Procurement
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-gold-300 transition-colors">
                  Installation &amp; Commissioning
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-gold-300 transition-colors">
                  Recipe Formulation &amp; Dairy R&amp;D
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-gold-300 transition-colors">
                  QA Laboratory Setup &amp; SOPs
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-gold-300 transition-colors">
                  CAPEX &amp; Feasibility Modeling
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold-400">
              Direct Inquiries
            </h3>
            <div className="flex flex-col gap-3 text-xs">
              <a
                href={getWhatsAppUrl("Hello Dr. Munib, I am contacting you from the AM Tradings official website.")}
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
            <span>Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
