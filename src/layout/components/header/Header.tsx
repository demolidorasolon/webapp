import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  SvgIcon,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme
} from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Apps } from '@mui/icons-material'

import { paths } from '../../../routes'

import { HeaderStyles } from './Header.styles'
import { LeftNavigationItemComponent, NavLinkItemComponent } from './components'
import { IconLogo } from '../../../components'

const HideOnScroll = (props: {
  window?: () => Window
  children: React.ReactElement
}) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

export const HeaderComponent: React.FC = () => {
  const routes = Object.entries(paths).map((e) => e[1])

  const [mobileOpen, setMobileOpen] = useState(false)

  const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('md'))
  const isDesktopScreen = useMediaQuery(useTheme().breakpoints.up('md'))

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const renderLogo = () => <IconLogo style={{ maxWidth: 170, width: 'auto' }} />

  return (
    <HideOnScroll>
      <HeaderStyles>
        {isDesktopScreen && (
          <>
            <Box
              p={4}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Link to='/'>{renderLogo()}</Link>
            </Box>
            <Box
              display='flex'
              justifyContent='center'
              bgcolor='background.header'
            >
              {routes.map((route) => (
                <NavLinkItemComponent key={route.path} route={route} />
              ))}
            </Box>
          </>
        )}

        {isMobileScreen && (
          <>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              bgcolor='common.white'
              px={2}
              py={1}
            >
              <Link to='/'>{renderLogo()}</Link>
              <IconButton
                color='primary'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            </Box>
            <Drawer
              anchor='right'
              variant='temporary'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: {
                  backgroundColor: ({ palette }) => palette.common.white
                }
              }}
            >
              <div>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleDrawerToggle}>
                      <ListItemIcon>
                        <SvgIcon
                          component={Menu}
                          sx={{ color: ({ palette }) => palette.grey[300] }}
                        />
                      </ListItemIcon>
                      {renderLogo()}
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider
                  sx={{ background: ({ palette }) => palette.primary.main }}
                />
                <List>
                  {routes.map((route) => (
                    <LeftNavigationItemComponent
                      key={route.path}
                      item={route}
                      handleClose={handleDrawerToggle}
                    />
                  ))}
                </List>
              </div>
            </Drawer>
          </>
        )}
      </HeaderStyles>
    </HideOnScroll>
  )
}
