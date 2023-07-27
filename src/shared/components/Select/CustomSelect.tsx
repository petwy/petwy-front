import React, { Fragment, JSX } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { PawIcon } from '../icons'
import { Option } from '../../../domain/interfaces/IOption'

interface CustomSelect {
  options: Array<Option>
  selected?: Option
  multiSelected?: Array<Option>
  onSelect: (event: any) => void
}

export const CustomSelect: React.FC<CustomSelect> = ({ selected, onSelect, options }): JSX.Element => (
  <div className={'relative'}>
    <div
      id={'floating_outlined'}
      className={`block px-2.5 pb-2.5 pt-4 w-full text-md text-main bg-white-abs rounded-lg border border-main appearance-none
            focus:outline-none focus:ring-0 focus:border-main peer`}
    >
      <Listbox value={selected} onChange={onSelect}>
        {({ open }) => {
          return (
            <div id={'select_outlined'} className="relative w-full">
              <Listbox.Button className={`w-full`}>
                {selected?.label !== undefined ? (
                  <div className={'flex justify-start'}>
                    <span className={'ml-3'}>{selected.label}</span>
                  </div>
                ) : (
                  <div className={'flex justify-start'}>
                    <span className={'ml-3'}>Selecciona una opción</span>
                  </div>
                )}
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={`absolute mt-3 w-full overflow-y-auto h-min-12 max-h-56 border rounded-md bg-white-abs py-1 shadow-lg z-[16]
                        ring-1 ring-black ring-opacity-5`}
                >
                  {options.map((opt) => (
                    <Listbox.Option key={opt.code} value={opt}>
                      {({ active }) => (
                        <div
                          key={opt.code}
                          className={`py-2 px-6 flex flex-row justify-between items-center w-full bg-white-abs text-main
                                hover:bg-main-light hover:text-white 
                                [&>*]:hover:block [&>*]:hover:text-white ${active && '[&>*]:block'}`}
                        >
                          <p>{opt.label}</p>
                          <PawIcon className={'hidden text-main'} />
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          )
        }}
      </Listbox>
    </div>
  </div>
)
