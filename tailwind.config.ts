import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
        sans:    ['var(--font-figtree)', 'sans-serif'],
      },
      colors: {
        bg: {
          base:     '#F7F5F2',
          surface:  '#FFFFFF',
          elevated: '#EDE9E3',
        },
        edge: {
          DEFAULT: '#059669',
          dim:     '#047857',
        },
        blue: {
          accent:  '#148AFF',
          dim:     '#0E6FD4',
          light:   '#00C2FF',
          glow:    'rgba(20,138,255,0.15)',
        },
        ink: {
          1: '#141412',
          2: '#6A6861',
          3: '#ABA79F',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
