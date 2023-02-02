import React from 'react'
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  Typography
} from '@mui/material'
import { Forest, Construction } from '@mui/icons-material'

import {
  AboutContentStyles,
  AboutImageStyles,
  AboutLeftContentStyles,
  AboutStyles
} from './About.styles'
import { FaqSection } from '../home/sections'

import aboutImage from '../../assets/images/about-1.png'

const expertises = [
  {
    icon: Forest,
    title: 'Demolição sustentável',
    description:
      'Tem o objetivo de demolir prezando pelo cuidado com o meio ambiente, por esta razão, requer a atenção ao descarte correto de todos os materiais retirados das demolições realizadas.'
  },
  {
    icon: Construction,
    title: 'Reaproveitamento de Material',
    description:
      'Todos os materiais passíveis de aproveitamento são tratados em nosso depósito para serem comercializados novamente.'
  }
]

export default () => {
  return (
    <AboutStyles>
      <Container>
        <AboutContentStyles>
          <AboutLeftContentStyles>
            <Box display='flex' flexDirection='column' gap={3}>
              <Typography variant='h5' fontWeight='bold'>
                Porque nos escolher?
              </Typography>
              <Typography variant='body2'>
                Possuímos experiência no mercado, trabalhando com grandes
                empresas, visando ao respeito para com os colaboradores e
                clientes e prestando um serviço de confiança, responsabilidade e
                excelência.
              </Typography>
            </Box>
            <Box display='flex' gap={4}>
              {expertises.map((expertise, i) => (
                <Box
                  key={i.toString()}
                  display='flex'
                  flexDirection='column'
                  gap={2}
                >
                  <SvgIcon
                    component={expertise.icon}
                    color='primary'
                    sx={{ fontSize: 70 }}
                  />
                  <Typography variant='h6' fontWeight='bold'>
                    {expertise.title}
                  </Typography>
                  <Typography variant='body2'>
                    {expertise.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </AboutLeftContentStyles>
          <AboutImageStyles src={aboutImage} />
        </AboutContentStyles>
      </Container>
      <FaqSection />
    </AboutStyles>
  )
}
