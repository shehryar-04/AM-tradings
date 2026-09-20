import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Building2,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { company, getWhatsAppUrl } from '../data/company';
import { SectionHeading } from '../components/ui/SectionHeading';
import { WhatsAppButton, WhatsAppIcon } from '../components/ui/WhatsAppButton';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    serviceCategory: 'Greenfield Dairy Plant Engineering',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Open WhatsApp with pre-formatted message
    const formattedMsg = `*New Website Enquiry*\n*Name:* ${formData.fullName}\n*Organization:* ${formData.organization}\n*Service:* ${formData.serviceCategory}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Details:* ${formData.message}`;
    const url = getWhatsAppUrl(formattedMsg);
    window.open(url, '_blank');
  };

  const enquiryTopics = [
    'Greenfield Dairy Plant Engineering',
    'Machinery RFQ & STK Equipment',
    'Independent Tender & CAPEX Audit',
    'Recipe Formulation & R&D',
    'Sanitary Piping & Commissioning',
    'QA Testing Laboratory Setup',
    'Genuine Spare Parts Sourcing',
    'General Corporate Inquiry',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-ivory-100 pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-petrol-950 text-white py-16 lg:py-20 border-b border-petrol-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-xs text-xs font-mono font-bold uppercase tracking-widest mb-4">
              Direct Technical Engagement
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
              Contact &amp; Project Inquiries
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              Connect directly with Dr. Asif Iftikhar and the AM Tradings engineering directorate for plant consultations, equipment RFQs, and tender reviews.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Location Section */}
      <section className="py-20 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-petrol-900/10 rounded-sm shadow-sm">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-700 block mb-1">
                Project RFP Form
              </span>
              <h2 className="text-2xl font-display font-bold text-petrol-900 mb-2">
                Submit an Engineering Inquiry
              </h2>
              <p className="text-xs text-slate-600 mb-8 leading-relaxed">
                Provide your project parameters below. Submissions connect directly to our senior advisory desk.
              </p>

              {submitted ? (
                <div className="p-8 bg-ivory-100 border border-gold-500/40 rounded-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-petrol-900 mb-2">
                    Inquiry Initiated
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 max-w-sm mx-auto">
                    Your parameters have been formatted. Our direct WhatsApp portal has opened to establish immediate technical contact with Dr. Asif Iftikhar.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-petrol-900 text-gold-400 text-xs font-mono font-bold uppercase rounded-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full px-4 py-3 bg-ivory-100 border border-petrol-900/15 rounded-xs text-xs font-sans text-petrol-900 focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 mb-2">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Agro-Dairy Ventures"
                        className="w-full px-4 py-3 bg-ivory-100 border border-petrol-900/15 rounded-xs text-xs font-sans text-petrol-900 focus:outline-none focus:border-gold-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@agroventures.pk"
                        className="w-full px-4 py-3 bg-ivory-100 border border-petrol-900/15 rounded-xs text-xs font-sans text-petrol-900 focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-3 bg-ivory-100 border border-petrol-900/15 rounded-xs text-xs font-sans text-petrol-900 focus:outline-none focus:border-gold-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 mb-2">
                      Primary Service / Interest *
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-4 py-3 bg-ivory-100 border border-petrol-900/15 rounded-xs text-xs font-sans text-petrol-900 focus:outline-none focus:border-gold-500"
                    >
                      {enquiryTopics.map((topic, idx) => (
                        <option key={idx} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 mb-2">
                      Project Details / Technical Parameters *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your planned capacity (e.g. 50,000 L/day), current facility status, or specific machinery requirements..."
                      className="w-full px-4 py-3 bg-ivory-100 border border-petrol-900/15 rounded-xs text-xs font-sans text-petrol-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-petrol-900 hover:bg-gold-600 text-gold-400 hover:text-petrol-950 text-xs font-mono font-bold uppercase tracking-widest rounded-xs shadow-md transition-colors duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit RFP to Dr. Asif Iftikhar</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-mono">
                    All technical submissions are treated with strict industrial confidentiality.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Direct Contact & Office Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Direct Advisory Contact */}
              <div className="p-7 bg-petrol-900 text-white rounded-sm shadow-md">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-1">
                  Principal Advisory Desk
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Dr. Asif Iftikhar
                </h3>
                <p className="text-xs text-slate-300 font-mono mb-6">
                  Principal Dairy Consultant and CEO of the firm
                </p>

                <div className="space-y-4 text-xs font-mono">
                  <a
                    href={getWhatsAppUrl("Hello Dr. Asif Iftikhar, I am contacting you directly from the AM Tradings website.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/15 rounded-xs text-slate-200 hover:text-white transition-colors border border-white/10"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">Direct WhatsApp</div>
                      <div className="font-bold">{company.contacts.whatsapp}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${company.contacts.whatsappRaw}`}
                    className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/15 rounded-xs text-slate-200 hover:text-white transition-colors border border-white/10"
                  >
                    <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">Direct Phone</div>
                      <div className="font-bold">{company.contacts.phoneSecondary}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${company.contacts.emailPrimary}`}
                    className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/15 rounded-xs text-slate-200 hover:text-white transition-colors border border-white/10"
                  >
                    <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">Corporate Email</div>
                      <div className="font-bold truncate">{company.contacts.emailPrimary}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Locations */}
              <div className="p-7 bg-white border border-petrol-900/10 rounded-sm shadow-sm space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-700 block">
                  Office Locations (Lahore)
                </span>

                {company.contacts.locations.map((loc, idx) => (
                  <div key={idx} className="pb-4 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0" />
                      <h4 className="text-xs font-mono font-bold uppercase text-petrol-900">
                        {loc.title} ({loc.type})
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                      {loc.address}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
