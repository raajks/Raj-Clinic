import { GalleryItem } from '../types';

const base = import.meta.env.BASE_URL?.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL || ''}/`;

export const galleryData: GalleryItem[] = [
  {
    id: 'poster-ref-1',
    titleEn: 'Official Notice & Doctor Roster Banner (Color Edition)',
    titleHi: 'आधिकारिक सूचना एवं डॉक्टर रोस्टर बैनर (रंगीन संस्करण)',
    category: 'posters',
    image: `${base}images/posters/poster-1.jpeg`,
    descriptionEn: 'Printed clinic banner showing Dr. Manish Kumar, Dr. Kuldeep Sharma, Dr. Navneet Kumar Sharma, and Dr. Shamsad Akhtar Siddiqui with clinical scope and Dudahi address.',
    descriptionHi: 'डॉक्टरों की योग्यता, ओपीडी समय एवं 24 घंटे नार्मल डिलीवरी सुविधा दर्शाने वाला आधिकारिक क्लिनिक बोर्ड।',
    isPosterReference: true
  },
  {
    id: 'poster-ref-2',
    titleEn: 'Detailed Doctor Timings & Specialty Notice',
    titleHi: 'विस्तृत डॉक्टर समय एवं विशेषता सूचना पत्र',
    category: 'posters',
    image: `${base}images/posters/poster-2.jpeg`,
    descriptionEn: 'Detailed notification detailing consultation slots: Dr. Manish Kumar (Daily 8-11 AM), Dr. Shamsad Akhtar Siddiqui (Daily 2-6 PM & Sun), Dr. Kuldeep Sharma (Mon & Fri 12-5 PM).',
    descriptionHi: 'डॉक्टरों के परामर्श समय एवं उपचार संबंधी विस्तृत सूचना।',
    isPosterReference: true
  },
  {
    id: 'poster-ref-3',
    titleEn: 'Surgical, Piles & Comprehensive Disease Care Notice',
    titleHi: 'शल्य चिकित्सा, बवासीर व समग्र रोग निवारण बोर्ड',
    category: 'posters',
    image: `${base}images/posters/poster-3.jpeg`,
    descriptionEn: 'Clinic notification emphasizing anorectal care, piles/fistula/hydrocele treatment, general medical diseases, admission facilities, and 24/7 emergency service.',
    descriptionHi: 'बवासीर, भगन्दर, हाइड्रोसील, मरीज भर्ती एवं 24/7 आपातकालीन सुविधाओं का आधिकारिक पोस्टर।',
    isPosterReference: true
  },
  {
    id: 'facility-reception',
    titleEn: 'Patient Welcome & Registration Desk',
    titleHi: 'मरीज सहायता एवं पंजीकरण डेस्क',
    category: 'reception',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    descriptionEn: 'Clean, attentive reception counter for appointment scheduling, token generation, and patient assistance.',
    descriptionHi: 'मरीजों के टोकन एवं पर्चा बनवाने हेतु स्वच्छ व व्यवस्थित स्वागत कक्ष (Placeholder photo).'
  },
  {
    id: 'facility-consultation',
    titleEn: 'Specialist Consultation Chamber',
    titleHi: 'विशेषज्ञ डॉक्टर परामर्श कक्ष',
    category: 'consultation',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    descriptionEn: 'Private consultation chamber designed for thorough medical examination and personal patient counseling.',
    descriptionHi: 'मरीज के व्यक्तिगत परीक्षण एवं स्वास्थ्य परामर्श हेतु निजी कक्ष (Placeholder photo).'
  },
  {
    id: 'facility-procedure-room',
    titleEn: 'Aseptic Procedure & Minor OT Setup',
    titleHi: 'संक्रमण-मुक्त शल्य एवं प्रक्रिया कक्ष',
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200',
    descriptionEn: 'Equipped surgical theater for Kshara Sutra interventions, sterile dressing, and minor operational care.',
    descriptionHi: 'क्षार सूत्र उपचार एवं छोटे शल्य ऑपरेशनों हेतु स्वच्छ थियेटर (Placeholder photo).'
  },
  {
    id: 'facility-ipd-ward',
    titleEn: 'In-Patient Observation & Recovery Ward',
    titleHi: 'मरीज भर्ती एवं रिकवरी वार्ड',
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200',
    descriptionEn: 'Quiet recovery beds equipped with IV fluid support and patient monitoring systems.',
    descriptionHi: 'मरीज भर्ती एवं प्राथमिक ड्रिप/दवा हेतु आरामदायक बिस्तर (Placeholder photo).'
  },
  {
    id: 'facility-maternity',
    titleEn: 'Maternal Care & Normal Delivery Unit',
    titleHi: 'मातृत्व देखभाल एवं प्रसूति यूनिट',
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    descriptionEn: 'Sanitized normal delivery setup operating 24 hours for mothers and safe newborn arrivals.',
    descriptionHi: 'सुरक्षित नार्मल डिलीवरी हेतु सुव्यवस्थित लेबर रूम (Placeholder photo).'
  }
];

