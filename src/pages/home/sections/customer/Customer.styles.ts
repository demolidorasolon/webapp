import styled from 'styled-components'

export const CustomerSectionStyles = styled.div`
  position: relative;

  display: flex;
  flex-flow: wrap;
  gap: ${({ theme }) => theme.spacing(8)};

  background-color: ${({ theme }) => theme.palette.grey.A200};
  padding: 3rem 0;

  .swiper {
    padding-bottom: 4rem;
  }

  // for arrows
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  // and for bullets
  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`
