import * as React from 'react'
import { SVGProps } from 'react'

import logoSrc from '../../../assets/images/logo.png'

export const IconLogo = (props: React.HTMLAttributes<HTMLImageElement>) => (
  <img src={logoSrc} style={{ width: '100%', height: 'auto' }} {...props} />
)
