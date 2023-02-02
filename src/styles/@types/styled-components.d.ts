/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  Color,
  PaletteColor,
  CommonColors,
  TypeText,
  TypeAction,
  TypeBackground,
  Theme
} from '@mui/material'
import { PaletteTonalOffset } from '@mui/material/styles/createPalette'

import { MixinsOptions } from '@mui/material/styles/createMixins'

export type CustomPaletteColor = Partial<Color> & PaletteColor

export type CustomBackgroundColor = Partial<TypeBackground> & {
  header: string
}

declare module '@mui/material' {
  export interface Theme {
    palette: {
      primary: CustomPaletteColor
      secondary: CustomPaletteColor
      error: CustomPaletteColor
      warning: CustomPaletteColor
      success: CustomPaletteColor
      grey: CustomPaletteColor
      common: Partial<CommonColors>
      text: Partial<TypeText>
      info?: CustomPaletteColor
      mode?: PaletteMode
      tonalOffset?: PaletteTonalOffset
      contrastThreshold?: number
      divider?: string
      action?: Partial<TypeAction>
      background?: CustomBackgroundColor
      getContrastText?: (background: string) => string
    }
    mixins: {
      header?: MixinsOptions['toolbar']
      toolbar?: MixinsOptions['toolbar']
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
