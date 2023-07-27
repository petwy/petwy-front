import React, { ReactNode } from 'react'
import { Baseprop } from '../../../../../domain/interfaces/baseprop'

interface PetSectionLabelProps extends Baseprop {
  title: string
  value: string
  children?: ReactNode
}
export const PetSectionLabel: React.FC<PetSectionLabelProps> = ({ title, value, children }) => {
  return (
    <div className={'flex flex-row gap-2 ml-3 items-center'}>
      <h1 className={'font-bold'}>{title}:</h1>
      <p>{value}</p>
      {children}
    </div>
  )
}
