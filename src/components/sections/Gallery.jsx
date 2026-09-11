import React from 'react';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal, StaggerContainer, StaggerItem } from '../ui/Reveal';

export function Gallery() {
  const images = [
    {
      src: '/images/plant-consulting-dark.jpeg',
      title: 'Turnkey Dairy Plant Consultation',
      subtitle: 'Executive Presentation & Facility Advisory',
      tag: 'Advisory Showcase',
    },
    {
      src: '/images/plant-consulting-light.jpeg',
      title: 'Industrial Processing Framework',
      subtitle: 'Dairy Engineering & Execution Standard',
      tag: 'Engineering',
    },
    {
      src: '/images/seven-capabilities.jpeg',
      title: 'The 7 Core Capabilities',
      subtitle: 'Integrated Service & Procurement Architecture',
      tag: 'Capability Matrix',
    },
    {
      src: '/images/greenfield-8-stages.jpeg',
      title: '8 Stages of Greenfield Project',
      subtitle: 'From Concept Feasibility to Handover',
      tag: 'Methodology',
    },
    {
      src: '/images/market-gap-stats.jpeg',
      title: 'Pakistan Dairy Sector Landscape',
      subtitle: '74.7M Tonnes Production vs 3% Processed Gap',
      tag: 'Market Intelligence',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory-200 border-b border-petrol-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Portfolio &amp; Process Architecture"
          title="Institutional Showcase &amp; Technical Frameworks"
          subtitle="A comprehensive visual overview of our industrial consulting methodology, processing plant models, and market intelligence frameworks."
        />

        {/* Gallery Visual Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <StaggerItem key={img.title}>
              <div className="group bg-white rounded-sm overflow-hidden border border-petrol-900/10 hover:border-gold-500/70 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-petrol-950 flex items-center justify-center p-2.5">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-contain filter brightness-95 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-petrol-900/90 backdrop-blur-md px-2.5 py-1 rounded-xs border border-white/10 pointer-events-none">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold-400">
                      {img.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-serif text-base font-bold text-petrol-900 mb-1">
                      {img.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {img.subtitle}
                    </p>
                  </div>

                  <a
                    href={img.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gold-800 hover:text-gold-900 pt-3 border-t border-slate-100"
                  >
                    <span>Inspect High-Resolution Asset</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
