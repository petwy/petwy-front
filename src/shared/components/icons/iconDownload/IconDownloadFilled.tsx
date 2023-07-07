import React, { JSX } from 'react'
import { BsCloudDownloadFill } from 'react-icons/bs'
import { BaseIcon } from '../BaseIcon'
import { IconButtonProps } from '../props'

export const IconDownloadFilled = (props: IconButtonProps): JSX.Element => {
  const { size, color } = props
  return (
    <BaseIcon size={size} color={color}>
      <BsCloudDownloadFill />
    </BaseIcon>
  )
}
