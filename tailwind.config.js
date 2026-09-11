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
          950: '#051D24', // Deepest Petrol
          900: '#094B5B', // Official Primary Petrol Teal (from Letterhead & Card)
          850: '#0C3151', // Official Deep Imperial Navy (from Letterhead & Card)
          800: '#103E4A', // Rich Petrol
          700: '#145363',
          600: '#1A6B7F',
          500: '#22869E',
          400: '#38A3BD',
          300: '#64BED4',
          200: '#A8DBE8',
          100: '#D2EEF5',
          50: '#E6F6FD',  // Official Soft Ice Accent (from Business Card)
        },
        gold: {
          900: '#5A421C',
          800: '#7E5E28',
          700: '#9F7635',
          600: '#B5883E',
          500: '#C6984C', // Official Executive Gold (from Letterhead & Card)
          400: '#D6AE68',
          300: '#E4C78D',
          200: '#EEDDB8',
          100: '#F7EFE0',
          50: '#FDFBF7',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#F8FAFB', // Letterhead Canvas White
          200: '#F1F5F7', // Crisp Cool Light Neutral
          300: '#E2E9ED',
          400: '#CBD6DC',
          500: '#98A9B2',
        },
        navy: {
          DEFAULT: '#0C3151',
          dark: '#072036',
          light: '#144670',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1EBE5D',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 20px 50px -10px rgba(7, 21, 29, 0.15)',
        'luxury-dark': '0 24px 60px -15px rgba(0, 0, 0, 0.45)',
        'gold-glow': '0 0 35px -5px rgba(200, 150, 62, 0.35)',
        'card': '0 4px 20px -2px rgba(11, 33, 45, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
