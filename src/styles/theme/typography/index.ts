import { ThemeOptions } from '@mui/material'

export const typography: ThemeOptions['typography'] = {
  fontFamily: ['Muli', 'Rajdhani', 'Venera', 'sans-serif'].join(','),
  htmlFontSize: 10,
  fontWeightBold: 600,
  allVariants: {
    lineHeight: 1.2
  },
  h1: {
    fontSize: '3rem'
  },
  h2: {
    fontSize: '2.5rem'
  },
  h3: {
    fontSize: '2.3rem'
  },
  subtitle1: {
    fontSize: '1.5rem'
  },
  subtitle2: {
    fontSize: '1.3rem'
  },
  body1: {
    fontSize: '1.5rem'
  },
  body2: {
    fontSize: '1.3rem'
  },
  caption: {
    fontSize: '1rem'
  }
}
