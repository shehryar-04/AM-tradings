import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { Button } from '../ui/Button';
import { Reveal, StaggerContainer, StaggerItem } from '../ui/Reveal';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-radial from-petrol-800/10 via-ivory-100 to-ivory-100">
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-petrol-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Eyebrow Pill */}
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-gold-500/30 text-petrol-900 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Turnkey Dairy &amp; Industrial Advisory</span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal direction="up" delay={0.2}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-petrol-950 leading-[1.12] tracking-tight mb-6">
                Consultancy first. <br />
                <span className="font-serif italic font-normal text-gold-700">
                  Everything else follows.
                </span>
              </h1>
            </Reveal>

            {/* Core Principle Callout */}
            <Reveal direction="up" delay={0.3}>
              <div className="border-l-2 border-gold-500 pl-4 py-1 mb-6 bg-gold-50/40 rounded-r-sm">
                <p className="font-serif text-lg sm:text-xl italic text-petrol-900 font-medium leading-snug">
                  "{company.corePrinciple}"
                </p>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-gold-800 mt-1">
                  — Independent Industrial Sourcing Standard
                </p>
              </div>
            </Reveal>

            {/* Narrative Description */}
            <Reveal direction="up" delay={0.35}>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-8">
                We empower investors, dairy entrepreneurs, and corporate food processors to execute high-yield Greenfield plants, source verified international machinery, and engineer standard-setting dairy recipes without vendor bias.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <WhatsAppButton
                  size="lg"
                  variant="whatsapp"
                  message="Hello Dr. Munib, I would like to schedule an introductory consulting meeting for our dairy processing venture."
                  pulse={true}
                >
                  Consult on WhatsApp
                </WhatsAppButton>

                <Button
                  href="#greenfield-methodology"
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                >
                  Explore 8 Stages
                </Button>
              </div>
            </Reveal>

            {/* Key Trust Signals */}
            <Reveal direction="up" delay={0.45}>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-petrol-900/10">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-petrol-900 block leading-tight">
                    74.7M
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-600 font-mono uppercase tracking-wider block mt-0.5">
                    Tonnes Milk Base
                  </span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-700 block leading-tight">
                    100%
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-600 font-mono uppercase tracking-wider block mt-0.5">
                    Vendor Neutral
                  </span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-petrol-900 block leading-tight">
                    8 Stages
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-600 font-mono uppercase tracking-wider block mt-0.5">
                    Greenfield Framework
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left" delay={0.25}>
              <div className="relative group">
                {/* Visual Frame */}
                <div className="relative rounded-md overflow-hidden bg-petrol-950 p-3 shadow-2xl border border-petrol-800/60">
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-sm bg-petrol-900 flex items-center justify-center p-2">
                    <img
                      src="/images/plant-consulting-dark.jpeg"
                      alt="AM Tradings and Consultants Dairy Processing Facility Presentation"
                      className="w-full h-full object-contain filter brightness-95 contrast-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>

                  {/* Caption Bar Under Image */}
                  <div className="mt-3 p-3.5 rounded-sm bg-petrol-900/95 border border-white/10 text-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold-400">
                        Dr. Munib Siddiqui
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active Advisory
                      </span>
                    </div>
                    <p className="font-serif text-sm font-semibold text-white">
                      Turnkey Greenfield Plant &amp; Processing Advisory
                    </p>
                  </div>
                </div>

                {/* Floating Floating Badge Left */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 sm:-left-8 bg-white p-4 rounded-sm shadow-xl border-l-4 border-gold-500 max-w-[240px] hidden sm:block"
                >
                  <p className="text-xs font-bold uppercase text-petrol-900 font-mono">
                    Beyond Trade
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    Engineering, recipe development, and equipment procurement under one roof.
                  </p>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
