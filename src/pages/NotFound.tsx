import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Phone, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/common/Button';
import { clinicInfo } from '../data/clinic';

export const NotFound: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-20 sm:py-32 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-3xl bg-slate-100 border border-slate-200 text-healthcare flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Search className="w-10 h-10 text-healthcare" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-teal-accent">
          404 Error
        </span>

        <h1 className="mt-2 text-3xl sm:text-4xl font-black text-navy-800 tracking-tight">
          {language === 'hi' ? 'पृष्ठ नहीं मिला' : 'Page Not Found'}
        </h1>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {language === 'hi'
            ? 'क्षमा करें, जिस पृष्ठ को आप खोज रहे हैं वह उपलब्ध नहीं है अथवा उसका पता बदल गया है।'
            : 'The page you are looking for does not exist or has been moved to a new URL.'}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
          >
            {language === 'hi' ? 'मुख्य पृष्ठ पर लौटें' : 'Back to Home'}
          </Button>

          <Button
            href={`tel:${clinicInfo.phone}`}
            variant="outline"
            size="md"
            icon={<Phone className="w-4 h-4 text-healthcare" />}
          >
            {language === 'hi' ? 'क्लिनिक को फोन करें' : 'Call 9305238955'}
          </Button>
        </div>
      </div>
    </div>
  );
};

