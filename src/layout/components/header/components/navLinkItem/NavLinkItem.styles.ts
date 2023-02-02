import { Typography } from '@mui/material'
import styled, { css } from 'styled-components'

export const TypographyStyles = styled(Typography)<{ isActive?: boolean }>`
  color: ${({ theme }) => theme.palette.common.white};

  transition: all 0.3s ease-in-out;
  padding: 20px;

  position: relative;

  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.palette.grey[300]}30;

      ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: red;
        transition: all 0.3s ease-in-out;
      }
    `}
`
