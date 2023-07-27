import React, { JSX } from 'react'

export const ButtonRegistry = (props: { text: string; onHandle: () => void }): JSX.Element => {
  const { text, onHandle } = props
  return (
    <button
      onClick={onHandle}
      className={`rounded-xl text-md py-3 px-6 text-white bg-main border
      hover:text-main
      hover:bg-main-light
      hover:border
      hover:border-main-light
      transition
      duration-700
      `}
    >
      {text}
    </button>
  )
}
