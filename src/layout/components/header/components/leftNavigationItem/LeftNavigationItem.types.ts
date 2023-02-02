import { paths } from '../../../../../routes'

export interface LeftNavigationPropTypes {
  item: typeof paths.HOME | typeof paths.ABOUT_US
  handleClose: () => void
}
