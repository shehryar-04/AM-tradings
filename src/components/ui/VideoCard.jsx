import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export function VideoCard({ video }) {
  return (
    <div className="group flex flex-col bg-white border border-petrol-900/10 hover:border-gold-500/60 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Machinery Image Showcase */}
      <div className="relative h-60 w-full bg-petrol-950 overflow-hidden flex items-center justify-center">
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-petrol-950/30 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider bg-petrol-900/90 text-gold-300 backdrop-blur-md border border-gold-500/30 rounded-xs">
            {video.category}
          </span>
        </div>

        {/* Engineering Standard Badge */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono text-gold-300 bg-petrol-950/80 backdrop-blur-md rounded-xs border border-gold-500/20">
          <ShieldCheck className="w-3 h-3 text-gold-400" />
          <span>SS316L / STK Standard</span>
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <h3 className="text-base font-display font-bold text-white leading-snug drop-shadow-md line-clamp-1">
            {video.title}
          </h3>
        </div>
      </div>

      {/* Description & Technical Highlights */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-5 bg-white">
        <div>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
            {video.description}
          </p>

          {video.highlights && video.highlights.length > 0 && (
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <span className="text-[10px] font-mono uppercase tracking-wider text-petrol-900 font-bold block">
                Technical Highlights:
              </span>
              {video.highlights.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <Link
          to="/contact"
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-ivory-200 hover:bg-gold-500 text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors duration-200 group-hover:bg-gold-500 font-bold"
        >
          <span>Request Machinery Specs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
