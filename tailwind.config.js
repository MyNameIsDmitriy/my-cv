/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      fontFamily: {
        hind: ['Hind', 'sans-serif'],
        plex: ['Plex', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
