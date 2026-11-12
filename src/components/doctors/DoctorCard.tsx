import React from 'react';
import { Calendar, Clock, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { Doctor } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface DoctorCardProps {
  doctor: Doctor;
  onViewDetails: (doctor: Doctor) => void;
  onBookAppointment: (doctor: Doctor) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  onViewDetails,
  onBookAppointment,
}) => {
  const { language } = useLanguage();

  const name = language === 'hi' ? doctor.nameHi : doctor.nameEn;
  const spec = language === 'hi' ? doctor.specializationHi : doctor.specializationEn;
  const timing = language === 'hi' ? doctor.timingHi : doctor.timingEn;
  const role = language === 'hi' ? doctor.roleHi : doctor.roleEn;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-premium border border-slate-200/80 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      {/* Top Image Container */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={doctor.image}
          alt={`${doctor.nameEn} - ${doctor.qualification}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />

        {/* Verification Pill */}
        <div className="absolute top-3 left-3">
          <Badge variant="teal" size="sm">
            <ShieldCheck className="w-3 h-3 text-teal-accent" />
            <span>{language === 'hi' ? 'पोस्टर द्वारा सत्यापित' : 'Verified Roster'}</span>
          </Badge>
        </div>

        {/* Role Pill */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-navy-900/80 text-white backdrop-blur-sm">
            {role}
          </span>
        </div>

        {/* Doctor Name & Qualification Overlay */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="text-xl font-bold leading-tight drop-shadow-sm">{name}</h3>
          <p className="text-xs font-semibold text-teal-300 mt-0.5">{doctor.qualification}</p>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-healthcare leading-relaxed">
            {spec}
          </p>

          <div className="mt-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-navy-800 block">
                {language === 'hi' ? 'परामर्श समय' : 'Consultation Hours'}
              </span>
              <span className="text-slate-600 leading-tight block mt-0.5">{timing}</span>
            </div>
          </div>

          {/* Key clinical scopes (first 2) */}
          <div className="mt-3 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              {language === 'hi' ? 'प्रमुख चिकित्सीय क्षेत्र' : 'Primary Scope'}
            </span>
            <ul className="text-xs text-slate-600 space-y-1">
              {(language === 'hi' ? doctor.scopeOfCareHi : doctor.scopeOfCareEn)
                .slice(0, 2)
                .map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-accent shrink-0 mt-1.5" />
                    <span className="line-clamp-1">{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <button
            onClick={() => onViewDetails(doctor)}
            className="flex-1 py-2 px-3 text-xs font-bold text-navy-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center"
          >
            {language === 'hi' ? 'विवरण देखें' : 'View Profile'}
          </button>

          <Button
            onClick={() => onBookAppointment(doctor)}
            variant="teal"
            size="sm"
            icon={<Calendar className="w-3.5 h-3.5" />}
          >
            {language === 'hi' ? 'पूछताछ' : 'Book'}
          </Button>
        </div>
      </div>
    </div>
  );
};

