import React, { JSX, ReactNode } from 'react'

const sizeOptions: Record<string, string> = {
  sm: 'w-6 h-6 text-xs p-1',
  md: 'w-9 h-9 text-sm p-2',
  lg: 'w-12 h-12 text-lg p-2',
}

export const ButtonCircleFilled = (props: { size: string; onHandle: () => void; iconType: ReactNode }): JSX.Element => {
  const { size, onHandle, iconType } = props
  const sizeOption = sizeOptions[size] || 'md'
  return (
    <button
      type={'button'}
      onClick={onHandle}
      className={`${sizeOption} flex justify-center items-center rounded-full text-main-dark border border-main-dark bg-white
      hover:text-white
      hover:bg-main-dark
      transition
      duration-700
      `}
    >
      {iconType || null}
    </button>
  )
}
