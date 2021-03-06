module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',
    },
    extend: {
      gridTemplateColumns: {
        one: '1fr',
        two: '1fr 1fr',
      },
      gridTemplateRows: {
        zero: 'auto',
        two: 'auto auto',
      },
      gridAutoColumns: {
        zero: 'auto',
        one: '1fr',
      },
      gridRowStart: {
        'span-one': 'span 1',
      },
      gridRowEnd: {
        'span-one': 'span 1',
      },
      gridColumnStart: {
        'span-one': 'span 1',
      },
      gridColumnEnd: {
        'span-one': 'span 1',
      },
    },
  },
  plugins: [],
};
