import React, { JSX, useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CgSelect } from 'react-icons/Cg'
import { useField } from 'formik'
import { SelectProps } from './props'
import { Option } from '../../../domain/interfaces/select'
import { styles } from '../../../config/styles'

export function MultiSelect(props: SelectProps): JSX.Element {
  const { name, data } = props
  const [field, meta, helpers] = useField({ name })
  const [selected, setSelected] = useState<Option[]>([])

  useEffect(() => {
    helpers.setValue(selected.map((s) => s.value).join(', '))
  }, [selected, helpers])
  const handleSelect = (opt: Option) => {
    const optFind = selected?.find((s) => s.value == opt.value)
    if (optFind === undefined) {
      setSelected([...selected, opt])
      helpers.setValue(selected.map((s) => s.value).join(', '))
    }
  }

  const handleDrop = (e: any) => {
    const opt = selected?.find((s) => s.value == e.target.value)
    if (opt !== undefined) {
      const index = selected.indexOf(opt)
      selected.splice(index, 1)
      helpers.setValue([...selected])
    }
  }
  return (
    <div>
      <div className={'flex flex-row gap-3 mb-3'}>
        {selected.map((sel) => (
          <button
            key={sel.code}
            value={sel.value}
            type={'button'}
            className={`flex flex-row gap-1 items-center border rounded-xl ${styles.coat(sel.value)} px-2 py-1`}
            onClick={handleDrop}
          >
            {sel.label}
          </button>
        ))}
      </div>
      <Listbox value={field.value} onChange={handleSelect}>
        <Listbox.Button
          className={`flex flex-row gap-3 ${styles['input-box'].main} relative cursor-default bg-white-abs py-2 pl-3 pr-10 text-left 
        focus:outline-none 
        focus-visible:border-gray 
        focus-visible:ring-2 
        focus-visible:ring-white 
        focus-visible:ring-opacity-75 
        focus-visible:ring-offset-2 
        focus-visible:ring-offset-main-light`}
        >
          <p>Selecciona el o los colores de tu mascota</p>
          <span className={'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'}>
            <CgSelect className={'h-5 w-5 text-main'} />
          </span>
        </Listbox.Button>
        <Listbox.Options>
          {data.map((opt) => (
            <Listbox.Option key={opt.code} value={opt}>
              {({ active }) => (
                <div key={opt.code} className={`p-2 ${active ? 'bg-main-light text-white' : 'bg-white text-main'}`}>
                  <p>{opt.label}</p>
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
