import React, { useState } from 'react'

const Selector = (props: { elements: string[]; onSelect: Event }) => {
  const { elements } = props
  const [selected, setSelected] = useState('')

  return (
    <>
      <label htmlFor="country">Select a country:</label>
      <select id="country" value={selected} onChange={() => console.log('hello')} defaultValue={elements[0]}>
        {elements.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </>
  )
}

export default Selector
