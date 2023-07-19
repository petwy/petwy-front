import React, { JSX } from 'react'
import { BackIcon } from '../../icons'

export const ButtonBackFilled = (props: { onHandle: () => void }): JSX.Element => {
  const { onHandle } = props
  return (
    <button
      onClick={onHandle}
      className={`rounded-full text-sm py-2 px-2 text-main-dark border border-main-dark w-fit
      hover:text-white
      hover:bg-main
      transition
      duration-700
      `}
    >
      <BackIcon />
    </button>
  )
}
