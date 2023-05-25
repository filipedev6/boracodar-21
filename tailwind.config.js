/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'number-lg': ['20px', '24px'],
        heading: ['1.25rem', '1.5rem'],
        'number-sm': ['1rem', '1.5rem'],
        paragraph: ['1rem', '1.5rem'],
      },
      colors: {
        brand: {
          color: '#9333EA',
          'color-light': '#A855F7',
          'color-lighter': '#C084FC',
        },
        neutral: {
          primary: '#F9FAFB',
          secondary: '#E4E4E7',
          'close-button': '#A1A1AA',
          stroke: '#3F3F46',
          surface: '#18181B',
        },
        others: {
          background: '#09090B',
        },
      },
    },
  },
  plugins: [],
}
