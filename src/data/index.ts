const whatsAppNumber = 11997458435
const instagramUsername = 'demolidorasolon'
const fixoNumber = 37143433
const celPhone = 11997458435
const companyEmail = 'solon@demolidorasolon.com.br'

export const COMPANY_DATA = {
  email: {
    email: companyEmail,
    link: `mailto:${companyEmail}`
  },
  address: {
    locale:
      'Rua Hugo Carotini, 661 - Previdência - São Paulo - SP - CEP: 05532-020',
    link: 'https://goo.gl/maps/FkX4c7DUdmywJ9Ec9'
  },
  whatsApp: {
    number: whatsAppNumber,
    link: `https://api.whatsapp.com/send?phone=55${whatsAppNumber}`
  },
  fixo: {
    number: fixoNumber,
    link: `tel:+55${fixoNumber}`,
    formattedNumber: '(11) 3714-3433'
  },
  celPhone: {
    number: celPhone,
    link: `tel:+55${celPhone}`,
    formattedNumber: '(11) 99745-8435'
  },
  instagram: {
    username: instagramUsername,
    link: `http://instagram.com/_u/${instagramUsername}`
  }
}
