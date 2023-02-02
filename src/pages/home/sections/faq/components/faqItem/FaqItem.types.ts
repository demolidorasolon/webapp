export type FaqItemTypes = {
  id: string
  question: string
  answer: string
  isSelected?: boolean
}

export interface FaqItemPropTypes {
  item: FaqItemTypes
}
