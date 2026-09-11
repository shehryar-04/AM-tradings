/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        petrol: {
          950: '#06222A', // Deepest Petrol
          900: '#0A3642', // Primary Brand Petrol Dark Teal (#0A3642)
          850: '#0E4D5D', // Tertiary Petrol Teal (#0E4D5D)
          800: '#11586B',
          700: '#15687E',
          600: '#1A7E98',
          500: '#2196B5',
          400: '#41AFD0',
          300: '#75C8DF',
          200: '#AFE1EE',
          100: '#DEF3F7',
          50: '#F0F8FA',
        },
        gold: {
          900: '#5C410F',
          800: '#7E5B15',
          700: '#A3761B',
          600: '#BD8A24',
          500: '#D69E2E', // Secondary Brand Warm Gold (#D69E2E)
          400: '#E1B354',
          300: '#EAC87D',
          200: '#F3DCA7',
          100: '#F9EED3',
          50: '#FDF9EE',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#F4F6F7', // Neutral Brand Base (#F4F6F7)
          200: '#EAEFF1', // Soft Cool Neutral
          300: '#DDE5E9',
          400: '#C2D0D6',
          500: '#9BB0B9',
        },
        tertiary: {
          DEFAULT: '#0E4D5D', // Tertiary Brand Color (#0E4D5D)
          dark: '#0A3642',
          light: '#15687E',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1EBE5D',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Work Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Space Grotesk"', 'sans-serif'], // Map serif references to Space Grotesk per DESIGN.md
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'headline-xl': ['3.5rem', { lineHeight: '4rem', letterSpacing: '-0.03em', fontWeight: '700' }],
        'headline-xl-mobile': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-sm': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'body-md': ['0.9375rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'label-lg': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.04em', fontWeight: '600' }],
        'label-md': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em', fontWeight: '600' }],
        'stat-metric': ['4rem', { lineHeight: '4.25rem', letterSpacing: '-0.04em', fontWeight: '700' }],
        'stat-metric-mobile': ['2.75rem', { lineHeight: '3rem', letterSpacing: '-0.03em', fontWeight: '700' }],
      },
      boxShadow: {
        'card': '0 4px 16px -2px rgba(10, 54, 66, 0.08)',
        'card-hover': '0 8px 24px -4px rgba(10, 54, 66, 0.12)',
        'modal': '0 12px 32px -4px rgba(10, 54, 66, 0.16)',
        'gold-glow': '0 0 25px -5px rgba(214, 158, 46, 0.35)',
        'luxury': '0 20px 50px -10px rgba(10, 54, 66, 0.15)',
        'luxury-dark': '0 24px 60px -15px rgba(6, 34, 42, 0.45)',
      },
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
