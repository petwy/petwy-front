import React, { JSX, useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CgSelect } from 'react-icons/Cg'
import { Option } from '../../../domain/interfaces/select'
import { styles } from '../../../config/styles'
import { useField } from 'formik'
import { SelectProps } from './props'

export function Select(props: SelectProps): JSX.Element {
  const { name, options } = props
  const [selected, setSelected] = useState<Option>(options[0])
  const [field, meta, helpers] = useField(name)
  const [displayData, setDisplayData] = useState<Option[]>(options)

  useEffect(() => {
    setDisplayData(options)
  }, [options])
  const handleChange = (opt: Option) => {
    helpers.setValue(opt.value)
    setSelected(opt)
  }
  const CustomSelect = (): JSX.Element => (
    <Listbox value={field.value} onChange={handleChange}>
      <div className={'relative w-full'}>
        <Listbox.Button
          className={`${styles['input-box'].main}  relative cursor-default bg-white-abs py-2 pl-3 pr-10 text-left
      focus:outline-none
      focus-visible:border-gray
      focus-visible:ring-2
      focus-visible:ring-white
      focus-visible:ring-opacity-75
      focus-visible:ring-offset-2
      focus-visible:ring-offset-main-light`}
        >
          {field.value ? selected.label : <p>{'Selecciona una opción'}</p>}
          <span className={'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'}>
            <CgSelect className={'h-5 w-5 text-main'} />
          </span>
        </Listbox.Button>
        <Listbox.Options className={'absolute top-12 left-3 w-full z-[2] h-48 overflow-auto'}>
          {displayData.map((opt) => (
            <Listbox.Option key={opt.code} value={opt}>
              {({ active }) => (
                <div
                  key={opt.code}
                  className={`p-2 ${active ? 'hover:bg-main-light hover:text-white' : 'bg-white text-main'}`}
                >
                  <p>{opt.label}</p>
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
  return <CustomSelect />
}
