import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Activity, Bed, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
import { facilitiesData } from '../../data/facilities';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const FacilitiesPreview: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-slate-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'अस्पताल सुविधाएं' : 'Clinic Infrastructure'}
          badgeVariant="teal"
          title={language === 'hi' ? 'मरीजों की सुविधा एवं निरंतर देखभाल' : 'Modern Patient Infrastructure'}
          subtitle={
            language === 'hi'
              ? 'आधिकारिक पोस्टरों में उल्लिखित 24 घंटे नार्मल डिलेवरी, ऑपरेशन, मरीज भर्ती एवं आपातकालीन सुविधाएं।'
              : 'Dedicated facilities verified from printed clinic posters, ensuring prompt clinical response and maternal care.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {facilitiesData.slice(0, 4).map((facility) => {
            const title = language === 'hi' ? facility.titleHi : facility.titleEn;
            const desc = language === 'hi' ? facility.descriptionHi : facility.descriptionEn;
            const features = language === 'hi' ? facility.featuresHi : facility.featuresEn;

            return (
              <div
                key={facility.id}
                className="bg-white rounded-3xl overflow-hidden shadow-premium border border-slate-200/80 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={facility.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-base font-bold drop-shadow-sm leading-snug">
                      {title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
                      {language === 'hi' ? 'प्रमुख बिंदु' : 'Key Highlights'}
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {features.slice(0, 2).map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-accent shrink-0 mt-1.5" />
                          <span className="line-clamp-1">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            to="/facilities"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {language === 'hi' ? 'सभी सुविधाओं का पूर्ण विवरण देखें' : 'Explore All Facilities'}
          </Button>
        </div>
      </div>
    </section>
  );
};

