import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowUpRight, MessageSquare, Cog, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/company';
import { WhatsAppIcon } from './WhatsAppButton';

export function MachineryCard({ item, onSelect }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const whatsappMessage = `Hello Dr. Munib, I would like to request technical specifications and a quotation for: ${item.name} (${item.origin}).`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col bg-white border border-petrol-900/10 hover:border-gold-500/50 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden"
    >
      {/* Visual Image Container */}
      <div className="relative h-60 w-full bg-petrol-950 overflow-hidden flex items-center justify-center">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400">
            <Cog className="w-12 h-12 text-gold-400/50 mb-2 animate-spin-slow" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              STK Sanitary Equipment
            </span>
          </div>
        )}

        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider bg-petrol-900/90 text-gold-300 backdrop-blur-md border border-gold-500/30 rounded-xs">
            {item.categoryLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 text-[10px] font-mono font-medium text-slate-300 bg-black/60 backdrop-blur-md rounded-xs border border-white/10">
            Sanitary SS316L / SS304
          </span>
        </div>

        {/* Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-950/80 via-transparent to-transparent pointer-events-none" />
        
        {/* Machine Name in image bottom */}
        <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
          <span className="text-[11px] font-mono text-gold-400 uppercase tracking-widest block mb-0.5">
            {item.origin}
          </span>
          <h3 className="text-base font-display font-bold text-white leading-snug line-clamp-2 drop-shadow-md">
            {item.name}
          </h3>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4 bg-white">
        <div>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {item.description}
          </p>

          {/* Key Features */}
          {item.features && item.features.length > 0 && (
            <div className="space-y-2 mb-4">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-petrol-900 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                Technical Highlights
              </h4>
              <ul className="space-y-1.5">
                {item.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[12px] text-slate-700 leading-tight">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Target Applications Tags */}
          {item.applications && item.applications.length > 0 && (
            <div className="pt-2 border-t border-slate-100">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                Target Process Streams:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] font-sans font-medium bg-ivory-200 text-petrol-900 rounded-xs border border-petrol-900/5"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-petrol-900 hover:bg-gold-600 text-gold-400 hover:text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors duration-200"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Enquire Spec &amp; Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
