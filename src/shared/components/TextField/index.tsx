import React from 'react'
import { Baseprop } from '../../../domain/interfaces/baseprop'
import { ErrorMessage, useField } from 'formik'
import { styles } from '../../../config/styles'
import { BaseField } from '../BaseField'

interface TextFieldProps extends Baseprop {
  type: string
  labelText: string
  name: string
  textHelper?: string
  placeholder?: string
}

export const TextField: React.FC<TextFieldProps> = ({ type, placeholder, labelText, name, textHelper }) => {
  const [field, meta, helpers] = useField({ name })
  const { touched, error } = meta
  const handleOnChange = (event: any) => {
    helpers.setValue(event.target.value)
  }
  return (
    <div className={'flex flex-col gap-1 w-full'}>
      <BaseField key={name} labelText={labelText} textHelper={textHelper}>
        <input
          {...field}
          type={type}
          id={'floating_outlined'}
          className={`block bg-white-abs px-2.5 pb-2.5 pt-4 w-full text-md text-main rounded-lg border border-main appearance-none
            focus:outline-none focus:ring-0 focus:border-main peer`}
          placeholder={placeholder}
          value={field.value}
          onChange={handleOnChange}
        />
      </BaseField>
      {touched && error ? <ErrorMessage component={'a'} className={styles.text.error} name={name} /> : null}
    </div>
  )
}
