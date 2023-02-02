import { Theme, useTheme } from '@mui/material'
import { MixinsOptions } from '@mui/material/styles/createMixins'
import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    mixins: {
      header?: MixinsOptions['toolbar']
    }
  }
}

export const StyledThemeWrapper: React.FC<PropsWithChildren> = ({
  children
}) => {
  const theme = useTheme()
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
