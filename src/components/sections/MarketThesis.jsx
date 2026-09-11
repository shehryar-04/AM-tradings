import React from 'react';
import { TrendingUp, BarChart3, AlertCircle, ArrowUpRight, CheckCircle } from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { Reveal, StaggerContainer, StaggerItem } from '../ui/Reveal';

export function MarketThesis() {
  const { marketData } = company;

  return (
    <section id="market-thesis" className="py-20 lg:py-28 bg-petrol-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-petrol-700/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Macro Sector Intelligence"
          title={marketData.headline}
          subtitle={marketData.subheadline}
          theme="dark"
        />

        {/* 4 Stat Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketData.stats.map((stat, idx) => (
            <StaggerItem key={stat.label}>
              <div className="bg-petrol-800/90 hover:bg-petrol-800 border border-white/10 hover:border-gold-500/60 p-6 rounded transition-all duration-300 flex flex-col justify-between h-full shadow-card group">
                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-gold-500 group-hover:text-gold-400 transition-colors tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                      {stat.unit}
                    </span>
                  </div>
                  <h4 className="text-base font-display font-semibold text-white mb-2">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-xs font-sans text-slate-300 leading-relaxed pt-3 border-t border-white/10">
                  {stat.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Narrative & Image Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Thesis Points & Callout */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal direction="up" delay={0.1}>
              <div className="bg-white/5 border-l-4 border-gold-500 p-6 rounded-r mb-8">
                <blockquote className="font-sans text-xl sm:text-2xl font-semibold text-white leading-relaxed mb-3">
                  "{company.marketThesis}"
                </blockquote>
                <p className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold">
                  — Pakistan Industrial Dairy Opportunity Thesis
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="flex flex-col gap-4 mb-8">
                {marketData.thesisPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="flex items-center gap-4">
                <WhatsAppButton
                  variant="gold"
                  size="md"
                  message="Hello Dr. Munib, I want to discuss a dairy processing market feasibility study for our investment group."
                >
                  Discuss Feasibility Study
                </WhatsAppButton>
              </div>
            </Reveal>
          </div>

          {/* Right: Infographic Display */}
          <div className="lg:col-span-6">
            <Reveal direction="left" delay={0.25}>
              <div className="bg-petrol-950 p-3 rounded-md border border-gold-500/30 shadow-2xl overflow-hidden group">
                <div className="aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden bg-petrol-900 flex items-center justify-center p-2 relative">
                  <img
                    src="/images/market-gap-stats.jpeg"
                    alt="Pakistan Dairy Sector Production vs Formal Processing Market Statistics"
                    className="w-full h-full object-contain transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="text-[11px] font-mono text-gold-400 uppercase tracking-widest">
                    Source: National Livestock Census &amp; Food Processing Studies
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
