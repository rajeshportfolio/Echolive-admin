export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom1: '#667eea',
        custom2: '#764ba2',
        gray800custom: '#4c4c5c',
        gray500custom: '#9ba6b7',
        gray800: '#313a46',
        borderGray: '#ced4da',
        borderLight: '#e7e9eb',
        indigo600: '#465dff',
        indigo700: '#3f54e7',
        darkBlue: '#232e51',
        graycolor: '#97aac1',
        bluelight: '#783bff',
        green800: '#6ac75a',
        red800: '#ff6d43',
        bogreen800: '#c3e9bd',
        bored800: '#ffc5b4',
        bggreen500: '#e9f7e6',
        bgorange500: '#fef6e7',
        orange800: '#f9c45c'
      },
      fontFamily: {
        fontInter: ['"Inter"', 'sans-serif'],
      },
      spacing: {
        '4_5rem': '4.5rem',
      },
      keyframes: {
        DropDownSlideUp: {
          '0%': { marginTop: '5px' },
          '100%': { marginTop: '-1px' },
        },
      },
      animation: {
        dropdown: 'DropDownSlideUp 0.3s both',
      },
      boxShadow: {
        'osen-dropdown': '0 8px 24px rgba(149, 157, 165, 0.2)',
        boxCardShadow: '0px 0px 35px 0px rgba(104, 134, 177, 0.15)',
      },
      screens: {
        'xxl': '1500px',
        'xl': '1200px',
        'lg': '1140px',
        'md': '991px',
        'sm': '768px',
        'xs': '575px',
      },
    },
  },
  plugins: [],
}
