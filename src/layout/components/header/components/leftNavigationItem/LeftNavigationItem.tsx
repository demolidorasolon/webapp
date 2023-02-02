import React from 'react'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  useTheme
} from '@mui/material'
import { NavLink } from 'react-router-dom'

import { LeftNavigationPropTypes } from './LeftNavigationItem.types'
import { ListItemStyles } from './LeftNavigationItem.styles'

export const LeftNavigationItemComponent: React.FC<LeftNavigationPropTypes> = ({
  item,
  handleClose
}) => {
  const { palette } = useTheme()

  return (
    <NavLink to={item.path}>
      {({ isActive }) => (
        <ListItemStyles disablePadding isActive={isActive}>
          <ListItemButton onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon
                sx={{
                  color: isActive ? palette.primary.main : palette.grey[300]
                }}
              >
                {isActive ? item.handle.filledIcon() : item.handle.icon()}
              </SvgIcon>
            </ListItemIcon>
            <ListItemText
              primary={item.handle.title()}
              primaryTypographyProps={{
                color: 'common.black'
              }}
            />
          </ListItemButton>
        </ListItemStyles>
      )}
    </NavLink>
  )
}
