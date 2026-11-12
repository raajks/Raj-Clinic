import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const AboutSummary: React.FC = () => {
  const { language } = useLanguage();

  const keyPoints = [
    {
      en: 'Direct consultation with qualified surgeons, orthopedists, and physicians.',
      hi: 'योग्य शल्य चिकित्सक, हड्डी रोग विशेषज्ञ एवं अनुभवी फिजिशियन द्वारा प्रत्यक्ष परामर्श।'
    },
    {
      en: 'Specialized Kshara Sutra method for piles, fissure & fistula with minimal discomfort.',
      hi: 'बवासीर, भगन्दर एवं फिशर का क्षार सूत्र विधि द्वारा सुरक्षित एवं वैज्ञानिक उपचार।'
    },
    {
      en: 'Round-the-clock 24-hour normal delivery care and emergency first-response triage.',
      hi: '24 घंटे सुरक्षित सामान्य प्रसव (नार्मल डिलीवरी) एवं आपातकालीन प्राथमिक सहायता।'
    },
    {
      en: 'Convenient Dudahi Gandhi Chowk location with transparent, compassionate healthcare.',
      hi: 'दुदही गांधी चौक के निकट सुगम स्थान एवं मानवीय दृष्टिकोण से समर्पित सेवा।'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Trust Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
                alt="Raj Clinic Dudahi Healthcare Facility"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />

              {/* Inset overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-accent/20 text-teal-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-teal-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-800">
                      {language === 'hi' ? 'सत्यापित चिकित्सकीय सेवाएं' : 'Verified Clinical Services'}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {language === 'hi' ? 'दुदही, कुशीनगर की जनता के स्वास्थ्य सेवा में समर्पित' : 'Dedicated to the healthcare of Dudahi & Kushinagar'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 p-4 rounded-2xl bg-navy-800 text-white shadow-xl max-w-xs items-center gap-3">
              <HeartHandshake className="w-8 h-8 text-teal-accent shrink-0" />
              <div>
                <div className="text-xs font-bold">{language === 'hi' ? 'सहानुभूतिपूर्ण देखभाल' : 'Compassionate Care'}</div>
                <div className="text-[11px] text-slate-300">{language === 'hi' ? 'मरीज की संतुष्टि प्रथम' : 'Patient-first philosophy'}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              align="left"
              badge={language === 'hi' ? 'क्लिनिक परिचय' : 'About Raj Clinic'}
              badgeVariant="blue"
              title={language === 'hi' ? 'मरीज की देखभाल ही हमारी प्राथमिकता है।' : 'Care That Puts Patients First.'}
              subtitle={
                language === 'hi'
                  ? 'राज क्लिनिक दुदही, कुशीनगर में स्थित एक समर्पित स्वास्थ्य केंद्र है, जहाँ आधुनिक चिकित्सा परामर्श, शल्य चिकित्सा, प्रसूति एवं आपातकालीन सुविधाएं एक ही छत के नीचे सुलभ हैं।'
                  : 'Raj Clinic is a trusted local healthcare center in Dudahi, Kushinagar, bringing together qualified clinical consultants in surgery, orthopedics, general medicine, and round-the-clock maternity care.'
              }
              className="mb-6"
            />

            <div className="space-y-3.5 w-full mb-8">
              {keyPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 leading-snug">
                    {language === 'hi' ? pt.hi : pt.en}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                to="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                {language === 'hi' ? 'विस्तृत परिचय पढ़ें' : 'Read Full Overview'}
              </Button>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <MapPin className="w-4 h-4 text-healthcare" />
                <span>{language === 'hi' ? 'दुदही ब्लॉक रोड (कुशीनगर)' : 'Dudahi Block Road (Kushinagar)'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

