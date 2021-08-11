module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      '100%': '100%',
      '90%': '90%',
      '85%': '85%',
      'medium': '200%',
      'xmedium': '230%',
      'lt': '280%',
    },
    screens: {
      'xsm': '300px',
      'msm': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },
    extend: {
      backgroundImage: {
        profile: "url('/assets/img/test.jpg')",
      },
      colors: {
        a: '#090909',
        b: '#747474',
        c: '#F5F5F5',
        d: '#F8F8F8',
        e: '#707070',
        crgba: 'rgba(254, 254, 254, 0.7)',
      },
      width: {
        '320': '320px',
        '1084': '1084px',
      },
      scale: {
        '60': '.60',
        '65': '.65',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
