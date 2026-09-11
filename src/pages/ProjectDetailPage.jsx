import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Building,
  MapPin,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  BarChart3,
  MessageSquare,
  Award
} from 'lucide-react';
import { projects } from '../data/projects';
import { company, getWhatsAppUrl } from '../data/company';
import { WhatsAppButton, WhatsAppIcon } from '../components/ui/WhatsAppButton';
import { SectionHeading } from '../components/ui/SectionHeading';

export function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-ivory-100 px-4 pt-24 pb-16 text-center">
        <h2 className="text-2xl font-display font-bold text-petrol-900 mb-2">
          Project Dossier Not Found
        </h2>
        <p className="text-sm text-slate-600 mb-6 max-w-md">
          The requested project record could not be found or may be under client confidentiality review.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-petrol-900 text-gold-400 text-xs font-mono font-bold uppercase rounded-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Projects</span>
        </Link>
      </div>
    );
  }

  const whatsappInquiryMessage = `Hello Dr. Munib, I am reviewing the ${project.title} dossier and would like to discuss a similar project scope.`;

  return (
    <div className="flex flex-col min-h-screen bg-ivory-100 pt-24 pb-20">
      
      {/* 1. PROJECT HERO HEADER */}
      <section className="bg-petrol-950 text-white py-16 lg:py-20 border-b border-petrol-900/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-petrol-950 via-petrol-950/95 to-petrol-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/40 rounded-xs">
                  {project.categoryLabel}
                </span>
                <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-gold-500 text-petrol-950 rounded-xs">
                  {project.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                {project.title}
              </h1>

              <p className="text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
                {project.summary}
              </p>
            </div>

            {/* Quick Metadata Box */}
            <div className="lg:col-span-4 p-5 bg-petrol-900/80 border border-white/10 rounded-sm backdrop-blur-md flex flex-col gap-3 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-gold-400" />
                  Client
                </span>
                <span className="text-white font-bold">{project.client}</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  Location
                </span>
                <span className="text-white font-bold">{project.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  Execution
                </span>
                <span className="text-white font-bold">{project.timeline}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN DOSSIER CONTENT */}
      <section className="py-16 bg-white border-b border-petrol-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Description & Scope */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Detailed Narrative */}
              <div>
                <h2 className="text-xl font-display font-bold text-petrol-900 mb-4 pb-2 border-b border-petrol-900/10 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-gold-600" />
                  Project Overview &amp; Engineering Challenge
                </h2>
                <div className="prose prose-slate text-sm text-slate-700 leading-relaxed space-y-4">
                  <p>{project.description}</p>
                </div>
              </div>

              {/* Full Scope Checklist */}
              {project.scope && project.scope.length > 0 && (
                <div>
                  <h3 className="text-lg font-display font-bold text-petrol-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold-600" />
                    Delivered Engineering Scope
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.scope.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3.5 bg-ivory-100 border border-petrol-900/5 rounded-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-sans text-slate-800 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Machinery & Hardware Supplied */}
              {project.machinerySupplied && project.machinerySupplied.length > 0 && (
                <div>
                  <h3 className="text-lg font-display font-bold text-petrol-900 mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-gold-600" />
                    Machinery &amp; Sanitary Equipment Integrated
                  </h3>
                  <div className="p-5 bg-petrol-950 text-white rounded-sm border border-petrol-900">
                    <ul className="space-y-2.5">
                      {project.machinerySupplied.map((mach, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs font-mono text-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                          <span>{mach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Consultancy Involvement */}
              {project.consultancyInvolvement && project.consultancyInvolvement.length > 0 && (
                <div>
                  <h3 className="text-lg font-display font-bold text-petrol-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold-600" />
                    Consulting Leadership &amp; Formulations
                  </h3>
                  <div className="p-5 bg-ivory-100 border-l-4 border-l-gold-500 rounded-r-sm">
                    <ul className="space-y-2">
                      {project.consultancyInvolvement.map((inv, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="text-gold-700 font-bold">•</span>
                          <span>{inv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Impact Metrics & Consultation Callout */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Impact Metrics Card */}
              {project.impactMetrics && project.impactMetrics.length > 0 && (
                <div className="p-6 bg-petrol-900 text-white rounded-sm shadow-md">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-1">
                    Verified Performance
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-4">
                    Key Performance Indicators
                  </h3>

                  <div className="space-y-3">
                    {project.impactMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white/5 border border-white/10 rounded-xs flex items-center justify-between"
                      >
                        <span className="text-xs font-mono text-slate-300">
                          {metric.label}
                        </span>
                        <span className="text-sm font-mono font-bold text-gold-400">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Inquiry Action Box */}
              <div className="p-6 bg-ivory-100 border border-petrol-900/10 rounded-sm flex flex-col gap-4">
                <h4 className="text-base font-display font-bold text-petrol-900">
                  Planning a Similar Project?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engage Dr. Munib Siddiqui directly for an independent technical consultation, tender audit, or feasibility review.
                </p>

                <a
                  href={getWhatsAppUrl(whatsappInquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-petrol-900 hover:bg-gold-600 text-gold-400 hover:text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Consult Dr. Munib</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 hover:text-gold-700 py-1"
                >
                  <span>Submit RFP Document</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
