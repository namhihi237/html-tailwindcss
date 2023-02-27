/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      spacing: {
        '35': '35px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // 'purple-e9': '#e9d5ff',
      },
    },
  },
  plugins: [],
}
