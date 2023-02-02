import styled from 'styled-components'
import { from } from '../../../../styles'

export const BenefitSectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)};
`

export const BackgroundVideoStyles = styled.div`
  position: relative;
  min-height: 45rem;

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: 0;
    border-radius: 0.8rem;
  }
`

export const BackgroundVideoContentStyles = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 1.6rem;

  ${from.md} {
    padding: 3.2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const BackgroundVideoCompanyStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.common.white};
  height: 100%;
  max-width: 30rem;
  padding: 2.4rem 2rem;
  border-radius: 0.8rem;
  gap: ${({ theme }) => theme.spacing(5)};

  ${from.md} {
    padding: 4.8rem 4rem;
  }
`

export const ExpertiseItemGridStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  ${from.md} {
    flex-direction: row;
  }
`
