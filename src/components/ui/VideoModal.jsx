import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Play,
  Clock,
  Sparkles,
  ShieldCheck,
  Search,
  Download,
  ExternalLink,
  ChevronRight,
  Layers,
  Flame,
  Building2,
  Cpu,
  Zap,
  Sliders,
  TrendingUp,
  FileText,
  CheckCircle2,
  Phone,
  Filter,
  Eye
} from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import {
  stkBrochureMeta,
  stkKeyMetrics,
  stkEquipmentCategories,
  stkCatalogueUnits
} from '../../data/stkBrochureData';
import { company } from '../../data/company';

export function VideoModal({
  video,
  isOpen,
  onClose,
  initialTab = 'specs'
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Sync activeTab with initialTab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      // Auto-select first item if on specs
      if (!selectedItem && stkCatalogueUnits.length > 0) {
        setSelectedItem(stkCatalogueUnits[0]);
      }
    }
  }, [isOpen, initialTab]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter catalogue items based on category and search query
  const filteredUnits = useMemo(() => {
    return stkCatalogueUnits.filter((unit) => {
      const matchesCategory =
        selectedCategory === 'all' || unit.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        unit.turkishName.toLowerCase().includes(q) ||
        unit.englishName.toLowerCase().includes(q) ||
        unit.overview.toLowerCase().includes(q) ||
        unit.capacities.toLowerCase().includes(q) ||
        unit.applications.some((app) => app.toLowerCase().includes(q)) ||
        unit.specifications.some(
          (s) =>
            s.label.toLowerCase().includes(q) ||
            s.value.toLowerCase().includes(q)
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-petrol-950/90 backdrop-blur-md">
        {/* Backdrop Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-6xl bg-petrol-900 border border-gold-500/40 rounded-lg shadow-2xl overflow-hidden z-10 flex flex-col max-h-[94vh]"
        >
          {/* Top Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-3.5 bg-petrol-950 border-b border-white/10 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400">
                    Official STK Makina Scope &bull; Bilateral Representation
                  </span>
                </div>
                <h2 className="text-sm sm:text-base font-display font-bold text-white tracking-tight">
                  Turnkey Dairy Machinery &amp; Full Plant Engineering Specs
                </h2>
              </div>
            </div>

            {/* Right Controls: Tabs & Close */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <div className="flex items-center bg-petrol-900/90 p-1 rounded-xs border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeTab === 'specs'
                      ? 'bg-gold-500 text-petrol-950 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Full Specs</span>
                  <span className="ml-1 px-1.5 py-0.2 text-[9px] rounded-full bg-petrol-950/40">
                    {stkCatalogueUnits.length}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('video')}
                  className={`px-3 py-1.5 rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeTab === 'video'
                      ? 'bg-gold-500 text-petrol-950 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Plant Video</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('manufacturer')}
                  className={`hidden md:flex px-3 py-1.5 rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-all items-center gap-1.5 ${
                    activeTab === 'manufacturer'
                      ? 'bg-gold-500 text-petrol-950 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Manufacturer Profile</span>
                </button>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-xs hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* TAB 1: FULL STK BROCHURE TECHNICAL SPECS */}
          {activeTab === 'specs' && (
            <div className="flex-1 overflow-y-auto flex flex-col bg-petrol-900/95">
              {/* Executive Key Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-white/10 bg-petrol-950/70 divide-x divide-y sm:divide-y-0 divide-white/10">
                {stkKeyMetrics.map((metric, i) => (
                  <div key={i} className="p-3 text-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      {metric.label}
                    </span>
                    <span className="text-sm font-display font-bold text-gold-400 block">
                      {metric.value}
                    </span>
                    <span className="text-[10px] text-slate-300 font-sans truncate block">
                      {metric.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Search & Category Filter Toolbar */}
              <div className="p-4 sm:px-6 bg-petrol-900 border-b border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sticky top-0 z-20 backdrop-blur-md bg-petrol-900/95">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search equipment by Turkish / English name, pressure, or unit..."
                    className="w-full pl-9 pr-4 py-2 bg-petrol-950/80 border border-white/15 focus:border-gold-500/60 rounded-xs text-xs text-white placeholder-slate-400 focus:outline-none transition-colors font-sans"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Direct Brochure Download Link */}
                <div className="flex items-center gap-2 self-end md:self-auto">
                  <a
                    href={stkBrochureMeta.brochurePdfUrl}
                    download="STK-Makina-Milkman-Catalogue-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-gold-400 hover:text-gold-300 text-xs font-mono font-bold uppercase tracking-wider rounded-xs border border-gold-500/30 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download STK Brochure PDF</span>
                  </a>
                </div>
              </div>

              {/* Horizontal Category Scroll */}
              <div className="px-4 sm:px-6 py-2.5 bg-petrol-950/40 border-b border-white/5 overflow-x-auto scrollbar-thin">
                <div className="flex items-center gap-1.5 min-w-max">
                  {stkEquipmentCategories.map((cat) => {
                    const isActive = selectedCategory === cat.id;
                    const count =
                      cat.id === 'all'
                        ? stkCatalogueUnits.length
                        : stkCatalogueUnits.filter((u) => u.category === cat.id)
                            .length;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-gold-500 text-petrol-950 shadow-xs'
                            : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            isActive
                              ? 'bg-petrol-950 text-gold-400'
                              : 'bg-white/10 text-slate-400'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Specs Layout: Left Equipment List + Right Detailed Dossier */}
              <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Catalogue Items Grid */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>
                      SHOWING {filteredUnits.length} OF{' '}
                      {stkCatalogueUnits.length} INDUSTRIAL SPECIFICATIONS
                    </span>
                    {selectedCategory !== 'all' && (
                      <button
                        type="button"
                        onClick={() => setSelectedCategory('all')}
                        className="text-gold-400 hover:underline"
                      >
                        Reset Filter
                      </button>
                    )}
                  </div>

                  {filteredUnits.length === 0 ? (
                    <div className="p-8 text-center bg-petrol-950/50 rounded-xs border border-white/10">
                      <p className="text-sm text-slate-300 mb-2">
                        No equipment matched &ldquo;{searchQuery}&rdquo;.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('all');
                        }}
                        className="text-xs font-mono uppercase text-gold-400 hover:underline"
                      >
                        Clear Filters
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {filteredUnits.map((item) => {
                        const isSelected = selectedItem?.id === item.id;
                        return (
                          <div
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className={`p-4 rounded-xs border cursor-pointer transition-all flex flex-col justify-between gap-3 text-left relative overflow-hidden group ${
                              isSelected
                                ? 'bg-gold-500/10 border-gold-500 shadow-md ring-1 ring-gold-500/50'
                                : 'bg-petrol-950/60 hover:bg-petrol-950/90 border-white/10 hover:border-gold-500/40'
                            }`}
                          >
                            {/* Card Accent Top Bar */}
                            {isSelected && (
                              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500" />
                            )}

                            <div>
                              {/* Page tag + Turkish Badge */}
                              <div className="flex items-center justify-between gap-2 mb-1.5">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 font-semibold">
                                  {item.brochurePage}
                                </span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-xs bg-white/5 text-slate-300 border border-white/10">
                                  {item.turkishName}
                                </span>
                              </div>

                              <h4 className="text-sm font-display font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                                {item.englishName}
                              </h4>

                              <p className="text-xs text-slate-300 font-sans mt-1.5 line-clamp-2 leading-relaxed">
                                {item.overview}
                              </p>
                            </div>

                            {/* Bottom Throughput Spec & Action */}
                            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                              <span className="text-[11px] font-mono text-slate-400 truncate max-w-[170px]">
                                {item.capacities}
                              </span>
                              <span className="text-gold-400 flex items-center gap-0.5 text-[11px] font-mono font-bold uppercase group-hover:translate-x-0.5 transition-transform">
                                <span>Inspect</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Right Detailed Dossier Panel */}
                <div className="lg:col-span-5">
                  {selectedItem ? (
                    <div className="bg-petrol-950/80 border border-gold-500/40 rounded-xs p-5 flex flex-col gap-5 sticky top-20 shadow-xl">
                      {/* Dossier Header */}
                      <div className="border-b border-white/10 pb-3">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400">
                            STK Official Specification Sheet
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-gold-500/20 text-gold-300 border border-gold-500/30">
                            {selectedItem.brochurePage}
                          </span>
                        </div>
                        <h3 className="text-lg font-display font-bold text-white leading-tight">
                          {selectedItem.englishName}
                        </h3>
                        <div className="text-xs font-mono text-slate-400 mt-0.5">
                          Brochure Name: <span className="text-slate-200 font-semibold">{selectedItem.turkishName}</span>
                        </div>
                      </div>

                      {/* Equipment Image Preview from Brochure */}
                      {selectedItem.image && (
                        <div className="relative aspect-[16/10] bg-petrol-950 rounded-xs border border-white/10 overflow-hidden flex items-center justify-center p-2 group">
                          <img
                            src={selectedItem.image}
                            alt={selectedItem.englishName}
                            className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute bottom-2 right-2 bg-petrol-950/80 backdrop-blur-xs text-[10px] font-mono text-gold-300 px-2 py-0.5 rounded border border-white/10">
                            Brochure Extract
                          </div>
                        </div>
                      )}

                      {/* Throughput & Overview */}
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
                          Standard Throughput &amp; Capacity
                        </span>
                        <div className="p-2.5 bg-white/5 border border-white/10 rounded-xs text-xs font-mono text-white font-semibold">
                          {selectedItem.capacities}
                        </div>
                        <p className="text-xs font-sans text-slate-300 mt-2 leading-relaxed">
                          {selectedItem.overview}
                        </p>
                      </div>

                      {/* Technical Specifications List */}
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-2">
                          Engineering Parameters
                        </span>
                        <div className="space-y-1.5 divide-y divide-white/5">
                          {selectedItem.specifications.map((spec, sIdx) => (
                            <div
                              key={sIdx}
                              className="pt-1.5 flex items-start justify-between gap-2 text-xs"
                            >
                              <span className="text-slate-400 font-sans">
                                {spec.label}:
                              </span>
                              <span className="text-slate-100 font-mono font-medium text-right">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Target Dairy Applications */}
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-2">
                          Primary Product Applications
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedItem.applications.map((app, aIdx) => (
                            <span
                              key={aIdx}
                              className="px-2 py-1 bg-white/5 border border-white/10 rounded-xs text-[11px] text-slate-200 font-sans"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-2.5">
                        <WhatsAppButton
                          size="sm"
                          variant="whatsapp"
                          className="w-full justify-center"
                          message={`Hello Dr. Asif Iftikhar / AM Tradings Team, I am inquiring regarding the technical specifications and pricing for the STK "${selectedItem.englishName}" (${selectedItem.turkishName}) as listed in the STK Catalogue.`}
                        >
                          Request Quotation for this Unit
                        </WhatsAppButton>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-petrol-950/40 border border-white/10 rounded-xs text-slate-400 text-xs font-mono">
                      Select any machinery item from the left to view detailed engineering parameters.
                    </div>
                  )}
                </div>
              </div>

              {/* Master Engineering Specifications Table */}
              <div className="p-4 sm:p-6 border-t border-white/10 bg-petrol-950/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block">
                      Comparative Summary Matrix
                    </span>
                    <h4 className="text-base font-display font-bold text-white">
                      Turnkey Processing Lines Architectural Overview
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Source: STK Makina Engineering Standards (Sakarya, Türkiye)
                  </span>
                </div>

                <div className="overflow-x-auto border border-white/10 rounded-xs">
                  <table className="w-full text-left text-xs font-sans text-slate-300 divide-y divide-white/10">
                    <thead className="bg-petrol-950 text-gold-400 font-mono uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="p-3">Machinery / System</th>
                        <th className="p-3">Turkish Name</th>
                        <th className="p-3">Operating Pressure / Duty</th>
                        <th className="p-3">Throughput Range</th>
                        <th className="p-3">Sanitary Metallurgy</th>
                        <th className="p-3">Automation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 bg-petrol-900/60">
                      <tr>
                        <td className="p-3 font-semibold text-white">HTST Plate Pasteurizer</td>
                        <td className="p-3 font-mono text-slate-400">Pastörizatör</td>
                        <td className="p-3">72°C–85°C / 15-30s hold</td>
                        <td className="p-3 font-mono text-gold-300">1,000 – 30,000 L/h</td>
                        <td className="p-3 font-mono">AISI 316L (0.6mm)</td>
                        <td className="p-3">Siemens PLC / SCADA</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">High-Pressure Homogenizer</td>
                        <td className="p-3 font-mono text-slate-400">Homojenizatör</td>
                        <td className="p-3 text-gold-300 font-mono font-bold">Up to 600 Bar</td>
                        <td className="p-3 font-mono text-gold-300">500 – 15,000 L/h</td>
                        <td className="p-3 font-mono">Duplex SS / Ceramic</td>
                        <td className="p-3">Hydraulic Modulation</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Tubular UHT Sterilizer</td>
                        <td className="p-3 font-mono text-slate-400">Tubular Pastörizatör</td>
                        <td className="p-3">Up to 142°C / 25 Bar</td>
                        <td className="p-3 font-mono text-gold-300">1,000 – 20,000 L/h</td>
                        <td className="p-3 font-mono">Corrugated AISI 316L</td>
                        <td className="p-3">Fully Aseptic CIP/SIP</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Cream Separator / Clarifier</td>
                        <td className="p-3 font-mono text-slate-400">Krema Seperatörü</td>
                        <td className="p-3 font-mono text-emerald-400">Fat ≤ 0.04% in skim</td>
                        <td className="p-3 font-mono text-gold-300">1,000 – 25,000 L/h</td>
                        <td className="p-3 font-mono">Duplex DIN 1.4462</td>
                        <td className="p-3">Auto Desludging VFD</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Falling Film Evaporator (TVR)</td>
                        <td className="p-3 font-mono text-slate-400">Evaporatör (Vakum)</td>
                        <td className="p-3">Vacuum -0.85 Bar (TVR)</td>
                        <td className="p-3 font-mono text-gold-300">1,000 – 20,000 kg/h</td>
                        <td className="p-3 font-mono">AISI 316L Calandria</td>
                        <td className="p-3">PID Density Control</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Automated CIP Cleaning Skid</td>
                        <td className="p-3 font-mono text-slate-400">CIP Ünitesi</td>
                        <td className="p-3">3 to 4 Loop Automated</td>
                        <td className="p-3 font-mono text-gold-300">5,000 – 30,000 L/h</td>
                        <td className="p-3 font-mono">AISI 316L / EPDM</td>
                        <td className="p-3">Inline Conductivity</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Thermoform Packaging Line</td>
                        <td className="p-3 font-mono text-slate-400">Thermoform Z-105</td>
                        <td className="p-3">Vacuum &amp; MAP Gas Flushing</td>
                        <td className="p-3 font-mono text-gold-300">10 – 15 cycles/min</td>
                        <td className="p-3 font-mono">Anodized Al / SS304</td>
                        <td className="p-3">Servo Motion PLC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LIVE PLANT VIDEO TOUR */}
          {activeTab === 'video' && (
            <div className="flex-1 overflow-y-auto flex flex-col bg-petrol-900">
              {/* Video Player Display Area */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                {video?.videoUrl?.includes('youtube.com') ||
                video?.videoUrl?.includes('youtu.be') ? (
                  <iframe
                    src={video.videoUrl}
                    title={video.title || 'Plant Video'}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : video?.videoUrl ? (
                  <video
                    src={video.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                    poster={video.thumbnail}
                  >
                    Your browser does not support HTML5 video playback.
                  </video>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={video?.thumbnail || '/images/plant-consulting-dark.jpeg'}
                      alt={video?.title || 'Plant Tour'}
                      className="w-full h-full object-cover filter brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-petrol-950/90 via-petrol-950/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-gold-500 text-petrol-950 flex items-center justify-center mb-4 shadow-xl">
                        <Play className="w-7 h-7 ml-1" />
                      </div>
                      <span className="text-xs font-display uppercase tracking-widest text-gold-400 font-bold mb-1">
                        Turnkey Commercial Dairy Processing Line
                      </span>
                      <h4 className="text-xl font-display font-bold text-white max-w-lg mb-2">
                        {video?.title || 'Live Processing Hall Tour'}
                      </h4>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Description & Highlights */}
              <div className="p-6 bg-petrol-900 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-gold-400 mb-1">
                    <span>Facility Video Tour</span>
                    <span>&bull;</span>
                    <span>HD Commercial Footage</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                    {video?.title || 'Turnkey Dairy Processing Facility & Processing Hall'}
                  </h3>
                  <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-3xl">
                    {video?.description ||
                      'Comprehensive operational footage of an automated turnkey dairy processing plant, featuring raw milk intake, HTST pasteurization, high-pressure homogenization, and automated storage silos in full commercial throughput.'}
                  </p>
                </div>

                {video?.highlights && (
                  <div className="bg-petrol-950/80 p-5 rounded-xs border border-white/10">
                    <span className="text-xs font-display font-bold uppercase tracking-widest text-gold-400 block mb-3">
                      Key Technical Highlights Observed in Operation
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {video.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs font-sans text-slate-200">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick CTA to jump into specs */}
                <div className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-display font-bold text-white block">
                        Want to explore the engineering specs of this exact plant?
                      </span>
                      <span className="text-[11px] text-slate-300">
                        Inspect all 35+ equipment lines, pressure ratings, and metallurgical standards.
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTab('specs')}
                    className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap"
                  >
                    View STK Technical Specs
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MANUFACTURER PROFILE & TURNKEY SCOPE */}
          {activeTab === 'manufacturer' && (
            <div className="flex-1 overflow-y-auto p-6 bg-petrol-900 flex flex-col gap-8">
              {/* Manufacturer Header Card */}
              <div className="bg-petrol-950/80 border border-white/10 rounded-xs p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-xs bg-white/5 border border-gold-500/30 flex items-center justify-center p-3 flex-shrink-0">
                  <Building2 className="w-12 h-12 text-gold-400" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
                    Established Since 1981 &bull; Sakarya, Türkiye
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">
                    {stkBrochureMeta.manufacturer}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                    Led by Chairman <strong>{stkBrochureMeta.chairman}</strong>, Milkman Makine / STK Makina is an internationally recognized pioneer in food &amp; dairy processing equipment manufacturing. Operating high-end manufacturing facilities in 1. OSB Sakarya, Türkiye, STK has established turnkey dairy factories across 5 continents and over 70 reference countries.
                  </p>
                </div>
              </div>

              {/* 21 Turnkey Facilities Grid */}
              <div>
                <div className="mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block">
                    Turnkey Plant Scope (Page 2 of STK Brochure)
                  </span>
                  <h4 className="text-base font-display font-bold text-white">
                    21 Complete Dairy &amp; Food Facilities Manufactured
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {stkBrochureMeta.plantTurnkeyFacilities.map((fac, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-petrol-950/60 border border-white/10 rounded-xs flex items-center gap-2 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span className="line-clamp-1">{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality & Standards Strip */}
              <div className="bg-petrol-950/60 border border-white/10 rounded-xs p-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-2">
                  Quality Certificates &amp; Hygienic Standards
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {stkBrochureMeta.standards.map((std, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{std}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pakistan Representation Note */}
              <div className="p-4 bg-petrol-950 border border-gold-500/40 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-display font-bold text-white mb-0.5">
                    Exclusive Bilateral Representation in Pakistan
                  </h5>
                  <p className="text-xs text-slate-300">
                    AM Tradings &amp; Consultants provides direct advisory, import clearance, layout planning, and Punjab Food Authority audit assistance for all STK installations in Pakistan.
                  </p>
                </div>

                <WhatsAppButton
                  size="sm"
                  variant="whatsapp"
                  message="Hello Dr. Asif Iftikhar / AM Tradings Team, I would like to schedule an advisory consultation regarding importing and commissioning an STK Makina dairy line."
                  className="whitespace-nowrap"
                >
                  Contact Dr. Asif Iftikhar
                </WhatsAppButton>
              </div>
            </div>
          )}

          {/* Modal Bottom Footer / CTA Bar */}
          <div className="px-4 sm:px-6 py-3.5 bg-petrol-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <span>
                Need custom plant sizing or greenfield layout planning? Connect directly with AM Tradings leadership.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={stkBrochureMeta.brochurePdfUrl}
                download="STK-Makina-Milkman-Catalogue-2026.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-xs border border-white/10 transition-colors font-mono text-xs uppercase"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Brochure (52 MB)</span>
              </a>

              <WhatsAppButton
                size="sm"
                variant="whatsapp"
                message="Hello Dr. Asif Iftikhar / AM Tradings Team, I reviewed the STK Makina specifications and would like to request technical advisory for our dairy processing facility."
              >
                Consult Advisory Team
              </WhatsAppButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
