import React, { JSX } from 'react'
import { FaMicrochip } from 'react-icons/fa'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'

export const IconChipFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <FaMicrochip />
    </BaseIcon>
  )
}
