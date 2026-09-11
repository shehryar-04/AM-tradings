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
