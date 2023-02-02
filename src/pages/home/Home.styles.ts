import styled from 'styled-components'
import { from } from '../../styles'

export const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)};
`
