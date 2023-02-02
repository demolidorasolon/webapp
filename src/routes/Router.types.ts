import { Params } from 'react-router-dom'
import { paths } from './Router'

export type Match = {
  id: string
  pathname: string
  params: Params<string>
  data: unknown
  handle: typeof paths.HOME.handle
}
