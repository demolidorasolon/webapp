import React from 'react'
import { Container } from '@mui/material'

import { SectionComponent } from '../../../../components'
import { FaqItemComponent, FaqItemTypes } from './components'

import faqImage from '../../../../assets/images/faq.png'

import { FaqContainerStyles, FaqSectionStyles } from './Faq.styles'
import { FaqSectionPropTypes } from './Faq.types'

const faq: FaqItemTypes[] = [
  {
    id: crypto.randomUUID(),
    question: 'Como é feito o orçamento de demolição?',
    answer:
      'É realizada uma visita técnica à obra para avaliar a estrutura, porte e localização e assim gerar o orçamento.'
  },
  {
    id: crypto.randomUUID(),
    question: 'O valor da demolição é calculado por M²?',
    answer: 'Não. O serviço de demolição é orçado por seu grau de dificuldade.'
  },
  {
    id: crypto.randomUUID(),
    question: 'A visita técnica é cobrada',
    answer: 'Não. A visita técnica e o orçamento são serviços gratuitos.'
  },
  {
    id: crypto.randomUUID(),
    question: 'É necessário ter documentação?',
    answer:
      'Sim. Toda obra, antes do início da execução, necessita do alvará de demolição junto à prefeitura do município correspondente.'
  },
  {
    id: crypto.randomUUID(),
    question: 'A Solon fornece o alvará de demolição?',
    answer:
      'Não. Toda a documentação é de responsabilidade do proprietário da obra.'
  }
]
export const FaqSection: React.FC<FaqSectionPropTypes> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <SectionComponent title='Perguntas frequentes'>
        <FaqSectionStyles>
          <img src={faqImage} />
          <FaqContainerStyles>
            {faq.map((question, i) => (
              <FaqItemComponent
                key={question.id}
                item={{
                  isSelected: i === 0,
                  ...question
                }}
              />
            ))}
          </FaqContainerStyles>
        </FaqSectionStyles>
      </SectionComponent>
    </Container>
  )
}
