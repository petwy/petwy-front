import React, { JSX } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'
export const IconUserFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <FaUserAlt />
    </BaseIcon>
  )
}
