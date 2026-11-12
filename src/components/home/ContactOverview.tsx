import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { clinicInfo } from '../../data/clinic';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const ContactOverview: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'संपर्क एवं स्थान' : 'Location & Contact'}
          badgeVariant="blue"
          title={language === 'hi' ? 'राज क्लिनिक तक कैसे पहुंचें' : 'Visit or Contact Raj Clinic'}
          subtitle={
            language === 'hi'
              ? 'दुदही गांधी चौक से मात्र 100 मीटर पूरब, ब्लॉक रोड पर स्थित। फोन, व्हाट्सएप या गूगल मैप्स द्वारा आसानी से संपर्क करें।'
              : 'Located 100 meters East of Gandhi Chowk on Block Road, Dudahi, Kushinagar. Reach out via phone, WhatsApp, or Google Maps.'
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-3xl p-7 sm:p-9 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-accent/20 text-teal-300 text-xs font-semibold mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'सत्यापित पता एवं संपर्क' : 'Verified Contact Details'}</span>
              </div>

              <h3 className="text-2xl font-black text-white leading-tight mb-2">
                {language === 'hi' ? 'राज क्लिनिक, दुदही' : 'Raj Clinic, Dudahi'}
              </h3>
              <p className="text-xs text-slate-300 mb-8">
                {language === 'hi' ? 'गांधी चौक से 100 मीटर पूरब, ब्लॉक रोड' : '100m East of Gandhi Chowk, Block Road'}
              </p>

              <div className="space-y-6 text-sm text-slate-200">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-teal-accent" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-bold">
                      {language === 'hi' ? 'पूर्ण पता' : 'Clinic Address'}
                    </span>
                    <p className="mt-1 font-medium leading-relaxed">
                      {language === 'hi'
                        ? 'दुदही गांधी चौक से 100 मीटर पूरब ब्लाक रोड, दुदही, जिला : कुशीनगर, उत्तर प्रदेश - 274302'
                        : '100m East of Gandhi Chowk, Purab Block Road, Dudahi, District Kushinagar, Uttar Pradesh - 274302, India'}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-teal-accent" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-bold">
                      {language === 'hi' ? 'फोन नंबर' : 'Phone Line'}
                    </span>
                    <a
                      href={`tel:${clinicInfo.phone}`}
                      className="mt-1 font-bold text-base text-white hover:text-teal-accent transition-colors block"
                    >
                      +91 {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-bold">
                      {language === 'hi' ? 'व्हाट्सएप पूछताछ' : 'WhatsApp Desk'}
                    </span>
                    <a
                      href={clinicInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 font-bold text-white hover:text-emerald-300 transition-colors block"
                    >
                      +91 {clinicInfo.whatsapp}
                    </a>
                  </div>
                </div>

                {/* OPD Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-teal-accent" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-bold">
                      {language === 'hi' ? 'क्लिनिक समय' : 'Consulting Hours'}
                    </span>
                    <p className="mt-1 font-medium text-xs leading-relaxed text-slate-300">
                      {language === 'hi'
                        ? 'प्रतिदिन ओपीडी: सुबह 08:00 बजे से | 24 घंटे सामान्य प्रसव व इमरजेंसी संपर्क'
                        : 'Daily OPD from 8:00 AM | 24/7 Normal Delivery & Emergency Response'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Directions Button */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={clinicInfo.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-teal-accent hover:bg-teal-hover text-navy-900 font-bold text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-accent/20"
              >
                <Navigation className="w-4 h-4" />
                <span>{language === 'hi' ? 'गूगल मैप्स पर दिशा-निर्देश प्राप्त करें' : 'Get Google Maps Directions'}</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-premium border border-slate-200/80 flex flex-col">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-healthcare" />
                <span className="text-xs font-bold text-navy-800">
                  {language === 'hi' ? 'दुदही गांधी चौक एवं ब्लॉक रोड क्षेत्र' : 'Dudahi Gandhi Chowk & Block Road Region'}
                </span>
              </div>
              <a
                href={clinicInfo.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-healthcare hover:underline flex items-center gap-1 font-semibold"
              >
                <span>{language === 'hi' ? 'बड़े नक्शे में देखें' : 'View Larger Map'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full min-h-[380px] bg-slate-100 relative">
              <iframe
                title="Raj Clinic Dudahi Location Map"
                src={clinicInfo.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

