import React, { JSX, useState } from 'react'
import { Option } from '../../../domain/interfaces/select'
import { useField } from 'formik'
import { Baseprop } from '../../../domain/interfaces/baseprop'
import { BaseField } from '../BaseField'
import { CustomSelect } from './CustomSelect'

interface SelectProps extends Baseprop {
  name: string
  labelText: string
  textHelper?: string
  options: Array<Option>
}

export const Select: React.FC<SelectProps> = ({ name, labelText, textHelper, options }): JSX.Element => {
  const [field, meta, helpers] = useField(name)
  const [selected, setSelected] = useState<Option>({} as Option)
  const [isDisplayed, setDisplayed] = useState<boolean>(false)

  const onSelect = (opt: Option) => {
    setSelected(opt)
    helpers.setValue(opt.value)
    setDisplayed(!isDisplayed)
  }

  return (
    <BaseField key={name} labelText={labelText} textHelper={textHelper}>
      <CustomSelect selected={selected} options={options} onSelect={onSelect} />
    </BaseField>
  )
}
