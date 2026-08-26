/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-heading)'],
        sans: ['var(--font-body)'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        // Surfaces sampled from the Figma frame (landing-page 01)
        page: '#F3F7F4',
        ink: '#0B0B0B',
        dark: '#151515',
        tech: '#F0EBC3',
        cta: '#CBEAD3',
        sortla: {
          // Bin label pills
          organic: '#24793A',
          residual: '#3C3C3C',
          recyclable: '#68550C',
          // Accents
          green: '#2EB551',
          yellow: '#E4BA00',
          // Neutrals
          cardDark: '#0E0E0E',
          hairDark: '#2A2A2A',
          cream: '#F6F4EC',
          hairLight: '#C9CCCA',
          body: '#545353',
          bodyAlt: '#5D5D5D',
          panel: '#DCE7DF',
          panelCard: '#F5F8F6',
        },
      },
      maxWidth: {
        shell: '1050px',
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out both',
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
      },
    },
  },
  plugins: [],
}
