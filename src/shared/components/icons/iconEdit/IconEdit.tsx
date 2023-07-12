import { IconButtonProps } from '../props'
import React, { JSX } from 'react'
import { BaseIcon } from '../BaseIcon'
import { EditIcon } from '../index'

export const IconEditFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <EditIcon />
    </BaseIcon>
  )
}
