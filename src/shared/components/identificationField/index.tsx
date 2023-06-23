import React, { JSX, useState } from 'react'
import { ErrorMessage, useField } from 'formik'
import { styles } from '../../../config/styles'
import { IdentificationFieldProps } from './props'

export const IdentificationField = (props: IdentificationFieldProps): JSX.Element => {
  const { name, className, placeholder, errorMessage, validation, format } = props
  const [isValid, setValid] = useState<boolean>(true)

  const [field, meta, helpers] = useField({ name })
  const handleInput = (event: any) => {
    const formattedValue = format(event.target.value)
    setValid(validation(formattedValue))
    helpers.setValue(formattedValue)
  }
  return (
    <>
      <input
        id={name}
        name={name}
        value={field.value}
        placeholder={placeholder}
        className={className}
        onChange={handleInput}
      />
      <ErrorMessage component={'a'} className={styles.text.error} name={name} />
      <div>{!isValid ? <p className={styles.text.error}>{errorMessage}</p> : null}</div>
    </>
  )
}
