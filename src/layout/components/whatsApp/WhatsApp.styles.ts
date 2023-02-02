import { Fab } from '@mui/material'
import styled from 'styled-components'

export const FabStyles = styled(Fab)`
  /* position: fixed;
  bottom: 16;
  right: 16;
  z-index: 1000; */
  transition: all 0.3s;

  :hover {
    transform: scale(1.1);
    & > {
      background-color: transparent;
    }
  }
`
