import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Play,
  FileCheck,
  Building2,
  Cpu,
  Layers,
  Sparkles,
  ChevronRight,
  HelpCircle,
  Clock,
  Compass,
  Zap,
  TrendingUp,
  Sliders,
  Flame,
  Globe,
  Check
} from 'lucide-react';
import { company, getWhatsAppUrl } from '../data/company';
import { certificates } from '../data/certificates';
import { showcaseVideos } from '../data/videos';
import { testimonials } from '../data/testimonials';
import { projects } from '../data/projects';
import { CertificateCard } from '../components/ui/CertificateCard';
import { VideoCard } from '../components/ui/VideoCard';
import { VideoModal } from '../components/ui/VideoModal';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { WhatsAppButton, WhatsAppIcon } from '../components/ui/WhatsAppButton';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { WellnessInitiative } from '../components/sections/WellnessInitiative';

export function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalInitialTab, setModalInitialTab] = useState('specs');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Rotating Hero Statements
  const heroSlides = [
    {
      badge: 'Industrial Machinery & Technical Advisory',
      title: 'Dairy Processing Plants & Turnkey Automation',
      subtitle: 'Official procurement representative for STK Engineering & European standard dairy lines.',
      tag: 'Stainless Steel SS316L Standard',
    },
    {
      badge: 'Technical Advisory & Feasibility Consultancy',
      title: 'Turnkey Greenfield Dairy & Food Processing Plants',
      subtitle: 'From 3D architectural master planning to live-milk commissioning led by Dr. Asif Iftikhar.',
      tag: 'Independent Vendor-Neutral Audits',
    },
    {
      badge: 'Formulation & Technology R&D',
      title: 'Recipe Engineering, Shelf Life & QA Lab Compliance',
      subtitle: 'Proprietary product formulations and plant SOPs.',
      tag: 'High-Yield Chemistry',
    },
    {
      badge: 'Strategic Innovation',
      title: 'AM Wellness Initiative & Global Partnerships',
      subtitle: 'Connecting Pakistani agro-industrial investors with advanced food science and processing machinery.',
      tag: 'Global Technology Transfer',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const featuredProjects = projects.slice(0, 3);
  const secondaryVideos = showcaseVideos.filter((v) => !v.featuredInHero);

  return (
    <div className="flex flex-col min-h-screen bg-ivory-100">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center bg-petrol-950 text-white overflow-hidden pt-24 pb-16">
        {/* Background Image / Plant Machinery Visual */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/plant-consulting-dark.jpeg"
            alt="AM Tradings Industrial Dairy Processing Plant"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-petrol-950 via-petrol-950/90 to-petrol-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-transparent to-petrol-950/60" />

          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          {/* Ambient Lighting Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-petrol-600/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Area */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* Rotating Statement Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-gold-500/10 border border-gold-500/30 text-gold-400 max-w-fit shadow-[0_0_15px_rgba(214,158,46,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest">
                  {heroSlides[currentSlide].badge}
                </span>
              </div>

              {/* Dynamic Animated Headline */}
              <div className="min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.15] mb-4">
                      {heroSlides[currentSlide].title}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
                      {heroSlides[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Dots with Animated Progress */}
              <div className="flex items-center gap-2 pt-1">
                {heroSlides.map((_, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 ${isActive ? 'w-10 bg-white/20' : 'w-2.5 bg-white/20 hover:bg-white/40'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      {isActive && (
                        <motion.div
                          key={`progress-${currentSlide}`}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 6, ease: 'linear' }}
                          className="absolute inset-0 bg-gold-500 rounded-full"
                        />
                      )}
                    </button>
                  );
                })}
                <span className="ml-3 text-[11px] font-mono text-slate-400">
                  0{currentSlide + 1} / 0{heroSlides.length}
                </span>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-petrol-950 text-xs font-mono font-bold uppercase tracking-wider rounded-xs shadow-md transition-all hover:translate-y-[-1px] font-bold"
                >
                  <span>Explore Machinery &amp; Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setModalInitialTab('video');
                    setSelectedVideo(showcaseVideos[0]);
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs border border-white/15 backdrop-blur-sm transition-all"
                >
                  <Play className="w-4 h-4 text-gold-400 fill-current" />
                  <span>Watch Plant Video</span>
                </button>
              </div>

              {/* Credentials Micro Bar with Glassmorphic Styling */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-xs hover:border-gold-500/40 transition-colors">
                  <div className="text-xs font-mono font-bold text-gold-400">SECP &amp; LCCI</div>
                  <div className="text-[11px] text-slate-300">Registered Enterprise</div>
                </div>
                <div className="p-3 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-xs hover:border-gold-500/40 transition-colors">
                  <div className="text-xs font-mono font-bold text-gold-400">STK Partner</div>
                  <div className="text-[11px] text-slate-300">  Dairy Machinery</div>
                </div>
                <div className="hidden sm:block p-3 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-xs hover:border-gold-500/40 transition-colors">
                  <div className="text-xs font-mono font-bold text-gold-400">Vendor Neutral</div>
                  <div className="text-[11px] text-slate-300">100% Client Loyalty</div>
                </div>
              </div>

            </div>

            {/* Right Interactive Plant Card / Video Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden bg-petrol-900 border border-gold-500/30 p-1.5 shadow-2xl">
                {/* Embedded YouTube Video */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden rounded-xs">
                  <iframe
                    src="https://www.youtube.com/embed/pDseoVMag3Q?rel=0&modestbranding=1"
                    title="AM Tradings Turnkey Dairy Processing &amp; Machinery"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="p-4 bg-petrol-900/95 text-xs text-slate-300 flex items-center justify-between border-t border-white/10 mt-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block">
                        Live Facility Tour
                      </span>
                      <span className="font-display font-semibold text-white">Commercial Dairy Processing Hall</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setModalInitialTab('specs');
                      setSelectedVideo(showcaseVideos[0]);
                    }}
                    className="text-gold-400 hover:text-gold-300 font-mono font-bold uppercase tracking-wider flex items-center gap-1 transition-colors px-2.5 py-1.5 rounded-xs bg-white/5 hover:bg-white/10 border border-white/10"
                  >
                    <span>Full Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION SECTION */}
      <section className="py-20 bg-white border-b border-petrol-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 flex flex-col gap-6">
              <SectionHeading
                badge="Company Overview"
                title="Technical Advisory & Strategic Dairy Consultancy"
                subtitle="Bridging the gap between raw agro-commodities and world-class commercial dairy manufacturing."
              />

              <div className="prose prose-slate text-sm text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  <strong>AM Tradings &amp; Consultants</strong> is a premier Pakistani corporate entity operating across specialized divisions: <em>Technical Advisory &amp; Industry Insights</em>, <em>Engineering Advisory</em>, and <em>Business Advisory &amp; Machinery Trading</em>.
                </p>
                <p className="leading-relaxed">
                  Headed by <strong>Dr. Asif Iftikhar</strong>, we provide end-to-end advisory for investors and existing processors—from initial feasibility modeling and 3D hygienic plant zoning to international machinery procurement, recipe formulation, and Punjab Food Authority (PFA) audit compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-ivory-100 border border-petrol-900/10 rounded-sm">
                  <div className="w-8 h-8 rounded-xs bg-petrol-900 text-gold-400 flex items-center justify-center mb-3">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-display font-bold text-petrol-900 mb-1">
                    Machinery &amp; Trading
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Official STK processing lines, UHT sterilizers, homogenizers, plate pasteurizers, and aseptic packaging.
                  </p>
                </div>

                <div className="p-4 bg-ivory-100 border border-petrol-900/10 rounded-sm">
                  <div className="w-8 h-8 rounded-xs bg-petrol-900 text-gold-400 flex items-center justify-center mb-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-display font-bold text-petrol-900 mb-1">
                    Greenfield Advisory
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    8-stage structured advisory lifecycle, CAPEX audits, orbital piping supervision, and live water trials.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 hover:text-gold-700 py-2 border-b-2 border-petrol-900 transition-colors"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-sm overflow-hidden border border-petrol-900/10 shadow-lg bg-petrol-950 p-2">
                <img
                  src="/images/greenfield-8-stages.jpeg"
                  alt="8 Greenfield Methodology Stages"
                  className="w-full h-auto rounded-xs object-cover"
                />
                <div className="p-4 bg-petrol-900 text-white rounded-b-xs">
                  <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider block mb-1">
                    Structured Advisory Framework
                  </span>
                  <h4 className="text-sm font-display font-bold">
                    The 8-Stage Turnkey Plant Development Lifecycle
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Eliminating CAPEX overruns and hygienic piping design flaws before civil construction begins.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISION / MISSION / CORE VALUES SECTION */}
      <section className="py-20 bg-ivory-200 border-b border-petrol-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Foundation"
            title="Vision, Mission &amp; Core Operating Values"
            subtitle="Authentic principles guiding our industrial consulting and machinery procurement practice."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

            {/* Vision Card */}
            <div className="p-8 bg-white border border-petrol-900/10 rounded-sm shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xs bg-petrol-900 text-gold-400 flex items-center justify-center mb-6">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-700 block mb-2">
                  Our Strategic Vision
                </span>
                <h3 className="text-xl font-display font-bold text-petrol-900 mb-4">
                  Transforming Dairy Processing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {company.vision}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  Institutional Scope
                </span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 bg-petrol-900 text-white border border-petrol-900 rounded-sm shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xs bg-gold-500 text-petrol-950 flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-400 block mb-2">
                  Our Mission
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Turnkey Advisory &amp; Trust
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {company.mission}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="text-[10px] font-mono text-gold-400 uppercase">
                  Execution Standard
                </span>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="p-8 bg-white border border-petrol-900/10 rounded-sm shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xs bg-petrol-900 text-gold-400 flex items-center justify-center mb-6">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-700 block mb-2">
                  Core Values
                </span>
                <h3 className="text-xl font-display font-bold text-petrol-900 mb-4">
                  Technical Advisory Integrity
                </h3>
                <ul className="space-y-3">
                  {(company.coreValues || company.values || []).map((val, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-petrol-900">{val.title}:</strong>{' '}
                        <span className="text-slate-600">{val.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  Corporate Governance
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REGISTRATIONS, LICENSES & AFFILIATIONS */}
      <section className="py-20 bg-white border-b border-petrol-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Compliance & Credentials"
            title="Official Registrations &amp; Statutory Affiliations"
            subtitle="Verified statutory incorporation, chamber membership, and tax compliance registrations."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} certificate={cert} cert={cert} />
            ))}
          </div>

          <div className="mt-10 p-5 bg-ivory-100 border border-petrol-900/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-gold-600 flex-shrink-0" />
              <p className="text-xs text-slate-700">
                Full statutory documentation packs are available upon formal tender audit request.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-xs font-mono font-bold uppercase tracking-wider text-petrol-900 hover:text-gold-700 whitespace-nowrap"
            >
              Request Compliance Pack &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5. AM WELLNESS INITIATIVE (NUTREW) */}
      <WellnessInitiative />

      {/* 6. PLANT & MACHINERY SHOWCASE */}
      <section className="py-20 bg-petrol-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industrial Showcase"
            title="Plant Operations &amp; Machinery"
            subtitle="Operational overview of HTST plate pasteurizers, high-pressure homogenizers, centrifugal cream separators, enclosed cheese lines, vacuum evaporators, and automated Clean-In-Place systems."
            variant="dark"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
            {secondaryVideos.map((vid) => (
              <VideoCard
                key={vid.id}
                video={vid}
                onSelect={(selected) => {
                  setModalInitialTab('specs');
                  setSelectedVideo(selected);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. REVIEWS & SECTOR FEEDBACK */}
      <section className="py-20 bg-ivory-100 border-b border-petrol-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Endorsements"
            title="Sector Feedback &amp; Reviews"
            subtitle="Operational feedback and performance observations across diverse agro-industrial processing sectors."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL ENQUIRY CTA BANNER */}
      <section className="py-20 bg-petrol-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-xs text-xs font-mono font-bold uppercase tracking-widest">
            Direct Technical Engagement
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Discuss Your Greenfield Project or Machinery Requirement
          </h2>

          <p className="text-base text-slate-300 font-sans max-w-2xl leading-relaxed">
            Connect directly with Dr. Asif Iftikhar and the AM Tradings advisory leadership for an uncompromised, vendor-neutral evaluation of your dairy processing investment, CAPEX tender, or machinery sourcing needs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <WhatsAppButton
              size="lg"
              variant="whatsapp"
              message="Hello Dr. Asif Iftikhar / AM Tradings Team, I would like to schedule a project consultation with AM Tradings."
              className="px-8"
            >
              WhatsApp: {company.contacts.whatsapp}
            </WhatsAppButton>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs border border-white/20 transition-colors"
            >
              <span>Submit Project RFP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video & Full STK Specs Modal Player */}
      <VideoModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        initialTab={modalInitialTab}
      />
    </div>
  );
}
