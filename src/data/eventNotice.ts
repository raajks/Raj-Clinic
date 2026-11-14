export interface EventNotice {
  /** Turn this event modal ON (true) or OFF (false) */
  enabled: boolean;

  /** Change this ID whenever you launch a new event/festival so it shows again to returning visitors */
  id: string;

  /** Event or Announcement Heading */
  titleEn: string;
  titleHi: string;

  /** Category badge (e.g. Festival Wishes, Health Camp, Special Notice) */
  tagEn: string;
  tagHi: string;

  /** Date or Time of event */
  dateEn?: string;
  dateHi?: string;

  /** Short description / highlights of the event */
  descriptionEn: string;
  descriptionHi: string;

  /** Image or Banner poster URL to display inside modal */
  imageUrl: string;

  /** Optional action button text & link */
  ctaTextEn?: string;
  ctaTextHi?: string;
  ctaLink?: string;

  /** If true, user only sees it once per browsing session after closing */
  showOncePerSession?: boolean;
}

export const activeEventNotice: EventNotice = {
  // Set to true to show the event modal; set to false to disable
  enabled: true,

  // Change this ID for new events e.g. 'diwali-wishes', 'free-checkup-camp-2026'
  id: 'raj-clinic-special-notice-2026',

  tagEn: 'Special Clinic Notice',
  tagHi: 'विशेष क्लिनिक सूचना',

  titleEn: 'Specialist Consultations & 24/7 Delivery Services',
  titleHi: 'विशेषज्ञ चिकित्सा परामर्श एवं 24 घंटे सुरक्षित प्रसव सुविधा',

  dateEn: 'Daily OPD from 8:00 AM | 24 Hours Emergency',
  dateHi: 'दैनिक ओ.पी.डी. सुबह 08:00 बजे से | 24 घंटे इमरजेंसी',

  descriptionEn: 'Experienced surgeons (M.S., Shalya) and orthopedic specialists (M.B.B.S., D.Ortho) are available at Raj Clinic, 100m East of Gandhi Chowk, Dudahi, Kushinagar.',
  descriptionHi: 'राज क्लिनिक दुदही में योग्य शल्य चिकित्सक, हड्डी व नस रोग विशेषज्ञ तथा 24 घंटे सामान्य प्रसव (नार्मल डिलीवरी) की सुविधा उपलब्ध है। परामर्श हेतु संपर्क करें।',

  // You can set any image URL here: custom festival banner, camp poster, or clinic banner
  imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',

  ctaTextEn: 'Inquire on WhatsApp',
  ctaTextHi: 'व्हाट्सएप पर जानकारी लें',
  ctaLink: 'https://wa.me/919305238955',

  // Keeps modal closed for the current session once closed
  showOncePerSession: true,
};
