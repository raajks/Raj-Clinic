/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a1a2b',
          800: '#102A43', // Primary Deep Medical Navy
          700: '#1b3c5e',
          600: '#264e7c',
          500: '#33629b',
        },
        healthcare: {
          DEFAULT: '#1769AA', // Secondary Healthcare Blue
          light: '#2888cf',
          dark: '#0e4a7a',
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#1769AA',
          600: '#125488',
        },
        teal: {
          accent: '#12B8A6', // Accent Medical Teal
          hover: '#0f9f90',
          light: '#ccfbf1',
          50: '#f0fdfa',
        },
        emergency: {
          DEFAULT: '#DC3545', // Professional Red
          hover: '#b52a37',
          light: '#fee2e2',
        },
        slate: {
          surface: '#F8FAFC',
          border: '#E2E8F0',
          text: '#1E293B',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(16, 42, 67, 0.08)',
        'premium': '0 20px 40px -15px rgba(16, 42, 67, 0.07), 0 0 1px 1px rgba(16, 42, 67, 0.05)',
        'card-hover': '0 25px 50px -12px rgba(16, 42, 67, 0.15)',
        'glow-teal': '0 0 25px rgba(18, 184, 166, 0.35)',
        'glow-blue': '0 0 25px rgba(23, 105, 170, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}

