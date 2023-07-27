import React, { JSX } from 'react'
import { BaseIcon } from '../BaseIcon'
import { IconButtonProps } from '../props'
import { DownloadIcon } from '../index'

export const IconDownloadFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <DownloadIcon />
    </BaseIcon>
  )
}
