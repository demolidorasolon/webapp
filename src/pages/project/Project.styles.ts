import styled from 'styled-components'
import { from } from '../../styles'

export const ProjectStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(12)} 0;
  gap: ${({ theme }) => theme.spacing(7)};
`
