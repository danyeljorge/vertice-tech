'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconRight,
  children,
  className = '',
  ...props
}) => {
  // Emil Kowalski style: tactile micro-interactions, responsive spring-like press, focus-visible discipline
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full select-none cursor-pointer ' +
    'transition-[transform,background-color,border-color,box-shadow,color] duration-150 ease-out ' +
    'active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-[#090c09]';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-primary-container text-on-primary-container font-bold hover:brightness-110 shadow-lime-glow hover:shadow-[0_0_28px_rgba(187,245,39,0.5)]',
    outline:
      'bg-transparent border border-white/15 text-white hover:border-primary-container hover:text-primary-container hover:bg-primary-container/5',
    ghost:
      'bg-transparent text-secondary hover:text-white hover:bg-white/5',
    dark:
      'bg-surface-container text-white border border-white/10 hover:bg-surface-container-high hover:border-white/20 hover:text-primary-container shadow-sm',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {icon && <span className="shrink-0 transition-transform group-hover:scale-105">{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{iconRight}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {icon && <span className="shrink-0 transition-transform group-hover:scale-105">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{iconRight}</span>}
    </button>
  );
};
