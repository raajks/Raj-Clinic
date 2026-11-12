import React from 'react';
import { ShieldCheck, HeartHandshake, MapPin, Award, Users, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { clinicInfo } from '../data/clinic';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const values = [
    {
      titleEn: 'Evidence-Based Consultations',
      titleHi: 'वैज्ञानिक एवं प्रमाणिक परामर्श',
      descEn: 'We provide realistic clinical evaluations by qualified surgeons and physicians without exaggerated claims.',
      descHi: 'योग्य चिकित्सकों द्वारा सटीक जांच व वैज्ञानिक परामर्श, बिना किसी भ्रामक या अवास्तविक दावे के।'
    },
    {
      titleEn: 'Patient Dignity & Privacy',
      titleHi: 'मरीज का सम्मान एवं गोपनीयता',
      descEn: 'Confidential consultations for sensitive conditions such as anorectal (piles/fistula) and reproductive health.',
      descHi: 'बवासीर, भगन्दर एवं व्यक्तिगत स्वास्थ्य समस्याओं में मरीज की पूर्ण गोपनीयता एवं सम्मान का ध्यान।'
    },
    {
      titleEn: 'Accessibility & Transparency',
      titleHi: 'सुलभता एवं स्पष्टता',
      descEn: 'Convenient Dudahi location with transparent WhatsApp-based appointment enquiries and fair pricing.',
      descHi: 'गांधी चौक दुदही के पास सहज आवागमन, व्हाट्सएप द्वारा सुगम संपर्क और उचित परामर्श शुल्क।'
    },
    {
      titleEn: 'Round-The-Clock Readiness',
      titleHi: 'चौबीसों घंटे तत्परता',
      descEn: '24-Hour support for normal maternity delivery and emergency initial stabilization.',
      descHi: 'सुरक्षित सामान्य प्रसव एवं प्राथमिक आपातकालीन चिकित्सा सहायता हेतु 24 घंटे तत्पर सहयोग।'
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeading
          badge={language === 'hi' ? 'हमारे बारे में' : 'About Raj Clinic'}
          badgeVariant="blue"
          title={language === 'hi' ? 'विश्वसनीय स्वास्थ्य सेवा, समर्पित चिकित्सा दल' : 'Committed to Patient Well-being in Dudahi'}
          subtitle={
            language === 'hi'
              ? 'राज क्लिनिक, दुदही (कुशीनगर) में अनुभवी डॉक्टरों के माध्यम से शल्य चिकित्सा, हड्डी रोग, सामान्य चिकित्सा एवं प्रसूति सेवाएं उपलब्ध कराता है।'
              : 'Raj Clinic provides primary medical care, general surgery, specialized Kshara Sutra procedures, orthopedic management, and 24-hour delivery facilities in Kushinagar.'
          }
        />
      </div>

      {/* Main Story Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
                alt="Raj Clinic Interior and Facility"
                className="w-full h-[440px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 rounded-3xl bg-navy-800 text-white shadow-xl max-w-xs hidden sm:block">
              <div className="text-2xl font-black text-teal-accent">24/7</div>
              <div className="text-xs font-bold mt-1">
                {language === 'hi' ? 'सामान्य प्रसव एवं इमरजेंसी' : 'Normal Delivery & Triage'}
              </div>
              <div className="text-[11px] text-slate-300 mt-0.5">
                {language === 'hi' ? 'दुदही ब्लॉक रोड केंद्र' : 'Dudahi Block Road Center'}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-800 leading-tight">
              {language === 'hi'
                ? 'स्थानीय नागरिकों को उच्च स्तरीय प्राथमिक व विशिष्ट चिकित्सा उपलब्ध कराना'
                : 'Delivering Dependable Healthcare to Dudahi and Surrounding Communities'}
            </h3>

            <p>
              {language === 'hi'
                ? 'राज क्लिनिक की स्थापना दुदही और कुशीनगर जिले के ग्रामीण व अर्ध-शहरी निवासियों को सुलभ और गुणवत्तापूर्ण स्वास्थ्य सेवाएं प्रदान करने के संकल्प के साथ की गई है। अक्सर सामान्य शल्य चिकित्सा, बवासीर के क्षार सूत्र उपचार अथवा हड्डी एवं जोड़ रोग परामर्श हेतु मरीजों को बड़े शहरों की ओर जाना पड़ता था।'
                : 'Raj Clinic was established with a singular mission: to provide accessible, ethical, and high-quality medical consultations to the residents of Dudahi and neighboring villages of Kushinagar. Patients previously had to travel long distances for specialized anorectal Kshara Sutra procedures or orthopedic assessments.'}
            </p>

            <p>
              {language === 'hi'
                ? 'हमारे केंद्र पर डा० मनीष कुमार (M.S., Shalya), डा० कुलदीप शर्मा (M.B.B.S., D.Ortho), डा० शमसाद अख्तर सिद्दीकी (चिकित्सा पदाधिकारी) और डा० नवनीत कुमार शर्मा (D.O.T.T., D.Pharma) जैसे योग्य चिकित्सा पेशेवर सेवाएं दे रहे हैं।'
                : 'Our center brings together qualified medical professionals including Dr. Manish Kumar (M.S., Shalya), Dr. Kuldeep Sharma (M.B.B.S., D.Ortho), Dr. Shamsad Akhtar Siddiqui (Medical Officer), and Dr. Navneet Kumar Sharma (D.O.T.T., D.Pharma).'}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button to="/doctors" variant="primary" size="md">
                {language === 'hi' ? 'डॉक्टर्स से मिलें' : 'Meet Our Specialists'}
              </Button>
              <Button to="/appointment" variant="teal" size="md">
                {language === 'hi' ? 'अपॉइंटमेंट पूछताछ' : 'Book Consultation'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={language === 'hi' ? 'हमारे सिद्धांत' : 'Our Core Philosophy'}
            badgeVariant="teal"
            title={language === 'hi' ? 'मरीज केंद्रित सेवा के मूल स्तम्भ' : 'Core Principles of Patient Care'}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-slate-surface border border-slate-200/80 hover:bg-white hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-base font-bold text-navy-800 mb-2">
                  {language === 'hi' ? v.titleHi : v.titleEn}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'hi' ? v.descHi : v.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verification Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="p-6 rounded-3xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 leading-relaxed">
          <ShieldCheck className="w-6 h-6 text-healthcare mx-auto mb-2" />
          <p className="font-semibold text-sm mb-1">
            {language === 'hi' ? 'सत्यापित क्लिनिक विवरण एवं पारदर्शिता' : 'Verified Information Policy'}
          </p>
          <p>
            {language === 'hi'
              ? 'इस वेबसाइट पर प्रकाशित समस्त डॉक्टर योग्यताएं, परामर्श समय एवं क्लिनिक पते राज क्लिनिक के आधिकारिक मुद्रित पोस्टरों से सत्यापित किए गए हैं। हम किसी भी असत्यापित सफलता दर या अवास्तविक आंकड़ों को प्रकाशित नहीं करते।'
              : 'All practitioner qualifications, clinical schedules, and facility descriptions presented on this website are directly extracted and verified against official clinic reference banners. We strictly refrain from publishing unsubstantiated cure claims or fabricated statistics.'}
          </p>
        </div>
      </div>
    </div>
  );
};

