import React from 'react'
import {
  Box,
  CircularProgress,
  Container,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

import { ProjectStyles } from './Project.styles'
import { SERVICES } from '../service/Service'
import { Masonry } from '@mui/lab'

export default () => {
  const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'))

  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`
    }
  }

  const images = SERVICES.flatMap((service) =>
    service.images.flatMap((image) => ({
      src: image
    }))
  )

  return (
    <Container>
      <ProjectStyles>
        <Typography fontWeight='bold' variant='h3'>
          Trabalhos que temos orgulho
        </Typography>
        {images ? (
          <ImageList variant='masonry' cols={isMobileScreen ? 1 : 3} gap={16}>
            {images.map((item) => (
              <ImageListItem key={item.src}>
                <img
                  src={`${item.src}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  loading='lazy'
                  style={{
                    borderRadius: 8
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Box display='flex' justifyContent='center' alignItems='center' p={4}>
            <CircularProgress />
          </Box>
        )}
      </ProjectStyles>
    </Container>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball'
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern'
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil'
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star'
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2
  }
]
