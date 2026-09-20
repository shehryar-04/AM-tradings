import React from 'react';
import { Quote } from 'lucide-react';

export function TestimonialCard({ item }) {
  return (
    <div className="flex flex-col justify-between p-6 bg-white border border-petrol-900/10 hover:border-gold-500/40 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 group h-full">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <Quote className="w-6 h-6 text-gold-500/40 group-hover:text-gold-500/70 transition-colors" />
        </div>

        <p className="text-xs sm:text-sm font-sans text-slate-700 leading-relaxed italic mb-5">
          "{item.quote}"
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold-700 bg-gold-500/10 px-2.5 py-1 rounded-xs border border-gold-500/20">
          {item.sector}
        </span>
      </div>
    </div>
  );
}
