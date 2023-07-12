import React, { JSX, ReactNode } from 'react'

export const ButtonAsideMenu = (props: { text: string; onHandle: () => void; children: ReactNode }): JSX.Element => {
  const { text, onHandle, children } = props
  return (
    <button
      onClick={onHandle}
      className={`flex items-center justify-start gap-2 text-md py-2 px-2 text-white w-full
      hover:bg-main-light
      hover:bg-opacity-20
      hover:underline
      transition
      duration-700
      `}
    >
      {children}
      {text}
    </button>
  )
}
