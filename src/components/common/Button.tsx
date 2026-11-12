import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'teal' | 'emergency' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'left',
  isExternal = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2 shadow-sm',
    lg: 'text-base px-6 py-3 gap-2.5 shadow-md',
  };

  const variantStyles = {
    primary: 'bg-navy-800 text-white hover:bg-navy-700 focus-visible:ring-navy-800 shadow-navy-800/20',
    secondary: 'bg-healthcare text-white hover:bg-healthcare-600 focus-visible:ring-healthcare shadow-healthcare/20',
    teal: 'bg-teal-accent text-navy-900 font-semibold hover:bg-teal-hover hover:text-white focus-visible:ring-teal-accent shadow-teal-accent/25',
    outline: 'border border-slate-300 bg-white text-navy-800 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-navy-800',
    emergency: 'bg-emergency text-white hover:bg-emergency-hover focus-visible:ring-emergency shadow-emergency/25 animate-pulse-subtle',
    ghost: 'text-navy-800 hover:bg-slate-100 focus-visible:ring-navy-800',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedStyles} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

