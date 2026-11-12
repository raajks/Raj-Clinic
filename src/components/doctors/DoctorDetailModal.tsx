import React from 'react';
import { X, Clock, Calendar, CheckCircle2, AlertCircle, Phone, ShieldCheck } from 'lucide-react';
import { Doctor } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../common/Button';
import { clinicInfo } from '../../data/clinic';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onSelectForAppointment: (doctor: Doctor) => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({
  doctor,
  onClose,
  onSelectForAppointment,
}) => {
  const { language } = useLanguage();

  if (!doctor) return null;

  const name = language === 'hi' ? doctor.nameHi : doctor.nameEn;
  const spec = language === 'hi' ? doctor.specializationHi : doctor.specializationEn;
  const timing = language === 'hi' ? doctor.timingHi : doctor.timingEn;
  const scopes = language === 'hi' ? doctor.scopeOfCareHi : doctor.scopeOfCareEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white text-navy-800 shadow-md backdrop-blur-sm transition-colors focus:ring-2 focus:ring-teal-accent"
          aria-label="Close doctor details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-navy-900 via-navy-800 to-healthcare text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={doctor.image}
            alt={name}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-white/20 shadow-lg shrink-0"
          />

          <div className="text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-accent/20 text-teal-300 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'पोस्टर विवरण से सत्यापित' : 'Verified Roster Details'}</span>
            </div>

            <h3 id="doctor-modal-title" className="text-2xl font-black text-white leading-tight">
              {name}
            </h3>
            <p className="text-sm font-bold text-teal-accent mt-0.5">{doctor.qualification}</p>
            <p className="text-xs text-slate-300 mt-1 leading-snug">{spec}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Timing Section */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <Clock className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {language === 'hi' ? 'ओपीडी परामर्श समय' : 'Consultation Timings'}
              </h4>
              <p className="text-sm font-bold text-navy-800 mt-0.5">{timing}</p>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'hi' ? doctor.availableDaysHi : doctor.availableDaysEn}
              </p>
            </div>
          </div>

          {/* Scope of Clinical Care */}
          <div>
            <h4 className="text-sm font-bold text-navy-800 mb-3 flex items-center gap-2">
              <span>{language === 'hi' ? 'उपचार एवं परामर्श का दायरा' : 'Scope of Clinical Care'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {scopes.map((scope, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-healthcare shrink-0 mt-0.5" />
                  <span className="leading-snug">{scope}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification & Transparency Note */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-healthcare shrink-0 mt-0.5" />
              <div>
                <strong>{language === 'hi' ? 'सत्यापन टिप्पणी:' : 'Verification Note:'} </strong>
                <span>{doctor.verificationNotes}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-end gap-3">
          <Button
            href={`tel:${clinicInfo.phone}`}
            variant="outline"
            size="md"
            icon={<Phone className="w-4 h-4 text-healthcare" />}
          >
            {language === 'hi' ? 'सीधे फोन करें' : 'Call 9305238955'}
          </Button>

          <Button
            onClick={() => onSelectForAppointment(doctor)}
            variant="teal"
            size="md"
            icon={<Calendar className="w-4 h-4" />}
          >
            {language === 'hi' ? 'इस डॉक्टर हेतु अपॉइंटमेंट पूछताछ' : 'Enquire for Appointment'}
          </Button>
        </div>
      </div>
    </div>
  );
};

