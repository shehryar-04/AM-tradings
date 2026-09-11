import React, { useState } from 'react';
import { 
  Flame, 
  RotateCw, 
  UtensilsCrossed, 
  Sparkles, 
  Check, 
  ArrowUpRight, 
  FileText 
} from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { Button } from '../ui/Button';
import { Reveal, StaggerContainer, StaggerItem } from '../ui/Reveal';
import { clsx } from 'clsx';

export function Products() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = company.machineryPortfolio;
  const currentCategoryData = categories[activeCategory];

  const categoryIcons = [Flame, RotateCw, UtensilsCrossed, Sparkles];

  return (
    <section id="machinery" className="py-20 lg:py-28 bg-ivory-200 border-b border-petrol-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Equipment Sourcing &amp; Integration"
          title="Industrial Machinery &amp; Processing Lines"
          subtitle="Independent, vendor-neutral procurement and line integration across global sanitary manufacturing standards (3A / EHEDG / ISO)."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
          {categories.map((cat, index) => {
            const Icon = categoryIcons[index] || Flame;
            const isActive = activeCategory === index;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActiveCategory(index)}
                className={clsx(
                  'flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300',
                  isActive
                    ? 'bg-petrol-900 text-gold-400 border border-gold-500/50 shadow-md'
                    : 'bg-white text-slate-700 border border-petrol-900/10 hover:border-gold-500/40 hover:bg-slate-50'
                )}
              >
                <Icon className={clsx('w-3.5 h-3.5', isActive ? 'text-gold-400' : 'text-gold-600')} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {currentCategoryData.items.map((item, idx) => (
            <Reveal key={item.name} direction="up" delay={idx * 0.1}>
              <div className="bg-white p-6 rounded-sm border border-petrol-900/10 hover:border-gold-500/70 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xs bg-gold-50 text-gold-700 flex items-center justify-center font-mono font-bold text-xs">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      Sanitary SS316L / SS304
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-petrol-950 mb-2">
                    {item.name}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-petrol-900/5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-gold-800">
                    Turnkey Sourcing &amp; Commissioning
                  </span>
                  <a
                    href={getWhatsAppUrl(`Hello Dr. Munib, I would like to inquire about specifications and pricing for: ${item.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-petrol-900 hover:text-gold-700 flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-600" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Global Sourcing Assurance Box */}
        <Reveal direction="up" delay={0.2}>
          <div className="bg-petrol-900 text-white p-6 sm:p-8 rounded-sm border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex flex-col gap-1 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-400">
                Independent Procurement Standard
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                "We do not make the machines. We decide which one you should buy."
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Save 12%–22% through our rigorous comparative tender evaluations across European, Asian, and American manufacturers.
              </p>
            </div>

            <WhatsAppButton
              variant="gold"
              size="md"
              message="Hello Dr. Munib, I would like to initiate an international machinery tender evaluation for our plant."
              className="flex-shrink-0"
            >
              Request Equipment Tender Review
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
