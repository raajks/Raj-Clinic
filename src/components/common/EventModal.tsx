import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Calendar, MessageSquare, ArrowRight, Bell } from 'lucide-react';
import { activeEventNotice } from '../../data/eventNotice';
import { useLanguage } from '../../context/LanguageContext';

export const EventModal: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const storageKey = `raj_clinic_event_${activeEventNotice.id}`;

  const closeModal = useCallback(() => {
    setIsOpen(false);
    if (activeEventNotice.showOncePerSession) {
      try {
        sessionStorage.setItem(storageKey, 'dismissed');
      } catch {
        // sessionStorage safety fallback
      }
    }
  }, [storageKey]);

  useEffect(() => {
    if (!activeEventNotice.enabled) return;

    // Check if dismissed previously in this session
    try {
      const isDismissed = sessionStorage.getItem(storageKey);
      if (!isDismissed) {
        // Slight delay for smooth visual entrance
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsOpen(true);
    }
  }, [storageKey]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  if (!activeEventNotice.enabled) {
    return null;
  }

  const title = language === 'hi' ? activeEventNotice.titleHi : activeEventNotice.titleEn;
  const tag = language === 'hi' ? activeEventNotice.tagHi : activeEventNotice.tagEn;
  const date = language === 'hi' ? activeEventNotice.dateHi : activeEventNotice.dateEn;
  const description = language === 'hi' ? activeEventNotice.descriptionHi : activeEventNotice.descriptionEn;
  const ctaText = language === 'hi' ? activeEventNotice.ctaTextHi : activeEventNotice.ctaTextEn;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-900/80 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
        >
          {/* Backdrop click to close */}
          <div
            className="fixed inset-0"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 my-auto"
          >
            {/* Top Close Button (Cut Button) */}
            <button
              onClick={closeModal}
              className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-navy-800 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent group"
              aria-label="Close announcement"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Event Banner Image */}
            {activeEventNotice.imageUrl && (
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-navy-900">
                <img
                  src={activeEventNotice.imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-accent text-navy-900 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>{tag}</span>
                  </span>
                </div>

                {/* Date overlay if available */}
                {date && (
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs font-semibold text-teal-300 drop-shadow">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{date}</span>
                  </div>
                )}
              </div>
            )}

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-4">
              {!activeEventNotice.imageUrl && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200">
                  <Bell className="w-3.5 h-3.5 text-teal-accent" />
                  <span>{tag}</span>
                </div>
              )}

              <h3
                id="event-modal-title"
                className="text-xl sm:text-2xl font-black text-navy-800 leading-tight"
              >
                {title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                {activeEventNotice.ctaLink && (
                  <a
                    href={activeEventNotice.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeModal}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-teal-accent hover:bg-teal-hover text-navy-900 font-bold text-xs sm:text-sm text-center transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-accent/25 active:scale-[0.98]"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>{ctaText || (language === 'hi' ? 'जानकारी प्राप्त करें' : 'Learn More')}</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm text-center transition-colors active:scale-[0.98]"
                >
                  {language === 'hi' ? 'वेबसाइट देखें' : 'Continue to Website'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
