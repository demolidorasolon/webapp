import { ThemeComponentTypes } from '../types'

export const ContainerStyleOverrides: ThemeComponentTypes['MuiContainer'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(10),
      paddingY: theme.spacing(10)
    })
  }
}
