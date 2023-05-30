import React, { Fragment } from 'react'

export default function Label(props: { name: string; text: string }) {
  const { name, text } = props
  return (
    <Fragment>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {text}
      </label>
    </Fragment>
  )
}
