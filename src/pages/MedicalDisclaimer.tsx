import React from 'react';
import { AlertTriangle, ShieldAlert, Heart, Phone, FileWarning } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { clinicInfo } from '../data/clinic';

export const MedicalDisclaimer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'चिकित्सा अस्वीकरण' : 'Medical Advisory'}
          badgeVariant="emergency"
          title={language === 'hi' ? 'महत्वपूर्ण चिकित्सीय अस्वीकरण' : 'Medical & Health Information Disclaimer'}
          subtitle={
            language === 'hi'
              ? 'कृपया राज क्लिनिक की वेबसाइट का उपयोग करने से पूर्व इन महत्वपूर्ण चिकित्सीय एवं कानूनी दिशानिर्देशों को ध्यानपूर्वक पढ़ें।'
              : 'Please review these important clinical notices regarding the informational nature of this website.'
          }
        />

        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-premium border border-slate-200/80 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Important Alert Notice */}
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="block text-sm font-bold mb-1">
                {language === 'hi' ? 'सामान्य जानकारी का नोटिस:' : 'General Information Only:'}
              </strong>
              {language === 'hi'
                ? 'इस वेबसाइट पर उपलब्ध पाठ्य सामग्री, चित्रों एवं विवरणों को किसी भी प्रकार से प्रत्यक्ष चिकित्सीय सलाह, औपचारिक निदान अथवा उपचार के पर्चे के रूप में न समझें।'
                : 'The contents of the Raj Clinic website, including text, graphics, procedure summaries, and schedule listings, are published solely for general awareness and educational purposes.'}
            </div>
          </div>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-navy-800 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-teal-accent" />
              <span>{language === 'hi' ? '1. व्यक्तिगत डॉक्टर परामर्श अनिवार्य है' : '1. Professional Doctor-Patient Consultation'}</span>
            </h3>
            <p>
              {language === 'hi'
                ? 'वेबसाइट पर उल्लिखित कोई भी जानकारी योग्य चिकित्सक के साथ प्रत्यक्ष आमने-सामने परामर्श का स्थान नहीं ले सकती। किसी भी बीमारी या लक्षण के निवारण हेतु योग्य डॉक्टर से शारीरिक परीक्षण करवाकर ही दवा या उपचार प्रारंभ करें।'
                : 'The information here is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.'}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-navy-800 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-emergency" />
              <span>{language === 'hi' ? '2. आपातकालीन स्थिति एवं जीवन रक्षा प्रोटोकॉल' : '2. Acute Emergency Protocol'}</span>
            </h3>
            <p>
              {language === 'hi'
                ? `यदि आप या आपके परिवार का कोई सदस्य किसी गंभीर चिकित्सीय आपात स्थिति (जैसे अत्यधिक रक्तस्त्राव, छाती में तेज दर्द, सांस लेने में असमर्थता या गंभीर आघात) से पीड़ित है, तो वेबसाइट के फॉर्म का इंतजार न करें। तुरंत हमारे आपातकालीन नंबर ${clinicInfo.phoneFormatted} पर फोन करें अथवा नजदीकी प्राथमिक स्वास्थ्य केंद्र / एम्बुलेंस सेवा (108) से संपर्क करें।`
                : `If you are experiencing a life-threatening medical emergency (such as severe chest pain, shortness of breath, sudden paralysis, or profuse hemorrhaging), do not wait for an online enquiry response. Immediately call the Raj Clinic emergency desk at ${clinicInfo.phoneFormatted}, or dial emergency services (108) or proceed to the nearest emergency room.`}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-navy-800 flex items-center gap-2">
              <Heart className="w-5 h-5 text-healthcare" />
              <span>{language === 'hi' ? '3. अपॉइंटमेंट पूछताछ की प्रकृति' : '3. Nature of Appointment Enquiries'}</span>
            </h3>
            <p>
              {language === 'hi'
                ? 'वेबसाइट पर दिया गया अपॉइंटमेंट फॉर्म केवल एक अनुरोध (Enquiry Request) है। यह किसी भी प्रकार की स्वतः पक्की बुकिंग नहीं है। डॉक्टर की वास्तविक उपलब्धता, आपातकालीन आपरेशनों एवं रोस्टर के आधार पर क्लिनिक स्टाफ द्वारा समय की पुष्टि की जाती है।'
                : 'Submissions made through this website represent appointment enquiry requests. They do not constitute guaranteed, confirmed, or pre-scheduled bookings. Consultation availability is confirmed individually by clinic administrative staff based on live doctor rosters and emergency surgical requirements.'}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-navy-800">
              {language === 'hi' ? '4. कोई उपचार गारंटी नहीं' : '4. No Guarantee or Warranty of Medical Outcome'}
            </h3>
            <p>
              {language === 'hi'
                ? 'चिकित्सा विज्ञान में उपचार की प्रतिक्रिया प्रत्येक व्यक्ति की शारीरिक स्थिति पर निर्भर करती है। राज क्लिनिक किसी भी बीमारी के 100% ठीक होने या अवास्तविक परिणामों का कोई भ्रामक दावा नहीं करता।'
                : 'Medical outcomes depend fundamentally upon individual physiology, clinical stage, underlying comorbidities, and patient compliance. Raj Clinic strictly does not advertise guaranteed outcomes, absolute cure rates, or misleading claims.'}
            </p>
          </section>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
            {language === 'hi'
              ? 'राज क्लिनिक, दुदही, कुशीनगर (उत्तर प्रदेश) • संपर्क: 9305238955'
              : 'Raj Clinic, Dudahi, Kushinagar (Uttar Pradesh) • Contact: 9305238955'}
          </div>
        </div>
      </div>
    </div>
  );
};

