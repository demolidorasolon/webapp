import styled from 'styled-components'
import { from } from '../../../../styles'

export const InitialSectionStyles = styled.section<{ imageSrc?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(7)};

  background-image: url(${({ imageSrc }) => imageSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  padding: 10vw;

  ::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.palette.common.black}79;
    z-index: 0;
  }
`

export const InitialTextStyles = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  text-align: center;
`

export const InitialButtonStyles = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  ${from.md} {
    flex-direction: row;
  }
`

export const InitialWorkExperienceStyles = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  ${from.md} {
    flex-direction: row;
  }
`
