import { Accordion, AccordionSummary } from '@mui/material'
import styled from 'styled-components'

export const AccordionStyles = styled(Accordion)`
  border: 0.1rem solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: 0.8rem;

  width: 100%;

  ::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
  }

  & > .MuiButtonBase-root {
    background-color: transparent !important;
  }

  &.Mui-expanded {
    border: 0.1rem solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: none;
    background-color: ${({ theme }) => theme.palette.primary.main}10;
    svg {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

export const AccordionSummaryStyles = styled(AccordionSummary)`
  &.Mui-focusVisible {
    background-color: initial;
  }
`
