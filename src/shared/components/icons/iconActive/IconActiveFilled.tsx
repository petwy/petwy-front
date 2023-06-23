import React, { JSX } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'

export const IconActiveFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <AiOutlineCheck />
    </BaseIcon>
  )
}
