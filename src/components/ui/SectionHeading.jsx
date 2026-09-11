import React from 'react';
import { Reveal } from './Reveal';
import { clsx } from 'clsx';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={clsx(
        'max-w-3xl mb-12 md:mb-16',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <Reveal direction="down" delay={0.05}>
          <div
            className={clsx(
              'inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] mb-3.5',
              isDark ? 'text-gold-400' : 'text-gold-700'
            )}
          >
            <span className="w-6 h-[2px] bg-gold-500 inline-block" />
            <span>{eyebrow}</span>
            {isCenter && <span className="w-6 h-[2px] bg-gold-500 inline-block" />}
          </div>
        </Reveal>
      )}

      {title && (
        <Reveal direction="up" delay={0.1}>
          <h2
            className={clsx(
              'font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.18] tracking-tight mb-5',
              isDark ? 'text-white' : 'text-petrol-900',
              titleClassName
            )}
          >
            {title}
          </h2>
        </Reveal>
      )}

      {subtitle && (
        <Reveal direction="up" delay={0.15}>
          <p
            className={clsx(
              'text-base sm:text-lg leading-relaxed font-normal',
              isDark ? 'text-slate-300' : 'text-slate-600',
              isCenter ? 'mx-auto' : '',
              subtitleClassName
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Badge({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
}) {
  const variants = {
    gold: 'bg-gold-50 text-gold-800 border border-gold-300/80',
    'gold-solid': 'bg-gold-500 text-white font-semibold',
    petrol: 'bg-petrol-900 text-white border border-white/10',
    dark: 'bg-petrol-800 text-gold-400 border border-gold-500/30',
    light: 'bg-white/90 text-petrol-900 border border-petrol-900/10 shadow-sm',
    accent: 'bg-teal-900/80 text-teal-200 border border-teal-500/30',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wider',
    md: 'text-xs px-3 py-1 tracking-wide',
    lg: 'text-sm px-4 py-1.5 tracking-wide font-medium',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full uppercase font-mono',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
