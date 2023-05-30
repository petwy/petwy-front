import React, { EventHandler, Fragment, JSX } from 'react'

export default function Input(props: {
  name: string
  typeInput: string
  placeholder?: string
  handler?: EventHandler<any>
}): JSX.Element {
  const { name, typeInput, placeholder, handler } = props
  return (
    <Fragment>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={typeInput}
        name={name}
        placeholder={placeholder}
        onChange={handler}
      />
    </Fragment>
  )
}
