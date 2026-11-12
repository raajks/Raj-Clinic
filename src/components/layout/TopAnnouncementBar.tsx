import React from 'react';
import { Phone, MessageSquare, MapPin, AlertCircle, Clock } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageToggle } from '../common/LanguageToggle';

export const TopAnnouncementBar: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-navy-900 text-slate-200 text-xs border-b border-navy-700/60 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Location & Emergency Status */}
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-4 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-teal-accent shrink-0" />
            <span>
              {language === 'hi' 
                ? 'गांधी चौक से 100 मीटर पूरब, ब्लॉक रोड, दुदही (कुशीनगर)' 
                : '100m East of Gandhi Chowk, Block Road, Dudahi (Kushinagar)'}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-emerald-400 font-medium bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span>
              {language === 'hi'
                ? '24 घंटे नार्मल डिलेवरी एवं आपातकालीन संपर्क उपलब्ध'
                : '24 Hours Normal Delivery & Emergency Triage'}
            </span>
          </div>
        </div>

        {/* Right: Direct Phone, WhatsApp & Language Switcher */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <a
            href={`tel:${clinicInfo.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-slate-200"
            aria-label={`Call Raj Clinic at ${clinicInfo.phoneFormatted}`}
          >
            <Phone className="w-3.5 h-3.5 text-teal-accent shrink-0" />
            <span>{clinicInfo.phoneFormatted}</span>
          </a>

          <a
            href={clinicInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            aria-label="Chat with Raj Clinic on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span>WhatsApp</span>
          </a>

          {/* Quick language toggle */}
          <div className="hidden sm:block">
            <LanguageToggle variant="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

