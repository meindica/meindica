import { theme } from '@chakra-ui/core'

const { colors, fontSizes, fonts } = theme

export default {
  ...theme,
  colors: {
    ...colors,
    blue: {
      100: '#696A99',
      200: '#43457F',
    },
    yellow: {
      100: '#FEDA84',
      200: '#FEE19D',
    },
    white: '#ffffff',
    black: '#121212',
  },
  /* sizes are converted to rem using a 16px as base */
  fontSizes: {
    ...fontSizes,
    'xs': '0.8rem',
    'sm': '1rem',
    'md': '1.1rem',
    'lg': '1.2rem',
    'xl': '1.3rem',
    '2xl': '2.5rem',
    '3xl': '2.6rem',
    '4xl': '2.8rem',
    '5xl': '3.1rem',
  },
  fonts: {
    ...fonts,
    body: `'Roboto', sans-serif`,
    heading: `'Roboto', sans-serif`,
  },
}
