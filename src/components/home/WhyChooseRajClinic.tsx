import React from 'react';
import { MapPin, Users, PhoneCall, CalendarCheck, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';

export const WhyChooseRajClinic: React.FC = () => {
  const { language } = useLanguage();

  const reasons = [
    {
      icon: <MapPin className="w-6 h-6 text-teal-accent" />,
      titleEn: 'Centrally Located in Dudahi',
      titleHi: 'दुदही में सुगम एवं केंद्रीय स्थान',
      descEn: 'Located just 100 meters East of Gandhi Chowk on Purab Block Road, easily reachable from rural Kushinagar areas.',
      descHi: 'गांधी चौक से मात्र 100 मीटर पूरब, ब्लॉक रोड पर स्थित। स्थानीय गांवों एवं कस्बों से आसान आवागमन सुविधा।'
    },
    {
      icon: <Users className="w-6 h-6 text-healthcare" />,
      titleEn: 'Qualified Multi-Specialty Practitioners',
      titleHi: 'योग्य एवं अनुभवी चिकित्सक दल',
      descEn: 'Specialist care in General Surgery (M.S., Shalya), Orthopedics (M.B.B.S., D.Ortho), and Primary Medicine under one roof.',
      descHi: 'शल्य चिकित्सक (M.S.), हड्डी एवं नस विशेषज्ञ (M.B.B.S., D.Ortho) एवं योग्य मेडिकल ऑफिसर की संयुक्त उपलब्धता।'
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-teal-accent" />,
      titleEn: 'Transparent WhatsApp Appointment Enquiry',
      titleHi: 'व्हाट्सएप आधारित पारदर्शी पूछताछ',
      descEn: 'Patients can submit doctor preferences and convenient dates online to receive direct clinic WhatsApp confirmation.',
      descHi: 'मरीज ऑनलाइन पसंदीदा डॉक्टर व समय चुनकर क्लिनिक के व्हाट्सएप पर सीधे उपलब्धता की पुष्टि पा सकते हैं।'
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-emergency" />,
      titleEn: '24-Hour Delivery & Emergency Assistance',
      titleHi: '24 घंटे प्रसव एवं आपातकालीन सहायता',
      descEn: 'Round-the-clock availability for normal delivery cases and immediate clinical stabilization for urgent conditions.',
      descHi: 'सुरक्षित नार्मल डिलेवरी एवं अचानक बिगड़ी तबियत में प्राथमिक उपचार हेतु 24 घंटे तत्पर क्लिनिकल सहयोग।'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-healthcare" />,
      titleEn: 'Evidence-Based & Medically Responsible Care',
      titleHi: 'प्रमाणिक एवं जिम्मेदार चिकित्सा नीति',
      descEn: 'We provide realistic clinical evaluations and clear consultations without sensational or misleading guarantees.',
      descHi: 'हम भ्रामक दावों के बजाय वैज्ञानिक तथ्यों और मरीज के सर्वोत्तम स्वास्थ्य हित को प्राथमिकता देते हैं।'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-pink-500" />,
      titleEn: 'Compassionate Patient-First Environment',
      titleHi: 'मरीजों के प्रति संवेदनशील व्यवहार',
      descEn: 'Clean consultation chambers, polite staff, and respectful attention for every patient and their family.',
      descHi: 'स्वच्छ वातावरण, विनम्र सहयोगी स्टाफ एवं प्रत्येक मरीज और उनके परिजनों के प्रति आत्मीय व सम्मानजनक भाव।'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'सत्यापित विशेषताएं' : 'Verified Advantages'}
          badgeVariant="blue"
          title={language === 'hi' ? 'राज क्लिनिक ही क्यों चुनें?' : 'Why Choose Raj Clinic?'}
          subtitle={
            language === 'hi'
              ? 'दुदही एवं कुशीनगर क्षेत्र के नागरिकों के लिए विश्वसनीय, सुगम और समर्पित स्वास्थ्य सेवाएं।'
              : 'Reliable healthcare standards, verified doctors, and patient-centered service in Dudahi, Kushinagar.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-surface border border-slate-200/80 hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm inline-flex mb-5">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-navy-800 leading-snug">
                  {language === 'hi' ? item.titleHi : item.titleEn}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
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

