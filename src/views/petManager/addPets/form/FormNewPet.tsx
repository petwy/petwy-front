import React, { JSX, useEffect, useState } from 'react'
import { getLabel, sexOpts, specieBreeds, species } from '../../../../data'
import { countries } from '../../../../data/geography'
import { colours } from '../../../../data/colours'
import { Label } from '../../../../shared/components/label'
import { Select } from '../../../../shared/components/select/Select'
import { IPetRegistry } from '../../../../domain/entities/pets/PetRegistry'
import { FormNewPetProps } from './props'
import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikProps } from 'formik'
import { Option } from '../../../../domain/interfaces/select'
import { styles } from '../../../../config/styles'
import { DatePickerField } from '../../../../shared/components/date/DatePicker'
import { MultiSelect } from '../../../../shared/components/multiSelect/MultiSelect'
import { SwitchField } from '../../../../shared/components/switch/Switch'
import { petRegistrySchema } from '../../../../shared/validation/schema/petRegistry'
import { toCapitalize } from '../../../../shared/utils'
import {
  getIdentificationOwner,
  IPetIdentificationOwner,
} from '../../../../domain/entities/pets/IPetIdentificationOwner'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../adapters/redux/store'
import { createPet } from '../../../../adapters/redux/thunks/pet'
import { PetRegistryState } from '../../../../adapters/redux/features/pets/slice'
import { LoadingBar } from '../../../../shared/components/loadingBar/LoadingBar'
import { routes } from '../../../../config/routes'

const initialState: IPetRegistry = {
  owner_id: '',
  is_chipped: false,
  chip: {
    chip_date: undefined,
    location: '',
    chip_code: '',
  },
  country: '',
  name: '',
  coat: '',
  breed: '',
  sex: '',
  birth_date: null as unknown as Date,
  obtained_from: '',
  others: '',
  specie: '',
  sterilised: false,
  isCountryChanged: false,
}

export const FormNewPet = (props: FormNewPetProps): JSX.Element | null => {
  let id: IPetIdentificationOwner
  const { owner } = props
  const dispatch = useDispatch<AppDispatch>()
  const [isPetSent, setIsPetSent] = useState<boolean>(false)
  const [newPetName, setNewPetName] = useState<string>('')
  if (owner) {
    const { identification } = owner
    id = getIdentificationOwner(identification)
  }
  const onSubmit = async (petRegistry: IPetRegistry, helpers: FormikHelpers<IPetRegistry>) => {
    const { resetForm } = helpers
    setIsPetSent(true)
    setNewPetName(petRegistry.name)
    dispatch(createPet({ id, pet: petRegistry } as PetRegistryState))
    resetForm()
  }
  return !isPetSent ? (
    <Formik initialValues={{ ...initialState }} onSubmit={onSubmit} validationSchema={petRegistrySchema}>
      {(formik: FormikProps<IPetRegistry>) => {
        const { owner_id, address } = owner
        const { values, setValues, errors, touched } = formik
        const { specie, is_chipped, isCountryChanged } = values
        const [specieSelect, setSpecieSelect] = useState<Option[]>(specieBreeds(specie))

        useEffect(() => {
          setSpecieSelect(specieBreeds(specie))
          setValues({ ...values, country: handleCountry(), owner_id }, false)
        }, [owner_id, address, specie])

        const handleCountry = (): string => {
          const country = countries.find((c) => c.code == address?.country)
          return country ? country.value : ''
        }

        return (
          <Form className={'w-full'}>
            <div className={'flex flex-col gap-3 px-6 py-3'}>
              {isCountryChanged ? (
                <div className={'w-full flex flex-col gap-3 items-start'}>
                  <Label name={'country'} text={'País de residencia'} />
                  <Select options={countries} name={'country'} className={styles['input-box'].main} />
                </div>
              ) : (
                <div
                  className={
                    'flex flex-col gap-3 justify-center text-center items-center bg-main-light bg-opacity-20 rounded-xl p-9'
                  }
                >
                  <Label
                    name={'country'}
                    text={`Tu mascota será creada con residencia en ${toCapitalize(
                      getLabel(values.country, 'country')
                    )}. ¿Deseas cambiar su residencia?`}
                  />
                  <SwitchField name={'isCountryChanged'} />
                </div>
              )}
              <div className={'flex flex-row items-center justify-center'}>
                <div className={'flex w-1/2 justify-center items-center gap-3 px-3 py-2'}>
                  <Label name={'sterilised'} text={'¿Está esterilizado?'} />
                  <SwitchField name={'sterilised'} />
                </div>
                {/* CHIP */}
                <div className={'flex w-1/2 justify-center items-center gap-3 px-3 py-2'}>
                  <Label name={'is_chipped'} text={'¿Tiene microchip?'} />
                  <SwitchField name={'is_chipped'} />
                </div>
              </div>
              {is_chipped ? (
                <div className={'flex flex-col gap-3'}>
                  <div className={`flex gap-3 items-start`}>
                    <div className={'w-full flex flex-col gap-3'}>
                      <Label name={'chip.chip_code'} text={'Número de chip'} />
                      <Field name={'chip.chip_code'} className={styles['input-box'].main} placeholder={'9000508090'} />
                    </div>
                    <div className={'w-full flex flex-col gap-3 items-start'}>
                      <Label name={'chip.location'} text={'País de instalación'} />
                      <Select options={countries} name={'chip.location'} className={styles['input-box'].main} />
                    </div>
                    <div className={'w-full flex flex-col gap-3'}>
                      <Label name={'chip.chip_date'} text={'Fecha de Instalación'} />
                      <DatePickerField name={'chip.chip_date'} className={styles['input-box'].main} />
                    </div>
                  </div>
                  <ErrorMessage component={'a'} className={`w-full ${styles.text.error}`} name={'chip.chip_code'} />
                </div>
              ) : null}

              <div className={'w-full flex flex-col gap-3'}>
                <Label name={'name'} text={'Nombre de tu mascota'} />
                <Field name={'name'} className={styles['input-box'].main} placeholder={'Kiara'} />
                {touched.name && errors.name && (
                  <ErrorMessage component={'a'} className={styles.text.error} name={'name'} />
                )}
              </div>
              <div className={'flex flex-row gap-3'}>
                <div className={'w-full flex flex-col gap-3'}>
                  <Label name={'sex'} text={'Sexo'} />
                  <Select options={sexOpts} name={'sex'} />
                  {touched.sex && errors.sex && (
                    <ErrorMessage component={'a'} className={styles.text.error} name={'sex'} />
                  )}
                </div>
                <div className={'w-full flex flex-col gap-3'}>
                  <Label name={'birth_date'} text={'Fecha de Nacimiento'} />
                  <DatePickerField name={'birth_date'} className={styles['input-box'].main} />
                  {touched.birth_date && errors.birth_date && (
                    <ErrorMessage component={'a'} className={styles.text.error} name={'birth_date'} />
                  )}
                </div>
              </div>

              <div className={'flex flex-row gap-3'}>
                <div className={'flex flex-col gap-3 w-full'}>
                  <Label name={'specie'} text={'Especie'} />
                  <Select name={'specie'} options={species} />
                  {touched.specie && errors.specie && (
                    <ErrorMessage component={'a'} className={styles.text.error} name={'specie'} />
                  )}
                </div>
                <div className={'flex flex-col gap-3 w-full'}>
                  <Label name={'breed'} text={'Raza'} />
                  <Select key={'breed'} options={specieSelect} name={'breed'} />
                  {touched.breed && errors.breed && (
                    <ErrorMessage component={'a'} className={styles.text.error} name={'breed'} />
                  )}
                </div>
              </div>

              <div className={'flex flex-col gap-3 w-full'}>
                <Label name={'coat'} text={'Color'} />
                <p>Selecciona los colores de tu mascota. Para eliminar un color, solo haz click encima del botón.</p>
                <MultiSelect data={colours} name={'coat'} />
                {touched.coat && errors.coat && (
                  <ErrorMessage component={'a'} className={styles.text.error} name={'coat'} />
                )}
              </div>

              <div className={'flex flex-col gap-3'}>
                <Label name={'obtained_from'} text={'¿Cómo lo obtuviste?'} />
                <Field name={'obtained_from'} className={styles['input-box'].main} placeholder={'Adopción'} />
              </div>
              <div className={'flex flex-col gap-3'}>
                <Label name={'others'} text={'¿Quieres adicionar algo más?'} />
                <Field
                  name={'others'}
                  className={styles['input-box'].main}
                  placeholder={'Lo que quieras comentar de tu mascota'}
                />
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
                  Crear Ficha
                </button>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  ) : (
    <LoadingBar location={routes.owners.manager.home(owner.owner_id)} message={`Creando a ${newPetName}...`} />
  )
}
