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
      'main-dark': '#010775',
      secondary: '#2FD0DE',
      error: '#FA5435',
      warning: '#EEC643',
      success: '#64B6AC',
      white: '#F9F9F9',
      'white-abs': '#FFFFFF',
      'gray-dark': '#2D2D2D',
      gray: '#505050',
      'gray-light': '#d3dce6',
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
