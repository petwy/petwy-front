import React, { JSX } from 'react'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'
import { UserIcon } from '../index'
export const IconUserFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <UserIcon />
    </BaseIcon>
  )
}
