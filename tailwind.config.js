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
    extends: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif'],
        raleway: ["'Raleway'", 'Verdana', 'sans-serif'],
        mont: ["'Montserrat'", 'Verdana', 'sans-serif'],
      },
    },
    screens: {
      sm: '320px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
