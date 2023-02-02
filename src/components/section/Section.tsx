import React, { PropsWithChildren } from 'react'
import { Typography } from '@mui/material'

import { SectionStyles } from './Section.styles'
import { SectionPropTypes } from './Section.types'

export const SectionComponent: React.FC<
  PropsWithChildren<SectionPropTypes>
> = ({ title, children }) => {
  return (
    <SectionStyles>
      <Typography fontWeight='bold' variant='h3'>
        {title}
      </Typography>
      {children}
    </SectionStyles>
  )
}
