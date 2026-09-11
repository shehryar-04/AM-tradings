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

  const baseStyles = 'inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2';

  const variants = {
    primary: 'bg-gold-500 text-petrol-900 font-bold uppercase tracking-wider shadow-sm hover:bg-[#C98A2C] hover:shadow-gold-glow hover:-translate-y-0.5 border border-gold-400/50',
    gold: 'bg-gold-500 text-petrol-900 font-bold uppercase tracking-wider hover:bg-[#C98A2C] shadow-sm',
    whatsapp: 'bg-[#25D366] text-white font-bold uppercase tracking-wider shadow-md hover:bg-[#1EBE5D] hover:shadow-lg',
    outline: 'border-[1.5px] border-petrol-900 text-petrol-900 bg-transparent hover:bg-petrol-900 hover:text-white uppercase tracking-wider font-semibold',
    'outline-gold': 'border-[1.5px] border-gold-500 text-gold-700 bg-transparent hover:bg-gold-500 hover:text-petrol-900 uppercase tracking-wider font-semibold',
    'outline-white': 'border-[1.5px] border-white/40 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-petrol-900 uppercase tracking-wider font-semibold',
    ghost: 'text-petrol-900 hover:bg-petrol-900/10 hover:text-gold-700 font-semibold',
    'ghost-white': 'text-white/90 hover:text-white hover:bg-white/10 font-semibold',
    dark: 'bg-petrol-900 text-white hover:bg-petrol-800 border border-white/15 shadow-card',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5 label-md',
    md: 'text-xs sm:text-sm px-6 py-2.5 gap-2 label-lg',
    lg: 'text-sm sm:text-base px-7 py-3 gap-2.5 label-lg tracking-wide',
    xl: 'text-base px-8 py-3.5 gap-3 label-lg font-bold',
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
