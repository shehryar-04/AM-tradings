import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Cog, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/company';
import { WhatsAppIcon } from './WhatsAppButton';

export function MachineryCard({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const whatsappMessage = `Hello Dr. Asif Iftikhar / AM Tradings Team, I would like to request technical specifications and quotation for the ${item.name}.`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col bg-white border border-petrol-900/10 hover:border-gold-500/60 shadow-xs hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden h-full"
    >
      {/* Visual Image Container - Compact height */}
      <div className="relative h-44 sm:h-48 w-full bg-petrol-950 overflow-hidden flex items-center justify-center">
        {!imageError && item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center text-slate-400">
            <Cog className="w-9 h-9 text-gold-400/60 mb-1 animate-spin-slow" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              STK Sanitary Equipment
            </span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-petrol-950/85 text-gold-300 backdrop-blur-md border border-gold-500/30 rounded-xs">
            {item.categoryLabel || 'Processing'}
          </span>
        </div>

        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="px-1.5 py-0.5 text-[9px] font-mono text-slate-300 bg-black/60 backdrop-blur-md rounded-xs border border-white/10">
            SS316L / SS304
          </span>
        </div>

        {/* Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-950/90 via-petrol-950/20 to-transparent pointer-events-none" />

        {/* Machine Name in image bottom */}
        <div className="absolute bottom-2.5 left-3 right-3 pointer-events-none">
          <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-0.5">
            {item.origin || 'Sanitary Standard'}
          </span>
          <h3 className="text-base font-display font-bold text-white leading-tight drop-shadow-md">
            {item.name}
          </h3>
        </div>
      </div>

      {/* Content Details - Compact Layout */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3 bg-white">
        <div>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
            {item.description}
          </p>

          {/* Key Features */}
          {item.features && item.features.length > 0 && (
            <ul className="space-y-1 mb-3">
              {item.features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-snug">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Applications */}
          {item.applications && item.applications.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
              {item.applications.slice(0, 3).map((app, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 text-[9px] font-sans font-medium bg-ivory-200 text-petrol-900 rounded-xs border border-petrol-900/5"
                >
                  {app}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2 border-t border-slate-100">
          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-petrol-900 hover:bg-gold-500 text-gold-400 hover:text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors duration-200 shadow-xs"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Enquire Spec</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
