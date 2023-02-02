import styled from 'styled-components'
import { from } from '../../../../styles'

export const ServiceStyles = styled.div`
  display: grid;
  gap: 1.6rem;

  ${from.xs} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${from.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`
