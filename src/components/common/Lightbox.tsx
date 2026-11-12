import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  language?: 'en' | 'hi';
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
  language = 'en',
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      onNavigate((currentIndex + 1) % items.length);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      onNavigate((currentIndex - 1 + items.length) % items.length);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem) return null;

  const title = language === 'hi' ? currentItem.titleHi : currentItem.titleEn;
  const desc = language === 'hi' ? currentItem.descriptionHi : currentItem.descriptionEn;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/90 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Controls */}
        <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-between pb-3 text-white">
            <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-300">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:ring-2 focus:ring-teal-accent"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 shadow-2xl border border-white/10"
          >
            <img
              src={currentItem.image}
              alt={title}
              className="max-h-[72vh] max-w-full object-contain select-none"
            />

            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all focus:ring-2 focus:ring-teal-accent"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all focus:ring-2 focus:ring-teal-accent"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </motion.div>

          <div className="w-full mt-3 p-4 rounded-xl bg-navy-800/80 border border-white/10 text-white backdrop-blur-sm">
            <h3 className="text-base sm:text-lg font-bold">{title}</h3>
            {desc && <p className="mt-1 text-xs sm:text-sm text-slate-300">{desc}</p>}
            {currentItem.isPosterReference && (
              <span className="mt-2 inline-block text-[11px] bg-teal-accent/20 text-teal-300 px-2 py-0.5 rounded font-medium">
                Verified Printed Poster Document
              </span>
            )}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

