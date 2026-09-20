import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, FileCheck2, ExternalLink, X, Eye, Award, Building, CheckCircle2 } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { Button } from './Button';

export function CertificateCard({ certificate, cert }) {
  const data = certificate || cert;
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return null;

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group bg-white p-6 rounded border border-petrol-900/10 hover:border-gold-500/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full cursor-pointer relative overflow-hidden"
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          {/* Header Tag & Icon */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded bg-petrol-900 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-petrol-900 transition-colors shadow-sm">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-1 rounded border border-gold-200">
              {data.badge}
            </span>
          </div>

          <h3 className="font-display text-lg font-bold text-petrol-900 mb-1.5 group-hover:text-gold-700 transition-colors leading-snug">
            {data.title}
          </h3>

          <p className="text-xs font-display font-semibold uppercase tracking-wider text-slate-500 mb-3">
            {data.authority}
          </p>

          <p className="font-sans text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
            {data.description}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-display font-semibold uppercase tracking-wider text-petrol-900 group-hover:text-gold-700">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gold-500" />
            <span>Verified Document</span>
          </span>
          <span className="inline-flex items-center gap-1 text-gold-700">
            <span>Inspect</span>
            <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          </span>
        </div>
      </div>

      {/* Lightbox / Document Modal Viewer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-petrol-950/85 backdrop-blur-md">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white border border-petrol-900/10 rounded-lg shadow-modal overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-petrol-900 text-white border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-gold-400" />
                  <div>
                    <span className="text-xs font-display font-bold uppercase tracking-widest text-gold-400 block leading-tight">
                      Official Institutional Record
                    </span>
                    <span className="font-display font-bold text-sm text-white">
                      {data.title}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10 transition-colors"
                  aria-label="Close document modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Document Info Body */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-wider text-slate-400 font-bold block">
                      Issuing / Governing Body
                    </span>
                    <span className="font-display text-base font-bold text-petrol-900">
                      {data.authority}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-display uppercase tracking-wider text-slate-400 font-bold block">
                      Registration Status
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified &amp; Active
                    </span>
                  </div>
                </div>

                <p className="font-sans text-sm text-slate-700 leading-relaxed mb-6">
                  {data.description}
                </p>

                {data.details && (
                  <div className="bg-ivory-100 p-5 rounded border border-petrol-900/10 mb-6">
                    <h4 className="text-xs font-display font-bold uppercase tracking-widest text-petrol-900 mb-3">
                      Institutional Parameters &amp; Authority Details
                    </h4>
                    <div className="flex flex-col gap-2.5">
                      {data.details.map((d, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs font-sans text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </Button>

                  <WhatsAppButton
                    variant="whatsapp"
                    size="sm"
                    message={`Hello Dr. Asif Iftikhar / AM Tradings Team, I am reviewing the official "${data.title}" on the AM Tradings portal and would like to initiate a formal business discussion.`}
                  >
                    Inquire Regarding Tender Credentials
                  </WhatsAppButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
