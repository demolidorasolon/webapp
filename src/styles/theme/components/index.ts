import { ThemeOptions } from '@mui/material'
import { ButtonStyleOverrides } from './button/button.theme'
import { CheckboxStyleOverrides } from './checkbox/checkbox.theme'
import { ChipStyleOverrides } from './chip/chip.theme'
import { ContainerStyleOverrides } from './container/container.theme'
import { DividerStyleOverrides } from './divider/divider.theme'
import { ModalStyleOverrides } from './modal/modal.theme'
import { SkeletonStyleOverrides } from './skeleton/skeleton.theme'
import { TypographyStyleOverrides } from './typography/typography.theme'

export const components: ThemeOptions['components'] = {
  MuiButton: ButtonStyleOverrides,
  MuiChip: ChipStyleOverrides,
  MuiTypography: TypographyStyleOverrides,
  MuiModal: ModalStyleOverrides,
  MuiCheckbox: CheckboxStyleOverrides,
  MuiSkeleton: SkeletonStyleOverrides,
  MuiDivider: DividerStyleOverrides,
  MuiContainer: ContainerStyleOverrides
}
