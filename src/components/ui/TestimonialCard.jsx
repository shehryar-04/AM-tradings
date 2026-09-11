import React from 'react';
import { Quote, Building2, MapPin, Award } from 'lucide-react';

export function TestimonialCard({ item }) {
  return (
    <div className="flex flex-col justify-between p-7 bg-white border border-petrol-900/10 hover:border-gold-500/40 rounded-sm shadow-sm hover:shadow-md transition-all duration-300">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <Quote className="w-8 h-8 text-gold-500/40" />
          <span className="px-2 py-0.5 text-[10px] font-mono font-medium text-slate-500 bg-slate-100 rounded-xs border border-slate-200">
            {item.statusNote || 'Client Feedback Record'}
          </span>
        </div>

        <p className="text-sm font-sans text-slate-700 leading-relaxed italic mb-6">
          "{item.quote}"
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-petrol-900">
              {item.author}
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              {item.organization}
            </p>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-mono text-gold-700 font-semibold block">
              {item.projectType}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {item.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
