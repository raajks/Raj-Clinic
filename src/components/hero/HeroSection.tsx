import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { clinicInfo } from '../../data/clinic';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { MedicalHeroCanvas } from '../3d/MedicalHeroCanvas';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-slate-50/60 to-slate-surface">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-healthcare/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Premium Healthcare Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-accent animate-ping" />
              <ShieldCheck className="w-4 h-4 text-healthcare" />
              <span className="text-xs font-bold text-navy-800 tracking-wide uppercase">
                {language === 'hi' ? 'सत्यापित स्वास्थ्य केंद्र • दुदही, कुशीनगर' : 'Verified Healthcare Center • Dudahi, Kushinagar'}
              </span>
            </div>

            {/* Cinematic Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy-800 tracking-tight leading-[1.12]">
              {language === 'hi' ? (
                <>
                  आपका स्वास्थ्य, <br />
                  <span className="text-gradient-teal">हमारी सर्वोच्च प्राथमिकता।</span>
                </>
              ) : (
                <>
                  Your Health, <br />
                  <span className="text-gradient-teal">Our Highest Priority.</span>
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'राज क्लिनिक, दुदही में योग्य एवं अनुभवी चिकित्सकों द्वारा सामान्य शल्य चिकित्सा, क्षार सूत्र पद्धति, हड्डी एवं जोड़ रोग, सामान्य स्वास्थ्य परामर्श तथा 24 घंटे सुरक्षित नार्मल डिलेवरी सुविधा।'
                : 'Quality healthcare, experienced medical professionals, and compassionate patient care at Raj Clinic, Dudahi. Dedicated specialist consultations and 24-hour maternity delivery services.'}
            </p>

            {/* Verified Quick Highlights Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-teal-accent" />
                <span className="font-semibold">{language === 'hi' ? 'दैनिक ओपीडी: 8:00 AM से' : 'Daily OPD from 8:00 AM'}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-healthcare" />
                <span>{language === 'hi' ? 'गांधी चौक से 100 मी. पूरब' : '100m East of Gandhi Chowk'}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'hi' ? '24 घंटे नार्मल डिलीवरी' : '24h Normal Delivery'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                to="/appointment"
                variant="teal"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
                className="w-full sm:w-auto justify-center"
              >
                {language === 'hi' ? 'अपॉइंटमेंट पूछताछ' : 'Book an Appointment'}
              </Button>

              <Button
                to="/services"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto justify-center"
              >
                {language === 'hi' ? 'उपलब्ध सेवाएं देखें' : 'Explore Our Services'}
              </Button>

              <Button
                href={`tel:${clinicInfo.phone}`}
                variant="secondary"
                size="lg"
                icon={<Phone className="w-4 h-4" />}
                className="w-full sm:w-auto justify-center"
              >
                {language === 'hi' ? 'कॉल करें: 9305238955' : 'Call Now'}
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Interactive Medical Canvas (5 cols) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <MedicalHeroCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

