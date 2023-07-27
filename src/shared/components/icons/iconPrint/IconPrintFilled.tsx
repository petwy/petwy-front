import React, { JSX } from 'react'
import { BaseIcon } from '../BaseIcon'
import { IconButtonProps } from '../props'
import { PrintIcon } from '../index'

export const IconPrintFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <PrintIcon />
    </BaseIcon>
  )
}
