import React, { useState } from 'react'
import { Typography } from '@mui/material'

import { ServiceItemStyles } from './ServiceItem.styles'
import { ServiceItemPropTypes } from './ServiceItem.types'

export const ServiceItemComponent: React.FC<ServiceItemPropTypes> = ({
  item
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ServiceItemStyles
      imageSrc={item.img}
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item.name && (
        <Typography
          variant='subtitle1'
          fontWeight='bold'
          color={isHovered ? 'primary' : 'initial'}
        >
          {item.name}
        </Typography>
      )}
      {item.description && (
        <Typography variant='body2' maxWidth={270}>
          {item.description}
        </Typography>
      )}
    </ServiceItemStyles>
  )
}

export * from './ServiceItem.types'
