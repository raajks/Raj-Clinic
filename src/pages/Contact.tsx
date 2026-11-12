import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const topic = `${name} (${phone}): ${message || 'General Inquiry'}`;
    const url = getGeneralWhatsAppUrl(topic, language);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'संपर्क एवं पता' : 'Get in Touch'}
          badgeVariant="blue"
          title={language === 'hi' ? 'राज क्लिनिक से संपर्क करें' : 'Contact & Visit Raj Clinic'}
          subtitle={
            language === 'hi'
              ? 'दुदही गांधी चौक से मात्र 100 मीटर पूरब, ब्लॉक रोड। फोन, व्हाट्सएप अथवा सीधे केंद्र पर आकर परामर्श लें।'
              : 'Conveniently located in Dudahi, Kushinagar. Call or WhatsApp our front desk for appointment slots and guidance.'
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-3xl p-7 sm:p-9 shadow-xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-accent/20 text-teal-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'सत्यापित विवरण' : 'Verified Clinical Location'}</span>
            </div>

            <h3 className="text-2xl font-black text-white">
              {language === 'hi' ? 'राज क्लिनिक' : 'RAJ CLINIC'}
            </h3>

            <div className="space-y-5 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    {language === 'hi' ? 'पता' : 'Address'}
                  </span>
                  <p className="mt-1 leading-relaxed">
                    {language === 'hi'
                      ? 'दुदही गांधी चौक से 100 मीटर पूरब ब्लाक रोड, दुदही, जिला : कुशीनगर, उत्तर प्रदेश'
                      : '100m East of Gandhi Chowk, Purab Block Road, Dudahi, Kushinagar, Uttar Pradesh - 274302, India'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    {language === 'hi' ? 'फोन नंबर' : 'Phone'}
                  </span>
                  <a href={`tel:${clinicInfo.phone}`} className="mt-1 font-bold text-base text-white block hover:text-teal-accent">
                    +91 {clinicInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    {language === 'hi' ? 'व्हाट्सएप नंबर' : 'WhatsApp'}
                  </span>
                  <a href={clinicInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-1 font-bold text-white block hover:text-emerald-300">
                    +91 {clinicInfo.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    {language === 'hi' ? 'समय' : 'Timings'}
                  </span>
                  <p className="mt-1 text-xs text-slate-300">
                    {language === 'hi'
                      ? 'दैनिक ओपीडी: 8:00 AM से | आपातकालीन एवं डिलीवरी: 24 घंटे'
                      : 'Daily OPD from 8:00 AM | Normal Delivery & Emergency: 24 Hours'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={clinicInfo.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-teal-accent hover:bg-teal-hover text-navy-900 font-bold text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-accent/20"
              >
                <Navigation className="w-4 h-4" />
                <span>{language === 'hi' ? 'गूगल मैप्स दिशा-निर्देश' : 'Get Directions on Google Maps'}</span>
              </a>
            </div>
          </div>

          {/* Quick WhatsApp Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 shadow-premium border border-slate-200/80">
            <h3 className="text-xl font-bold text-navy-800 mb-2">
              {language === 'hi' ? 'त्वरित संदेश या सामान्य पूछताछ' : 'Quick Message to Clinic Desk'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              {language === 'hi'
                ? 'कोई सवाल या लक्षण के बारे में पूछने के लिए यह फॉर्म भरें। संदेश सीधे व्हाट्सएप पर खुलेगा।'
                : 'Send your general inquiry. It will be pre-formatted and sent via WhatsApp directly to our clinic staff.'}
            </p>

            <form onSubmit={handleSendMessage} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                  {language === 'hi' ? 'आपका नाम *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'hi' ? 'उदा. अमित वर्मा' : 'e.g. Amit Verma'}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-healthcare transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                  {language === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-healthcare transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                  {language === 'hi' ? 'आपका संदेश / प्रश्न' : 'Your Inquiry / Message'}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === 'hi'
                      ? 'क्लिनिक समय, डॉक्टर उपलब्धता अथवा किसी सेवा के बारे में पूछें...'
                      : 'Ask about consulting hours, doctor availability, or services...'
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-healthcare transition-colors"
                />
              </div>

              <Button
                type="submit"
                variant="teal"
                size="lg"
                icon={<Send className="w-4 h-4" />}
                className="w-full justify-center"
              >
                {language === 'hi' ? 'व्हाट्सएप द्वारा संदेश भेजें' : 'Send via WhatsApp'}
              </Button>
            </form>
          </div>
        </div>

        {/* Full Interactive Google Map */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-premium border border-slate-200/80">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-healthcare" />
              <span className="text-sm font-bold text-navy-800">
                {language === 'hi' ? 'राज क्लिनिक दुदही - गूगल मैप्स मानचित्र' : 'Raj Clinic Dudahi - Interactive Google Map'}
              </span>
            </div>
            <a
              href={clinicInfo.map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-healthcare hover:underline font-semibold flex items-center gap-1"
            >
              <span>{language === 'hi' ? 'बड़ा नक्शा खोलें' : 'Open in Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-[450px]">
            <iframe
              title="Raj Clinic Location Full Map"
              src={clinicInfo.map.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

