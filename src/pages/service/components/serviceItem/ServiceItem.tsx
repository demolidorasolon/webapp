import React, { useEffect, useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { Close, TrendingFlat } from '@mui/icons-material'
import { FreeMode, Navigation, Thumbs, Swiper, Keyboard } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

import {
  ImageStyles,
  ServiceItemStyles,
  ServiceSwiperThumbStyles,
  ServiceSwiperViewerStyles
} from './ServiceItem.styles'
import { ServiceItemPropTypes } from './ServiceItem.types'
import { paths } from '../../../../routes'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export const ServiceItemComponent: React.FC<ServiceItemPropTypes> = ({
  item
}) => {
  const navigate = useNavigate()
  const match = useMatch(`/services/${item.id}`)
  const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('md'))

  const [open, setOpen] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>()

  const handleClickOpen = () => {
    setOpen(true)
    navigate(item.id)
  }

  const handleClose = () => {
    setOpen(false)
    navigate(paths.SERVICES.path)
  }

  useEffect(() => {
    if (match) {
      handleClickOpen()
    }
  }, [location])

  return (
    <>
      <ServiceItemStyles>
        <img src={item.bannerSrc} />
        <Box display='flex' flexDirection='column' gap={2}>
          <Typography variant='subtitle1' fontWeight='bold'>
            {item.title}
          </Typography>
          <Typography variant='body2'>{item.description}</Typography>
        </Box>
        <Button
          variant='text'
          endIcon={<TrendingFlat />}
          color='primary'
          onClick={handleClickOpen}
        >
          Saiba mais
        </Button>
      </ServiceItemStyles>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        fullScreen={isMobileScreen}
      >
        <Box display='flex' justifyContent='space-between'>
          <DialogTitle fontWeight='bold'>{item.title}</DialogTitle>
          <IconButton edge='start' color='primary' onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <DialogContent
          dividers
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 7
          }}
        >
          <Box>
            <ServiceSwiperViewerStyles
              loop
              spaceBetween={8}
              keyboard
              navigation
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
              }}
              modules={[Navigation, Thumbs, Keyboard, FreeMode]}
            >
              {item.images.map((imageSrc) => (
                <SwiperSlide key={imageSrc} className='swiper-slide'>
                  <ImageStyles src={imageSrc} />
                </SwiperSlide>
              ))}
            </ServiceSwiperViewerStyles>
            <ServiceSwiperThumbStyles
              slidesPerView={5}
              spaceBetween={16}
              loop
              freeMode
              onSwiper={setThumbsSwiper}
              modules={[Navigation, FreeMode, Thumbs]}
            >
              {item.images.map((imageSrc) => (
                <SwiperSlide key={imageSrc} className='swiper-thumb'>
                  {({ isActive }) => (
                    <ImageStyles src={imageSrc} isActive={isActive} />
                  )}
                </SwiperSlide>
              ))}
            </ServiceSwiperThumbStyles>
          </Box>
          <Box display='flex' flexDirection='column' gap={3}>
            <Typography
              fontWeight='bold'
              variant='subtitle1'
              sx={{
                paddingLeft: ({ spacing }) => spacing(3),
                borderLeft: ({ palette }) =>
                  `0.3rem solid ${palette.primary.main}`
              }}
            >
              Informações
            </Typography>
            <Typography>{item.description}</Typography>
          </Box>
          <Button
            variant='contained'
            fullWidth={false}
            onClick={() => navigate(paths.CONTACT_US.path)}
          >
            Entrar em contato
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export * from './ServiceItem.types'
