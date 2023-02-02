import React, { useState } from 'react'
import { Typography } from '@mui/material'

import { ExpertiseItemStyles, IconStyles } from './ExpertiseItem.styles'
import { ExpertiseItemPropTypes } from './ExpertiseItem.types'

export const ExpertiseItemComponent: React.FC<ExpertiseItemPropTypes> = ({
  item
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ExpertiseItemStyles
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconStyles isHovered={isHovered}>{item.icon}</IconStyles>
      <Typography
        variant='subtitle1'
        fontWeight='bold'
        color={isHovered ? 'primary' : 'initial'}
      >
        {item.title}
      </Typography>
      <Typography variant='body2'>{item.description}</Typography>
    </ExpertiseItemStyles>
  )
}

export * from './ExpertiseItem.types'
