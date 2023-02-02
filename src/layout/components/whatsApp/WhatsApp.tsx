import React from 'react'
import { useScrollTrigger, Fade, Box, Fab } from '@mui/material'
import { KeyboardArrowUp, WhatsApp } from '@mui/icons-material'
import { FabStyles } from './WhatsApp.styles'
import { COMPANY_DATA } from '../../../data'

export const WhatsAppComponent: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {}

  return (
    <Box
      role='presentation'
      sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
    >
      <FabStyles
        size='large'
        aria-label='whatsApp'
        color='success'
        href={COMPANY_DATA.whatsApp.link}
        formTarget='_blank'
      >
        <WhatsApp />
      </FabStyles>
    </Box>
  )
}
