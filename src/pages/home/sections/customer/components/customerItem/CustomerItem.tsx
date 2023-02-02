import React from 'react'
import { CustomerItemStyles } from './CustomerItem.styles'
import { CustomerItemPropTypes } from './CustomerItem.types'

export const CustomerItemComponent: React.FC<CustomerItemPropTypes> = ({
  item
}) => {
  return (
    <CustomerItemStyles>
      <img src={item.src} />
    </CustomerItemStyles>
  )
}

export * from './CustomerItem.types'
