import styled from 'styled-components'
import { from } from '../../../styles'

export const FooterStyles = styled.div``

export const FooterGridStyles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};

  padding: 4.8rem 0;

  background-color: ${({ theme }) => theme.palette.grey.A700};

  ${from.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const FooterCompanyContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing(3)};

  ${from.sm} {
    text-align: left;
    align-items: flex-start;
  }
`

export const FooterCompanyMediaStyles = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
`

export const FooterTopicContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};

  ${from.sm} {
    flex-direction: row;
  }
`

export const FooterColumnTopicStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  text-align: center;

  ${from.sm} {
    text-align: left;
  }
`

export const FooterColumnTopicGridStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`

export const SubFooterStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing(4)};
`
