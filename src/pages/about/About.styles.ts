import styled from 'styled-components'
import { from } from '../../styles'

export const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(12)} 0;
  gap: ${({ theme }) => theme.spacing(7)};
`

export const AboutContentStyles = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  align-items: center;

  ${from.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const AboutLeftContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)};
`
export const AboutImageStyles = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing(1)};
`
