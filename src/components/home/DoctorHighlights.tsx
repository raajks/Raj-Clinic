import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { doctorsData } from '../../data/doctors';
import { Doctor } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { DoctorCard } from '../doctors/DoctorCard';
import { DoctorDetailModal } from '../doctors/DoctorDetailModal';
import { Button } from '../common/Button';

export const DoctorHighlights: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleSelectForAppointment = (doctor: Doctor) => {
    setSelectedDoctor(null);
    navigate(`/appointment?doctor=${doctor.id}`);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'विशेषज्ञ चिकित्सक' : 'Medical Specialists'}
          badgeVariant="teal"
          title={language === 'hi' ? 'अनुभवी एवं समर्पित डॉक्टर्स' : 'Experienced Medical Professionals'}
          subtitle={
            language === 'hi'
              ? 'राज क्लिनिक दुदही में शल्य चिकित्सा, हड्डी एवं जोड़ रोग तथा सामान्य स्वास्थ्य परामर्श हेतु विशेषज्ञ डॉक्टर निश्चित समय पर उपलब्ध हैं।'
              : 'Consult with qualified practitioners in General Surgery, Kshara Sutra therapy, Orthopedics, and Primary Care at scheduled timings.'
          }
        />

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {doctorsData.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onViewDetails={(doc) => setSelectedDoctor(doc)}
              onBookAppointment={(doc) => handleSelectForAppointment(doc)}
            />
          ))}
        </div>

        {/* Bottom Callout Strip */}
        <div className="mt-14 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-teal-accent" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-navy-800">
                {language === 'hi' ? 'आधिकारिक पोस्टर द्वारा सत्यापित जानकारी' : 'Information Verified From Official Clinic Posters'}
              </h4>
              <p className="text-xs text-slate-500">
                {language === 'hi' ? 'सभी डिग्री, योग्यताएं एवं ओपीडी समय पोस्टर विवरण पर आधारित हैं।' : 'All qualifications, degrees, and consulting hours reflect printed clinic records.'}
              </p>
            </div>
          </div>

          <Button
            to="/doctors"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {language === 'hi' ? 'सभी डॉक्टर्स देखें' : 'View All Profiles'}
          </Button>
        </div>

        {/* Detail Modal */}
        <DoctorDetailModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          onSelectForAppointment={handleSelectForAppointment}
        />
      </div>
    </section>
  );
};

