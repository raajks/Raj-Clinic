import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { servicesData } from '../../data/services';
import { Service } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { ServiceCard } from '../services/ServiceCard';
import { Button } from '../common/Button';

export const ServicesOverview: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Highlight first 6 primary services on home
  const featuredServices = servicesData.slice(0, 6);

  const handleEnquire = (service: Service) => {
    // If service has an associated doctor, navigate with doctor pre-selection
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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'चिकित्सा सेवाएं' : 'Clinical Specialties'}
          badgeVariant="blue"
          title={language === 'hi' ? 'राज क्लिनिक में उपलब्ध प्रमुख सेवाएं' : 'Specialized Healthcare Services'}
          subtitle={
            language === 'hi'
              ? 'क्लीनिक के आधिकारिक पोस्टरों से सत्यापित सेवाएं। बवासीर, सामान्य शल्य क्रिया, हड्डी व नस रोग, सामान्य चिकित्सा एवं 24 घंटे प्रसव सुविधा।'
              : 'Verified clinical offerings extracted from printed clinic notices. From anorectal Kshara Sutra surgery to orthopedic joint care and normal delivery.'
          }
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* View All Services Callout */}
        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/services"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {language === 'hi' ? 'सभी 10 चिकित्सा सेवाएं देखें' : 'View All Medical Services'}
          </Button>

          <Button
            to="/appointment"
            variant="teal"
            size="lg"
          >
            {language === 'hi' ? 'अपॉइंटमेंट पूछताछ करें' : 'Enquire for Appointment'}
          </Button>
        </div>
      </div>
    </section>
  );
};

