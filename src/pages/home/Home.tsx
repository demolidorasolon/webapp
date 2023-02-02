import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  BenefitSection,
  CustomerSection,
  FaqSection,
  InitialBannerSection,
  ServiceSection
} from './sections'

import { HomeStyles } from './Home.styles'

export default () => {
  const navigate = useNavigate()

  return (
    <HomeStyles>
      <InitialBannerSection />
      <BenefitSection />
      <ServiceSection />
      <CustomerSection />
      <FaqSection
        sx={{
          mb: ({ spacing }) => spacing(12)
        }}
      />
    </HomeStyles>
  )
}
