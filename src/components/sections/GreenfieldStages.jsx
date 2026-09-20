import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  ShieldAlert, 
  Clock,
  Sparkles
} from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { clsx } from 'clsx';

export function GreenfieldStages() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const stages = company.greenfieldStages;
  const currentStage = stages[activeStageIndex];

  return (
    <section id="greenfield-methodology" className="py-20 lg:py-28 bg-petrol-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-petrol-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Systematic Execution Standard"
          title="The 8 Stages of a Greenfield Dairy Project"
          subtitle="A disciplined engineering and consulting roadmap ensuring zero rework, certified sanitary compliance, and maximum capital efficiency."
          theme="dark"
        />

        {/* Famous Risk Warning Banner */}
        <Reveal direction="up" delay={0.15}>
          <div className="bg-gold-500/15 border border-gold-500/40 p-5 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-gold-500 text-petrol-950 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-base sm:text-lg italic text-gold-300 font-semibold">
                  "{company.criticalRule}"
                </p>
                <p className="text-xs text-slate-300 font-mono">
                  Why 80% of Greenfield dairy overruns stem from skipped concept feasibility.
                </p>
              </div>
            </div>

            <WhatsAppButton
              size="sm"
              variant="gold"
              message="Hello Dr. Asif Iftikhar / AM Tradings Team, I am planning a Greenfield Dairy Plant and want to review Stage 1 Feasibility."
              className="whitespace-nowrap flex-shrink-0 text-xs"
            >
              Consult On Stage 1
            </WhatsAppButton>
          </div>
        </Reveal>

        {/* 8-Stage Horizontal Interactive Tabs */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center gap-2.5 min-w-max">
            {stages.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={clsx(
                    'flex flex-col items-start p-3.5 rounded border transition-all duration-300 text-left min-w-[140px]',
                    isActive
                      ? 'bg-gold-500 text-petrol-950 border-gold-400 font-bold shadow-card shadow-gold-500/20'
                      : 'bg-petrol-800/90 text-slate-300 border-white/10 hover:border-gold-500/50 hover:bg-petrol-800'
                  )}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={clsx(
                        'w-5 h-5 rounded-full text-[11px] font-display font-bold flex items-center justify-center',
                        isActive
                          ? 'bg-petrol-900 text-gold-400'
                          : 'bg-white/10 text-gold-400'
                      )}
                    >
                      {idx + 1}
                    </span>
                    <span
                      className={clsx(
                        'text-[10px] font-display font-semibold tracking-widest uppercase',
                        isActive ? 'text-petrol-950 font-bold' : 'text-gold-400'
                      )}
                    >
                      {stage.phase}
                    </span>
                  </div>
                  <span className="text-xs font-display font-semibold leading-tight truncate w-full">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detail Panel */}
        <div className="bg-petrol-950 rounded-lg border border-gold-500/30 p-6 sm:p-10 shadow-modal relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Stage Activities & Scope */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-display font-bold uppercase tracking-widest text-gold-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {currentStage.phase} OF 08
                  </span>
                  <span className="text-xs text-slate-400 font-display">
                    Greenfield Milestone
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  {currentStage.title}
                </h3>
                <p className="text-gold-400 text-sm font-sans italic mb-5">
                  {currentStage.subtitle}
                </p>

                <p className="text-slate-200 text-sm sm:text-base font-sans leading-relaxed mb-6">
                  {currentStage.summary}
                </p>

                {/* Key Activities Checklist */}
                <div className="bg-petrol-900/90 p-5 rounded-sm border border-white/10 mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gold-400 mb-3.5">
                    Stage Execution Checklist
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {currentStage.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Impact & Critical Note */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="text-xs text-slate-400">
                    <strong className="text-white block font-mono">Milestone Impact:</strong>
                    <span>{currentStage.impact}</span>
                  </div>

                  <WhatsAppButton
                    variant="whatsapp"
                    size="sm"
                    message={`Hello Dr. Asif Iftikhar / AM Tradings Team, I want to inquire about executing ${currentStage.phase}: ${currentStage.title} for our dairy project.`}
                    className="whitespace-nowrap flex-shrink-0"
                  >
                    Inquire On {currentStage.phase}
                  </WhatsAppButton>
                </div>
              </div>

              {/* Right: Stage Visual & Critical Advisory Card */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                {/* Visual Image */}
                <div className="rounded-sm overflow-hidden border border-white/10 bg-petrol-950 shadow-md">
                  <div className="aspect-[16/10] sm:aspect-[4/3] w-full flex items-center justify-center p-2 bg-petrol-950">
                    <img
                      src="/images/greenfield-8-stages.jpeg"
                      alt="8 Stages of a Greenfield Dairy Project Lifecycle Diagram"
                      className="w-full h-full object-contain filter brightness-95 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2.5 bg-petrol-900 text-center border-t border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Official AM Tradings Greenfield Methodology
                    </span>
                  </div>
                </div>

                {/* Critical Note Box */}
                <div className="p-4 rounded-sm bg-gold-500/10 border-l-2 border-gold-400">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
                    Technical Advisory Principle
                  </span>
                  <p className="text-xs italic text-slate-200 leading-relaxed font-serif">
                    "{currentStage.criticalNote}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
