/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        desk: '#FFFFF4',
        oranges: '#DD740A',
        hblue: '#009DE0',
      },
    },
    fontFamily: {
      gmond: ['"Cormorant Garamond"', 'serif'],
      osans: ['"Open Sans"', 'sans-serif'],
      karma: ['"Karma"', 'serif'],
      gbasic: ['"Gentium Book Basic"', 'serif'],
      martel: ['"Martel"', 'serif'],
      inter: ['"Inter"', 'sans-serif'],
      mweather: ['"Merriweather"', 'serif'],
      mserrat: ['"Montserrat"', 'sans-serif'],
    },

    // screens: {
    //   sm: '640px',
    //   // => @media (min-width: 640px) { ... }

    //   md: '768px',
    //   // => @media (min-width: 768px) { ... }

    //   lg: '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   xl: '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
  },
  plugins: [],
};
