import React, { JSX } from 'react'
import { BaseIcon } from '../BaseIcon'
import { IconButtonProps } from '../props'
import { BackIcon } from '../index'

export const IconBackFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <BackIcon />
    </BaseIcon>
  )
}
