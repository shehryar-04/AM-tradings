import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { WhatsAppButton, WhatsAppIcon } from '../ui/WhatsAppButton';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function ContactCTA() {
  const [projectType, setProjectType] = useState('Greenfield Dairy Processing Plant');
  const [capacity, setCapacity] = useState('25,000 to 50,000 Liters/Day');
  const [stage, setStage] = useState('Stage 1: Feasibility & Concept Analysis');
  const [clientName, setClientName] = useState('');
  const [location, setLocation] = useState('Punjab / Pakistan');
  const [customNotes, setCustomNotes] = useState('');

  // Live generated WhatsApp message tailored to user selections
  const generatedMessage = `Hello Dr. Munib Siddiqui / AM Tradings,
I would like to initiate an advisory consultation for our dairy project.

• Project Type: ${projectType}
• Target Capacity: ${capacity}
• Current Project Stage: ${stage}
• Plant Location / Region: ${location}
${clientName ? `• Contact Person / Group: ${clientName}` : ''}
${customNotes ? `• Specific Requirements: ${customNotes}` : ''}

Please let me know when we can arrange an introductory consultation.`;

  const customWhatsAppUrl = getWhatsAppUrl(generatedMessage);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-petrol-900 text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-petrol-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Initiate Project Advisory"
          title="Direct Consultation &amp; Inquiry Builder"
          subtitle="Configure your project parameters below to generate a tailored consulting dispatch directly to Dr. Munib Siddiqui on WhatsApp."
          theme="dark"
        />

        {/* Interactive Inquiry Builder Card */}
        <div className="bg-petrol-950 rounded-sm border border-gold-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Input Selection Controls */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <h3 className="font-serif text-lg font-bold text-white">
                  Step 1: Define Project Scope
                </h3>
              </div>

              {/* Project Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
                  Project Classification
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-petrol-900 border border-white/20 rounded-xs px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors"
                >
                  <option value="Greenfield Dairy Processing Plant">Greenfield Dairy Processing Plant (New Facility)</option>
                  <option value="Brownfield Dairy Expansion & Upgradation">Brownfield Dairy Expansion &amp; Upgradation</option>
                  <option value="International Machinery Sourcing & Tender Audit">International Machinery Sourcing &amp; Tender Audit</option>
                  <option value="Recipe Formulation & Dairy R&D">Recipe Formulation &amp; Dairy R&amp;D</option>
                  <option value="QA Laboratory & Analytical Instrumentation">QA Laboratory &amp; Analytical Instrumentation</option>
                  <option value="Complete Turnkey Advisory (7 Pillars)">Complete Turnkey Advisory (All 7 Pillars)</option>
                </select>
              </div>

              {/* Processing Volume / Capacity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
                    Target Daily Capacity
                  </label>
                  <select
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className="w-full bg-petrol-900 border border-white/20 rounded-xs px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors"
                  >
                    <option value="10,000 to 25,000 Liters/Day">10,000 to 25,000 Liters/Day</option>
                    <option value="25,000 to 50,000 Liters/Day">25,000 to 50,000 Liters/Day</option>
                    <option value="50,000 to 100,000 Liters/Day">50,000 to 100,000 Liters/Day</option>
                    <option value="100,000+ Liters/Day (Industrial)">100,000+ Liters/Day (Large Scale)</option>
                    <option value="Pilot Plant / Specialty Batch">Pilot Plant / Specialty Cultured</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
                    Current Milestone Stage
                  </label>
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full bg-petrol-900 border border-white/20 rounded-xs px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors"
                  >
                    <option value="Stage 1: Feasibility & Concept Analysis">Stage 1: Feasibility &amp; Concept</option>
                    <option value="Stage 2: Capacity & Product Mix Definition">Stage 2: Capacity &amp; Mix Definition</option>
                    <option value="Stage 3: Process Flow & Plant Layout">Stage 3: Process Layout &amp; Zoning</option>
                    <option value="Stage 4: Machinery Sourcing & Vendor Tender">Stage 4: Machinery Procurement</option>
                    <option value="Stage 5: Civil & Utility Architecture">Stage 5: Civil &amp; Utilities</option>
                    <option value="Stage 6: Installation & Electrical">Stage 6: Installation &amp; Piping</option>
                    <option value="Stage 7: Commissioning & Validation">Stage 7: Commissioning Trials</option>
                    <option value="Stage 8: Commercial Handover">Stage 8: Handover &amp; Training</option>
                  </select>
                </div>
              </div>

              {/* Client Info & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    Your Name / Corporate Group (Optional)
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Al-Noor Dairy Ventures"
                    className="w-full bg-petrol-900 border border-white/20 rounded-xs px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors placeholder:text-slate-500"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    Proposed Region / Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Lahore / Sahiwal / Multan / Karachi"
                    className="w-full bg-petrol-900 border border-white/20 rounded-xs px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Custom Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Specific Machinery, Products, or Technical Questions
                </label>
                <textarea
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g., Interested in UHT tubular plant, mozzarella cheese vats, and automated CIP loops."
                  className="w-full bg-petrol-900 border border-white/20 rounded-xs px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors placeholder:text-slate-500 resize-none"
                />
              </div>
            </div>

            {/* Right: Live Preview & One-Click WhatsApp Dispatch */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-petrol-900 p-6 rounded-sm border border-white/10">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-400">
                    Step 2: Live Message Preview
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Auto-Formatted
                  </span>
                </div>

                <pre className="text-xs font-mono text-slate-300 bg-petrol-950 p-4 rounded-xs border border-white/5 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto mb-6">
                  {generatedMessage}
                </pre>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={customWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full shadow-xl flex items-center justify-center gap-3 transition-all duration-300 group hover:shadow-[#25D366]/30 hover:scale-[1.01]"
                >
                  <WhatsAppIcon size={22} className="flex-shrink-0" />
                  <span>Send Direct Inquiry on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <p className="text-[11px] text-center text-slate-400 font-mono">
                  Direct dispatch to Dr. Munib Siddiqui: <strong className="text-slate-200">{company.contacts.whatsapp}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Direct Contact Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: WhatsApp */}
          <div className="bg-petrol-950 p-6 rounded-sm border border-white/10 hover:border-[#25D366]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-4 border border-[#25D366]/30">
                <WhatsAppIcon size={20} className="flex-shrink-0" />
              </div>
              <h4 className="font-serif text-base font-bold text-white mb-1">
                WhatsApp Direct
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Instant consulting consultation and document sharing.
              </p>
            </div>
            <a
              href={getWhatsAppUrl("Hello Dr. Munib, I am reaching out from your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#25D366] hover:underline"
            >
              <span>{company.contacts.whatsapp}</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Card 2: Secondary Phone */}
          <div className="bg-petrol-950 p-6 rounded-sm border border-white/10 hover:border-gold-500/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-gold-500/15 text-gold-400 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-white mb-1">
                Advisory Line
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Direct phone inquiries for corporate proposals.
              </p>
            </div>
            <a
              href={`tel:${company.contacts.phoneSecondary}`}
              className="text-xs font-mono font-bold text-gold-400 hover:underline"
            >
              {company.contacts.phoneSecondary} &rarr;
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-petrol-950 p-6 rounded-sm border border-white/10 hover:border-gold-500/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-gold-500/15 text-gold-400 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-white mb-1">
                Official Email
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Formal tender RFPs and feasibility documentation.
              </p>
            </div>
            <a
              href={`mailto:${company.contacts.emailPrimary}`}
              className="text-xs font-mono font-bold text-gold-400 hover:underline truncate"
            >
              {company.contacts.emailPrimary}
            </a>
          </div>

          {/* Card 4: Executive Headquarters */}
          <div className="bg-petrol-950 p-6 rounded-sm border border-white/10 hover:border-gold-500/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-gold-500/15 text-gold-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-white mb-1">
                Lahore Headquarters
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                112 Broadway Heights 3, Bahria Orchard Phase 1, Lahore.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-400">
              Lahore, Pakistan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
