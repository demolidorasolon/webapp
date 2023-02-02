import { ReactNode } from 'react'

export type ExpertiseItemTypes = {
  id: string
  icon: ReactNode
  title: string
  description: string
}

export interface ExpertiseItemPropTypes {
  item: ExpertiseItemTypes
}
