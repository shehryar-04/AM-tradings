import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  target,
  rel,
  type = 'button',
  disabled = false,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-white font-semibold shadow-md hover:shadow-gold-glow hover:brightness-105 border border-gold-400/40',
    gold: 'bg-gold-500 text-white hover:bg-gold-600 font-semibold shadow-sm hover:shadow-md',
    whatsapp: 'bg-[#25D366] text-white font-semibold shadow-md hover:bg-[#1EBE5D] hover:shadow-lg',
    outline: 'border border-petrol-800 text-petrol-900 bg-transparent hover:bg-petrol-800 hover:text-white',
    'outline-gold': 'border border-gold-500/70 text-gold-700 bg-transparent hover:bg-gold-500 hover:text-white',
    'outline-white': 'border border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white',
    ghost: 'text-petrol-800 hover:bg-petrol-800/5 hover:text-gold-700',
    'ghost-white': 'text-white/80 hover:text-white hover:bg-white/10',
    dark: 'bg-petrol-900 text-white hover:bg-petrol-800 border border-white/10 shadow-luxury-dark',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 tracking-wide',
    xl: 'text-lg px-8 py-4 gap-3 font-semibold',
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className)
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={clsx(size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4', 'transition-transform duration-200 group-hover:-translate-x-0.5')} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className={clsx(size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4', 'transition-transform duration-200 group-hover:translate-x-0.5')} />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={clsx('group', combinedClasses)}
        {...props}
      >
        {content}
      </a>
    );
  }

  const MotionComponent = shouldReduceMotion ? 'button' : motion.button;

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: disabled ? {} : { y: -2 },
        whileTap: disabled ? {} : { y: 0, scale: 0.98 },
      };

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx('group', combinedClasses)}
      {...motionProps}
      {...props}
    >
      {content}
    </MotionComponent>
  );
}
