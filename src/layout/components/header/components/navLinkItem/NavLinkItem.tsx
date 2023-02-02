import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavLinkItemPropTypes } from './NavLinkItem.types'
import { TypographyStyles } from './NavLinkItem.styles'

export const NavLinkItemComponent: React.FC<NavLinkItemPropTypes> = ({
  route
}) => {
  return (
    <NavLink to={route.path}>
      {({ isActive }) => (
        <TypographyStyles isActive={isActive}>
          {route.handle.crumb()}
        </TypographyStyles>
      )}
    </NavLink>
  )
}
