import { Theme } from '@mui/material'

export const palette: Theme['palette'] = {
  common: {
    white: '#FFFFFF',
    black: '#000000'
  },
  primary: {
    light: '#FF3C3C',
    main: '#FF0C0C',
    dark: '#b11f1f',
    contrastText: '#FFFFFF'
  },
  secondary: {
    light: '#ffffff',
    main: '#ffffff',
    dark: '#d0d0d0',
    contrastText: '#1d1f27'
  },
  background: {
    default: '#FBFBFB',
    header: '#252837'
  },
  success: {
    50: '#B2FFAC',
    100: '#9FEE98',
    200: '#8CDD85',
    300: '#79CD72',
    400: '#66BC5F',
    light: '#54AB4C',
    600: '#419B39',
    main: '#25D366',
    800: '#1B7913',
    dark: '#075E54',
    contrastText: '#FFFFFF'
  },
  error: {
    50: '#FFD7DF',
    100: '#FFC3CF',
    200: '#FFAFBF',
    300: '#FF9CAF',
    400: '#FF889F',
    light: '#FF748F',
    600: '#FF607F',
    main: '#FF4D6F',
    800: '#E24462',
    dark: '#C63B56',
    contrastText: '#FFFFFF'
  },
  warning: {
    50: '#FDEEE2',
    100: '#FBDEC6',
    200: '#F9CEAA',
    300: '#F5AD72',
    400: '#F39D56',
    light: '#FF9800',
    600: '#EF7C1E',
    main: '#ED6C02',
    800: '#E95D00',
    dark: '#E65100',
    contrastText: '#FFFFFF'
  },
  text: {
    primary: '#282828',
    secondary: '#777777',
    disabled: '#8D8D8D'
  },
  grey: {
    A100: '#FEFEFD',
    A200: '#F8F7F5',
    A400: '#F5F5F5',
    A700: '#DDDDDD',
    50: '#E2E2E2',
    100: '#E2E2E2',
    200: '#C6C6C6',
    300: '#AAAAAA',
    400: '#8D8D8D',
    light: '#717171',
    600: '#555555',
    main: '#383838',
    800: '#1C1C1C',
    dark: '#000000',
    contrastText: '#FFFFFF'
  }
}
