import { Doctor } from '../types';

export const doctorsData: Doctor[] = [
  {
    id: 'dr-manish-kumar',
    nameEn: 'Dr. Manish Kumar',
    nameHi: 'डा० मनीष कुमार',
    qualification: 'M.S., Shalya',
    specializationEn: 'General & Anorectal Surgery (Kshara Sutra Specialist)',
    specializationHi: 'शल्य चिकित्सक एवं क्षार सूत्र विशेषज्ञ',
    roleEn: 'Consultant Surgeon',
    roleHi: 'परामर्शदाता सर्जन',
    timingEn: 'Daily: 8:00 AM – 11:00 AM (Extended OPD up to 5:00 PM on select days)',
    timingHi: 'प्रत्येक दिन: सुबह 08:00 बजे से 11:00 बजे तक (विशेष दिनों में शाम 05:00 बजे तक)',
    availableDaysEn: 'Monday – Sunday (Daily OPD)',
    availableDaysHi: 'सोमवार से रविवार (प्रतिदिन)',
    scopeOfCareEn: [
      'Piles (Hemorrhoids), Anal Fissure, and Fistula-in-Ano management',
      'Minimally invasive Kshara Sutra procedural care & surgical excision',
      'Abdominal pain, Dyspepsia, Constipation, Jaundice, and Vomiting',
      'Hernia, Hydrocele, and Appendix clinical evaluation',
      'Urinary complaints and kidney/bladder stone consultation',
      'General gynecological & women’s health complaints'
    ],
    scopeOfCareHi: [
      'बवासीर, गुदाचीर (फिशर) एवं भगन्दर का क्षार सूत्र विधि द्वारा उपचार',
      'पेट दर्द, पीलिया, अपच, उल्टी, दस्त, कब्ज आदि का निदान',
      'अपेन्डिक्स, हार्निया एवं हाइड्रोसील का चिकित्सकीय मूल्यांकन',
      'मूत्र रोग एवं पथरी रोग से सम्बंधित परामर्श',
      'महिला स्वास्थ्य एवं सामान्य स्त्री रोग परामर्श'
    ],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    isPlaceholderPhoto: true,
    statusVerified: true,
    verificationNotes: 'Doctor details & M.S. Shalya qualification verified from printed clinic posters. Photo is high-grade professional placeholder awaiting verified doctor portrait from clinic.'
  },
  {
    id: 'dr-kuldeep-sharma',
    nameEn: 'Dr. Kuldeep Sharma',
    nameHi: 'डा० कुलदीप शर्मा',
    qualification: 'M.B.B.S., D.Ortho',
    specializationEn: 'Orthopedic & Joint / Nerve Specialist',
    specializationHi: 'हड्डी, जोड़ एवं नस रोग विशेषज्ञ',
    roleEn: 'Orthopedic Consultant',
    roleHi: 'हड्डी रोग विशेषज्ञ',
    timingEn: 'Monday & Friday: 12:00 PM – 5:00 PM',
    timingHi: 'प्रत्येक सोमवार और शुक्रवार: दोपहर 12:00 बजे से सायं 05:00 बजे तक',
    availableDaysEn: 'Monday & Friday',
    availableDaysHi: 'सोमवार एवं शुक्रवार',
    scopeOfCareEn: [
      'Chronic Joint Pain, Knee Pain & Knee Osteoarthritis',
      'Backache, Lumbar Spine ailments & Slip Disc consultation',
      'Sciatica, Nerve Compression & tingling/numbness in limbs',
      'Arthritis (Gathiya / Gout) management and joint mobility care',
      'Neck stiffness, Cervical Spondylosis, and Tension Headache'
    ],
    scopeOfCareHi: [
      'हड्डी एवं जोड़ रोग, घुटनों का पुराना दर्द एवं आर्थराइटिस',
      'कमर दर्द, रीढ़ (स्पाइनल) से संबंधित समस्याएँ एवं साइटिका',
      'हाथ-पैर में सुन्नपन, झनझनाहट एवं नस से जुड़े विकार',
      'पुरानी से पुरानी गठिया (Arthritis) का व्यवस्थित उपचार',
      'गर्दन का दर्द, सर्वाइकल एवं सिरदर्द से जुड़ी समस्याएँ'
    ],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    isPlaceholderPhoto: true,
    statusVerified: true,
    verificationNotes: 'M.B.B.S., D.Ortho qualification and Monday/Friday schedule verified from printed posters.'
  },
  {
    id: 'dr-shamsad-akhtar-siddiqui',
    nameEn: 'Dr. Shamsad Akhtar Siddiqui',
    nameHi: 'डा० शमसाद अख्तर सिद्दीकी',
    qualification: 'Medical Practitioner (चिकित्सा पदाधिकारी, बिहार सरकार)',
    specializationEn: 'General Medicine & Primary Care Physician',
    specializationHi: 'सामान्य चिकित्सा एवं प्राथमिक स्वास्थ्य विशेषज्ञ',
    roleEn: 'General Physician',
    roleHi: 'सामान्य चिकित्सक',
    timingEn: 'Daily: 2:00 PM – 6:00 PM | Sunday: Full Day Availability',
    timingHi: 'प्रत्येक दिन: दोपहर 02:00 बजे से सायं 06:00 बजे तक | रविवार: सुबह से शाम तक',
    availableDaysEn: 'Monday – Sunday (Full Day on Sunday)',
    availableDaysHi: 'सोमवार से रविवार (रविवार पूरे दिन)',
    scopeOfCareEn: [
      'Fever, Typhoid, Malaria, Dengue and Seasonal infections',
      'Hypertension (High Blood Pressure) and Diabetes management',
      'Respiratory complaints, persistent cough, cold, and asthma',
      'General physical weakness, loss of appetite, and metabolic care',
      'Preventive primary healthcare and lifestyle management'
    ],
    scopeOfCareHi: [
      'बुखार, टाइफाइड, मलेरिया, मौसमी संक्रमण एवं सामान्य स्वास्थ्य जांच',
      'ब्लड प्रेशर (बी.पी.) एवं मधुमेह (शुगर) की निरंतर निगरानी',
      'खांसी, जुकाम, एलर्जी एवं दमा (अस्थमा) संबंधी परामर्श',
      'भूख न लगना, कमजोरी, उल्टी एवं जी मिचलाना का प्राथमिक उपचार',
      'नियमित स्वास्थ्य परामर्श एवं पारिवारिक चिकित्सा'
    ],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    isPlaceholderPhoto: true,
    statusVerified: true,
    verificationNotes: 'Designation: Medical Officer, Bihar Govt. Timings verified from official posters.'
  },
  {
    id: 'dr-navneet-kumar-sharma',
    nameEn: 'Dr. Navneet Kumar Sharma',
    nameHi: 'डा० नवनीत कुमार शर्मा',
    qualification: 'D.O.T.T., D.Pharma',
    specializationEn: 'Clinical Assistance, OT & Pharmaceutical Care',
    specializationHi: 'ऑपरेशन थियेटर तकनीक एवं फार्मास्युटिकल केयर',
    roleEn: 'Clinical Associate / OT Specialist',
    roleHi: 'क्लिनिकल एसोसिएट',
    timingEn: 'Clinical Hours: Available on Consultation / On-Call',
    timingHi: 'समय: क्लिनिक समय अनुसार / कॉल पर उपलब्ध',
    availableDaysEn: 'Available during regular clinic hours',
    availableDaysHi: 'नियमित क्लिनिक समय के दौरान',
    scopeOfCareEn: [
      'Operation Theater technique and aseptic preparation',
      'Medication dispensing guidance and pharmaceutical coordination',
      'Wound care, dressing, and procedural assistance',
      'Patient vitals monitoring and pre/post-procedure care'
    ],
    scopeOfCareHi: [
      'ऑपरेशन थियेटर तकनीक एवं प्रक्रियात्मक सहायता',
      'दवा वितरण मार्गदर्शन एवं फार्मास्युटिकल समन्वय',
      'घाव की ड्रेसिंग एवं प्राथमिक क्लिनिकल देखभाल',
      'रोगी के वाइटल्स एवं प्रारंभिक स्वास्थ्य निगरानी'
    ],
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800',
    isPlaceholderPhoto: true,
    statusVerified: true,
    verificationNotes: 'D.O.T.T., D.Pharma qualifications verified from poster. Exact OPD hours pending administrative confirmation.'
  }
];

