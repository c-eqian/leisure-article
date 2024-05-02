import type { Config } from 'tailwindcss'

export default {
  prefix: 'cz-',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.{js,ts,vue}'
  ],
  // 3.4
  darkMode: ['class', '[class="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        base: '2px 2px 5px 1px rgba(229,231,235,1)'
      }
    }
  },
  plugins: []
} satisfies Config
