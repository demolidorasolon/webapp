import styled, { css } from 'styled-components'
import { ListItem } from '@mui/material'

export const ListItemStyles = styled(ListItem)<{ isActive?: boolean }>`
  background-color: transparent;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.palette.primary.main}30;
    `}
`
