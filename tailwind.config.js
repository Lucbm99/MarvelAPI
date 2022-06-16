module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    listStyleType: {
      inside: 'inside',
    }
  },
  variants: {
    extend: {},
  },
};