import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, AlertCircle, ArrowUp, X } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';
import { useLanguage } from '../../context/LanguageContext';

export const FloatingActions: React.FC = () => {
  const { language } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 select-none">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-navy-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent group"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Emergency Call Action Button */}
        <button
          onClick={() => setShowEmergencyModal(true)}
          className="relative flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full bg-emergency hover:bg-emergency-hover text-white shadow-xl shadow-emergency/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emergency animate-pulse-subtle"
          aria-label="Emergency assistance dialog"
        >
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold tracking-wide">
            {language === 'hi' ? 'आपातकालीन सहायता' : 'Emergency Triage'}
          </span>
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href={clinicInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 group"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-5 h-5 shrink-0 fill-current" />
          <span className="text-xs font-bold tracking-wide">
            {language === 'hi' ? 'व्हाट्सएप चैट' : 'WhatsApp'}
          </span>
        </a>

        {/* Quick Call Button */}
        <a
          href={`tel:${clinicInfo.phone}`}
          className="w-12 h-12 rounded-full bg-healthcare hover:bg-healthcare-600 text-white shadow-xl shadow-healthcare/25 flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-healthcare"
          aria-label={`Call Raj Clinic at ${clinicInfo.phone}`}
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Emergency Modal Dialog */}
      {showEmergencyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="emergency-dialog-title"
        >
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-red-100">
            <button
              onClick={() => setShowEmergencyModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-emergency/10 text-emergency flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>

            <h3 id="emergency-dialog-title" className="text-xl font-extrabold text-navy-800">
              {language === 'hi' ? 'आपातकालीन सहायता प्रोटोकॉल' : 'Emergency Assistance Protocol'}
            </h3>

            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {language === 'hi'
                ? 'राज क्लिनिक दुदही में 24 घंटे सामान्य प्रसव (नार्मल डिलीवरी) एवं प्राथमिक आपातकालीन उपचार की सुविधा उपलब्ध है।'
                : 'Raj Clinic provides 24-hour normal delivery care and initial medical emergency triage at our Dudahi center.'}
            </p>

            <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong>{language === 'hi' ? 'महत्वपूर्ण सूचना:' : 'Notice: '}</strong>
              {language === 'hi'
                ? 'यह वेबसाइट आपातकालीन सेवा प्रदान नहीं करती। गंभीर सड़क दुर्घटना, कार्डियक अरेस्ट अथवा अत्यधिक रक्तस्त्राव जैसे जीवनरक्षक मामलों में तत्काल नजदीकी सरकारी अस्पताल या एम्बुलेंस (108) को भी सूचित करें।'
                : 'This website does not provide direct online emergency care. For severe trauma, cardiac arrest, or critical life threats, immediately contact national ambulance services (108) alongside reaching the clinic.'}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`tel:${clinicInfo.phone}`}
                className="w-full py-3.5 px-4 rounded-xl bg-emergency hover:bg-emergency-hover text-white text-center font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{language === 'hi' ? 'क्लिनिक को अभी कॉल करें (9305238955)' : 'Call Clinic Hotline (9305238955)'}</span>
              </a>

              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>{language === 'hi' ? 'व्हाट्सएप पर तत्काल सूचित करें' : 'Alert via WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

