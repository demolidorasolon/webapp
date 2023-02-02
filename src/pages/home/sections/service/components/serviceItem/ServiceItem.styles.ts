import styled, { css } from 'styled-components'
import { from } from '../../../../../../styles'

export const ServiceItemStyles = styled.div<{
  isHovered?: boolean
  imageSrc?: string
}>`
  padding: 0.8rem;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.6rem;
  width: 100%;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.grey[100]};

  background-image: url(${({ imageSrc }) => imageSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease-in-out;

  ${({ isHovered, imageSrc }) =>
    isHovered &&
    !imageSrc &&
    css`
      border: 0.1rem solid ${({ theme }) => theme.palette.primary.main};
      background-color: ${({ theme }) => theme.palette.primary.main}10;
    `}

  ${from.md} {
    padding: 1.6rem;
  }
`
