/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      container:{
        center: true,
          padding: {
            default: '1rem',
            sm: '3rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          }
      }
    },
  },
  plugins:  [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          '-webkit-overflow-scrolling': 'touch', // For smooth scrolling on iOS
          'scrollbar-width': 'none',  // Firefox
          '-ms-overflow-style': 'none', // IE 10+
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari, and Opera
        },
      });
    },
  ],
}