import { IconButtonProps } from '../props'
import React, { JSX } from 'react'
import { BaseIcon } from '../BaseIcon'
import { LostIcon } from '../index'

export const IconLostFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <LostIcon />
    </BaseIcon>
  )
}
