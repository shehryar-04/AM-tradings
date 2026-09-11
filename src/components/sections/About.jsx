import React from 'react';
import { Shield, Target, Compass, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { Reveal, StaggerContainer, StaggerItem } from '../ui/Reveal';

export function About() {
  const values = [
    {
      title: "Vendor Neutrality",
      description: "We are not machinery dealers bound by sales quotas. We represent the investor's balance sheet.",
      icon: Shield,
    },
    {
      title: "Scientific Dairy R&D",
      description: "Proprietary formulation, stabilization, and yield optimization led by veteran dairy technologists.",
      icon: Target,
    },
    {
      title: "Turnkey Execution",
      description: "Comprehensive scope spanning feasibility, layout design, installation, and commercial trial runs.",
      icon: Compass,
    },
    {
      title: "CAPEX Optimization",
      description: "Tender audits that routinely save 12% to 22% in initial plant machinery procurement costs.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-ivory-200 border-b border-petrol-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with Floating Badge */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="right" delay={0.1}>
              <div className="relative group">
                <div className="rounded-md overflow-hidden bg-white p-2.5 shadow-xl border border-petrol-900/10">
                  <div className="aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden bg-petrol-950 flex items-center justify-center p-2">
                    <img
                      src="/images/plant-consulting-light.jpeg"
                      alt="AM Tradings Industrial Dairy Consultation"
                      className="w-full h-full object-contain transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Floating Philosophy Card */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-petrol-900 text-white p-5 rounded-sm shadow-2xl border border-gold-500/40 max-w-[270px]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    Core Mandate
                  </span>
                  <p className="font-serif text-sm font-semibold text-white leading-snug">
                    "Consultancy first. Everything else follows."
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Setting the standard for modern dairy manufacturing in Pakistan.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: About Copy & Value Grid */}
          <div className="lg:col-span-7 flex flex-col">
            <SectionHeading
              eyebrow="Institutional Heritage &amp; Ethos"
              title="Architecting Modern, Hygienic &amp; High-Yield Dairy Enterprises"
              subtitle="AM Tradings was established to bridge the critical divide between capital investors and overseas equipment manufacturers."
              className="mb-8"
            />

            <Reveal direction="up" delay={0.2}>
              <div className="prose text-slate-700 text-base leading-relaxed mb-8 flex flex-col gap-4">
                <p>
                  In the rapidly modernizing food and beverage sector of Pakistan, setting up a dairy processing plant requires more than purchasing machinery. It requires accurate mass-balance engineering, hygienic zoning compliance, vendor-neutral procurement audits, and certified recipe formulation.
                </p>
                <p>
                  Under the technical leadership of <strong>Dr. Munib Siddiqui</strong>, AM Tradings provides full-lifecycle advisory—ensuring that every rupee of capital expenditure translates into reliable throughput, minimal product loss, and highest market shelf-life.
                </p>
              </div>
            </Reveal>

            {/* 4 Core Pillars Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <StaggerItem key={val.title}>
                    <div className="p-4 bg-white rounded-sm border border-petrol-900/10 hover:border-gold-500/50 transition-colors shadow-sm">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-7 h-7 rounded-xs bg-gold-50 text-gold-700 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-serif font-bold text-sm text-petrol-950">
                          {val.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <Reveal direction="up" delay={0.35}>
              <div className="flex flex-wrap items-center gap-4">
                <WhatsAppButton
                  variant="whatsapp"
                  size="md"
                  message="Hello Dr. Munib, I would like to schedule a private advisory consultation on our dairy facility plans."
                >
                  Consult Dr. Munib Siddiqui
                </WhatsAppButton>

                <Button
                  href="#capabilities"
                  variant="ghost"
                  size="md"
                  icon={ArrowRight}
                >
                  Explore 7 Capabilities
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
