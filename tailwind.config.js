/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,css,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        serifAccent: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          // Primary purple hues (derived from logo)
          primary: 'var(--color-primary)',
          'primary-dark': 'var(--color-primary-dark)',
          'primary-light': 'var(--color-primary-light)',
          // Accent pink
          'accent-pink': 'var(--color-accent-pink)',
          // Neutrals
          'neutral-50': 'var(--color-neutral-50)',
          'neutral-100': 'var(--color-neutral-100)',
          'neutral-200': 'var(--color-neutral-200)',
          'neutral-300': 'var(--color-neutral-300)',
          'neutral-400': 'var(--color-neutral-400)',
          'neutral-500': 'var(--color-neutral-500)',
          'neutral-600': 'var(--color-neutral-600)',
          'neutral-700': 'var(--color-neutral-700)',
          'neutral-800': 'var(--color-neutral-800)',
          'neutral-900': 'var(--color-neutral-900)',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      ringColor: {
        brand: 'var(--color-primary)',
      },
    },
  },
  plugins: [],
};
