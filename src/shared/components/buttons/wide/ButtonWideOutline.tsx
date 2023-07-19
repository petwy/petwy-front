import React, { JSX, ReactNode } from 'react'

export const ButtonWideOutline = (props: {
  text: string
  type?: 'submit' | 'reset' | 'button' | undefined
  onHandle?: () => void
  iconType?: ReactNode
}): JSX.Element => {
  const { text, type, onHandle, iconType } = props
  return (
    <button
      type={type}
      onClick={onHandle}
      className={`rounded-xl text-sm py-2 px-2 text-main border border-main bg-white w-full
      hover:text-white
      hover:bg-main
      transition
      duration-700
      `}
    >
      <div className={'flex flex-row gap-3 justify-center items-center'}>
        {text} {iconType || null}
      </div>
    </button>
  )
}
