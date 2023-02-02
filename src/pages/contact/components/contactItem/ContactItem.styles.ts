import styled from 'styled-components'
import { from } from '../../../../styles'

export const ContactItemTypes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing(2)};

  border: 1px solid ${({ theme }) => theme.palette.grey[100]};
  padding: 1rem;
  border-radius: 0.8rem;

  transition: all 0.3s ease-in-out;

  :hover {
    h4 {
      color: ${({ theme }) => theme.palette.primary.main};
      transition: all 0.3s ease-in-out;
    }
  }

  ${from.sm} {
    border: transparent;
    padding: 0;

    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;

    h4 {
      border-left: 0.3rem solid ${({ theme }) => theme.palette.primary.main};
      padding-left: 1rem;
    }
  }
`
