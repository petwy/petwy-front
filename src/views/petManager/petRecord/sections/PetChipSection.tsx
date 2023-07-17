import React, { JSX, useEffect, useState } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { dateViewer } from '../../../../shared/utils/ageCalc'
import { useShowing } from '../../../../shared/hooks/useShowing'
import { ErrorMessage, Form, Formik, FormikProps } from 'formik'
import { Select } from '../../../../shared/components/Select'
import { countries } from '../../../../data/geography'
import { styles } from '../../../../config/styles'
import { DatePickerField } from '../../../../shared/components/DatePicker'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../../adapters/redux/store'
import { addChip, getPetByID } from '../../../../adapters/redux/thunks/pet'
import { IChipUpdate } from '../../../../domain/entities/pets/IPetUpdate'
import { TextField } from '../../../../shared/components/TextField'
import { toCapitalize } from '../../../../shared/utils'
import { getLabel } from '../../../../data'
import { IPet } from '../../../../domain/entities/pets/IPet'
import { IPetChip } from '../../../../domain/entities/pets/IChip'
import { PetSectionLabel } from './PetSectionLabel'

function validate(chip: IPetChip): boolean {
  return !chip?.chip_code || chip?.chip_code.trim() === ''
}

export const PetChipSection = (props: SectionProps): JSX.Element => {
  const { pet_id } = props
  const dispatch = useDispatch<AppDispatch>()
  const pet = useSelector<AppState>((state: AppState) => state.petState.pet) as IPet
  const [isEditable, setEditable] = useState<boolean>(true)
  const { isShowing, toggle } = useShowing()
  const chippedCountry = toCapitalize(getLabel(pet.chip?.location, 'country'))

  const initialChip: IChipUpdate = {
    pet_id,
    chip_code: pet.chip?.chip_code,
    chip_date: pet.chip?.chip_date,
    location: pet.chip?.location,
  }
  useEffect(() => {
    dispatch(getPetByID(pet_id))
  }, [])
  const onSubmit = (chip: IChipUpdate) => {
    const { chip_code, location, chip_date } = chip
    const update: IChipUpdate = {
      pet_id,
      chip_code,
      location,
      chip_date,
    }
    dispatch(addChip(update))
    toggle()
    dispatch(getPetByID(pet_id))
  }

  return (
    <PetSection title={'Información del Chip'} onToggle={toggle} isEditable={isEditable}>
      {isShowing ? (
        <div className={'transition-opacity ease-in duration-1000'}>
          <Formik initialValues={initialChip} onSubmit={onSubmit}>
            {(formik: FormikProps<IChipUpdate>) => {
              const { errors } = formik
              return (
                <Form className={'w-full'}>
                  <div className={'flex flex-col gap-3 px-6 py-3'}>
                    <div className={'flex flex-col gap-3'}>
                      <div className={`flex gap-3 items-start`}>
                        <div className={'w-full flex flex-col gap-3'}>
                          <TextField
                            type={'text'}
                            labelText={'Número de chip'}
                            placeholder={'9000508090'}
                            name={'chip_code'}
                          />
                        </div>
                        <div className={'w-full flex flex-col gap-3 items-start'}>
                          <Select
                            options={countries}
                            name={'location'}
                            className={styles['input-box'].main}
                            labelText={'País de instalación'}
                          />
                        </div>
                        <div className={'w-full flex flex-col gap-3'}>
                          <DatePickerField
                            name={'chip_date'}
                            className={styles['input-box'].main}
                            labelText={'Fecha de Instalación'}
                          />
                        </div>
                      </div>
                      <ErrorMessage component={'a'} className={`w-full ${styles.text.error}`} name={'chip_code'} />
                    </div>
                    <div className={'mt-3'}>
                      <button
                        type={'submit'}
                        disabled={Object.keys(errors).length > 0}
                        className={`rounded-xl text-sm py-2 px-2 w-full border ${
                          Object.keys(errors).length > 0
                            ? styles.button.color.disable
                            : `text-white bg-main
                                hover:text-white
                                hover:bg-main
                                transition
                                duration-700
                              `
                        }`}
                      >
                        Actualizar datos del chip
                      </button>
                    </div>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      ) : (
        <>
          <PetSectionLabel title={'Código del chip'} value={pet?.chip?.chip_code} />
          <PetSectionLabel title={'Fecha de instalación'} value={pet?.chip ? dateViewer(pet?.chip?.chip_date) : ''} />
          <PetSectionLabel title={'Ubicación del chip'} value={'Lomo'} />
          <PetSectionLabel title={'País de instalación'} value={chippedCountry} />
        </>
      )}
    </PetSection>
  )
}
