import React from 'react';
import { Baby, Activity, Bed, PhoneCall, Pill, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { facilitiesData } from '../data/facilities';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { clinicInfo } from '../data/clinic';

const iconMap: Record<string, React.ReactNode> = {
  Baby: <Baby className="w-6 h-6 text-pink-500" />,
  Activity: <Activity className="w-6 h-6 text-healthcare" />,
  Bed: <Bed className="w-6 h-6 text-indigo-500" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-emergency" />,
  Pill: <Pill className="w-6 h-6 text-teal-accent" />,
};

export const Facilities: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'चिकित्सीय सुविधाएं' : 'Clinical Infrastructure'}
          badgeVariant="teal"
          title={language === 'hi' ? 'आधुनिक स्वास्थ्य सुविधाएं एवं प्रसूति यूनिट' : 'Hospital Facilities & Infrastructure'}
          subtitle={
            language === 'hi'
              ? 'आधिकारिक पोस्टरों से सत्यापित सुविधाएं। 24 घंटे सामान्य प्रसव, ऑपरेशन थियेटर, मरीज भर्ती वार्ड एवं आपातकालीन सहायता।'
              : 'Verified facilities extracted from clinic banners. 24-Hour normal delivery, procedure theater, IPD observation, and emergency assistance.'
          }
        />

        {/* Facilities List / Grid */}
        <div className="space-y-12">
          {facilitiesData.map((facility, idx) => {
            const title = language === 'hi' ? facility.titleHi : facility.titleEn;
            const desc = language === 'hi' ? facility.descriptionHi : facility.descriptionEn;
            const features = language === 'hi' ? facility.featuresHi : facility.featuresEn;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={facility.id}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-premium border border-slate-200/80 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-md h-64 sm:h-72">
                      <img
                        src={facility.image}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-navy-800 backdrop-blur-sm shadow-sm">
                          <ShieldCheck className="w-3.5 h-3.5 text-teal-accent" />
                          <span>{language === 'hi' ? 'पोस्टर द्वारा सत्यापित' : 'Verified Facility'}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : ''} space-y-4`}>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {iconMap[facility.icon] || <Activity className="w-6 h-6 text-healthcare" />}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-navy-800 leading-tight">
                      {title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {desc}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        {language === 'hi' ? 'सुविधा की प्रमुख विशेषताएं' : 'Key Infrastructure Features'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {features.map((f, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {facility.notes && (
                      <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-healthcare shrink-0" />
                        <span><strong>{language === 'hi' ? 'सत्यापन स्रोत:' : 'Source:'}</strong> {facility.notes}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Helpline Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-navy-800 to-healthcare text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl font-bold">
              {language === 'hi' ? '24 घंटे प्रसव एवं आपातकालीन सहायता' : '24-Hour Maternity & Emergency Line'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl">
              {language === 'hi'
                ? 'नार्मल डिलीवरी अथवा रात के समय प्राथमिक चिकित्सकीय उपचार हेतु हमारे नंबर 9305238955 पर सीधे संपर्क करें।'
                : 'For round-the-clock normal delivery admission and acute emergency triage, directly contact 9305238955.'}
            </p>
          </div>

          <a
            href={`tel:${clinicInfo.phone}`}
            className="py-3 px-6 rounded-xl bg-emergency hover:bg-emergency-hover text-white font-bold text-sm shadow-md transition-colors shrink-0"
          >
            Call: {clinicInfo.phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
};

