import { AppBar } from '@mui/material'
import styled from 'styled-components'

export const HeaderStyles = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.appBar};
  background-color: ${({ theme }) => theme.palette.background?.default};
`
