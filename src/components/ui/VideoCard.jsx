import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

export function VideoCard({ video, onSelect }) {
  return (
    <div
      onClick={() => onSelect && onSelect(video)}
      className="group flex flex-col bg-white border border-petrol-900/10 hover:border-gold-500/60 rounded-xs shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Machinery Image Showcase - Compact Proportions */}
      <div className="relative h-40 sm:h-44 w-full bg-petrol-950 overflow-hidden flex items-center justify-center">
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-petrol-950/40 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider bg-petrol-900/90 text-gold-300 backdrop-blur-xs border border-gold-500/30 rounded-xs">
            {video.category}
          </span>
        </div>

        {/* Engineering Standard Badge */}
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 px-2 py-0.5 text-[9px] font-mono text-gold-300 bg-petrol-950/85 backdrop-blur-xs rounded-xs border border-gold-500/20">
          <ShieldCheck className="w-3 h-3 text-gold-400" />
          <span>STK Scope</span>
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-2.5 left-3 right-3 z-10">
          <h3 className="text-sm sm:text-base font-display font-bold text-white leading-snug drop-shadow-md line-clamp-1">
            {video.title}
          </h3>
        </div>
      </div>

      {/* Description & Technical Highlights - Compact Spacing */}
      <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between gap-3 bg-white">
        <div>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-2.5">
            {video.description}
          </p>

          {video.highlights && video.highlights.length > 0 && (
            <div className="space-y-1.5 pt-2.5 border-t border-slate-100">
              <span className="text-[10px] font-mono uppercase tracking-wider text-petrol-900 font-bold block">
                Technical Highlights:
              </span>
              {video.highlights.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3 h-3 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onSelect) onSelect(video);
          }}
          className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-ivory-200 hover:bg-gold-500 text-petrol-950 text-[11px] font-mono font-bold uppercase tracking-wider rounded-xs transition-colors duration-200 group-hover:bg-gold-500"
        >
          <FileText className="w-3 h-3 text-petrol-950" />
          <span>Inspect Specifications</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
