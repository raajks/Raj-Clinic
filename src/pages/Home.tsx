import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { AboutSummary } from '../components/home/AboutSummary';
import { DoctorHighlights } from '../components/home/DoctorHighlights';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { FacilitiesPreview } from '../components/home/FacilitiesPreview';
import { WhyChooseRajClinic } from '../components/home/WhyChooseRajClinic';
import { AppointmentSection } from '../components/home/AppointmentSection';
import { FAQSection } from '../components/home/FAQSection';
import { ContactOverview } from '../components/home/ContactOverview';

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrustStrip />
      <AboutSummary />
      <DoctorHighlights />
      <ServicesOverview />
      <FacilitiesPreview />
      <WhyChooseRajClinic />
      <AppointmentSection />
      <FAQSection />
      <ContactOverview />
    </div>
  );
};

