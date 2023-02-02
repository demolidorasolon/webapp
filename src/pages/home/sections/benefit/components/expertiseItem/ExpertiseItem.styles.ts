import styled, { css } from 'styled-components'
import { from } from '../../../../../../styles'

export const ExpertiseItemStyles = styled.div<{ isHovered?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.8rem;
  width: 100%;
  padding-bottom: 1.6rem;
  border-radius: 0.8rem;
  border-bottom: 0.4rem solid transparent;

  transition: all 0.3s ease-in-out;

  ${({ isHovered }) =>
    isHovered &&
    css`
      border-bottom: 0.4rem solid ${({ theme }) => theme.palette.primary.main};
    `}

  ${from.md} {
    gap: 1.6rem;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
`

export const IconStyles = styled.div<{ isHovered?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 4.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};

  svg {
    color: ${({ theme }) => theme.palette.common.white};
  }

  ${({ isHovered }) =>
    isHovered &&
    css`
      border: 0.5rem solid ${({ theme }) => theme.palette.primary.light};
    `}
`
