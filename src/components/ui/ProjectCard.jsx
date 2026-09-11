import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building, Calendar, CheckCircle2, ShieldAlert } from 'lucide-react';

export function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col bg-white border border-petrol-900/10 hover:border-gold-500/50 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden"
    >
      {/* Image Banner */}
      <div className="relative h-64 w-full bg-petrol-950 overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />

        {/* Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-petrol-950/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider bg-petrol-900/90 text-gold-300 backdrop-blur-md border border-gold-500/30 rounded-xs">
            {project.categoryLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-gold-500 text-petrol-950 rounded-xs shadow-sm">
            {project.status}
          </span>
        </div>

        {/* Bottom Banner Info */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <div className="flex items-center gap-3 text-xs text-slate-300 font-mono mb-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              {project.location}
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-gold-400" />
              {project.client}
            </span>
          </div>
          <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-5 bg-white">
        <div>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {project.summary}
          </p>

          {/* Scope Highlight List */}
          {project.scope && project.scope.length > 0 && (
            <div className="space-y-2 mb-4">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-petrol-900">
                Scope Highlights
              </h4>
              <ul className="space-y-1.5">
                {project.scope.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact Metrics Badges */}
          {project.impactMetrics && project.impactMetrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
              {project.impactMetrics.slice(0, 2).map((metric, idx) => (
                <div key={idx} className="p-2 bg-ivory-100 border border-petrol-900/5 rounded-xs">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    {metric.label}
                  </div>
                  <div className="text-xs font-mono font-bold text-petrol-900">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View Case Study CTA Link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="w-full inline-flex items-center justify-between py-2.5 px-4 bg-petrol-900 hover:bg-gold-600 text-white hover:text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors duration-200 group/btn"
          >
            <span>View Full Project Dossier</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
