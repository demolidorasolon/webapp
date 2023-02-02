import styled from 'styled-components'

export const CustomerItemStyles = styled.div`
  background-color: ${({ theme }) => theme.palette.grey[50]}80;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  border-radius: 0.8rem;
  padding: 0.8rem;

  img {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: contain;
    mix-blend-mode: color-burn;
  }
`
