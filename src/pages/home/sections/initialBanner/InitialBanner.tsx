import React from 'react'
import { Typography, Button } from '@mui/material'
import { useMatches } from 'react-router-dom'

import { Match, paths } from '../../../../routes'
import { getYearsOfExperience } from '../../../../utils'

import {
  WorkExperienceItemComponent,
  WorkExperienceItemTypes
} from './components'

import {
  InitialSectionStyles,
  InitialTextStyles,
  InitialButtonStyles,
  InitialWorkExperienceStyles
} from './InitialBanner.styles'

const workExperience: WorkExperienceItemTypes[] = [
  {
    id: crypto.randomUUID(),
    label: 'Anos de experiência',
    value: `${getYearsOfExperience()}+`
  },
  {
    id: crypto.randomUUID(),
    label: 'Projetos realizados e entregues',
    value: '100+'
  }
]

export const InitialBannerSection: React.FC = () => {
  const matches = useMatches() as Match[]
  const { pathname } = matches[matches.length - 1]

  const currentMatch = matches.find((match) => match.pathname === pathname)

  return (
    <InitialSectionStyles imageSrc={currentMatch?.handle.imageSrc()}>
      <InitialTextStyles>
        <Typography
          variant='h1'
          fontWeight='bold'
          textTransform='uppercase'
          color='common.white'
        >
          Demolição e<br />
          desmontagem industrial
        </Typography>
        <Typography variant='body1' color='common.white'>
          Reconhecida por sua pontualidade e qualidade na execução
        </Typography>
      </InitialTextStyles>
      <InitialButtonStyles>
        <Button variant='contained' href={paths.PROJECTS.path}>
          Projetos
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          href={paths.CONTACT_US.path}
        >
          Entrar em contato
        </Button>
      </InitialButtonStyles>
      <InitialWorkExperienceStyles>
        {workExperience.map((experience) => (
          <WorkExperienceItemComponent key={experience.id} item={experience} />
        ))}
      </InitialWorkExperienceStyles>
    </InitialSectionStyles>
  )
}
