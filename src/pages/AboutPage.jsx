import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Users,
  Compass,
  Building2,
  FileCheck,
  ArrowRight,
  Layers,
  Cpu,
  FlaskConical,
  Wrench,
  BarChart3,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { company } from '../data/company';
import { SectionHeading } from '../components/ui/SectionHeading';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';

export function AboutPage() {

  const capabilityIcons = {
    'greenfield-consulting': Layers,
    'machinery-sourcing': Cpu,
    'installation-commissioning': Wrench,
    'recipe-formulation': FlaskConical,
    'lab-qa-testing': Award,
    'feasibility-modeling': BarChart3,
    'operations-maintenance': BookOpen,
  };

  return (
    <div className="flex flex-col min-h-screen bg-ivory-100 pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-petrol-950 text-white py-16 lg:py-20 border-b border-petrol-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-xs text-xs font-mono font-bold uppercase tracking-widest mb-4">
              Corporate Profile &amp; Governance
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
              About AM Tradings &amp; Consultants
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              Pioneering independent dairy plant engineering, sanitary machinery procurement, and scientific formulation R&amp;D for Pakistan's agro-industrial sector.
            </p>
          </div>
        </div>
      </section>

      {/* 1. DETAILED COMPANY PROFILE & LEADERSHIP */}
      <section className="py-16 bg-white border-b border-petrol-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              <SectionHeading
                badge="Background & Expertise"
                title="Engineering Stewardship with Uncompromising Independence"
                subtitle="Transforming agro-investor capital into high-yield, hygienic dairy processing assets."
              />

              <div className="prose prose-slate text-sm text-slate-700 space-y-4 leading-relaxed">
                <p>
                  <strong>AM Tradings &amp; Consultants (Pvt) Ltd.</strong> was established to eliminate the systemic friction in Pakistan's dairy industrialization. While Pakistan produces over 70 million tonnes of raw milk annually, less than 3% is industrially processed into value-added consumer formats.
                </p>
                <p>
                  Our practice operates on an unshakeable fiduciary rule: <em>"We do not make the machines. We decide which one you should buy."</em> Because we are independent technical consultants rather than quota-driven equipment sales agents, our sole obligation is the investor's balance sheet, plant longevity, and product quality.
                </p>
                <p>
                  Headed by <strong>Dr. Asif Iftikhar</strong> (Doctorate in Food Science &amp; Dairy Technology, 25+ years industry experience), AM Tradings bridges high-level process engineering with hands-on mechanical erection, sanitary stainless steel welding supervision, recipe formulation, and regulatory compliance.
                </p>
              </div>

              {/* Core Philosophy Box */}
              <div className="p-5 bg-ivory-100 border-l-4 border-l-gold-500 border border-petrol-900/10 rounded-r-sm">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 mb-1">
                  Our Institutional Creed
                </div>
                <p className="text-sm font-sans italic text-slate-800">
                  "{company.philosophy} We architect the process, audit the machinery tender, enforce hygienic zoning, and stabilize the formulation chemistry before commercial milk flows."
                </p>
              </div>
            </div>

            {/* Right: Company Plant Showcase Card */}
            <div className="lg:col-span-5">
              <div className="rounded-sm overflow-hidden bg-petrol-950 border border-petrol-900/20 shadow-xl">
                <div className="relative h-64 sm:h-72 w-full bg-petrol-950 overflow-hidden group flex items-center justify-center">
                  <img
                    src="/images/plant-consulting-dark.jpeg"
                    alt="AM Tradings Industrial Operations"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-petrol-950/40 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
                      Industrial Processing Facility
                    </span>
                    <h3 className="text-base font-display font-bold text-white">
                      Turnkey Processing Hall &amp; Sanitary Infrastructure
                    </h3>
                  </div>
                </div>

                <div className="p-5 bg-petrol-900 text-xs text-slate-300 flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-mono text-gold-400">Head of Advisory</span>
                    <span className="text-white font-semibold">Dr. Asif Iftikhar</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-mono text-gold-400">Statutory Status</span>
                    <span className="text-white font-semibold">SECP Registered / LCCI Member</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-gold-400">Wellness Initiative</span>
                    <span className="text-white font-semibold">Nutrew Startup</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FULL 7-8 CONSULTANCY CAPABILITIES */}
      <section className="py-20 bg-ivory-200 border-b border-petrol-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Technical Scope"
            title="Comprehensive Consultancy Capabilities"
            subtitle="The complete 7 core engineering pillars extracted from official AM Tradings advisory practice."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {company.capabilities.map((cap) => {
              const IconComponent = capabilityIcons[cap.id] || Layers;
              return (
                <div
                  key={cap.id}
                  className="p-7 bg-white border border-petrol-900/10 hover:border-gold-500/50 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xs bg-petrol-900 text-gold-400 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Pillar {cap.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-petrol-900 mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {cap.description}
                    </p>

                    {cap.deliverables && (
                      <div className="space-y-1.5 pt-3 border-t border-slate-100">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                          Key Deliverables:
                        </span>
                        {cap.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gold-700 font-semibold">
                      Advisory Service
                    </span>
                    <Link
                      to="/contact"
                      className="text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 hover:text-gold-700 flex items-center gap-1"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. TRADING SCOPE (NAMES ONLY) */}
      <section className="py-20 bg-white border-b border-petrol-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Trading Scope"
            title="Sanitary Machinery &amp; Equipment Lines (STK Scope)"
            subtitle="Authoritative equipment lines sourced and represented under the STK bilateral partnership. (Displaying equipment categories only; detailed specifications available on Services)."
            align="center"
          />

          <div className="mt-12 p-8 bg-ivory-100 border border-petrol-900/10 rounded-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {company.tradingScopeNames.map((name, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3.5 bg-white border border-petrol-900/5 rounded-xs hover:border-gold-500/40 hover:shadow-sm transition-all"
                >
                  <span className="w-6 h-6 rounded-full bg-petrol-900/5 text-petrol-900 text-[10px] font-mono font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-xs font-sans font-semibold text-slate-800 leading-snug">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-petrol-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-sans">
                Looking for detailed technical datasheets, machine capacities, and photo catalogues?
              </span>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-petrol-900 hover:bg-gold-600 text-gold-400 hover:text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                <span>View Full Machinery Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM & ADVISORY SECTION */}
      <section className="py-20 bg-ivory-200 border-b border-petrol-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Leadership"
            title="Team &amp; Advisory Directorate"
            subtitle="Principal consulting leadership, engineering directors, and commercial strategists driving turnkey excellence."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            {company.people.map((person, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-white border border-petrol-900/10 rounded-sm shadow-sm flex flex-col justify-between hover:shadow-md hover:border-gold-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xs bg-petrol-900 text-gold-400 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-800 border border-gold-500/20">
                      {person.badge || "Verified Lead"}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-gold-700 uppercase tracking-wider font-bold block mb-1.5">
                    {person.department}
                  </span>

                  <h3 className="text-xl font-display font-bold text-petrol-900 mb-1">
                    {person.name}
                  </h3>

                  <p className="text-xs text-petrol-900 font-mono font-bold mb-3">
                    {person.title}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                    {person.scope}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Division
                  </span>
                  <span className="text-[10px] font-mono text-petrol-900 font-bold">
                    AM Tradings &amp; Consultants
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-petrol-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Need Expert Technical Advisory for Your Dairy Processing Venture?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Engage with Dr. Asif Iftikhar and the AM Tradings team directly to discuss plant architecture, machinery tenders, or recipe optimization.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <WhatsAppButton size="md" message="Hello Dr. Asif Iftikhar / AM Tradings Team, I read your company profile and would like to schedule a consultation.">
              Connect on WhatsApp
            </WhatsAppButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs border border-white/20"
            >
              <span>Contact Lahore Office</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
