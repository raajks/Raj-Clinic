import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { clinicInfo } from '../data/clinic';

export const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'गोपनीयता नीति' : 'Privacy & Trust'}
          badgeVariant="blue"
          title={language === 'hi' ? 'मरीज गोपनीयता एवं डेटा संरक्षण नीति' : 'Patient Privacy & Data Protection Policy'}
          subtitle={
            language === 'hi'
              ? 'राज क्लिनिक आपकी व्यक्तिगत और स्वास्थ्य संबंधी जानकारी की सुरक्षा एवं गोपनीयता का पूर्ण सम्मान करता है।'
              : 'Raj Clinic is dedicated to preserving the absolute confidentiality, integrity, and security of patient information.'
          }
        />

        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-premium border border-slate-200/80 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-navy-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-teal-accent" />
              <span>{language === 'hi' ? '1. जानकारी का संग्रह एवं उद्देश्य' : '1. Information Collection & Purpose'}</span>
            </h3>
            <p>
              {language === 'hi'
                ? 'राज क्लिनिक वेबसाइट केवल अपॉइंटमेंट पूछताछ और संपर्क हेतु आवश्यक न्यूनतम जानकारी (जैसे मरीज का नाम, मोबाइल नंबर, पसंदीदा डॉक्टर और तारीख) लेती है। यह जानकारी किसी केंद्रीय सर्वर या डेटाबेस में अनावश्यक रूप से संग्रहीत नहीं की जाती।'
                : 'Raj Clinic collects only the minimal contact information strictly necessary to facilitate appointment enquiries and communication—namely the patient name, mobile contact number, preferred consulting doctor, and date. We do not store sensitive medical records or financial data on public servers.'}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-navy-800 flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-teal-accent" />
              <span>{language === 'hi' ? '2. व्हाट्सएप आधारित सीधी संचार व्यवस्था' : '2. Direct WhatsApp Communication'}</span>
            </h3>
            <p>
              {language === 'hi'
                ? 'वेबसाइट का अपॉइंटमेंट फॉर्म सबमिट करने पर डेटा सीधे आपके व्यक्तिगत व्हाट्सएप के माध्यम से क्लिनिक के आधिकारिक नंबर (9305238955) पर भेजा जाता है। व्हाट्सएप एंड-टू-एंड एन्क्रिप्शन द्वारा आपके संचार को सुरक्षित रखता है।'
                : 'When you submit an appointment enquiry on our website, the data is formulated into a direct message sent through your WhatsApp to the official Raj Clinic phone number (+91 93052 38955). Messages in transit are protected by WhatsApp’s end-to-end encryption protocols.'}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-navy-800 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-accent" />
              <span>{language === 'hi' ? '3. तीसरे पक्ष के साथ कोई साझा नहीं' : '3. Zero Third-Party Data Selling or Sharing'}</span>
            </h3>
            <p>
              {language === 'hi'
                ? 'हम आपके फोन नंबर या व्यक्तिगत विवरण को किसी भी तीसरे पक्ष, विज्ञापनदाता या टेलीमार्केटिंग एजेंसी के साथ न तो बेचते हैं और न ही साझा करते हैं। आपकी जानकारी का उपयोग केवल क्लिनिक अपॉइंटमेंट समन्वय हेतु होता है।'
                : 'Raj Clinic never sells, leases, or distributes patient phone numbers or details to third-party marketing companies, advertisers, or aggregators. Your information is solely accessed by authorized clinic personnel.'}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-navy-800 flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-accent" />
              <span>{language === 'hi' ? '4. क्लिनिक संपर्क' : '4. Privacy Inquiries'}</span>
            </h3>
            <p>
              {language === 'hi'
                ? `यदि आपके पास हमारी गोपनीयता प्रथाओं के संबंध में कोई प्रश्न है, तो आप सीधे हमारे क्लिनिक नंबर +91 ${clinicInfo.phone} पर संपर्क कर सकते हैं।`
                : `For questions regarding our privacy practices or data handling, please contact the Raj Clinic desk at +91 ${clinicInfo.phone} or visit us at Gandhi Chowk, Dudahi.`}
            </p>
          </section>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
            {language === 'hi'
              ? 'अंतिम संशोधन: 12 नवंबर 2026 | राज क्लिनिक, दुदही, कुशीनगर'
              : 'Last Updated: November 12, 2026 | Raj Clinic, Dudahi, Kushinagar'}
          </div>
        </div>
      </div>
    </div>
  );
};

