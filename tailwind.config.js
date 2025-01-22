/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        yellow: '#FFCE1A',
        yellowHover: '#FFD633',
        darkBlue: '#0D0842',
        lightBlue: '#6E6B8E',
        yellowFooter: '#FEAF38'
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
        card: '0 0 0 0 rgba(13, 8, 66, 0.1), 0 1px 3px 0 rgba(13, 8, 66, 0.1), 0 6px 6px 0 rgba(13, 8, 66, 0.09), 0 13px 8px 0 rgba(13, 8, 66, 0.05), 0 23px 9px 0 rgba(13, 8, 66, 0.01), 0 36px 10px 0 rgba(13, 8, 66, 0);',
      },
    },
  },
  plugins: [],
};
