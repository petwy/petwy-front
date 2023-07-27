import React, { JSX } from 'react'
import { LoginIcon } from '../../icons'

export const ButtonLoginOutline = (props: { text: string; onHandle: () => void }): JSX.Element => {
  const { text, onHandle } = props
  return (
    <button
      onClick={onHandle}
      className={`flex flex-row items-center justify-center gap-2 border border-main py-2 px-6 rounded-xl text-main
      hover:text-white
      hover:bg-main
      hover:border-main
      transition duration-700
      `}
    >
      {text}
      <LoginIcon />
    </button>
  )
}
