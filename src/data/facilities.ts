import { Facility } from '../types';

export const facilitiesData: Facility[] = [
  {
    id: 'normal-delivery',
    titleEn: '24-Hour Normal Delivery & Maternity Suite',
    titleHi: '24 घंटे नार्मल डिलेवरी एवं प्रसूति सुविधा',
    descriptionEn: 'Dedicated labor and delivery area operating 24 hours with supportive nursing staff for safe maternal care and childbirth.',
    descriptionHi: 'कुशल स्टाफ एवं प्राथमिक उपकरणों से युक्त प्रसूति कक्ष जहाँ 24 घंटे सुरक्षित प्रसव की सुविधा उपलब्ध है।',
    icon: 'Baby',
    featuresEn: [
      '24/7 Availability for expectant mothers',
      'Labor monitoring and vital signs tracking',
      'Post-delivery observation beds',
      'Clean, comfortable mother and newborn environment'
    ],
    featuresHi: [
      'गर्भवती महिलाओं हेतु 24 घंटे तत्पर सेवा',
      'प्रसव पीड़ा एवं वाइटल्स की निरंतर निगरानी',
      'प्रसवोपरांत देखभाल एवं विश्राम वार्ड',
      'शिशु एवं माता के अनुकूल स्वच्छ वातावरण'
    ],
    verified: true,
    notes: 'Directly stated on all reference posters: "24 घण्टे नार्मल डिलेवरी सुविधा उपलब्ध है।"',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'operation-facility',
    titleEn: 'Surgical & Procedure Theater',
    titleHi: 'ऑपरेशन एवं शल्य क्रिया सुविधा',
    descriptionEn: 'Sterile procedure theater equipped for minor surgeries, Kshara Sutra treatment for anorectal diseases, and wound management.',
    descriptionHi: 'बवासीर, भगन्दर के क्षार सूत्र उपचार, फोड़े के चीरे व छोटे ऑपरेशनों हेतु सुसज्जित शल्य कक्ष।',
    icon: 'Activity',
    featuresEn: [
      'Sterile surgical environment',
      'Specialized Kshara Sutra ligation equipment',
      'Minor trauma, wound suturing and abscess drainage',
      'Strict hygiene and instrument autoclaving'
    ],
    featuresHi: [
      'संक्रमण-मुक्त शल्य चिकित्सा कक्ष',
      'क्षार सूत्र विधि के लिए विशेष उपकरण',
      'घाव की सिलाई, फोड़े का निष्कासन व माइनर सर्जरी',
      'औजारों के ऑटोक्लेविंग एवं स्वच्छता के कड़े नियम'
    ],
    verified: true,
    notes: 'Directly stated on reference posters: "आपरेशन की सुविधा उपलब्ध है।"',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'patient-admission',
    titleEn: 'In-Patient Admission (IPD) Beds',
    titleHi: 'मरीज भर्ती (आईपीडी) सुविधा',
    descriptionEn: 'Patient admission beds for post-procedure recovery, intravenous hydration therapy, fever management, and continuous clinical observation.',
    descriptionHi: 'ऑपरेशन के बाद विश्राम, ड्रिप/सलाइन चढ़ाने एवं डॉक्टर की सीधी निगरानी में इलाज हेतु इन-डोर वार्ड।',
    icon: 'Bed',
    featuresEn: [
      'Clean in-patient beds with fresh linen',
      'IV fluid administration and emergency injections',
      'Regular nurse rounds and doctor visits',
      'Comfortable seating for accompanying family attendants'
    ],
    featuresHi: [
      'स्वच्छ बिस्तर एवं हवादार कमरे',
      'सलाइन, ग्लूकोज ड्रिप एवं आपात इंजेक्शन की व्यवस्था',
      'नर्सिंग स्टाफ द्वारा देखभाल एवं डॉक्टरों का राउंड',
      'मरीज के परिजनों हेतु बैठने की उचित व्यवस्था'
    ],
    verified: true,
    notes: 'Directly stated on reference posters: "मरीज भर्ती करने की सुविधा उपलब्ध है।"',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'emergency-assistance',
    titleEn: 'Emergency Response & Primary Triage',
    titleHi: 'आपातकालीन सहायता एवं प्राथमिक उपचार',
    descriptionEn: 'Immediate telephone access and on-site initial triage for acute health emergencies, sudden illness, or urgent wound dressing.',
    descriptionHi: 'तीव्र दर्द, चोट, दुर्घटना या अचानक तबियत खराब होने पर तत्काल प्राथमिक उपचार एवं मार्गदर्शन।',
    icon: 'PhoneCall',
    featuresEn: [
      'Emergency hotline: +91 93052 38955',
      'Prompt first aid and pain stabilization',
      'Oxygen saturation and vitals measurement',
      'Clear transfer counseling when tertiary hospital care is necessary'
    ],
    featuresHi: [
      'इमरजेंसी नंबर: 9305238955 हमेशा उपलब्ध',
      'त्वरित प्राथमिक उपचार व दर्द में आराम',
      'ऑक्सीजन एवं पल्स की त्वरित जांच',
      'आवश्यकता पड़ने पर बड़े अस्पताल हेतु तत्काल मार्गदर्शन'
    ],
    verified: true,
    notes: 'Directly stated on reference posters: "24/7 Emergency Services"',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pharmacy-support',
    titleEn: 'Pharmacy & Surgical Supplies Coordination',
    titleHi: 'दवा एवं सर्जिकल सामग्री सहयोग',
    descriptionEn: 'Support from certified pharmaceutical personnel (Dr. Navneet Kumar Sharma, D.Pharma, D.O.T.T.) for essential medications and medical consumables.',
    descriptionHi: 'योग्य फार्मासिस्ट के मार्गदर्शन में जरूरी औषधियों एवं सर्जिकल सामग्री की उपलब्धता।',
    icon: 'Pill',
    featuresEn: [
      'Prescription verification and medication counseling',
      'Aseptic surgical dressings and bandages',
      'Immediate availability of emergency oral and injectable medicines',
      'Storage of heat-sensitive medications under controlled conditions'
    ],
    featuresHi: [
      'प्रिस्क्रिप्शन अनुसार दवा वितरण व परामर्श',
      'स्टेरलाइज्ड पट्टियां, सुई व अन्य सामग्री',
      'आपातकालीन इंजेक्शन एवं जरूरी दवाइयां उपलब्ध',
      'दवाओं के रखरखाव में गुणवत्ता का ध्यान'
    ],
    verified: true,
    notes: 'Dr. Navneet Kumar Sharma holds D.Pharma & D.O.T.T. on the clinic poster.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800'
  }
];

