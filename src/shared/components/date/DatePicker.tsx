import React, { JSX, useEffect, useState } from 'react'
import { useField } from 'formik'
import { DatePickerProps } from './name'
import { styles } from '../../../config/styles'
import moment from 'moment/moment'

const initialDate = moment().format()
export const DatePickerField = (props: DatePickerProps): JSX.Element => {
  const { name } = props
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
    <input
      className={`text-sm ${styles['input-box'].main}`}
      type={'date'}
      onSelect={(event: any) => event.target.value}
      onChange={(event: any) => handleSelect(event.target.value)}
    />
  )
}
