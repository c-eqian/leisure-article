import type { Config } from 'tailwindcss'

export default {
  prefix: 'cz-',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.{js,ts,vue}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
