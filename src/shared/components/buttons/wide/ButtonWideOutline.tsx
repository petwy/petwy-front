import React, { JSX, ReactNode } from 'react'

export const ButtonWideOutline = (props: { text: string; onHandle: () => void; iconType?: ReactNode }): JSX.Element => {
  const { text, onHandle, iconType } = props
  return (
    <button
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
