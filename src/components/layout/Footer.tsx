import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Clock, ShieldAlert, Heart, ExternalLink } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-healthcare to-teal-accent text-white flex items-center justify-center font-bold shadow-md">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className="absolute w-1.5 h-5 bg-white rounded-sm" />
                  <div className="absolute w-5 h-1.5 bg-white rounded-sm" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-white tracking-tight">RAJ CLINIC</span>
                  <span className="text-sm font-bold text-teal-accent font-devanagari">राज क्लिनिक</span>
                </div>
                <p className="text-xs text-slate-400">Dudahi, Kushinagar, Uttar Pradesh</p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {language === 'hi'
                ? 'राज क्लिनिक, दुदही में अनुभवी डॉक्टरों द्वारा सामान्य शल्य चिकित्सा, क्षार सूत्र पद्धति, हड्डी एवं नस रोग, सामान्य चिकित्सा तथा 24 घंटे नार्मल डिलेवरी व आपातकालीन प्राथमिक सुविधा उपलब्ध है।'
                : 'Raj Clinic provides verified medical consultations, general surgery, specialized Kshara Sutra treatment, orthopedic joint care, and round-the-clock normal delivery services in Dudahi, Kushinagar.'}
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <span>
                  {language === 'hi' 
                    ? 'गांधी चौक से 100 मीटर पूरब, ब्लॉक रोड, दुदही, जिला कुशीनगर, उत्तर प्रदेश'
                    : '100m East of Gandhi Chowk, Block Road, Dudahi, Kushinagar, U.P., India'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-accent shrink-0" />
                <a href={`tel:${clinicInfo.phone}`} className="hover:text-white transition-colors">
                  +91 {clinicInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-accent shrink-0" />
                <span>
                  {language === 'hi'
                    ? 'दैनिक ओपीडी: 8:00 AM से | आपातकालीन एवं डिलीवरी: 24 घंटे'
                    : 'Daily OPD from 8:00 AM | Emergency & Delivery: 24 Hours'}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {language === 'hi' ? 'महत्वपूर्ण लिंक' : 'Quick Links'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-accent transition-colors">
                  {language === 'hi' ? 'मुख्य पृष्ठ (Home)' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-accent transition-colors">
                  {language === 'hi' ? 'क्लिनिक परिचय' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-teal-accent transition-colors">
                  {language === 'hi' ? 'डॉक्टर रोस्टर' : 'Our Doctors'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-accent transition-colors">
                  {language === 'hi' ? 'उपलब्ध चिकित्सा सेवाएं' : 'Medical Services'}
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-teal-accent transition-colors">
                  {language === 'hi' ? 'अस्पताल सुविधाएं' : 'Clinic Facilities'}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-teal-accent transition-colors">
                  {language === 'hi' ? 'पोस्टर एवं गैलरी' : 'Hospital Gallery'}
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-teal-accent transition-colors">
                  {language === 'hi' ? 'अपॉइंटमेंट पूछताछ' : 'Appointment Enquiry'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Consulting Doctors */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {language === 'hi' ? 'परामर्शदाता डॉक्टर्स' : 'Specialist Roster'}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="p-2.5 rounded-lg bg-navy-800/60 border border-navy-700/50">
                <div className="font-bold text-white">Dr. Manish Kumar</div>
                <div className="text-teal-accent">M.S., Shalya (Daily 8-11 AM)</div>
                <div className="text-[11px] text-slate-400">Surgery & Kshara Sutra</div>
              </li>
              <li className="p-2.5 rounded-lg bg-navy-800/60 border border-navy-700/50">
                <div className="font-bold text-white">Dr. Kuldeep Sharma</div>
                <div className="text-teal-accent">M.B.B.S., D.Ortho (Mon & Fri 12-5 PM)</div>
                <div className="text-[11px] text-slate-400">Orthopedic & Nerve Care</div>
              </li>
              <li className="p-2.5 rounded-lg bg-navy-800/60 border border-navy-700/50">
                <div className="font-bold text-white">Dr. Shamsad Akhtar Siddiqui</div>
                <div className="text-teal-accent">Medical Officer (Daily 2-6 PM & Sun)</div>
                <div className="text-[11px] text-slate-400">General Medicine</div>
              </li>
            </ul>
          </div>

          {/* Col 4: Emergency & Direct Action */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {language === 'hi' ? 'आपातकालीन सहायता' : 'Emergency & Contact'}
            </h4>
            <div className="p-4 rounded-xl bg-emergency/10 border border-emergency/30 space-y-3">
              <div className="flex items-center gap-2 text-emergency font-bold text-sm">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{language === 'hi' ? '24 घंटे फोन सहायता' : '24/7 Helpline'}</span>
              </div>
              <p className="text-xs text-slate-300">
                {language === 'hi'
                  ? 'प्रसव एवं प्राथमिक आपात स्थिति में तुरंत संपर्क करें:'
                  : 'For delivery or acute medical triage, call immediately:'}
              </p>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="block text-center py-2 px-3 rounded-lg bg-emergency hover:bg-emergency-hover text-white text-xs font-bold transition-colors"
              >
                Call: {clinicInfo.phoneFormatted}
              </a>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
              >
                WhatsApp Desk
              </a>
            </div>

            <div className="mt-4">
              <Link
                to="/verification"
                className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:underline"
              >
                <span>{language === 'hi' ? 'सत्यापन रिपोर्ट देखें' : 'View Verification Report'}</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Medical & Legal Disclaimer Banner */}
        <div className="mt-8 pt-6 pb-4 text-xs text-slate-400 leading-relaxed border-b border-navy-800/80">
          <p>
            <strong className="text-slate-300">
              {language === 'hi' ? 'चिकित्सीय अस्वीकरण (Medical Disclaimer): ' : 'Medical Disclaimer: '}
            </strong>
            {language === 'hi'
              ? 'इस वेबसाइट पर प्रस्तुत समस्त जानकारी केवल सामान्य स्वास्थ्य जागरूकता और क्लिनिक की प्राथमिक सेवाओं से परिचय कराने के उद्देश्य से है। यह किसी योग्य चिकित्सक द्वारा किए जाने वाले व्यक्तिगत चिकित्सीय परामर्श, निदान अथवा उपचार का विकल्प नहीं है। किसी भी स्वास्थ्य समस्या में स्वयं से दवा न लें और चिकित्सक से सीधे मिलें। वेबसाइट के माध्यम से किया गया अनुरोध अपॉइंटमेंट पूछताछ है, स्वचालित बुकिंग नहीं।'
              : 'The information provided on this website is for general informational and educational purposes only and does not constitute formal medical diagnosis, treatment, or professional advice. Always seek the advice of a qualified healthcare provider regarding any medical condition. Submissions through this website are appointment enquiry requests, subject to physical clinic confirmation.'}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} RAJ CLINIC, Dudahi, Kushinagar. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              {language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
            </Link>
            <Link to="/medical-disclaimer" className="hover:text-white transition-colors">
              {language === 'hi' ? 'चिकित्सा अस्वीकरण' : 'Medical Disclaimer'}
            </Link>
            <Link to="/verification" className="hover:text-white transition-colors">
              {language === 'hi' ? 'सत्यापन विवरण' : 'Audit Data'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

