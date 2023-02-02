import React from 'react'
import { Box, Typography } from '@mui/material'

import { WorkExperienceItemPropTypes } from './WorkExperienceItem.types'
import { WorkExperienceItemStyles } from './WorkExperienceItem.styles'

export const WorkExperienceItemComponent: React.FC<
  WorkExperienceItemPropTypes
> = ({ item }) => {
  return (
    <WorkExperienceItemStyles>
      <Typography
        variant='h5'
        fontWeight='bold'
        color='common.white'
        sx={{ fontSize: 40 }}
      >
        {item.value}
      </Typography>
      <Typography variant='body1' color='common.white'>
        {item.label}
      </Typography>
    </WorkExperienceItemStyles>
  )
}

export * from './WorkExperienceItem.types'
