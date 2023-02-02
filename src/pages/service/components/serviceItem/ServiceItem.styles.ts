import styled from 'styled-components'
import { Swiper } from 'swiper/react'
export const ServiceItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: ${({ theme }) => theme.spacing(4)};

  overflow: hidden;

  img {
    border-radius: ${({ theme }) => theme.spacing(2)};
    width: 100%;
    object-fit: cover;
    height: 25rem;
  }

  span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

export const ServiceSwiperViewerStyles = styled(Swiper)`
  .swiper-slide {
    list-style: none;

    img {
      width: 100%;
      height: 25rem;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.spacing(2)};
    }
  }
`

export const ServiceSwiperThumbStyles = styled(Swiper)`
  .swiper-thumb {
    margin-top: ${({ theme }) => theme.spacing(2)};

    img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 1;
      border-radius: ${({ theme }) => theme.spacing(1)};
      border: 0.2rem solid transparent;
      cursor: pointer;

      :hover {
        opacity: 1;
      }
    }
  }
`

export const ImageStyles = styled.img<{ isActive?: boolean }>``
