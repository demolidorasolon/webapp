import React from 'react'
import {
  Box,
  Container,
  IconButton,
  Link,
  Paper,
  SvgIcon,
  Typography
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import {
  FooterColumnTopicGridStyles,
  FooterColumnTopicStyles,
  FooterCompanyContainerStyles,
  FooterCompanyMediaStyles,
  FooterGridStyles,
  FooterStyles,
  FooterTopicContainerStyles,
  SubFooterStyles
} from './Footer.styles'
import {
  Instagram,
  LocalPhoneOutlined,
  Phone,
  WhatsApp
} from '@mui/icons-material'
import { IconLogo } from '../../../components'
import { COMPANY_DATA } from '../../../data'
import { paths } from '../../../routes'
import { SERVICES } from '../../../pages/service/Service'

const SOCIAL_MEDIAS = [
  {
    id: crypto.randomUUID(),
    icon: LocalPhoneOutlined,
    link: COMPANY_DATA.fixo.link
  },
  {
    id: crypto.randomUUID(),
    icon: WhatsApp,
    link: COMPANY_DATA.whatsApp.link
  },
  {
    id: crypto.randomUUID(),
    icon: Instagram,
    link: COMPANY_DATA.instagram.link
  }
]

export const FooterComponent: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const FOOTER_SECTIONS = [
    {
      id: crypto.randomUUID(),
      title: 'Serviços',
      items: SERVICES.flatMap((service) => ({
        id: service.id,
        title: service.title,
        link: `/services/${service.id}`
      }))
    },
    {
      id: crypto.randomUUID(),
      title: 'Mapa do site',
      items: [
        {
          id: crypto.randomUUID(),
          title: paths.HOME.handle.title(),
          link: paths.HOME.path
        },
        {
          id: crypto.randomUUID(),
          title: paths.SERVICES.handle.title(),
          link: paths.SERVICES.path
        },
        {
          id: crypto.randomUUID(),
          title: paths.PROJECTS.handle.title(),
          link: paths.PROJECTS.path
        },
        {
          id: crypto.randomUUID(),
          title: paths.ABOUT_US.handle.title(),
          link: paths.ABOUT_US.path
        },
        {
          id: crypto.randomUUID(),
          title: paths.CONTACT_US.handle.title(),
          link: paths.CONTACT_US.path
        }
      ]
    }
  ]

  return (
    <Paper
      elevation={0}
      component='footer'
      sx={{
        backgroundColor: ({ palette }) => palette.grey.A700
      }}
    >
      <Container>
        <FooterStyles>
          <FooterGridStyles>
            <FooterCompanyContainerStyles>
              <IconLogo style={{ maxWidth: 150 }} />
              <Typography variant='body2' maxWidth='80%'>
                Há mais de 20 anos realizando demolições e desativações de
                maneira rápida e eficiente. Com foco, disciplina e pontualidade.
              </Typography>
              <FooterCompanyMediaStyles>
                {SOCIAL_MEDIAS.map((social, i) => (
                  <IconButton
                    key={social.id}
                    href={social.link}
                    target='_blank'
                  >
                    <SvgIcon component={social.icon} />
                  </IconButton>
                ))}
              </FooterCompanyMediaStyles>
            </FooterCompanyContainerStyles>
            <FooterTopicContainerStyles>
              {FOOTER_SECTIONS.map((section) => (
                <FooterColumnTopicStyles key={section.id}>
                  <Typography fontWeight='bold'>{section.title}</Typography>
                  <FooterColumnTopicGridStyles>
                    {section.items.map((item) => (
                      <Link
                        color='grey'
                        component={RouterLink}
                        key={item.id}
                        underline='hover'
                        to={item.link}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </FooterColumnTopicGridStyles>
                </FooterColumnTopicStyles>
              ))}
            </FooterTopicContainerStyles>
          </FooterGridStyles>
        </FooterStyles>
      </Container>
      <Box py={3} bgcolor='grey.A400'>
        <Container>
          <SubFooterStyles>
            <Typography variant='body2'>
              © {currentYear} Demolidora Solon. Todos direitos Reservados.
            </Typography>
          </SubFooterStyles>
        </Container>
      </Box>
    </Paper>
  )
}
