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
        display: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        sans: ['var(--font-figtree)', 'sans-serif'],
      },
      colors: {
        bg: {
          base:     '#06090D',
          surface:  '#0C1219',
          elevated: '#111C27',
        },
        edge: {
          DEFAULT: '#22D3A0',
          dim:     '#17A37C',
        },
        ink: {
          1: '#F0F4F8',
          2: '#7D96B0',
          3: '#3A5270',
        },
        line: 'rgba(255,255,255,0.07)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
