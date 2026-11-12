import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { faqsData } from '../../data/faqs';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { clinicInfo } from '../../data/clinic';

export const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-location');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
          badgeVariant="teal"
          title={language === 'hi' ? 'सामान्य प्रश्न एवं उपयोगी उत्तर' : 'Frequently Asked Questions'}
          subtitle={
            language === 'hi'
              ? 'राज क्लिनिक के स्थान, डॉक्टर समय, परामर्श शुल्क एवं अपॉइंटमेंट से जुड़े सभी सवालों के स्पष्ट उत्तर।'
              : 'Clear, verified answers regarding Raj Clinic location, specialist timings, maternity care, and appointment enquiries.'
          }
        />

        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            const q = language === 'hi' ? faq.questionHi : faq.questionEn;
            const a = language === 'hi' ? faq.answerHi : faq.answerEn;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-navy-800 leading-snug">
                    {q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-teal-accent/20 text-teal-800' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                    <p className="mt-3">{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-navy-800 to-healthcare text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl shadow-navy-900/10">
          <div>
            <h4 className="text-base font-bold">
              {language === 'hi' ? 'कोई अन्य सवाल है?' : 'Still have queries?'}
            </h4>
            <p className="text-xs text-slate-200 mt-1">
              {language === 'hi'
                ? 'क्लिनिक टीम से सीधे व्हाट्सएप पर पूछें या कॉल करें।'
                : 'Directly reach our front desk on WhatsApp or give us a call.'}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${clinicInfo.phone}`}
              className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call 9305238955</span>
            </a>

            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-teal-accent hover:bg-teal-hover text-navy-900 text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

