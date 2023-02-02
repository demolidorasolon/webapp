import React, { useState } from 'react'
import { Add, ExpandMore, Remove } from '@mui/icons-material'
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails
} from '@mui/material'
import { FaqItemPropTypes } from './FaqItem.types'
import { AccordionStyles, AccordionSummaryStyles } from './FaqItem.styles'

export const FaqItemComponent: React.FC<FaqItemPropTypes> = ({ item }) => {
  const [isSelected, setIsSelected] = useState(item.isSelected || false)

  return (
    <AccordionStyles
      square
      elevation={0}
      disableGutters
      expanded={isSelected}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummaryStyles
        expandIcon={isSelected ? <Remove /> : <Add />}
        onClick={() => setIsSelected(isSelected ? false : true)}
      >
        <Typography
          variant='subtitle2'
          fontWeight='bold'
          color={isSelected ? 'primary' : 'initial'}
        >
          {item.question}
        </Typography>
      </AccordionSummaryStyles>
      <AccordionDetails>
        <Typography variant='body2'>{item.answer}</Typography>
      </AccordionDetails>
    </AccordionStyles>
  )
}

export * from './FaqItem.types'
