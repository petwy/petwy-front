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
      'main-light': '#a69cac',
      'main-dark': '#161b33',
      error: '#e23c4e',
      'error-light': '#ff595e',
      warning: '#EEC643',
      success: '#7ca982',
      white: '#F1F2F6',
      'white-light': '#F7F2F9',
      'white-abs': '#FFFFFF',
      'gray-dark': '#4D4D4D',
      gray: '#737373',
      'gray-light': '#B3B3B3',
      black: '#241909',
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

/* colores
 * A9AFD1
 * C2CAE8
 * ADA9B7
 * success 88D498 64B6AC
 * magnolia F7F0F5
 *  */
