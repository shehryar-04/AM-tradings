import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Clock, Sparkles, AlertCircle, ShieldCheck } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export function VideoModal({
  video,
  isOpen,
  onClose,
}) {
  if (!video) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-petrol-950/85 backdrop-blur-md">
          {/* Backdrop Click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl bg-petrol-900 border border-gold-500/40 rounded-lg shadow-modal overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-petrol-950/90 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-xs font-display font-semibold uppercase tracking-widest text-gold-400">
                  {video.category} &bull; {video.duration}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/10 transition-colors"
                aria-label="Close video modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Area */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              {video.videoUrl?.includes('youtube.com') || video.videoUrl?.includes('youtu.be') ? (
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : video.videoUrl ? (
                <video
                  src={video.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  poster={video.thumbnail}
                >
                  Your browser does not support HTML5 video playback.
                </video>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover filter brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-petrol-950/90 via-petrol-950/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold-500/90 text-petrol-950 flex items-center justify-center mb-4 shadow-gold-glow animate-pulse">
                      <Play className="w-7 h-7 ml-1" />
                    </div>
                    <span className="text-xs font-display uppercase tracking-widest text-gold-400 font-bold mb-1">
                      Industrial Capability Showcase
                    </span>
                    <h4 className="text-xl font-display font-bold text-white max-w-lg mb-2">
                      {video.title}
                    </h4>
                    <p className="text-xs font-sans text-slate-300 max-w-md">
                      HD plant footage recorded on-site during commercial dairy processing operations.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Video Description & Highlights */}
            <div className="p-6 sm:p-8 bg-petrol-900 overflow-y-auto">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                {video.title}
              </h3>
              <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6">
                {video.description}
              </p>

              {video.highlights && (
                <div className="bg-petrol-950/80 p-4 rounded border border-white/10 mb-6">
                  <span className="text-xs font-display font-bold uppercase tracking-widest text-gold-400 block mb-2">
                    Key Technical Highlights
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {video.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-sans text-slate-200">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <span className="text-xs font-sans text-slate-400">
                  Request full plant specs or arrange an on-site facility inspection.
                </span>

                <div className="flex items-center gap-3">
                  <WhatsAppButton
                    size="sm"
                    variant="whatsapp"
                    message={`Hello Dr. Munib, I watched the video showcase for "${video.title}" and would like to inquire about this machinery/system.`}
                  >
                    Inquire on this System
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
