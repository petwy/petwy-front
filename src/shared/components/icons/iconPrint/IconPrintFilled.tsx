import React, { JSX } from 'react'
import { AiFillPrinter } from 'react-icons/ai'
import { BaseIcon } from '../BaseIcon'
import { IconButtonProps } from '../props'

export const IconPrintFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <AiFillPrinter />
    </BaseIcon>
  )
}
