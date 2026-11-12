import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Clock, User, Phone, MessageSquare, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { doctorsData } from '../../data/doctors';
import { clinicInfo } from '../../data/clinic';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { buildWhatsAppAppointmentUrl } from '../../utils/whatsapp';
import confetti from 'canvas-confetti';

const appointmentSchema = z.object({
  patientName: z.string().min(2, { message: 'Patient name must be at least 2 characters' }),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian mobile number' }),
  doctorId: z.string().min(1, { message: 'Please select a preferred doctor' }),
  preferredDate: z.string().min(1, { message: 'Please choose your preferred appointment date' }),
  preferredTime: z.string().min(1, { message: 'Please select preferred time slot' }),
  enquiryNotes: z.string().max(200, { message: 'Brief note should not exceed 200 characters' }).optional(),
});

type FormData = z.infer<typeof appointmentSchema>;

interface AppointmentSectionProps {
  initialDoctorId?: string;
  isStandalonePage?: boolean;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialDoctorId = '',
  isStandalonePage = false,
}) => {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      doctorId: initialDoctorId || (doctorsData[0]?.id ?? ''),
      preferredTime: 'Morning (09:00 AM - 12:00 PM)',
      preferredDate: new Date().toISOString().split('T')[0],
      enquiryNotes: '',
    },
  });

  const onSubmit = (data: FormData) => {
    const url = buildWhatsAppAppointmentUrl(data, language);
    setWhatsappRedirectUrl(url);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // safe fallback if canvas confetti is blocked
    }

    // Open WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    reset();
  };

  // Min date today
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section
      id="appointment-section"
      className={`py-20 lg:py-28 relative overflow-hidden ${
        isStandalonePage ? 'bg-slate-surface' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'अपॉइंटमेंट पूछताछ' : 'Appointment Enquiry'}
          badgeVariant="teal"
          title={language === 'hi' ? 'परामर्श हेतु समय का अनुरोध करें' : 'Request a Specialist Consultation'}
          subtitle={
            language === 'hi'
              ? 'अपना विवरण भरें। सबमिट करते ही आपका अनुरोध सीधे क्लिनिक के आधिकारिक व्हाट्सएप (9305238955) पर पहुंच जाएगा।'
              : 'Submit your preferred doctor and time. Your request is formatted and transmitted directly to the clinic front desk on WhatsApp.'
          }
        />

        <div className="max-w-3xl mx-auto">
          {submitted ? (
            /* Submission Confirmation Card */
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-teal-200/80 shadow-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-accent flex items-center justify-center mx-auto mb-5 shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-teal-accent" />
              </div>

              <h3 className="text-2xl font-black text-navy-800">
                {language === 'hi' ? 'पूछताछ अनुरोध तैयार है!' : 'Enquiry Request Formatted!'}
              </h3>

              <p className="mt-3 text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                {language === 'hi'
                  ? 'आपका विवरण राज क्लिनिक के व्हाट्सएप नंबर (9305238955) के लिए तैयार कर दिया गया है। यदि नई विंडो नहीं खुली तो नीचे दिए गए बटन पर क्लिक करें।'
                  : 'Your details have been compiled for Raj Clinic WhatsApp (9305238955). If WhatsApp did not open automatically, click the button below to send your request.'}
              </p>

              <div className="mt-5 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 max-w-md mx-auto text-left flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{language === 'hi' ? 'महत्वपूर्ण सूचना: ' : 'Important Notice: '}</strong>
                  <span>
                    {language === 'hi'
                      ? 'यह एक अपॉइंटमेंट पूछताछ अनुरोध है, स्वचालित रूप से पक्की बुकिंग नहीं। क्लिनिक स्टाफ उपलब्धता जांचकर समय की पुष्टि करेगा।'
                      : 'This is an enquiry request and not an instant confirmation. The clinic administration will verify doctor schedule and confirm your slot.'}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={whatsappRedirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{language === 'hi' ? 'व्हाट्सएप में खोलें' : 'Open WhatsApp Now'}</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                >
                  {language === 'hi' ? 'नया फॉर्म भरें' : 'Submit Another Request'}
                </button>
              </div>
            </div>
          ) : (
            /* Appointment Form */
            <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-premium border border-slate-200/80">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Row 1: Patient Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      {language === 'hi' ? 'मरीज का नाम *' : 'Patient Full Name *'}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        {...register('patientName')}
                        placeholder={language === 'hi' ? 'उदा. राहुल कुमार' : 'e.g. Ramesh Singh'}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none transition-colors ${
                          errors.patientName ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-healthcare'
                        }`}
                      />
                    </div>
                    {errors.patientName && (
                      <p className="mt-1 text-xs text-red-500">{errors.patientName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      {language === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number (10 digits) *'}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        {...register('mobileNumber')}
                        placeholder="9876543210"
                        maxLength={10}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none transition-colors ${
                          errors.mobileNumber ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-healthcare'
                        }`}
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="mt-1 text-xs text-red-500">{errors.mobileNumber.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Select Doctor */}
                <div>
                  <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                    {language === 'hi' ? 'पसंदीदा डॉक्टर / विभाग *' : 'Select Doctor / Department *'}
                  </label>
                  <select
                    {...register('doctorId')}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none transition-colors ${
                      errors.doctorId ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-healthcare'
                    }`}
                  >
                    {doctorsData.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {language === 'hi' 
                          ? `${doc.nameHi} (${doc.qualification}) - ${doc.specializationHi}` 
                          : `${doc.nameEn} (${doc.qualification}) - ${doc.specializationEn}`}
                      </option>
                    ))}
                  </select>
                  {errors.doctorId && (
                    <p className="mt-1 text-xs text-red-500">{errors.doctorId.message}</p>
                  )}
                </div>

                {/* Row 3: Preferred Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      {language === 'hi' ? 'पसंदीदा दिनांक *' : 'Preferred Date *'}
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="date"
                        min={todayStr}
                        {...register('preferredDate')}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none transition-colors ${
                          errors.preferredDate ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-healthcare'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="mt-1 text-xs text-red-500">{errors.preferredDate.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      {language === 'hi' ? 'पसंदीदा समय स्लॉट *' : 'Preferred Time Slot *'}
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <select
                        {...register('preferredTime')}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none transition-colors ${
                          errors.preferredTime ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-healthcare'
                        }`}
                      >
                        <option value="Morning (08:00 AM - 11:00 AM)">
                          {language === 'hi' ? 'सुबह (08:00 AM - 11:00 AM) - डा० मनीष कुमार' : 'Morning (08:00 AM - 11:00 AM)'}
                        </option>
                        <option value="Afternoon (12:00 PM - 05:00 PM)">
                          {language === 'hi' ? 'दोपहर (12:00 PM - 05:00 PM) - डा० कुलदीप शर्मा (सोम/शुक्र)' : 'Afternoon (12:00 PM - 05:00 PM)'}
                        </option>
                        <option value="Evening (02:00 PM - 06:00 PM)">
                          {language === 'hi' ? 'शाम (02:00 PM - 06:00 PM) - डा० शमसाद अख्तर सिद्दीकी' : 'Evening (02:00 PM - 06:00 PM)'}
                        </option>
                        <option value="Sunday Full Day">
                          {language === 'hi' ? 'रविवार पूरे दिन' : 'Sunday (Full Day Availability)'}
                        </option>
                      </select>
                    </div>
                    {errors.preferredTime && (
                      <p className="mt-1 text-xs text-red-500">{errors.preferredTime.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 4: Short Optional Enquiry */}
                <div>
                  <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                    {language === 'hi' ? 'संक्षिप्त कारण / समस्या (वैकल्पिक)' : 'Brief Reason / Health Query (Optional)'}
                  </label>
                  <textarea
                    rows={3}
                    {...register('enquiryNotes')}
                    placeholder={
                      language === 'hi'
                        ? 'उदा. घुटनों में दर्द, बवासीर परामर्श, या सामान्य बुखार (कृपया गोपनीय रिपोर्ट न लिखें)'
                        : 'e.g. Knee pain consultation, piles consultation, or general checkup'
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-healthcare transition-colors"
                  />
                  <p className="mt-1 text-[11px] text-slate-400">
                    {language === 'hi'
                      ? 'हम आपकी निजता का सम्मान करते हैं। अनावश्यक व्यक्तिगत या संवेदनशील विवरण न भरें।'
                      : 'We respect patient privacy. Do not enter sensitive health history.'}
                  </p>
                </div>

                {/* Transparent Booking Disclaimer Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <div>
                    <strong>{language === 'hi' ? 'पारदर्शी प्रक्रिया:' : 'Transparent Process:'} </strong>
                    <span>
                      {language === 'hi'
                        ? 'यह फॉर्म सबमिट करने पर व्हाट्सएप मैसेज तैयार होगा। क्लिनिक स्टाफ द्वारा उपलब्धता जांचने के बाद ही समय की पुष्टि होगी।'
                        : 'Submitting sends your request to Raj Clinic on WhatsApp (+91 93052 38955). This is an enquiry request and requires clinic desk verification.'}
                    </span>
                  </div>
                </div>

                {/* Submit CTA */}
                <Button
                  type="submit"
                  variant="teal"
                  size="lg"
                  disabled={isSubmitting}
                  icon={<MessageSquare className="w-5 h-5 fill-current" />}
                  className="w-full justify-center shadow-lg shadow-teal-accent/20"
                >
                  {isSubmitting
                    ? (language === 'hi' ? 'कृपया प्रतीक्षा करें...' : 'Submitting Request...')
                    : (language === 'hi' ? 'व्हाट्सएप द्वारा अपॉइंटमेंट पूछताछ भेजें' : 'Send Appointment Enquiry via WhatsApp')}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

