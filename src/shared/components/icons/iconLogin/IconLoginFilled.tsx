import React, { JSX } from 'react'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'
import { LoginIcon } from '../index'

export const IconLoginFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <LoginIcon />
    </BaseIcon>
  )
}
