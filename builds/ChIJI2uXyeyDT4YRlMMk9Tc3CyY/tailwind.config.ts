import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:     'var(--color-bg)',
        fg:     'var(--color-fg)',
        accent: 'var(--color-accent)',
        muted:  'var(--color-muted)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body:    'var(--font-body)',
      }
    },
  },
  plugins: [],
}
export default config
