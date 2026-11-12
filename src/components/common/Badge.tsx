import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'blue' | 'navy' | 'emergency' | 'neutral' | 'verified';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-2.5 py-1 font-semibold tracking-wide',
  };

  const variantStyles = {
    teal: 'bg-teal-50 text-teal-800 border border-teal-200/80',
    blue: 'bg-healthcare-50 text-healthcare-dark border border-healthcare-100',
    navy: 'bg-navy-800 text-white',
    emergency: 'bg-emergency-light text-emergency border border-red-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    verified: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full uppercase ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

