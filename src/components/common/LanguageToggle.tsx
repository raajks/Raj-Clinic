import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
  variant?: 'light' | 'dark' | 'pill';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', variant = 'light' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center rounded-full p-1 border transition-all ${
        variant === 'dark'
          ? 'bg-navy-900/60 border-slate-700/60 text-white'
          : 'bg-slate-100 border-slate-200 text-slate-700'
      } ${className}`}
    >
      <div className="flex items-center px-2 py-0.5 text-xs font-semibold opacity-70">
        <Globe className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-healthcare text-white shadow-sm font-semibold'
            : 'hover:text-healthcare opacity-75'
        }`}
        aria-pressed={language === 'en'}
      >
        English
      </button>

      <button
        type="button"
        onClick={() => setLanguage('hi')}
        className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 font-devanagari ${
          language === 'hi'
            ? 'bg-healthcare text-white shadow-sm font-semibold'
            : 'hover:text-healthcare opacity-75'
        }`}
        aria-pressed={language === 'hi'}
      >
        हिन्दी
      </button>
    </div>
  );
};

