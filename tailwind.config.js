/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    spacing: {
      149: '149%',
      559:'-559%',
      100: '100vh',
      39: '39rem',
      12: '-12rem',
      1: '1rem',
      13: '-13rem',
    },
    color: {
      'head': '#232E40',
      "gray-500": "var(--gray-500)",
        "gray-900": "var(--gray-900)",
        "primary-050": "var(--primary-050)",
        "primary-500": "var(--primary-500)",
        "white-900": "var(--white-900)",
    },
    fontFamily: {
      'Poppins': ['Poppins',],
      "text-md-medium": "var(--text-md-medium-font-family)",
        "text-sm-medium": "var(--text-sm-medium-font-family)",
    },
    fontSize:{
      64:'64px',
    },
    fontWeight:{
      700: '700',
    },
    lineHeight:{
      64:'64px',
      38: '38px',
    },
   
  },
  plugins: [],
};

