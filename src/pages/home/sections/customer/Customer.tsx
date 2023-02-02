import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Keyboard, Autoplay } from 'swiper'
import { Container, Typography } from '@mui/material'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { CustomerItemComponent, CustomerItemTypes } from './components'

import { CustomerSectionStyles } from './Customer.styles'

import liceuLogo from '../../../../assets/images/customers/liceu.png'
import lindenbergLogo from '../../../../assets/images/customers/lindenberg.jpeg'
import lockEngenhariaLogo from '../../../../assets/images/customers/lock.png'
import mfcConstrutoraLogo from '../../../../assets/images/customers/mfc-construtora.jpeg'
import paoDeAcucarLogo from '../../../../assets/images/customers/pao-de-acucar.png'
import macConstrutoraIncorporadoraLogo from '../../../../assets/images/customers/mac-construtora.jpeg'
import sabespLogo from '../../../../assets/images/customers/sabesp.png'
import evenLogo from '../../../../assets/images/customers/even.png'
import catLogo from '../../../../assets/images/customers/cat.png'
import grupoConstrucapLogo from '../../../../assets/images/customers/grupo-construcap.png'
import scaniaLogo from '../../../../assets/images/customers/scania.png'
import aacdLogo from '../../../../assets/images/customers/aacd.png'
import mercedesBenzLogo from '../../../../assets/images/customers/mercedes-benz.png'
import bkoLogo from '../../../../assets/images/customers/bko.jpeg'
import construtoraBrilhanteLogo from '../../../../assets/images/customers/construtora-brilhante.png'
import construtoraCordobaLogo from '../../../../assets/images/customers/construtora-cordoba.png'
import epsonEngenhariaLogo from '../../../../assets/images/customers/epson-engenharia.jpeg'

const customers: CustomerItemTypes[] = [
  {
    id: crypto.randomUUID(),
    src: liceuLogo,
    name: 'Liceu de Artes e Ofícios de São Paulo'
  },
  { id: crypto.randomUUID(), src: lindenbergLogo, name: 'Lindenberg' },
  { id: crypto.randomUUID(), src: lockEngenhariaLogo, name: 'Lock Engenharia' },
  { id: crypto.randomUUID(), src: mfcConstrutoraLogo, name: 'MFC Construtora' },
  { id: crypto.randomUUID(), src: paoDeAcucarLogo, name: 'Pão de Açúcar' },
  {
    id: crypto.randomUUID(),
    src: macConstrutoraIncorporadoraLogo,
    name: 'MAC Construtora e Incorporadora'
  },
  { id: crypto.randomUUID(), src: sabespLogo, name: 'Sabesp' },
  { id: crypto.randomUUID(), src: evenLogo, name: 'Even' },
  { id: crypto.randomUUID(), src: catLogo, name: 'Catterpillar' },
  {
    id: crypto.randomUUID(),
    src: grupoConstrucapLogo,
    name: 'Grupo construcap'
  },
  { id: crypto.randomUUID(), src: scaniaLogo, name: 'Scania' },
  { id: crypto.randomUUID(), src: aacdLogo, name: 'AACD' },
  { id: crypto.randomUUID(), src: mercedesBenzLogo, name: 'Mercedes Benz' },
  { id: crypto.randomUUID(), src: bkoLogo, name: 'BKO' },
  {
    id: crypto.randomUUID(),
    src: construtoraBrilhanteLogo,
    name: 'Construtora brilhante'
  },
  {
    id: crypto.randomUUID(),
    src: construtoraCordobaLogo,
    name: 'Construtora cordoba'
  },
  {
    id: crypto.randomUUID(),
    src: epsonEngenhariaLogo,
    name: 'Epson engenharia'
  }
]
export const CustomerSection: React.FC = () => {
  return (
    <CustomerSectionStyles>
      <Container>
        <Typography fontWeight='bold' variant='h3'>
          Nossos Clientes
        </Typography>
      </Container>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        grabCursor
        loop
        centeredSlides
        slideToClickedSlide
        pagination={{
          clickable: true
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          300: { slidesPerView: 2 },
          400: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1200: { slidesPerView: 6 }
        }}
        modules={[Pagination, Autoplay, Keyboard]}
      >
        {customers.map((customer) => (
          <SwiperSlide key={customer.id}>
            <CustomerItemComponent item={customer} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CustomerSectionStyles>
  )
}
