import React, { Suspense } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'
import { Outlet, useMatches } from 'react-router-dom'
import { paths } from '../../../routes'
import {
  HeaderComponent,
  FooterComponent,
  WhatsAppComponent
} from '../../components'

export const GlobalLayoutComponent: React.FC = () => {
  const matches = useMatches()
  const routes = Object.entries(paths).map((e) => e[1])

  return (
    <Suspense
      fallback={
        <Backdrop open>
          <CircularProgress color='primary' />
        </Backdrop>
      }
    >
      <div>
        <HeaderComponent />
        <main>
          <Outlet />
        </main>
        <FooterComponent />
        <WhatsAppComponent />
      </div>
    </Suspense>
  )
}
