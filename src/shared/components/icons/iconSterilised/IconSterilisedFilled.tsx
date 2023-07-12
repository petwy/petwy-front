import React, { JSX } from 'react'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'
import { SterilisedIcon } from '../index'
export const IconSterilisedFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <SterilisedIcon />
    </BaseIcon>
  )
}
