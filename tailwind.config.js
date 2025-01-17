/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        yellow: '#FFCE1A',
        darkBlue: '#0D0842',
        lightBlue: '#6E6B8E',
      },
      fontSize: {
        '10xl': ['14.25rem', { lineHeight: '1.15' }],
      },
      fontFamily: {
        nunitoSans: ['Nunito Sans'],
      },
      padding: {
        25: '100px',
      },
      boxShadow: {
        yellow: '0 20px 20px -18px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
