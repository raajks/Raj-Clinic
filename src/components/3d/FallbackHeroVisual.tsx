import React from 'react';
import { Shield, Heart, Activity, Stethoscope, Award, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const FallbackHeroVisual: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center select-none">
      {/* Decorative gradient glow rings */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-healthcare/20 via-teal-accent/25 to-navy-800/10 blur-3xl -z-10 animate-pulse-subtle" />
      <div className="absolute w-56 h-56 rounded-full bg-teal-accent/15 blur-2xl -z-10" />

      {/* Central Medical Emblem Card */}
      <div className="relative z-10 w-64 sm:w-80 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/95 to-slate-50/90 shadow-2xl border border-white/60 backdrop-blur-xl">
        {/* Medical Cross Graphic with Glass Glow */}
        <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-teal-accent/20 blur-md" />
          <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-navy-800 to-healthcare flex items-center justify-center shadow-lg shadow-navy-900/25">
            {/* 3D Cross Structure */}
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="absolute w-5 h-14 bg-white rounded-md shadow-sm" />
              <div className="absolute w-14 h-5 bg-white rounded-md shadow-sm" />
              <div className="relative z-10 w-4 h-4 rounded-full bg-teal-accent shadow-inner flex items-center justify-center">
                <Heart className="w-2.5 h-2.5 text-navy-800 fill-navy-800" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <h3 className="text-lg font-bold text-navy-800">
            {language === 'hi' ? 'राज क्लिनिक' : 'RAJ CLINIC'}
          </h3>
          <p className="text-xs font-semibold text-healthcare mt-0.5">
            {language === 'hi' ? 'दुदही, कुशीनगर' : 'Dudahi, Kushinagar'}
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500 bg-slate-100/80 py-1.5 px-3 rounded-full">
            <Clock className="w-3 h-3 text-teal-accent" />
            <span>{language === 'hi' ? 'दैनिक ओ.पी.डी. 8:00 AM से' : 'Daily OPD from 8:00 AM'}</span>
          </div>
        </div>
      </div>

      {/* Floating Panel 1: Top Left - 24/7 Services */}
      <div className="absolute top-4 sm:top-8 left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-2xl bg-white/90 shadow-xl border border-slate-100 backdrop-blur-md animate-float-slow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emergency/10 text-emergency flex items-center justify-center font-bold">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-emergency">
              {language === 'hi' ? '24 घंटे सुविधा' : '24/7 Available'}
            </div>
            <div className="text-xs sm:text-sm font-bold text-navy-800">
              {language === 'hi' ? 'नार्मल डिलीवरी एवं इमरजेंसी' : 'Normal Delivery & Triage'}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Panel 2: Bottom Right - Surgery & Ortho */}
      <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-2xl bg-white/90 shadow-xl border border-slate-100 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500">
              {language === 'hi' ? 'विशेषज्ञ परामर्श' : 'Specialist Doctors'}
            </div>
            <div className="text-xs sm:text-sm font-bold text-navy-800">
              {language === 'hi' ? 'शल्य (M.S.) एवं हड्डी (M.B.B.S.)' : 'Surgery & Orthopedics'}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Panel 3: Bottom Left - Trust Verification */}
      <div className="hidden sm:flex absolute bottom-12 left-6 z-20 items-center gap-2 py-2 px-3.5 rounded-full bg-navy-800/90 text-white text-xs shadow-lg backdrop-blur-sm">
        <Shield className="w-3.5 h-3.5 text-teal-accent" />
        <span className="font-medium">
          {language === 'hi' ? 'सत्यापित क्लिनिक विवरण' : 'Verified Clinical Roster'}
        </span>
      </div>
    </div>
  );
};

