/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        wobble: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        wobble: 'wobble 0.5s ease-in-out infinite',
      },
    },
    variants: {
      scrollbar: ['rounded'],
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
  }
}
