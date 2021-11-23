const primaryColor = '#000'

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: `${primaryColor}`,
      },
      outline: {
        solid: [`2px solid ${primaryColor}`, '2px'],
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
