import React from 'react';
import { 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Sparkles,
  Building 
} from 'lucide-react';
import { company, getWhatsAppUrl } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function Credentials() {
  const consultant = company.contacts.consultant;

  return (
    <section id="consultant" className="py-20 lg:py-28 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership &amp; Technical Authority"
          title="Principal Dairy Consultant: Dr. Asif Iftikhar"
          subtitle="Direct advisory access to seasoned industrial expertise in turnkey plant engineering, recipe chemistry, and overseas procurement."
        />

        {/* Consultant Profile Feature Card */}
        <div className="bg-white rounded-md border border-petrol-900/10 p-8 sm:p-12 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Avatar & Title Column */}
            <div className="lg:col-span-4 flex flex-col items-center text-center pb-8 lg:pb-0 lg:border-r border-slate-100">
              <div className="relative mb-6">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-petrol-900 via-petrol-800 to-petrol-950 border-4 border-gold-500/80 shadow-2xl flex items-center justify-center text-gold-400 font-serif text-5xl font-bold">
                  AI
                </div>
                <div className="absolute bottom-1 right-2 bg-gold-500 text-petrol-950 p-2 rounded-full shadow-lg">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-petrol-900 mb-1">
                {consultant.name}
              </h3>

              <p className="text-xs font-mono font-bold uppercase tracking-wider text-gold-700 mb-4">
                {consultant.title}
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono">
                <Briefcase className="w-3.5 h-3.5 text-gold-600" />
                <span>{consultant.experience}</span>
              </div>
            </div>

            {/* Bio & Credentials Column */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold-700 font-bold block mb-2">
                  Advisory Profile &amp; Industry Track Record
                </span>
                <p className="text-base text-slate-700 leading-relaxed mb-6">
                  {consultant.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-8">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase text-petrol-900">
                        Technical Specialization
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Food Science, Dairy Processing Engineering, and Formulation Chemistry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase text-petrol-900">
                        Direct Representation
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Independent client representation in European, American, and Asian machinery tenders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                <WhatsAppButton
                  variant="whatsapp"
                  size="md"
                  message="Hello Dr. Asif Iftikhar / AM Tradings Team, I would like to schedule a private advisory discussion regarding our dairy project."
                >
                  Message Dr. Asif Directly
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Office Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {company.contacts.locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-sm border border-petrol-900/10 hover:border-gold-500/50 transition-colors flex items-start gap-4 shadow-sm"
            >
              <div className="w-10 h-10 rounded-sm bg-petrol-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-700">
                  {loc.type} &bull; {loc.city}
                </span>
                <h4 className="font-serif text-base font-bold text-petrol-900 mb-1">
                  {loc.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {loc.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
