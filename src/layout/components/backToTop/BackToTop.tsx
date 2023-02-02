import React from 'react'
import { useScrollTrigger, Fade, Box, Fab } from '@mui/material'
import { KeyboardArrowUp } from '@mui/icons-material'
import { BackToTopPropTypes } from './BackToTop.types'

export const BackToTopComponent: React.FC<BackToTopPropTypes> = ({
  window
}) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center'
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
      >
        <Fab size='small' aria-label='scroll back to top' color='primary'>
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Fade>
  )
}
