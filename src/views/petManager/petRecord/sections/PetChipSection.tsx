import React, { JSX, useEffect } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { dateViewer } from '../../../../shared/utils/ageCalc'
import { useShowing } from '../../../../shared/hooks/useShowing'
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import { IPetChip } from '../../../../domain/entities/pets/IChip'
import { Label } from '../../../../shared/components/label'
import { Select } from '../../../../shared/components/select/Select'
import { countries } from '../../../../data/geography'
import { styles } from '../../../../config/styles'
import { DatePickerField } from '../../../../shared/components/date/DatePicker'
import { IPet } from '../../../../domain/entities/pets/IPet'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../../adapters/redux/store'
import { addChip, getPetByID } from '../../../../adapters/redux/thunks/pet'
import { PetState } from '../../../../adapters/redux/features/pets/slice'
import { IChipUpdate, IPetUpdate } from '../../../../domain/entities/pets/IPetUpdate'

export const PetChipSection = (props: SectionProps): JSX.Element => {
  const { pet_id } = props
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<AppState>((state: AppState) => state)
  const { petState } = state as AppState
  const { pet } = petState as PetState
  const { isShowing, toggle } = useShowing()
  const initialChip: IChipUpdate = {
    pet_id,
    chip_code: '',
    chip_date: new Date(),
    location: '',
  }
  useEffect(() => {
    if (pet_id !== undefined) {
      dispatch(getPetByID(pet_id))
    }
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
  }

  return (
    <PetSection title={'Información del Chip'} onToggle={toggle}>
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
                          <Label name={'chip_code'} text={'Número de chip'} />
                          <Field name={'chip_code'} className={styles['input-box'].main} placeholder={'9000508090'} />
                        </div>
                        <div className={'w-full flex flex-col gap-3 items-start'}>
                          <Label name={'location'} text={'País de instalación'} />
                          <Select options={countries} name={'location'} className={styles['input-box'].main} />
                        </div>
                        <div className={'w-full flex flex-col gap-3'}>
                          <Label name={'chip_date'} text={'Fecha de Instalación'} />
                          <DatePickerField name={'chip_date'} className={styles['input-box'].main} />
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
          <p>Código del chip: {pet.chip?.chip_code}</p>
          <p>Fecha de instalación: {pet.chip ? dateViewer(pet.chip?.chip_date) : null}</p>
          <p>Ubicación del chip: Lomo</p>
          <p>País de instalación: {pet.chip?.location}</p>
        </>
      )}
    </PetSection>
  )
}
