import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './blog/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#090b10',
        fg: '#e7eaf0',
        muted: '#9099a8',
        arch: {
          DEFAULT: '#1793d1',
          light: '#5cb8ea',
        },
      },
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      // Blog post styles (the `prose` classes) tuned to the site colors.
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#c3c9d4',
            '--tw-prose-headings': '#e7eaf0',
            '--tw-prose-bold': '#e7eaf0',
            '--tw-prose-links': '#5cb8ea',
            '--tw-prose-code': '#e7eaf0',
            '--tw-prose-quotes': '#9099a8',
            '--tw-prose-quote-borders': '#1793d1',
            '--tw-prose-bullets': '#5c6575',
            '--tw-prose-counters': '#9099a8',
            '--tw-prose-hr': 'rgb(255 255 255 / 0.08)',
            '--tw-prose-pre-bg': 'rgb(255 255 255 / 0.035)',
            '--tw-prose-pre-code': '#d5dae3',
            '--tw-prose-th-borders': 'rgb(255 255 255 / 0.12)',
            '--tw-prose-td-borders': 'rgb(255 255 255 / 0.06)',
          },
        },
      },
    },
  },
  plugins: [typography],
}
