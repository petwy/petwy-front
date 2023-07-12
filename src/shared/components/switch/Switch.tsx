import React, { JSX, useState } from 'react'
import { SwitchProps } from './props'
import { Switch } from '@headlessui/react'
import { useField } from 'formik'

export const SwitchField = (props: SwitchProps): JSX.Element => {
  const { name } = props
  const [field, meta, helpers] = useField({ name })
  const [selected, setSelected] = useState<boolean>(false)
  const handleSelect = () => {
    setSelected(!selected)
    helpers.setValue(!selected)
  }
  return (
    <Switch
      id={name}
      name={name}
      checked={selected}
      onChange={handleSelect}
      className={`${selected ? 'bg-success' : 'bg-gray-light'} 
                    relative inline-flex items-center
                    h-4 w-12 
                    shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out 
                    focus:outline-none 
                    focus-visible:ring-2  
                    focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${
          selected ? 'translate-x-6 bg-success shadow-[0px_0px_6px_6px_rgba(0,0,0,0.15)]' : 'translate-x-0 bg-gray'
        }
                      pointer-events-none inline-block h-6 w-6 transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  )
}
