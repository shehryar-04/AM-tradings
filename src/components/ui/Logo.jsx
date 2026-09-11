import React from 'react';
import { clsx } from 'clsx';

export const LOGO_PATHS = {
  pathAArch: 'M 295.80 115.67 C 278.16 80.47 260.73 45.19 242.84 10.12 C 240.90 6.33 236.66 1.33 233.15 1.06 C 219.51 0.00 205.74 0.63 191.02 0.63 C 212.93 44.33 234.39 87.15 256.35 130.95 L 248.21 130.95 C 210.44 130.96 172.66 131.23 134.90 130.84 C 120.86 130.70 111.23 135.56 106.58 148.92 C 105.26 152.70 103.29 156.26 101.52 159.88 C 69.12 226.17 36.71 292.46 4.31 358.75 C 2.90 361.65 1.65 364.62 0.00 368.25 C 6.37 368.25 12.49 368.19 18.50 368.15 L 18.48 368.16 L 40.45 368.35 C 41.02 368.36 41.60 368.37 42.17 368.40 C 42.78 368.43 43.34 368.41 43.88 368.39 L 43.93 368.39 L 47.59 368.41 L 48.27 367.22 L 60.40 345.88 C 86.02 292.45 111.87 239.13 137.25 185.58 C 142.17 175.18 149.31 170.83 160.56 170.90 C 190.82 171.08 221.15 172.02 251.34 170.57 C 269.17 169.72 279.33 175.60 285.64 191.73 C 290.06 203.04 296.33 213.66 302.40 225.06 L 329.98 183.25 C 318.42 160.81 307.11 138.24 295.80 115.67 Z',
  pathAStem: 'M 190.40 281.36 L 190.40 368.42 L 146.05 368.42 L 146.05 221.37 L 146.08 221.37 L 190.40 281.36 Z',
  pathM: 'M 144.61 193.51 C 163.08 193.51 179.74 193.31 196.38 193.74 C 198.56 193.80 201.10 196.74 202.74 198.92 C 225.02 228.46 247.17 258.10 269.36 287.71 C 270.69 289.48 272.09 291.18 273.73 293.25 C 312.84 233.85 351.66 174.88 391.49 114.39 C 419.88 199.57 447.77 283.25 476.09 368.21 C 468.16 368.21 461.17 368.20 454.18 368.21 C 447.04 368.22 439.88 367.92 432.77 368.38 C 427.90 368.70 425.78 366.89 424.24 362.30 C 409.27 317.59 394.09 272.96 378.97 228.30 C 378.12 225.79 377.25 223.30 375.98 219.61 C 341.68 269.49 308.05 318.40 273.76 368.27 C 230.79 310.13 188.24 252.55 144.61 193.51 Z',
};

/**
 * Official AM Mark Component (Icon only)
 */
export function LogoIcon({
  variant = 'light', // 'light' | 'dark'
  className = 'w-10 h-10',
}) {
  const colorA = variant === 'dark' ? '#FFFFFF' : '#0A3642';
  const colorM = '#D69E2E';

  return (
    <svg
      viewBox="0 0 476.09 368.7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('transition-transform duration-300', className)}
      aria-label="AM Monogram"
    >
      {/* 'A' Arch */}
      <path d={LOGO_PATHS.pathAArch} fill={colorA} />
      {/* 'A' Stem */}
      <path d={LOGO_PATHS.pathAStem} fill={colorA} />
      {/* 'M' Mark */}
      <path d={LOGO_PATHS.pathM} fill={colorM} />
    </svg>
  );
}

/**
 * Full Official Horizontal Brand Logo Lockup
 */
export function LogoFull({
  variant = 'light', // 'light' | 'dark'
  showTagline = true,
  className = '',
}) {
  const isDark = variant === 'dark';

  return (
    <div className={clsx('inline-flex items-center gap-3.5 select-none', className)}>
      {/* Logo Monogram */}
      <div className="flex-shrink-0">
        <LogoIcon variant={variant} className="w-11 h-9 sm:w-12 sm:h-10" />
      </div>

      {/* Vertical Divider */}
      <div
        className={clsx(
          'w-[1.5px] h-10 self-center',
          isDark ? 'bg-white/30' : 'bg-petrol-900/30'
        )}
      />

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center">
        <span
          className={clsx(
            'font-sans font-extrabold text-base sm:text-lg uppercase tracking-tight leading-none',
            isDark ? 'text-white' : 'text-petrol-900'
          )}
        >
          AM TRADINGS
        </span>
        <span className="font-sans font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold-500 mt-1 leading-none">
          AND CONSULTANTS
        </span>
        {showTagline && (
          <span
            className={clsx(
              'text-[8.5px] sm:text-[9.5px] font-medium tracking-tight mt-1 leading-none',
              isDark ? 'text-slate-300' : 'text-petrol-800'
            )}
          >
            Beyond Trade – Beyond Boundaries
          </span>
        )}
      </div>
    </div>
  );
}
