import React, { Fragment, JSX } from 'react'

export function Input(props: {
  name: string
  typeInput: string
  placeholder?: string
  autoComplete?: string
  handler?: any
}): JSX.Element {
  const { name, typeInput, placeholder, autoComplete, handler } = props
  return (
    <Fragment>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={typeInput}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={handler}
      />
    </Fragment>
  )
}
