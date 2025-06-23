/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00475E',
          navy: '#00475E',
          teal: '#006D77',
        },
        accent: {
          DEFAULT: '#FFD700',
          gold: '#FFD700',
          orange: '#FF6B35',
        },
        secondary: {
          DEFAULT: '#1E3A8A',
          blue: '#1E3A8A',
        },
        text: {
          dark: '#1F2937',
          light: '#6B7280',
        },
        background: {
          light: '#F9FAFB',
          dark: '#111827',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-secondary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'custom': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'custom-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
} 