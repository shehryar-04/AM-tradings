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
          950: '#051117',
          900: '#07151D',
          800: '#0B212D',
          700: '#103244',
          600: '#18475E',
          500: '#1B5C77',
          400: '#267A9D',
          300: '#4098BD',
          100: '#D5E6EE',
          50: '#F0F6F9',
        },
        gold: {
          900: '#644714',
          800: '#835E1C',
          700: '#9B732B',
          600: '#B58534',
          500: '#C8963E', // Base Gold Accent
          400: '#DFB76C', // Radiant Gold
          300: '#ECCB8E',
          200: '#F4E0BC',
          100: '#F9F1E2',
          50: '#FDFBFA',
        },
        ivory: {
          50: '#FDFCF9',
          100: '#FAF8F5', // Primary Base Neutral
          200: '#F3EFEA', // Secondary Section Neutral
          300: '#EAE4D9',
          400: '#DDD4C3',
          500: '#C9BCAB',
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
