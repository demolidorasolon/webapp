import React, { Suspense } from 'react'
import {
  Backdrop,
  Breadcrumbs,
  Button,
  CircularProgress,
  Link,
  Typography
} from '@mui/material'
import {
  // Link,
  Outlet,
  Params,
  useMatch,
  useMatches,
  useNavigate
} from 'react-router-dom'

import {
  ViewLayoutStyles,
  BannerStyles,
  BannerContentStyles,
  ViewFooterStyles,
  ViewFooterContentStyles
} from './View.styles'
import { Match, paths } from '../../../routes'

import viewImageSrc from '../../../assets/images/view-footer.png'
import { Container } from '@mui/system'

export const ViewLayoutComponent: React.FC = () => {
  const navigate = useNavigate()
  const matches = useMatches() as Match[]
  const { pathname } = matches[matches.length - 1]

  // const lastPathMatchFromMatches = useMatch(
  //   matches[matches.length - 1].pathname
  // )

  const currentMatch = matches.find((match) => match.pathname === pathname)

  const currentPaths = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match)

  return (
    <Suspense
      fallback={
        <Backdrop open>
          <CircularProgress color='primary' />
        </Backdrop>
      }
    >
      <ViewLayoutStyles>
        <BannerStyles imageSrc={currentMatch?.handle.imageSrc()}>
          <Container>
            <BannerContentStyles>
              <Breadcrumbs
                aria-label='breadcrumb'
                separator={<Typography color='grey.50'>&rsaquo;</Typography>}
              >
                {currentPaths.map((match) => (
                  <Link
                    key={match.id}
                    onClick={() => navigate(match.pathname)}
                    color='grey.50'
                    underline='hover'
                  >
                    {match.handle.crumb()}
                  </Link>
                ))}
              </Breadcrumbs>

              {currentMatch && currentMatch.handle.title() && (
                <Typography
                  variant='h1'
                  fontWeight='bold'
                  textTransform='uppercase'
                  color='common.white'
                >
                  {currentMatch.handle.title()}
                </Typography>
              )}
            </BannerContentStyles>
          </Container>
        </BannerStyles>
        <Outlet />
        <ViewFooterStyles imageSrc={viewImageSrc}>
          <Container>
            <ViewFooterContentStyles>
              <Typography
                variant='h2'
                textTransform='uppercase'
                color='common.white'
                fontWeight='bold'
              >
                Pronto pra conversar sobre o seu
                <br /> próximo projeto?
              </Typography>
              <Button
                variant='contained'
                onClick={() => navigate(paths.CONTACT_US.path)}
              >
                Entrar em contato
              </Button>
            </ViewFooterContentStyles>
          </Container>
        </ViewFooterStyles>
      </ViewLayoutStyles>
    </Suspense>
  )
}
