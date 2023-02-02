import React, { useState } from 'react'
import {
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Button,
  Input,
  TextField,
  MenuItem,
  TextFieldProps
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useMutation } from 'react-query'

import {
  ContactFormGridStyles,
  ContactMediaGridStyles,
  ContactStyles
} from './Contact.styles'
import { ContactItemComponent, ContactItemTypes } from './components'
import { EmailServices, EmailPostPayload } from '../../services'
import { Check } from '@mui/icons-material'
import { COMPANY_DATA } from '../../data'

const contacts: ContactItemTypes[] = [
  {
    id: crypto.randomUUID(),
    title: 'Endereço',
    description: {
      formatted: COMPANY_DATA.address.locale,
      link: COMPANY_DATA.address.link
    }
  },
  {
    id: crypto.randomUUID(),
    title: 'Contato',
    description: {
      formatted: COMPANY_DATA.email.email,
      link: COMPANY_DATA.email.link
    },
    numbers: [
      {
        link: COMPANY_DATA.fixo.link,
        formatted: COMPANY_DATA.fixo.formattedNumber
      },
      {
        link: COMPANY_DATA.celPhone.link,
        formatted: COMPANY_DATA.celPhone.formattedNumber
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    title: 'Funcionamento',
    description: {
      formatted: 'Segunda – Sexta: 8:00 – 18:00'
    }
  }
]
export default () => {
  const [number, setNumber] = useState<string | null>(null)
  const emailMutation = useMutation((payload: EmailPostPayload) => {
    return EmailServices.post(payload)
  })

  const demolidoraSolonSrc =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14626.858632707579!2d-46.726451!3d-23.5786895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50ca20b66d8c489!2sDemolidora%20Solon!5e0!3m2!1sen!2sbr!4v1669685251687!5m2!1sen!2sbr'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ONLY_NUMBERS_REGEX = /^[0-9\b]+$/

    if (e.target.value === '' || ONLY_NUMBERS_REGEX.test(e.target.value)) {
      setNumber(e.target.value)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const name = String(formData.get('name'))
    const phone = String(formData.get('phone'))
    const email = String(formData.get('email'))
    const howDidMeetUs = String(formData.get('howDidYouMeetUs'))
    const message = String(formData.get('message'))

    const payload = {
      name,
      phone,
      email,
      howDidMeetUs,
      message
    }

    emailMutation.mutate(payload)
  }

  return (
    <Container>
      <ContactStyles>
        <Typography fontWeight='bold' variant='h3'>
          Trabalhos que temos orgulho
        </Typography>
        <iframe
          src={demolidoraSolonSrc}
          width='100%'
          height='400'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
        <ContactMediaGridStyles>
          {contacts.map((contact) => (
            <ContactItemComponent key={contact.id} item={contact} />
          ))}
        </ContactMediaGridStyles>
        <Typography fontWeight='bold' variant='h3'>
          Entre em contato
        </Typography>
        <ContactFormGridStyles onSubmit={handleSubmit}>
          <TextField
            name='name'
            variant='outlined'
            label='Nome'
            type='text'
            placeholder='Insira o seu nome'
            required
            style={{ gridArea: 'name' }}
          />
          <TextField
            name='phone'
            variant='outlined'
            label='Telefone'
            type='number'
            placeholder='(11) 99999-9999'
            required
            onChange={handleChange}
            value={number}
            style={{ gridArea: 'tel' }}
          />
          <TextField
            name='email'
            variant='outlined'
            label='Email'
            type='email'
            placeholder='seuemail@email.com'
            required
            style={{ gridArea: 'email' }}
          />
          <TextField
            name='howDidYouMeetUs'
            variant='outlined'
            label='Como nos conheceu?'
            select
            required
            style={{ gridArea: 'select' }}
          >
            {[
              'Pesquisa online',
              'Mídias sociais',
              'Indicação de amigo ou familiar',
              'Feira ou evento',
              'Publicidade (TV, rádio, impresso)',
              'Ligação ou e-mail de um representante',
              'Recomendação de parceiro ou cliente',
              'Outro'
            ].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name='message'
            variant='outlined'
            label='Mensagem'
            type='text'
            placeholder='Escreva sua mensagem.'
            multiline
            rows={5}
            required
            style={{ gridArea: 'message' }}
          />
          <LoadingButton
            fullWidth
            loading={emailMutation.isLoading}
            variant={emailMutation.isSuccess ? 'contained' : 'outlined'}
            endIcon={emailMutation.isSuccess ? <Check /> : null}
            type='submit'
            style={{ gridArea: 'button' }}
          >
            {emailMutation.isSuccess && 'Email enviado com sucesso!'}
            {emailMutation.isError && 'Houve um problema, tente novamente'}
            {emailMutation.isIdle && 'Enviar mensagem'}
          </LoadingButton>
        </ContactFormGridStyles>
      </ContactStyles>
    </Container>
  )
}
