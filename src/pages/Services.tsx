import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { Service } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/services/ServiceCard';
import { Button } from '../components/common/Button';
import { Calendar, PhoneCall, ShieldCheck } from 'lucide-react';
import { clinicInfo } from '../data/clinic';

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'surgery' | 'orthopedic' | 'general' | 'maternity' | 'emergency'>('all');

  const filteredServices = servicesData.filter((s) => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  const handleEnquire = (service: Service) => {
    if (service.category === 'surgery') {
      navigate('/appointment?doctor=dr-manish-kumar');
    } else if (service.category === 'orthopedic') {
      navigate('/appointment?doctor=dr-kuldeep-sharma');
    } else if (service.category === 'general') {
      navigate('/appointment?doctor=dr-shamsad-akhtar-siddiqui');
    } else {
      navigate('/appointment');
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'चिकित्सा सेवाएं' : 'Clinical Specialties'}
          badgeVariant="blue"
          title={language === 'hi' ? 'राज क्लिनिक में उपलब्ध सम्पूर्ण सेवाएं' : 'Comprehensive Medical Services'}
          subtitle={
            language === 'hi'
              ? 'आधिकारिक पोस्टरों द्वारा सत्यापित 10 विशिष्ट स्वास्थ्य सेवाएं। प्रत्येक सेवा योग्य चिकित्सा पेशेवरों द्वारा संचालित है।'
              : 'Verified healthcare services extracted from printed clinic notices. Delivered by qualified medical doctors.'
          }
        />

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {language === 'hi' ? 'सभी सेवाएं (10)' : 'All Services (10)'}
          </button>
          <button
            onClick={() => setFilter('surgery')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'surgery'
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {language === 'hi' ? 'शल्य एवं क्षार सूत्र' : 'Surgery & Kshara Sutra'}
          </button>
          <button
            onClick={() => setFilter('orthopedic')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'orthopedic'
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {language === 'hi' ? 'हड्डी एवं नस रोग' : 'Orthopedics'}
          </button>
          <button
            onClick={() => setFilter('general')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'general'
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {language === 'hi' ? 'सामान्य व पाचन चिकित्सा' : 'General & Medicine'}
          </button>
          <button
            onClick={() => setFilter('maternity')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'maternity'
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {language === 'hi' ? 'नार्मल डिलीवरी' : 'Normal Delivery'}
          </button>
          <button
            onClick={() => setFilter('emergency')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'emergency'
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {language === 'hi' ? 'इमरजेंसी' : 'Emergency'}
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-navy-800">
              {language === 'hi' ? 'किसी विशेष लक्षण के संबंध में पूछना चाहते हैं?' : 'Need Guidance on a Specific Condition?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              {language === 'hi'
                ? 'हमारे क्लिनिक डेस्क से सीधे संपर्क करें। हम सही विशेषज्ञ डॉक्टर और समय के बारे में मार्गदर्शन करेंगे।'
                : 'Contact our front desk directly for clinical schedule guidance and doctor availability.'}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              href={`tel:${clinicInfo.phone}`}
              variant="outline"
              size="md"
              icon={<PhoneCall className="w-4 h-4 text-healthcare" />}
              className="flex-1 sm:flex-initial"
            >
              Call 9305238955
            </Button>

            <Button
              to="/appointment"
              variant="teal"
              size="md"
              icon={<Calendar className="w-4 h-4" />}
              className="flex-1 sm:flex-initial"
            >
              {language === 'hi' ? 'अपॉइंटमेंट' : 'Book'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

