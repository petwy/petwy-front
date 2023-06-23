/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      main: '#474973',
      'main-light': '#787CC2',
      'main-dark': '#3D3E61',
      secondary: '#2FD0DE',
      error: '#FA5435',
      'error-light': '#F9917F',
      warning: '#EEC643',
      success: '#64B6AC',
      white: '#F9F9F9',
      'white-light': '#F7F2F9',
      'white-abs': '#FFFFFF',
      'gray-dark': '#4D4D4D',
      gray: '#737373',
      'gray-light': '#B3B3B3',
    },
    fontFamily: {
      monserrat: ['Monserrat', 'sans-serif'],
    },
    backgroundImage: {
      'pet-box': "url('public/assets/ruby-schmank-rPC4QnaPqQ0-unsplash-2.jpg')",
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
