import React, { JSX, useState } from 'react'
import { useField } from 'formik'
import { Baseprop } from '../../../domain/interfaces/baseprop'

interface SwitchProps extends Baseprop {
  name: string
  title?: string
  textHelper?: string
}
export const SwitchField: React.FC<SwitchProps> = ({ name, title, textHelper }): JSX.Element => {
  const [field, meta, helpers] = useField({ name })
  const [selected, setSelected] = useState<boolean>(false)
  const handleSelect = () => {
    setSelected(!selected)
    helpers.setValue(!selected)
  }
  return (
    <div className={'flex flex-col gap-1 w-fit justify-center items-center'}>
      <p className={`${!title && 'hidden'}`}>{title}</p>
      <p className={`${!textHelper && 'hidden'} text-main-light text-sm`}>{textHelper}</p>
      <label className="relative inline-flex items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          name={name}
          checked={selected}
          onChange={handleSelect}
        />
        <div
          className="w-11 h-6 bg-gray rounded-full
          peer peer-focus:ring-4 peer-focus:ring-main-light
          peer-checked:after:translate-x-full peer-checked:after:border-white
          after:content-[''] after:absolute after:top-0.5 after:left-[2px]
          after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all
          dark
          peer-checked:bg-main"
        ></div>
      </label>
    </div>
  )
}
