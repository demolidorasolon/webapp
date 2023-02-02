export type ContactItemTypes = {
  id: string
  title: string
  description: {
    formatted: string
    link?: string
  }
  numbers?: {
    formatted: string
    link: string
  }[]
}

export interface ContactItemPropTypes {
  item: ContactItemTypes
}
