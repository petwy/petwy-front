import React, { JSX, useEffect, useState } from 'react'
import { useField } from 'formik'
import { Option } from '../../../domain/interfaces/select'
import { styles } from '../../../config/styles'
import { Baseprop } from '../../../domain/interfaces/baseprop'
import { CustomSelect } from '../Select/CustomSelect'
import { PawIcon } from '../icons'
import { BaseField } from '../BaseField'
interface SelectProps extends Baseprop {
  labelText: string
  name: string
  options: Array<Option>
  textHelper?: string
}

export const CoatSelect: React.FC<SelectProps> = ({ labelText, name, textHelper, options }): JSX.Element => {
  const [field, meta, helpers] = useField({ name })
  const [selected, setSelected] = useState<Option[]>([])

  useEffect(() => {
    helpers.setValue(selected.map((s) => s.value).join(', '))
  }, [selected, helpers])
  const handleSelect = (opt: Option) => {
    const optFind = selected?.find((s) => s.value == opt.value)
    if (optFind === undefined) {
      setSelected([...selected, opt])
      helpers.setValue(selected.map((s) => s.value).join(', '))
    }
  }

  const handleDrop = (e: any) => {
    const opt = selected?.find((s) => s.value == e.currentTarget.value)
    if (opt !== undefined) {
      const index = selected.indexOf(opt)
      selected.splice(index, 1)
      helpers.setValue([...selected])
    }
  }
  return (
    <>
      <div>
        <div className={'flex flex-row gap-3 mb-3'}>
          {selected.map((sel) => {
            return (
              <button
                key={sel.code}
                value={sel.value}
                type={'button'}
                className={`flex flex-col justify-center items-center p-2 shadow-xl border w-9 h-9 text-md rounded-full p-2 ${styles.coat(
                  sel.value
                )}`}
                onClick={handleDrop}
              >
                <PawIcon />
              </button>
            )
          })}
        </div>
        <BaseField key={name} labelText={labelText} textHelper={textHelper}>
          <CustomSelect multiSelected={selected} options={options} onSelect={handleSelect} />
        </BaseField>
      </div>
    </>
  )
}
