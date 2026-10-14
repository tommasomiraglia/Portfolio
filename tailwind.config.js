/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0f172a', // slate-900
        },
        copy: {
          muted: '#94a3b8', // slate-400
          DEFAULT: '#e2e8f0', // slate-200
        },
        accent: {
          DEFAULT: '#5eead4', // teal-300
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        spotlight: '0 0 80px 40px rgba(94, 234, 212, 0.08)',
      },
    },
  },
  plugins: [],
}
