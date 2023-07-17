import React, { JSX, useEffect, useState } from 'react'
import { useField } from 'formik'
import moment from 'moment/moment'
import { Baseprop } from '../../../domain/interfaces/baseprop'

const initialDate = moment().format()

interface DatePickerProps extends Baseprop {
  name: string
  labelText: string
}

export const DatePickerField: React.FC<DatePickerProps> = ({ name, labelText }): JSX.Element => {
  const [field, meta, helpers] = useField({ name })
  const [date, setDate] = useState<string>(initialDate)
  useEffect(() => {
    helpers.setValue(moment(date).format())
  }, [helpers])
  const handleSelect = (val: string) => {
    if (val !== null) {
      helpers.setValue(moment(val).format())
      const dateVal = moment(val).format().toString()
      setDate(dateVal)
    }
  }
  return (
    <div className={'flex flex-col gap-1 w-full'}>
      <div className={'relative'}>
        <div
          id={'floating_outlined'}
          className={`block px-2.5 pb-2.5 pt-4 w-full text-md text-main bg-white-abs rounded-lg border border-main appearance-none
            focus:outline-none focus:ring-0 focus:border-main peer`}
        >
          <input
            className={'w-full'}
            type={'date'}
            onSelect={(event: any) => event.target.value}
            onChange={(event: any) => handleSelect(event.target.value)}
          />
        </div>
        <label
          htmlFor={'select_outlined'}
          className={`absolute text-sm text-main px-2 left-3 bg-white-abs rounded-lg
              duration-300 transform -translate-y-4 scale-75 top-2 z-[15] origin-[0]
              peer-focus:px-2 peer-focus:text-main
              peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2
              peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 `}
        >
          {labelText}
        </label>
      </div>
    </div>
  )
}
