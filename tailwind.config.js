/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightText: '#707d7d',
        buttonActive: '#abeadf',
        buttonNormal: '#1b464b',
        inputError: '#b48777'
      },
      letterSpacing: {
        widest: '0.4em'
      }
    },
  },
  plugins: [],
}
