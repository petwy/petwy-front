import React, { JSX } from 'react'
import { PawIcon, PlusIcon } from '../index'

export const IconPet = (): JSX.Element => {
  return (
    <div className={`flex justify-center items-center`}>
      <PawIcon />
      <div
        className={`w-20 h-20 absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4
        text-main 
        rounded-full text-xs p-[0.5px] border
      `}
      >
        <PlusIcon />
      </div>
    </div>
  )
}
