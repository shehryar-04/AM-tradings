import React from 'react';
import { Play, Film, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export function VideoCard({ video, onPlay }) {
  return (
    <div className="group flex flex-col bg-white border border-petrol-900/10 hover:border-gold-500/50 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Video Thumbnail & Play Trigger */}
      <div
        onClick={() => onPlay && onPlay(video)}
        className="relative h-56 w-full bg-petrol-950 cursor-pointer overflow-hidden flex items-center justify-center group/thumb"
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover/thumb:scale-105 transition-transform duration-700 opacity-80 group-hover/thumb:opacity-95"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-petrol-950/30 to-black/40" />

        {/* Badges */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider bg-petrol-900/90 text-gold-300 backdrop-blur-md border border-gold-500/30 rounded-xs">
            {video.category}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-slate-200 bg-black/60 backdrop-blur-md rounded-xs border border-white/10">
          <Clock className="w-3 h-3 text-gold-400" />
          <span>{video.duration}</span>
        </div>

        {/* Play Button Icon */}
        <div className="relative z-10 w-14 h-14 rounded-full bg-gold-500 group-hover/thumb:bg-gold-400 text-petrol-950 flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform duration-300">
          <Play className="w-6 h-6 fill-current ml-1" />
        </div>

        {/* Bottom Title on Thumbnail */}
        <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
          <h3 className="text-base font-display font-bold text-white leading-snug drop-shadow-md line-clamp-1">
            {video.title}
          </h3>
        </div>
      </div>

      {/* Description & Technical Highlights */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4 bg-white">
        <div>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
            {video.description}
          </p>

          {video.highlights && video.highlights.length > 0 && (
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <span className="text-[10px] font-mono uppercase tracking-wider text-petrol-900 font-bold block mb-1">
                Footage Highlights:
              </span>
              {video.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => onPlay && onPlay(video)}
          className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-ivory-200 hover:bg-petrol-900 text-petrol-900 hover:text-gold-300 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors duration-200"
        >
          <Film className="w-3.5 h-3.5" />
          <span>Launch Industrial Showcase</span>
        </button>
      </div>
    </div>
  );
}
