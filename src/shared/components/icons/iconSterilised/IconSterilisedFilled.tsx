import React, { JSX } from 'react'
import { LuScissors } from 'react-icons/lu'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'
export const IconSterilisedFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <LuScissors />
    </BaseIcon>
  )
}
