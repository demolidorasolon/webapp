import { ThemeComponentTypes } from '../types'

export const CheckboxStyleOverrides: ThemeComponentTypes['MuiCheckbox'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.secondary
    })
  }
}
