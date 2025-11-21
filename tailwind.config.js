/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2f9',
          100: '#c4e1f0',
          200: '#9ecfe6',
          300: '#77bddc',
          400: '#5aafd5',
          500: '#2E6EA1',
          600: '#1F6DA5',
          700: '#1B84B8',
          800: '#165f84',
          900: '#0f4460',
        },
        graphite: {
          DEFAULT: '#2C2F33',
          50: '#f7f7f8',
          100: '#e9e9eb',
          200: '#d4d4d7',
          300: '#b8b8bd',
          400: '#98989f',
          500: '#7d7d85',
          600: '#65656c',
          700: '#515157',
          800: '#454549',
          900: '#2C2F33',
        },
        accent: {
          cyan: '#06b6d4',
          purple: '#a855f7',
          pink: '#ec4899',
          orange: '#f97316',
        },
        background: {
          light: '#F7F9FC',
          dark: '#0a0e1a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(46, 110, 161, 0.3)',
        'glow-lg': '0 0 50px rgba(46, 110, 161, 0.4)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.12)',
        'inner-glow': 'inset 0 0 20px rgba(46, 110, 161, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
