/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {

      
      // => @media (min-width: 640px) { ... }

      'md': '540px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [],
}

