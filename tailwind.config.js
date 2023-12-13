/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans : ['Poppins', 'sans-serif'],
      serif: [ 'Clicker Script', 'cursive']
    },
    extend: {
      colors: {
        primary: 'var(--primaryColor)',
        bkg: 'var(--backgroundColor)',
        titleColor: 'var(--titleColor)',
        textColor: 'var(--textColor)',
        itemBg: 'var(--itemBg)',
        cardBg: 'var(--cardBg)',
        hoverCardBg: 'var(--hoverCardBg)',
        siderBg: 'var(--siderBg)'
      }
    },
  },
  plugins: [],
}