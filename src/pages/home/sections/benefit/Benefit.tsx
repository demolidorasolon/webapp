import React from 'react'
import {
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Container
} from '@mui/material'
import { PlayArrow, Event, Handshake, Forest } from '@mui/icons-material'

import { ExpertiseItemComponent, ExpertiseItemTypes } from './components'

import { IconLogo, SectionComponent } from '../../../../components'

import benefitVideo from '../../../../assets/videos/benefits-video.mp4'

import {
  BackgroundVideoCompanyStyles,
  BackgroundVideoContentStyles,
  BackgroundVideoStyles,
  BenefitSectionStyles,
  ExpertiseItemGridStyles
} from './Benefit.styles'

const expertises: ExpertiseItemTypes[] = [
  {
    id: crypto.randomUUID(),
    icon: <Handshake />,
    title: 'Relacionamento',
    description:
      'Estimulamos a transparência e clareza de nossas ações para oferecer um serviço de confiança.'
  },
  {
    id: crypto.randomUUID(),
    icon: <Event />,
    title: 'Pontualidade',
    description: 'Somos reconhecidos pelo bom gerenciamento de prazos.'
  },
  {
    id: crypto.randomUUID(),
    icon: <Forest />,
    title: 'Sustentabilidade',
    description: 'Visamos à preservação do meio ambiente em nossos processos.'
  }
]

export const BenefitSection: React.FC = () => {
  const isDesktopScreen = useMediaQuery(useTheme().breakpoints.up('md'))

  return (
    <Container>
      <SectionComponent title='Nossas vantagens'>
        <BenefitSectionStyles>
          <BackgroundVideoStyles>
            <video autoPlay muted loop>
              <source src={benefitVideo} type='video/mp4' />
            </video>
            <BackgroundVideoContentStyles>
              <BackgroundVideoCompanyStyles>
                <IconLogo style={{ maxWidth: 150 }} />
                <Box display='flex' flexDirection='column' gap={3}>
                  <Typography variant='h6' fontWeight='bold'>
                    Um pouco sobre nós
                  </Typography>
                  <Typography variant='body2'>
                    Somos uma empresa que está no mercado há mais de 20 anos
                    realizando demolições e desativações de maneira rápida e
                    eficiente. Com foco, disciplina e pontualidade, o lema da
                    Solon é fazer bem feito para fazer sempre, prezando pelo bom
                    relacionamento entre colaboradores e clientes.
                  </Typography>
                </Box>
              </BackgroundVideoCompanyStyles>
              {isDesktopScreen && (
                <IconButton
                  color='primary'
                  sx={{
                    height: 'min-content',
                    width: 'min-content',
                    color: 'white',
                    background: ({ palette }) => palette.primary.main,
                    border: ({ palette }) =>
                      `0.1rem solid ${palette.primary.main}`
                  }}
                >
                  <PlayArrow />
                </IconButton>
              )}
            </BackgroundVideoContentStyles>
          </BackgroundVideoStyles>
          <ExpertiseItemGridStyles>
            {expertises.map((expertise) => (
              <ExpertiseItemComponent key={expertise.id} item={expertise} />
            ))}
          </ExpertiseItemGridStyles>
        </BenefitSectionStyles>
      </SectionComponent>
    </Container>
  )
}
