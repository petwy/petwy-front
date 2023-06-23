import React, { JSX } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BaseIcon } from '../BaseIcon'
import { IconButtonProps } from '../props'

export const IconBackFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <AiOutlineArrowLeft />
    </BaseIcon>
  )
}
