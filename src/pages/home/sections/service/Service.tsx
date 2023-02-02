import React from 'react'
import { Container } from '@mui/material'

import { ServiceItemComponent, ServiceItemTypes } from './components'

import { SectionComponent } from '../../../../components'

import { ServiceStyles } from './Service.styles'

import service1 from '../../../../assets/images/services/service1.png'
import service2 from '../../../../assets/images/services/service2.png'
import service3 from '../../../../assets/images/services/service3.png'
import service4 from '../../../../assets/images/services/service4.png'
import service5 from '../../../../assets/images/services/service5.png'

const services: ServiceItemTypes[] = [
  {
    id: crypto.randomUUID(),
    img: service1
  },
  {
    id: crypto.randomUUID(),
    name: 'Demolição Sustentável',
    description:
      'Tem o objetivo de demolir prezando pelo cuidado com o meio ambiente, por esta razão, requer a atenção ao descarte correto de todos os materiais retirados das demolições realizadas. '
  },
  {
    id: crypto.randomUUID(),
    img: service2
  },
  {
    id: crypto.randomUUID(),
    name: 'Reaproveitamento de Material',
    description:
      'Todos os materiais passíveis de aproveitamento são tratados em nosso depósito para serem comercializados novamente.'
  },
  {
    id: crypto.randomUUID(),
    img: service3
  },
  {
    id: crypto.randomUUID(),
    name: 'Demolição Silenciosa',
    description:
      'Recomendada para locais onde não são aceitos ruídos, como espaços próximos a escolas, hospitais, shoppings e prédios comerciais ou residenciais, mantendo o conforto dos frequentadores.'
  },
  {
    id: crypto.randomUUID(),
    img: service4
  },
  {
    id: crypto.randomUUID(),
    name: 'Demolição mecanizada',
    description:
      'Caracteriza-se pela utilização de máquinas – escavadeiras, miniescavadeiras, rompedores, guindastes e marteletes - para um serviço eficiente em obras que suportam esses equipamentos.'
  },
  {
    id: crypto.randomUUID(),
    img: service5
  }
]

export const ServiceSection: React.FC = () => {
  return (
    <Container>
      <SectionComponent title='Nossos serviços'>
        <ServiceStyles>
          {services.map((service) => (
            <ServiceItemComponent key={service.id} item={service} />
          ))}
        </ServiceStyles>
      </SectionComponent>
    </Container>
  )
}
