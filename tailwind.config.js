/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {

      'sm': '420px',
      // => @media (min-width: 640px) { ... }

      'md': '520px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [],
}

