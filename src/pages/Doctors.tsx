import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Calendar, Clock, Filter, AlertCircle } from 'lucide-react';
import { doctorsData } from '../data/doctors';
import { Doctor } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { DoctorCard } from '../components/doctors/DoctorCard';
import { DoctorDetailModal } from '../components/doctors/DoctorDetailModal';
import { Button } from '../components/common/Button';

export const Doctors: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [filter, setFilter] = useState<'all' | 'surgery' | 'orthopedic' | 'medicine'>('all');

  const handleSelectForAppointment = (doctor: Doctor) => {
    setSelectedDoctor(null);
    navigate(`/appointment?doctor=${doctor.id}`);
  };

  const filteredDoctors = doctorsData.filter((doc) => {
    if (filter === 'all') return true;
    if (filter === 'surgery') return doc.id === 'dr-manish-kumar';
    if (filter === 'orthopedic') return doc.id === 'dr-kuldeep-sharma';
    if (filter === 'medicine') return doc.id === 'dr-shamsad-akhtar-siddiqui' || doc.id === 'dr-navneet-kumar-sharma';
    return true;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'चिकित्सक रोस्टर' : 'Specialist Directory'}
          badgeVariant="teal"
          title={language === 'hi' ? 'राज क्लिनिक के विशेषज्ञ डॉक्टर्स' : 'Our Medical Specialists'}
          subtitle={
            language === 'hi'
              ? 'आधिकारिक पोस्टरों से सत्यापित रोस्टर। सर्जरी, आर्थोपेडिक्स, एवं जनरल मेडिसिन में योग्य परामर्शदाता।'
              : 'Verified medical consultants in General Surgery, Kshara Sutra, Orthopedics & Joint care, and General Practice.'
          }
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {language === 'hi' ? 'सभी डॉक्टर्स (4)' : 'All Specialists (4)'}
          </button>
          <button
            onClick={() => setFilter('surgery')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'surgery'
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {language === 'hi' ? 'शल्य चिकित्सा (Surgery)' : 'General Surgery'}
          </button>
          <button
            onClick={() => setFilter('orthopedic')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'orthopedic'
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {language === 'hi' ? 'हड्डी एवं नस रोग (Ortho)' : 'Orthopedics'}
          </button>
          <button
            onClick={() => setFilter('medicine')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'medicine'
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {language === 'hi' ? 'सामान्य चिकित्सा (Physician)' : 'General Medicine'}
          </button>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredDoctors.map((doc) => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              onViewDetails={(d) => setSelectedDoctor(d)}
              onBookAppointment={(d) => handleSelectForAppointment(d)}
            />
          ))}
        </div>

        {/* Schedule & Verification Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-accent flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-navy-800">
                {language === 'hi' ? 'पारदर्शिता एवं सत्यापन गारंटी' : 'Verified Information & Transparent Scheduling'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {language === 'hi'
                  ? 'सभी डॉक्टरों की उपाधियाँ, योग्यताएँ एवं परामर्श समय क्लिनिक के मुद्रित पोस्टरों से लिए गए हैं। डॉक्टर की वास्तविक तस्वीरें क्लिनिक प्रबंधन द्वारा उपलब्ध कराए जाने पर अपडेट कर दी जाएंगी।'
                  : 'All qualifications, degrees, and consulting slots are derived directly from printed clinic materials. Doctor portraits are currently high-grade placeholders until official high-res clinic photos are supplied.'}
              </p>
            </div>
          </div>

          <Button
            to="/appointment"
            variant="teal"
            size="lg"
            icon={<Calendar className="w-5 h-5" />}
            className="w-full md:w-auto shrink-0 justify-center"
          >
            {language === 'hi' ? 'अपॉइंटमेंट पूछताछ' : 'Enquire for Slot'}
          </Button>
        </div>

        {/* Doctor Modal */}
        <DoctorDetailModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          onSelectForAppointment={handleSelectForAppointment}
        />
      </div>
    </div>
  );
};

