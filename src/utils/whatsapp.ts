import { AppointmentFormData } from '../types';
import { clinicInfo } from '../data/clinic';
import { doctorsData } from '../data/doctors';

export const buildWhatsAppAppointmentUrl = (formData: AppointmentFormData, language: 'en' | 'hi' = 'en'): string => {
  const selectedDoctor = doctorsData.find((d) => d.id === formData.doctorId);
  const doctorName = selectedDoctor 
    ? (language === 'hi' ? selectedDoctor.nameHi : selectedDoctor.nameEn)
    : 'Any Available Specialist';

  const cleanPhone = clinicInfo.whatsapp.replace(/\D/g, '');
  const internationalNumber = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;

  let message = '';
  if (language === 'hi') {
    message = `*राज क्लिनिक (Raj Clinic, Dudahi) - अपॉइंटमेंट पूछताछ*\n\n` +
      `👤 *मरीज का नाम:* ${formData.patientName}\n` +
      `📞 *संपर्क नंबर:* ${formData.mobileNumber}\n` +
      `👨‍⚕️ *पसंदीदा डॉक्टर:* ${doctorName}\n` +
      `📅 *पसंदीदा दिनांक:* ${formData.preferredDate}\n` +
      `⏰ *पसंदीदा समय:* ${formData.preferredTime}\n` +
      (formData.enquiryNotes ? `📝 *पूछताछ विवरण:* ${formData.enquiryNotes}\n\n` : '\n') +
      `⚠️ _नोट: यह एक अपॉइंटमेंट पूछताछ अनुरोध है। कृपया डॉक्टर की उपलब्धता एवं समय की पुष्टि करें।_`;
  } else {
    message = `*RAJ CLINIC (Dudahi, Kushinagar) - Appointment Request*\n\n` +
      `👤 *Patient Name:* ${formData.patientName}\n` +
      `📞 *Contact Number:* ${formData.mobileNumber}\n` +
      `👨‍⚕️ *Selected Doctor:* ${doctorName}\n` +
      `📅 *Preferred Date:* ${formData.preferredDate}\n` +
      `⏰ *Preferred Time:* ${formData.preferredTime}\n` +
      (formData.enquiryNotes ? `📝 *Brief Reason:* ${formData.enquiryNotes}\n\n` : '\n') +
      `⚠️ _Note: This is an appointment enquiry request sent via website. Please confirm available slot and consulting timing._`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${internationalNumber}?text=${encodedMessage}`;
};

export const getGeneralWhatsAppUrl = (topic: string = 'General Inquiry', language: 'en' | 'hi' = 'en'): string => {
  const cleanPhone = clinicInfo.whatsapp.replace(/\D/g, '');
  const internationalNumber = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  
  const text = language === 'hi'
    ? `नमस्ते राज क्लिनिक दुदही, मुझे ${topic} के संबंध में जानकारी चाहिए।`
    : `Hello Raj Clinic Dudahi, I would like to inquire about ${topic}.`;

  return `https://wa.me/${internationalNumber}?text=${encodeURIComponent(text)}`;
};

