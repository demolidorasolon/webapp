import styled from 'styled-components'
import { from } from '../../../../../../styles'

export const WorkExperienceItemStyles = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.5rem;

  transition: all 0.3s;
  padding: 0.8rem 1.6rem;

  :hover {
    background-color: ${({ theme }) => theme.palette.common.black}30;
  }

  ${from.md} {
    max-width: 17rem;
    padding: 1.6rem;
  }
`
