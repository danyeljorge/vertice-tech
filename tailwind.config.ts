import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#C4FF33',
          limeHover: '#B8F22D',
          darkBg: '#090C09',
          darkSurface: '#111411',
          card: '#141814',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          borderActive: '#C4FF33',
          muted: '#8A998A',
        },
        'primary-container': '#bbf527',
        'on-primary-container': '#0c0f0c',
        'primary-fixed': '#bbf527',
        'primary-fixed-dim': '#a2d800',
        'surface-container-lowest': '#0c0f0c',
        'surface-container-low': '#141814',
        'surface-container': '#191c19',
        'surface-container-high': '#242824',
        'surface-container-highest': '#333632',
        surface: '#111411',
        'surface-dim': '#0c0f0c',
        'surface-bright': '#373a36',
        'on-surface': '#e1e3dd',
        'on-surface-variant': '#94a3b8',
        outline: '#8d947a',
        'outline-variant': '#434934',
        secondary: '#94a3b8',
        'secondary-container': '#464a45',
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        full: '9999px',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'lime-glow': '0 0 24px rgba(187, 245, 39, 0.35)',
        'lime-glow-lg': '0 0 40px rgba(187, 245, 39, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
