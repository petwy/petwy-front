import React, { ReactNode } from 'react'
import { Baseprop } from '../../domain/interfaces/baseprop'

interface BaseFieldProps extends Baseprop {
  labelText: string
  textHelper?: string
  children: ReactNode
}

export const BaseField: React.FC<BaseFieldProps> = ({ children, labelText, textHelper }) => {
  return (
    <div className={'flex flex-col gap-1 w-full'}>
      <div className={'relative'}>
        {children}
        <label
          htmlFor="floating_outlined"
          className={`absolute text-md text-main px-2 left-2 bg-white-abs rounded-lg
            duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]
            peer-focus:px-2 peer-focus:text-main peer-focus:text-sm
            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
            peer-placeholder-shown:top-1/2
            peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 `}
        >
          {labelText}
        </label>
      </div>
      <p className={'ml-3 text-sm italic'}>{textHelper}</p>
    </div>
  )
}
