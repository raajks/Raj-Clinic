import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, Heart, ShieldCheck } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageToggle } from '../common/LanguageToggle';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', labelEn: 'Home', labelHi: 'होम' },
    { to: '/about', labelEn: 'About', labelHi: 'परिचय' },
    { to: '/doctors', labelEn: 'Doctors', labelHi: 'डॉक्टर्स' },
    { to: '/services', labelEn: 'Services', labelHi: 'सेवाएं' },
    { to: '/facilities', labelEn: 'Facilities', labelHi: 'सुविधाएं' },
    { to: '/gallery', labelEn: 'Gallery', labelHi: 'गैलरी' },
    { to: '/contact', labelEn: 'Contact', labelHi: 'संपर्क' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Clinic Brand & Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent rounded-lg"
            aria-label="Raj Clinic Home"
          >
            {/* Medical Logo Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-navy-800 to-healthcare text-white flex items-center justify-center shadow-md shadow-navy-900/15 group-hover:scale-105 transition-transform duration-200">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute w-2 h-6 bg-teal-accent rounded-sm" />
                <div className="absolute w-6 h-2 bg-teal-accent rounded-sm" />
                <div className="relative z-10 w-2 h-2 rounded-full bg-white shadow-sm" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-navy-800 leading-none">
                  RAJ CLINIC
                </span>
                <span className="text-xs font-bold text-teal-accent font-devanagari opacity-90">
                  राज क्लिनिक
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide mt-0.5">
                {language === 'hi' ? 'दुदही, कुशीनगर (उ.प्र.)' : 'Dudahi, Kushinagar (U.P.)'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 ${
                  isActive(link.to)
                    ? 'text-healthcare bg-healthcare-50 font-bold'
                    : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                }`}
              >
                {language === 'hi' ? link.labelHi : link.labelEn}
              </Link>
            ))}
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageToggle className="hidden lg:inline-flex" />

            <Button
              to="/appointment"
              variant="teal"
              size="md"
              icon={<Calendar className="w-4 h-4" />}
            >
              {language === 'hi' ? 'अपॉइंटमेंट पूछताछ' : 'Book Appointment'}
            </Button>
          </div>

          {/* Mobile Menu & Toggle Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle variant="light" className="scale-90" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-navy-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto px-5 py-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive(link.to)
                    ? 'bg-healthcare-50 text-healthcare font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {language === 'hi' ? link.labelHi : link.labelEn}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <Button
                to="/appointment"
                variant="teal"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
                className="w-full justify-center"
              >
                {language === 'hi' ? 'अपॉइंटमेंट पूछताछ' : 'Book Appointment'}
              </Button>

              <Button
                href={`tel:${clinicInfo.phone}`}
                variant="outline"
                size="md"
                icon={<Phone className="w-4 h-4 text-healthcare" />}
                className="w-full justify-center"
              >
                {language === 'hi' ? 'सीधे कॉल करें' : 'Call Clinic Now'}
              </Button>

              <div className="p-3 rounded-xl bg-slate-50 text-xs text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-accent shrink-0" />
                <span>
                  {language === 'hi'
                    ? 'गांधी चौक से 100 मीटर पूरब, ब्लॉक रोड, दुदही'
                    : 'Gandhi Chowk, Purab Block Road, Dudahi'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

