import styled from 'styled-components'
import { from } from '../../styles'

export const ContactStyles = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  padding: ${({ theme }) => theme.spacing(12)} 0;
  gap: ${({ theme }) => theme.spacing(7)};
`

export const ContactMediaGridStyles = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};

  ${from.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ContactFormGridStyles = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
  grid-template-columns: 1fr;
  grid-template-areas:
    'name '
    'tel'
    'email'
    'select'
    'message'
    'button';

  ${from.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'name tel'
      'email select'
      'message message'
      'button button';
  }
`
