import React, { JSX } from 'react'
import { CloseIcon } from '../../icons'

export const ButtonCloseFilled = (props: { onHandle: () => void }): JSX.Element => {
  const { onHandle } = props
  return (
    <button
      onClick={onHandle}
      className={`rounded-full text-sm py-2 px-2 text-error border border-error
      hover:text-white
      hover:bg-error
      transition
      duration-700
      `}
    >
      <CloseIcon />
    </button>
  )
}
