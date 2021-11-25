const primaryColor = '#8AC6D1'
const accentColor = '#d81e5b'
const light = '#FAE3D9CC'
const black = '#000'
const secondaryColor = '#BBDED6'
// https://www.colorhunt.co/palette/ffb6b9fae3d9bbded68ac6d1
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: `${primaryColor}`,
        secondary: `${secondaryColor}`,
        accent: `${accentColor}`,
        light: `${light}`,
      },
      outline: {
        solid: [`2px solid ${black}`, '2px'],
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      heading: ['Lato', 'ui-sans-serif', 'system-ui'],
      base: ['Noticia Text', 'ui-sans-serif', 'system-ui'],
    },
  },
  variants: {
    extend: {
      outline: ['hover'],
    },
  },
}
