import React from 'react';
import { MapPin, Users, PhoneCall, Baby, CalendarCheck, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { clinicInfo } from '../../data/clinic';

export const TrustStrip: React.FC = () => {
  const { language } = useLanguage();

  const trustItems = [
    {
      icon: <MapPin className="w-5 h-5 text-teal-accent" />,
      titleEn: 'Accessible Location',
      titleHi: 'सुगम स्थानीय पता',
      descEn: 'Gandhi Chowk, Block Road, Dudahi',
      descHi: 'गांधी चौक से 100 मी. पूरब, ब्लॉक रोड, दुदही',
    },
    {
      icon: <Users className="w-5 h-5 text-healthcare" />,
      titleEn: 'Specialist Consultations',
      titleHi: 'विशेषज्ञ डॉक्टर सेवाएं',
      descEn: 'Surgery (M.S.), Ortho (M.B.B.S.), Physician',
      descHi: 'शल्य चिकित्सक, हड्डी रोग एवं सामान्य चिकित्सक',
    },
    {
      icon: <Baby className="w-5 h-5 text-pink-500" />,
      titleEn: 'Maternity & Delivery',
      titleHi: 'मातृत्व एवं प्रसव सुविधा',
      descEn: '24 Hours Normal Delivery Facility',
      descHi: '24 घंटे सुरक्षित नार्मल डिलीवरी सुविधा',
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-emergency" />,
      titleEn: 'Emergency Contact',
      titleHi: 'आपातकालीन सहायता',
      descEn: 'Call Hotline: 9305238955',
      descHi: 'सीधे संपर्क: 9305238955',
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl shadow-navy-900/5 border border-slate-200/80 p-6 sm:p-8 backdrop-blur-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
            >
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-800">
                  {language === 'hi' ? item.titleHi : item.titleEn}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {language === 'hi' ? item.descHi : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

