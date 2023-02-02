import styled from 'styled-components'
import { from } from '../../../../styles'

export const FaqSectionStyles = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-direction: column;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 40rem;
    border-radius: ${({ theme }) => theme.spacing(1)};
  }

  ${from.md} {
    flex-direction: row;
  }
`

export const FaqContainerStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`
