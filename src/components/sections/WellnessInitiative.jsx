import React from 'react';
import { Sparkles, ArrowUpRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import { company } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function WellnessInitiative() {
  const initiative = company.wellnessInitiative;

  return (
    <section id="wellness-initiative" className="py-20 bg-ivory-200 border-b border-petrol-900/10 relative overflow-hidden">
      {/* Background ambient texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00202905_1px,transparent_1px),linear-gradient(to_bottom,#00202905_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Strategic Venture"
          title="AM Wellness Initiative"
          subtitle="Expanding agro-industrial excellence into dedicated nutrition and wellness science."
          align="center"
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <Reveal direction="up">
            <div className="bg-petrol-950 text-white rounded-sm border border-gold-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              {/* Subtle gold glow in background */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-petrol-700/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/15 border border-gold-500/40 text-gold-300 rounded-xs text-xs font-mono font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>{initiative.tag || "AM Tradings Wellness Venture"}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                    {initiative.name}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-xl">
                    AM Tradings has funded and initiated <strong className="text-gold-300">Nutrew</strong> as its dedicated wellness startup, bringing food science rigor and high-grade nutritional standards to consumer wellbeing.
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-gold-400" />
                    <span>An Official AM Tradings Venture</span>
                  </div>
                </div>

                <div className="flex-shrink-0 flex flex-col items-start md:items-end justify-center pt-2 md:pt-0">
                  <a
                    href={initiative.url || "https://nutrew.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-petrol-950 text-xs font-mono font-bold uppercase tracking-widest rounded-xs shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <span>Visit Nutrew.com</span>
                    <ArrowUpRight className="w-4 h-4 text-petrol-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-[11px] font-mono text-slate-400 mt-2">
                    Official Portal &bull; nutrew.com
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
