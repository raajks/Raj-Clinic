export type Language = 'en' | 'hi';

export interface Doctor {
  id: string;
  nameEn: string;
  nameHi: string;
  qualification: string;
  specializationEn: string;
  specializationHi: string;
  timingEn: string;
  timingHi: string;
  scopeOfCareEn: string[];
  scopeOfCareHi: string[];
  roleEn: string;
  roleHi: string;
  image: string;
  isPlaceholderPhoto: boolean;
  statusVerified: boolean;
  verificationNotes?: string;
  availableDaysEn: string;
  availableDaysHi: string;
}

export interface Service {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'surgery' | 'orthopedic' | 'general' | 'maternity' | 'emergency';
  summaryEn: string;
  summaryHi: string;
  detailsEn: string[];
  detailsHi: string[];
  icon: string;
  verifiedFromPoster: boolean;
  doctorInCharge?: string;
}

export interface Facility {
  id: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  icon: string;
  featuresEn: string[];
  featuresHi: string[];
  verified: boolean;
  notes?: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'exterior' | 'reception' | 'facilities' | 'posters' | 'consultation';
  image: string;
  descriptionEn: string;
  descriptionHi: string;
  isPosterReference?: boolean;
}

export interface FAQ {
  id: string;
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
  category: 'general' | 'appointment' | 'doctors' | 'emergency';
}

export interface AppointmentFormData {
  patientName: string;
  mobileNumber: string;
  doctorId: string;
  preferredDate: string;
  preferredTime: string;
  enquiryNotes?: string;
}

export interface VerificationItem {
  field: string;
  posterSource: string;
  currentValue: string;
  status: 'VERIFIED' | 'PENDING_CLINIC_CONFIRMATION' | 'EXTRACTED_FROM_POSTER';
  actionRequired: string;
}

