/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      'base': ['1rem', {
        lineHeight: '1.5rem',
        fontWeight: '200',
        letterSpacing: '0.1em',
      }],
      'xl': ['1.25rem', {
        lineHeight: '1.75rem',
        fontWeight: '200',
        letterSpacing: '0.1em',
      }],
      '5xl': ['3.4rem', {
        lineHeight: '1rem',
        fontWeight: '400',
      }],
      '7xl': ['4.5rem', {
        lineHeight: '2rem',
        fontWeight: '400',
      }]
    },
    extend: {}
  },
  plugins: [],
}