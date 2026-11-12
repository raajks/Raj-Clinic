import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'teal' | 'blue' | 'navy' | 'emergency' | 'neutral' | 'verified';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = 'teal',
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-3.5">
          {badge}
        </Badge>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg font-normal leading-relaxed ${
            light ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

