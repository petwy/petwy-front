import React, { JSX } from 'react'

export default function Select(props: { name: string; data: Array<string>; width?: string }): JSX.Element {
  const { name, data, width } = props
  return (
    <select
      className={`shadow appearance-none border rounded py-2 px-3 ${
        width !== undefined ? width : 'w-full'
      } text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      name={name}
      id={name}
    >
      {data.map((m) => (
        <option key={m} value={m}>
          {m}
        </option>
      ))}
    </select>
  )
}
