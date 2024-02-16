/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './themes/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  prefix: 'tw-',
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        'dark-surface': '#1a1f25',
        'dark-primary': '#D72323'
      }
    }
  },
  plugins: []
}
