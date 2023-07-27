import React, { JSX } from 'react'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'
import { ChipIcon } from '../index'

export const IconChipFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <ChipIcon />
    </BaseIcon>
  )
}
