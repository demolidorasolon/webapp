import styled from 'styled-components'
import { from } from '../../styles'

export const ServiceStyles = styled.div`
  padding: ${({ theme }) => theme.spacing(12)} 0;

  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  gap: ${({ theme }) => theme.spacing(4)};

  ${from.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`
