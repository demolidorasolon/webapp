import styled from 'styled-components'
import { from } from '../../styles'

export const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
`
