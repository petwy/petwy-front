import { AiTwotoneAlert } from 'react-icons/ai'
import { IconButtonProps } from '../props'
import React, { JSX } from 'react'
import { BaseIcon } from '../BaseIcon'

export const IconLostFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <AiTwotoneAlert />
    </BaseIcon>
  )
}
