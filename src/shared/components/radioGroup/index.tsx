import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'
import { PawIcon } from '../icons/pawIcon'
import { RadioGroupProps } from './props'

export type RadioGroupOption<T> = {
  label: string
  value: T
}

export const RadioButtonGroup = <T,>(props: RadioGroupProps<T>) => {
  const { options, onChange, initialValue } = props
  const [selected, setSelected] = useState<string>(initialValue)
  const handleChange = (value: string) => {
    setSelected(value)
    onChange(value)
  }
  return (
    <RadioGroup value={selected} onChange={handleChange}>
      <div className={'flex flex-row gap-3'}>
        {options.map((option) => {
          return (
            <RadioGroup.Option value={option.value} key={option.label} className={'basis-1/2'}>
              {({ checked }) => {
                return (
                  <div
                    className={classNames({
                      'flex gap-3 items-center rounded-md px-2 py-1 border-2 cursor-pointer': true,
                      'outline outline-1 outline-gray-light bg-main bg-opacity-80': checked,
                    })}
                  >
                    <span className="w-5 h-5">
                      {checked ? (
                        <span>
                          <PawIcon />️
                        </span>
                      ) : null}
                    </span>
                    <RadioGroup.Label className={`${checked ? 'text-white' : 'text-gray-light'}`}>
                      {option.label}
                    </RadioGroup.Label>
                  </div>
                )
              }}
            </RadioGroup.Option>
          )
        })}
      </div>
    </RadioGroup>
  )
}
