import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TopAnnouncementBar } from './components/layout/TopAnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { EventModal } from './components/common/EventModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Doctors } from './pages/Doctors';
import { Services } from './pages/Services';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { AppointmentPage } from './pages/AppointmentPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { MedicalDisclaimer } from './pages/MedicalDisclaimer';
import { VerificationReport } from './pages/VerificationReport';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-surface text-slate-text font-sans">
      <ScrollToTop />
      <EventModal />
      <TopAnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
          <Route path="/verification" element={<VerificationReport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

