import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Settings2, 
  Wrench, 
  FlaskConical, 
  Microscope, 
  Sliders, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  X,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { Reveal, StaggerContainer, StaggerItem } from '../ui/Reveal';

export function BusinessAreas() {
  const [selectedCapability, setSelectedCapability] = useState(null);

  const capabilityIcons = {
    'greenfield-consulting': Building2,
    'machinery-sourcing': Settings2,
    'installation-commissioning': Wrench,
    'recipe-formulation': FlaskConical,
    'lab-qa-testing': Microscope,
    'spares-maintenance': Sliders,
    'feasibility-capex': TrendingUp,
  };

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comprehensive Advisory Scope"
          title="The 7 Core Capability Pillars"
          subtitle="From initial soil feasibility and process flow diagrams to laboratory quality systems and turnkey trial runs."
          align="center"
        />

        {/* 7 Capabilities Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {company.capabilities.map((cap) => {
            const Icon = capabilityIcons[cap.id] || Building2;
            return (
              <StaggerItem key={cap.id} className="h-full">
                <div
                  onClick={() => setSelectedCapability(cap)}
                  className="group bg-white p-7 rounded border border-petrol-900/10 hover:border-gold-500/80 hover:shadow-card-hover shadow-card transition-all duration-300 flex flex-col justify-between h-full cursor-pointer relative overflow-hidden"
                >
                  {/* Top Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded bg-petrol-900 text-gold-500 flex items-center justify-center group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-petrol-900 transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-display text-xs font-bold text-slate-400 group-hover:text-gold-700 transition-colors uppercase tracking-wider">
                        PILLAR {cap.number}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-petrol-900 mb-2.5 group-hover:text-gold-700 transition-colors">
                      {cap.title}
                    </h3>

                    <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                      {cap.summary}
                    </p>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-petrol-900/5 flex items-center justify-between text-xs font-display font-semibold uppercase tracking-wider text-petrol-900 group-hover:text-gold-700">
                      <span>View Deliverables &amp; Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}

          {/* 8th Card: Visual Infographic Feature */}
          <StaggerItem className="h-full">
            <div className="bg-petrol-900 text-white p-7 rounded border border-gold-500/40 flex flex-col justify-between h-full shadow-card relative overflow-hidden group">
              <div>
                <span className="font-display text-xs uppercase tracking-widest text-gold-400 block mb-2 font-bold">
                  Client Artifact
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Comprehensive 7 Pillars Framework
                </h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                  Official operational scope covering Turnkey Consulting, Sourcing, Commissioning, Formulation, Laboratory QA, Spares, and CAPEX Modeling.
                </p>
              </div>

              <div className="rounded-sm overflow-hidden border border-white/10 mb-4 bg-petrol-950 h-48 sm:h-52 flex items-center justify-center p-2">
                <img
                  src="/images/seven-capabilities.jpeg"
                  alt="AM Tradings 7 Core Capabilities Overview Diagram"
                  className="w-full h-full object-contain filter brightness-95 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <WhatsAppButton
                variant="gold"
                size="sm"
                message="Hello Dr. Asif Iftikhar / AM Tradings Team, I would like to inquire about your full 7-Pillar Turnkey Consulting Services."
                className="w-full justify-center text-xs"
              >
                Inquire on All Pillars
              </WhatsAppButton>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Modal Deep-Dive Dialog */}
      <AnimatePresence>
        {selectedCapability && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-petrol-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-md max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-petrol-900/10 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedCapability(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-petrol-900 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-gold-700 uppercase tracking-widest">
                  Pillar {selectedCapability.number}
                </span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Verified Service Scope
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-petrol-900 mb-4">
                {selectedCapability.title}
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                {selectedCapability.description}
              </p>

              <div className="bg-ivory-200 p-5 rounded-sm mb-6 border border-petrol-900/5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-petrol-900 font-bold mb-3.5">
                  Key Deliverables &amp; Client Outgrowths
                </h4>
                <div className="flex flex-col gap-2.5">
                  {selectedCapability.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-800">
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCapability(null)}
                >
                  Close
                </Button>

                <WhatsAppButton
                  variant="whatsapp"
                  size="sm"
                  message={`Hello Dr. Asif Iftikhar / AM Tradings Team, I am interested in discussing Pillar ${selectedCapability.number}: ${selectedCapability.title} for our facility.`}
                >
                  Discuss {selectedCapability.title}
                </WhatsAppButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
