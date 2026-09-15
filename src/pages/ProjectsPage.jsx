import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Filter,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FolderGit2,
  Sparkles
} from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { company } from '../data/company';

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter((proj) => {
    return activeCategory === 'all' || proj.category === activeCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-ivory-100 pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-petrol-950 text-white py-16 lg:py-20 border-b border-petrol-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-xs text-xs font-mono font-bold uppercase tracking-widest mb-4">
              Verified Project Dossiers
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
              Our Projects &amp; Advisory Engagements
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              Demonstrated engineering execution across Greenfield dairy facilities, plant expansions, recipe formulation R&amp;D, and international agro-consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Category Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-petrol-900/10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-700 block mb-1">
                Portfolio Filter
              </span>
              <h2 className="text-2xl font-display font-bold text-petrol-900">
                Key Industrial Case Studies
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors ${
                      isActive
                        ? 'text-gold-400'
                        : 'text-slate-600 hover:text-petrol-900 bg-white border border-petrol-900/10 hover:border-gold-500/40'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="projectFilterIndicator"
                        className="absolute inset-0 bg-petrol-900 rounded-xs shadow-sm -z-0"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* Scalable Future Projects Notice */}
          <div className="mt-16 p-8 bg-white border border-petrol-900/10 rounded-sm shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xs bg-petrol-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-display font-bold text-petrol-900 mb-1">
                  Confidential &amp; In-Progress Industrial Engagements
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  Several active Greenfield advisory contracts and commercial dairy feasibility audits operate under Non-Disclosure Agreements (NDAs). Case studies are published upon commercial commissioning and client clearance.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-petrol-900 hover:bg-gold-600 text-gold-400 hover:text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs whitespace-nowrap transition-colors"
            >
              <span>Discuss Your Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-petrol-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Ready to Plan or Execute Your Dairy Processing Project?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Leverage Dr. Munib Siddiqui's 25+ years of hands-on plant architecture and independent procurement stewardship.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <WhatsAppButton size="md" message="Hello Dr. Munib, I would like to consult on a new dairy project.">
              Consult on WhatsApp
            </WhatsAppButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs border border-white/20"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
