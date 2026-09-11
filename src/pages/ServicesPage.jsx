import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Layers,
  Cpu,
  CheckCircle2,
  Filter,
  Search,
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Wrench,
  BarChart3,
  BookOpen,
  MessageSquare,
  Sparkles,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';
import { machineryItems, machineryCategories } from '../data/machinery';
import { company, getWhatsAppUrl } from '../data/company';
import { MachineryCard } from '../components/ui/MachineryCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { WhatsAppButton, WhatsAppIcon } from '../components/ui/WhatsAppButton';

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered Machinery list
  const filteredMachinery = machineryItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.applications && item.applications.some(app => app.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const consultancyServices = [
    {
      id: 'greenfield-plant',
      title: 'Turnkey Greenfield Plant Engineering',
      icon: Layers,
      scope: 'Full-Lifecycle Advisory',
      description: 'End-to-end plant design, 3D hygienic zoning, process flow diagrams (PFD), sanitary P&ID, civil layout supervision, and commercial handover.',
      deliverables: [
        'Hygienic 3D architectural master plan',
        'Process & Instrumentation Diagrams (P&ID)',
        'Thermal & mass energy balance modeling',
        'Punjab Food Authority (PFA) audit compliance',
      ],
      whatsappMsg: 'Hello Dr. Munib, I would like to inquire about Greenfield Plant Engineering consultancy for our project.',
    },
    {
      id: 'tender-audit',
      title: 'Independent Tender & CAPEX Audit',
      icon: FileSpreadsheet,
      scope: 'Fiduciary Stewardship',
      description: 'Unbiased technical audit of vendor machinery proposals, protecting investors from over-specifications, mismatched capacities, and inflated commercial quotes.',
      deliverables: [
        'Line-by-line vendor comparison matrices',
        'Sanitary standards validation (3A / EHEDG / ISO)',
        'Direct OEM price negotiations & scope de-risking',
        'Utility consumption and life-cycle cost analysis',
      ],
      whatsappMsg: 'Hello Dr. Munib, I would like to request an independent Tender & Machinery Audit for our upcoming procurement.',
    },
    {
      id: 'recipe-rnd',
      title: 'Recipe Formulation & Dairy Chemistry R&D',
      icon: FlaskConical,
      scope: 'Product Development',
      description: 'Scientific formulation for UHT milk, pasteurized milk, cheese, yogurt, flavored dairy, and cream. Led by Dr. Munib Siddiqui.',
      deliverables: [
        'Formulation chemistry & SNF/fat ratio balancing',
        'Thermal stability and extended shelf life protocols',
        'Sensory profiling and texture optimization',
        'Pilot batch bench testing and live plant translation',
      ],
      whatsappMsg: 'Hello Dr. Munib, I would like to discuss recipe formulation and product R&D for our dairy line.',
    },
    {
      id: 'piping-commissioning',
      title: 'Sanitary Orbital Piping & Commissioning',
      icon: Wrench,
      scope: 'Site Execution',
      description: 'Supervision of certified SS316L sanitary orbital tube welding, automated SCADA/PLC integration, chemical passivation, and water/live-milk trials.',
      deliverables: [
        'Borescope weld inspection & hygienic validation',
        'SCADA/PLC loop checks and valve manifold testing',
        '5-stage CIP cycle flow and conductivity verification',
        'First-batch commercial yield and microbial sign-off',
      ],
      whatsappMsg: 'Hello Dr. Munib, I need expert supervision for sanitary piping installation and plant commissioning.',
    },
    {
      id: 'qa-lab',
      title: 'Turnkey QA Laboratory Setup & SOPs',
      icon: ShieldCheck,
      scope: 'Quality Control',
      description: 'Architecting complete on-site analytical laboratories with rapid milk analyzers, Gerber centrifuges, incubator suites, and standardized operator protocols.',
      deliverables: [
        'Laboratory layout & instrumentation procurement',
        'Adulteration testing protocols & reagent validation',
        'Standard Operating Procedures (SOP) manuals',
        'Quality control staff training and certification',
      ],
      whatsappMsg: 'Hello Dr. Munib, I would like to set up a QA testing laboratory and need technical SOP consulting.',
    },
    {
      id: 'spare-parts',
      title: 'Genuine Spare Parts & Component Sourcing',
      icon: BookOpen,
      scope: 'Asset Longevity',
      description: 'Direct procurement of genuine European and STK spare parts, including tungsten homogenizer valves, plate heat exchanger gaskets, mechanical seals, and aseptic valves.',
      deliverables: [
        'Tungsten carbide & ceramic homogenizer components',
        'Clip-on EPDM/NBR food-grade plate gaskets',
        'Sanitary mechanical seals and impeller kits',
        'Aseptic diaphragm valves and solenoid coils',
      ],
      whatsappMsg: 'Hello Dr. Munib, I need to source genuine sanitary spare parts for our dairy processing equipment.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-ivory-100 pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-petrol-950 text-white py-16 lg:py-20 border-b border-petrol-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-xs text-xs font-mono font-bold uppercase tracking-widest mb-4">
              Machinery Portfolio &amp; Consulting Scope
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
              Services &amp; Industrial Equipment
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              Official STK sanitary processing machinery catalogue and comprehensive engineering consultancy tailored to dairy and food processors.
            </p>
          </div>
        </div>
      </section>

      {/* 1. CONSULTANCY SERVICES SECTION (NO PACKAGE PRICING) */}
      <section className="py-20 bg-white border-b border-petrol-900/10" id="consultancy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Advisory"
            title="Professional Consultancy Services"
            subtitle="Corporate, inquiry-based advisory services covering the entire industrial dairy project lifecycle. (Custom scoped per project requirements)."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {consultancyServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="p-7 bg-ivory-100 border border-petrol-900/10 hover:border-gold-500/50 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xs bg-petrol-900 text-gold-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-gold-500/15 text-gold-700 rounded-xs border border-gold-500/30">
                        {srv.scope}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-petrol-900 mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {srv.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-petrol-900/5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Scope Deliverables:
                      </span>
                      {srv.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-petrol-900/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">
                      Corporate Enquiry
                    </span>
                    <a
                      href={getWhatsAppUrl(srv.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 hover:text-gold-700 transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Request Scope RFP</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. MACHINERY & EQUIPMENT CATALOGUE (STK BLUE BROCHURE) */}
      <section className="py-20 bg-ivory-200 border-b border-petrol-900/10" id="machinery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <SectionHeading
                badge="STK Machinery Scope"
                title="Industrial Sanitary Processing Catalogue"
                subtitle="Authentic machinery lines extracted directly from the STK bilateral procurement scope. High-grade SS316L/SS304 construction."
              />
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search equipment or process..."
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-petrol-900/15 rounded-xs text-xs font-sans text-petrol-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 shadow-sm"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-8 border-b border-petrol-900/10">
            {machineryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-all ${
                  activeCategory === cat.id
                    ? 'bg-petrol-900 text-gold-400 shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-petrol-900/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Machinery Grid */}
          <div className="mt-8">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
              <span>
                Showing {filteredMachinery.length} of {machineryItems.length} verified equipment lines
              </span>
              <span className="text-gold-700 font-semibold">
                STK Official Sanitary Standard
              </span>
            </div>

            {filteredMachinery.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMachinery.map((item) => (
                  <MachineryCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-white rounded-sm border border-petrol-900/10">
                <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h4 className="text-base font-display font-bold text-petrol-900 mb-1">
                  No matching equipment found
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Try adjusting your search keywords or select "All Equipment" from the category filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-petrol-900 text-gold-400 text-xs font-mono font-bold uppercase rounded-xs"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Bottom Custom Machinery Notice */}
          <div className="mt-12 p-6 bg-petrol-900 text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-1">
                Custom Capacity &amp; Skid Fabrication
              </span>
              <h4 className="text-base font-display font-bold">
                Need Custom Capacities, Specialized Skids or Complete Plant Lines?
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                We engineer customized flow rates, automated manifold matrices, and turn-key skids tailored to your site throughput.
              </p>
            </div>
            <a
              href={getWhatsAppUrl("Hello Dr. Munib, I would like to request a custom machinery configuration and quotation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs whitespace-nowrap shadow-md transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Consult Custom Specs</span>
            </a>
          </div>

        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-petrol-900">
            Request an Official Machinery Quote or Tender Review
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Our engineering team will review your mass-balance calculations, utility requirements, and provide a comprehensive proposal.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-petrol-900 hover:bg-gold-600 text-white hover:text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs shadow-md transition-colors"
            >
              <span>Submit RFQ Specification</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
