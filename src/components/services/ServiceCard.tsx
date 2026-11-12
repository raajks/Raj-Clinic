import React, { useState } from 'react';
import { 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  Baby, 
  Scissors, 
  Bed, 
  ShieldAlert, 
  Droplet, 
  UserCheck, 
  PhoneCall, 
  ChevronDown, 
  Check, 
  Calendar 
} from 'lucide-react';
import { Service } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

interface ServiceCardProps {
  service: Service;
  onEnquire: (service: Service) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6 text-teal-accent" />,
  Activity: <Activity className="w-6 h-6 text-healthcare" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-rose-500" />,
  Baby: <Baby className="w-6 h-6 text-pink-500" />,
  Scissors: <Scissors className="w-6 h-6 text-indigo-500" />,
  Bed: <Bed className="w-6 h-6 text-blue-500" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-amber-500" />,
  Droplet: <Droplet className="w-6 h-6 text-cyan-500" />,
  UserCheck: <UserCheck className="w-6 h-6 text-emerald-500" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-emergency" />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onEnquire }) => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const title = language === 'hi' ? service.titleHi : service.titleEn;
  const summary = language === 'hi' ? service.summaryHi : service.summaryEn;
  const details = language === 'hi' ? service.detailsHi : service.detailsEn;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-premium border border-slate-200/80 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Icon & Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm group-hover:scale-105 transition-transform">
            {iconMap[service.icon] || <Activity className="w-6 h-6 text-healthcare" />}
          </div>

          <Badge variant="teal" size="sm">
            {service.category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-navy-800 group-hover:text-healthcare transition-colors leading-tight">
          {title}
        </h3>

        {/* Lead Doctor or Department */}
        {service.doctorInCharge && (
          <p className="mt-1 text-xs font-semibold text-teal-700">
            {service.doctorInCharge}
          </p>
        )}

        {/* Summary */}
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {summary}
        </p>

        {/* Expandable Details */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              {language === 'hi' ? 'चिकित्सीय विवरण' : 'Clinical Details'}
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {details.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-accent shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-bold text-slate-600 hover:text-navy-800 flex items-center gap-1 transition-colors"
        >
          <span>{expanded ? (language === 'hi' ? 'कम देखें' : 'Show Less') : (language === 'hi' ? 'विवरण देखें' : 'View Details')}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <Button
          onClick={() => onEnquire(service)}
          variant="outline"
          size="sm"
          icon={<Calendar className="w-3.5 h-3.5 text-healthcare" />}
        >
          {language === 'hi' ? 'पूछताछ' : 'Enquire'}
        </Button>
      </div>
    </div>
  );
};

