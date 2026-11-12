import React, { useState } from 'react';
import { Eye, ShieldCheck, FileText, Image as ImageIcon } from 'lucide-react';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Lightbox } from '../components/common/Lightbox';

export const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Photos & Records', labelHi: 'सभी चित्र एवं रिकॉर्ड' },
    { id: 'posters', labelEn: 'Official Printed Posters', labelHi: 'आधिकारिक मुद्रित पोस्टर' },
    { id: 'facilities', labelEn: 'Medical Facilities', labelHi: 'अस्पताल सुविधाएं' },
    { id: 'reception', labelEn: 'Reception & Helpdesk', labelHi: 'स्वागत कक्ष' },
    { id: 'consultation', labelEn: 'Consultation Chambers', labelHi: 'परामर्श कक्ष' },
  ];

  const filteredItems = galleryData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleOpenLightbox = (indexInFiltered: number) => {
    // find index in filteredItems
    setLightboxIndex(indexInFiltered);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'चित्र एवं अभिलेख' : 'Visual Gallery'}
          badgeVariant="teal"
          title={language === 'hi' ? 'राज क्लिनिक गैलरी एवं आधिकारिक दस्तावेज' : 'Hospital Gallery & Reference Documents'}
          subtitle={
            language === 'hi'
              ? 'क्लिनिक के आधिकारिक मुद्रित पोस्टर एवं अस्पताल सुविधाओं का दृश्य संग्रह। किसी भी चित्र पर क्लिक कर बड़ा देखें।'
              : 'Official printed clinic notices, doctor schedules, and modern clinical facility environments. Click any image to view in lightbox.'
          }
        />

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-navy-800 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {language === 'hi' ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => {
            const title = language === 'hi' ? item.titleHi : item.titleEn;
            const desc = language === 'hi' ? item.descriptionHi : item.descriptionEn;

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className="bg-white rounded-3xl overflow-hidden shadow-premium border border-slate-200/80 hover:shadow-card-hover transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/90 text-navy-800 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>

                  {item.isPosterReference && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-navy-900/90 text-teal-accent backdrop-blur-sm shadow-md">
                        <FileText className="w-3.5 h-3.5" />
                        <span>{language === 'hi' ? 'आधिकारिक पोस्टर' : 'Official Poster'}</span>
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-navy-800 group-hover:text-healthcare transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                    <span>{language === 'hi' ? 'बड़ा देखने के लिए क्लिक करें' : 'Click to inspect'}</span>
                    <Eye className="w-4 h-4 opacity-75" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
          language={language}
        />
      </div>
    </div>
  );
};

