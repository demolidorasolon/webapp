import React, { PropsWithChildren } from 'react'
import { CssBaseline, responsiveFontSizes } from '@mui/material'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { palette } from './palette'
import { typography } from './typography'
import { breakpoints } from './breakpoints'
import { components } from './components'
import { StyledThemeWrapper } from './StyledTheme'
import { mixins } from './mixins'

export const MuiTheme: ThemeOptions = {
  palette,
  components,
  typography,
  breakpoints,
  mixins
}

export const MuiThemeWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  let theme = createTheme(MuiTheme)

  theme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={theme}>
      <StyledThemeWrapper>
        <CssBaseline />
        {children}
      </StyledThemeWrapper>
    </ThemeProvider>
  )
}

export * from './components'
export * from './palette'
export * from './globalStyles'
