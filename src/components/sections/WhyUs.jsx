import React from 'react';
import {
  ShieldCheck,
  DollarSign,
  Cpu,
  Globe2,
  Layers,
  Award,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { Reveal, StaggerContainer, StaggerItem } from '../ui/Reveal';

export function WhyUs() {
  const differentiators = [
    {
      title: "100% Investor Alignment (Zero Vendor Commissions)",
      description: "Unlike commercial machinery agents who promote the specific brands they represent, we charge consulting fees to protect your capital. Our loyalty is strictly to your plant's ROI and operational longevity.",
      icon: ShieldCheck,
      badge: "Pure Independence",
    },
    {
      title: "12% to 22% Measurable CAPEX Reduction",
      description: "We audit machine specifications, remove unnecessary vendor markups, negotiate spare parts inclusion, and ensure direct factory pricing without middlemen surcharges.",
      icon: DollarSign,
      badge: "Cost Efficiency",
    },
    {
      title: "Scientific Recipe Engineering Included",
      description: "A state-of-the-art plant is useless without stable, great-tasting product formulas. Led by Dr. Asif Iftikhar, we formulate milk, yogurt, and cheese recipes that achieve optimal yield and shelf life.",
      icon: Cpu,
      badge: "Dairy Science",
    },
    {
      title: "End-to-End Hands-On Commissioning",
      description: "We don't hand over blueprints and leave. Our advisory team remains on-site through orbital welding inspection supervision, water trials, chemical passivation, and first commercial batch sign-off.",
      icon: Layers,
      badge: "Turnkey Execution",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The AM Tradings Advantage"
          title="Why Leading Dairy Enterprises Entrust Us With Their Capital"
          subtitle="A distinctive consulting model that marries deep dairy science with international procurement authority."
          align="center"
        />

        {/* 4 Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <StaggerItem key={diff.title} className="h-full">
                <div className="bg-white p-8 rounded-sm border border-petrol-900/10 hover:border-gold-500/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-sm bg-petrol-900 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-2.5 py-1 rounded-xs border border-gold-200">
                        {diff.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-petrol-900 mb-3 group-hover:text-gold-800 transition-colors">
                      {diff.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-sm border border-petrol-900/10 shadow-lg">
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-petrol-900/10">
            <HelpCircle className="w-5 h-5 text-gold-600" />
            <h3 className="font-serif text-xl font-bold text-petrol-900">
              Frequently Clarified Technical Questions
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {company.faqs.map((faq, index) => (
              <div key={index} className="pb-5 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h4 className="font-serif text-base sm:text-lg font-bold text-petrol-950 mb-2">
                  {faq.q}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
