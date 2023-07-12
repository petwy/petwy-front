import React, { JSX } from 'react'
import { IconButtonProps } from '../props'
import { BaseIcon } from '../BaseIcon'
import { AlertIcon } from '../index'

export const IconDisableFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <AlertIcon />
    </BaseIcon>
  )
}
