import React, { JSX, useState } from 'react'
import { PawIcon, PlusIcon } from '../../icons'
import { Props } from '../props'

const sizeOptions: Record<string, string> = {
  sm: 'w-6 h-6 text-xs p-1',
  md: 'w-9 h-9 text-sm p-2',
  lg: 'w-12 h-12 text-lg p-2',
}

export const ButtonAddPet = (props: Props): JSX.Element => {
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
    <button onClick={onHandle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className={`${sizeOption} relative flex justify-center items-center rounded-full border
      ${isHovered ? 'text-white bg-main border-main' : 'text-white border-main-light bg-main-light'}
      transition
      duration-700
      `}
      >
        <PawIcon />
        <div
          className={`absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rounded-full text-xs p-[0.5px] border
          ${isHovered ? 'text-white bg-main border-main' : 'text-main-light border-main-light bg-white'}
          transition
          duration-700
        `}
        >
          <PlusIcon />
        </div>
      </div>
    </button>
  )
}
