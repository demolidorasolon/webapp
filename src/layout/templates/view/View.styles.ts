import styled from 'styled-components'

export const ViewLayoutStyles = styled.div``

export const BannerStyles = styled.div<{ imageSrc?: string }>`
  position: relative;

  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  background-image: url(${({ imageSrc }) => imageSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 25rem;

  ::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.palette.common.black}55;
    z-index: 0;
  }
`

export const BannerContentStyles = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 1;

  align-items: center;
`

export const ViewFooterStyles = styled.div<{ imageSrc?: string }>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${({ imageSrc }) => imageSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 25rem;

  ::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.palette.common.black}55;
    z-index: 0;
  }
`

export const ViewFooterContentStyles = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  gap: ${({ theme }) => theme.spacing(3)};

  z-index: 1;

  align-items: center;
`
