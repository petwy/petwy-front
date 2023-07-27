import React, { JSX, useState } from 'react'
import { PlusIcon, VaccineIcon } from '../../icons'

const sizeOptions: Record<string, string> = {
  sm: 'w-6 h-6 text-xs p-1',
  md: 'w-9 h-9 text-sm p-2',
  lg: 'w-12 h-12 text-lg p-2',
}

export const ButtonUpdateVaccine = (props: { size: string; onHandle: () => void }): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const { size, onHandle } = props
  const sizeOption = sizeOptions[size] || 'md'
  return (
    <button
      onClick={onHandle}
      className={`${sizeOption} flex justify-center items-center rounded-full border
      ${isHovered ? 'text-white bg-error border-error' : 'text-white border-error-light bg-error-light'}
      transition
      duration-700
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <VaccineIcon />
      <div
        className={`absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 rounded-full text-xs p-[0.5px] border
        ${isHovered ? 'text-white bg-error border-error-light' : 'text-error border-error bg-white'}
        transition
        duration-700
      `}
      >
        <PlusIcon />
      </div>
    </button>
  )
}
