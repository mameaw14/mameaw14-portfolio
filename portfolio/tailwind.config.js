/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#E4688e',
        'primary': 'white'
      },

    },
    fontFamily: {
      'mono': ['Monoton', 'cursive'],
      'serif': ['Trirong', 'ui-serif', 'serif'],
      'sans': ['Open Sans','ui-sans-serif', 'system-ui'],
    },

  },
  plugins: [],
}