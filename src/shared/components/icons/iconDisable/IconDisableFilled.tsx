import React, { JSX } from 'react'
import { IoAlertCircle } from 'react-icons/io5'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'

export const IconDisableFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <IoAlertCircle />
    </BaseIcon>
  )
}
