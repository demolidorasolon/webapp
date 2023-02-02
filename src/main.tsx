import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'

import { GlobalStyle, MuiThemeWrapper } from './styles'
import { router } from './routes'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MuiThemeWrapper>
        <>
          <GlobalStyle />
          <RouterProvider
            router={router}
            fallbackElement={
              <Backdrop open>
                <CircularProgress color='primary' />
              </Backdrop>
            }
          />
        </>
      </MuiThemeWrapper>
    </QueryClientProvider>
  </React.StrictMode>
)
