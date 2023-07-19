import React, { JSX, useEffect, useState } from 'react'
import { getLabel, sexOpts, specieBreeds, species } from '../../../../../data'
import { countries } from '../../../../../data/geography'
import { colours } from '../../../../../data/colours'
import { Select } from '../../../../../shared/components/Select'
import { IPetRegistry } from '../../../../../domain/entities/pets/PetRegistry'
import { ErrorMessage, Form, Formik, FormikHelpers, FormikProps } from 'formik'
import { Option } from '../../../../../domain/interfaces/IOption'
import { styles } from '../../../../../config/styles'
import { DatePickerField } from '../../../../../shared/components/DatePicker'
import { CoatSelect } from '../../../../../shared/components/CoatSelect'
import { SwitchField } from '../../../../../shared/components/Switch'
import { petRegistrySchema } from '../../../../../shared/validation/schema/petRegistry'
import { toCapitalize } from '../../../../../shared/utils'
import {
  getIdentificationOwner,
  IPetIdentificationOwner,
} from '../../../../../domain/entities/pets/IPetIdentificationOwner'
import { LoadingBar } from '../../../../../shared/components/loadingBar/LoadingBar'
import { routes } from '../../../../../config/routes'
import {
  BUTTON_CREATE_PET,
  CHIP_COUNTRY,
  CHIP_DATE,
  CHIP_NUMBER,
  CHIP_NUMBER_PLACEHOLDER,
  CHIP_TEXT,
  CREATING_PET_LOADING,
  OBTAINED_FROM_PLACEHOLDER,
  OBTAINED_FROM_TEXT,
  OTHERS_PLACEHOLDER,
  OTHERS_TEXT,
  PET_BIRTH_DATE_LABEL_TEXT,
  PET_BREED_LABEL_TEXT,
  PET_COAT_LABEL_TEXT,
  PET_COAT_LABEL_TEXT_HELPER,
  PET_NAME_PLACEHOLDER,
  PET_NAME_TEXT,
  PET_SPECIE,
  RESIDENCE_ADVISE,
  RESIDENCE_ADVISE_HELPER,
  RESIDENCE_LABEL_TEXT,
  STERILISE_TEXT,
} from './texts'
import { TextField } from '../../../../../shared/components/TextField'
import { useOwner } from '../../../../../shared/hooks/useOwner'

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

export const FormNewPet = (): JSX.Element | null => {
  let id: IPetIdentificationOwner
  const { owner, createNewPet } = useOwner()
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
    createNewPet(id, petRegistry)
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
          <Form className={'container w-full'}>
            <div className={'flex flex-col gap-3 px-6 py-3'}>
              {isCountryChanged ? (
                <div className={'w-full flex flex-col gap-3 items-start'}>
                  <Select
                    options={countries}
                    name={'country'}
                    className={styles['input-box'].main}
                    labelText={RESIDENCE_LABEL_TEXT}
                  />
                </div>
              ) : (
                <div
                  className={
                    'flex flex-col gap-3 justify-center text-center items-center bg-main-light bg-opacity-20 rounded-xl p-9'
                  }
                >
                  <SwitchField
                    name={'isCountryChanged'}
                    title={RESIDENCE_ADVISE(toCapitalize(getLabel(values.country, 'country')))}
                    textHelper={RESIDENCE_ADVISE_HELPER}
                  />
                </div>
              )}
              <div className={'flex flex-row items-center justify-center'}>
                <div className={'flex w-1/2 justify-center items-center gap-3 px-3 py-2'}>
                  <SwitchField name={'sterilised'} title={STERILISE_TEXT} />
                </div>
                {/* CHIP */}
                <div className={'flex w-1/2 justify-center items-center gap-3 px-3 py-2'}>
                  <SwitchField name={'is_chipped'} title={CHIP_TEXT} />
                </div>
              </div>
              {is_chipped ? (
                <div className={'flex flex-col gap-3'}>
                  <div className={`flex gap-3 items-start`}>
                    <div className={'w-full flex flex-col gap-3'}>
                      <TextField
                        name={'chip.chip_code'}
                        labelText={CHIP_NUMBER}
                        placeholder={CHIP_NUMBER_PLACEHOLDER}
                        type={'number'}
                      />
                    </div>
                    <div className={'w-full flex flex-col gap-3 items-start'}>
                      <Select
                        options={countries}
                        name={'chip.location'}
                        className={styles['input-box'].main}
                        labelText={CHIP_COUNTRY}
                      />
                    </div>
                    <div className={'w-full flex flex-col gap-3'}>
                      <DatePickerField name={'chip.chip_date'} labelText={CHIP_DATE} />
                    </div>
                  </div>
                  <ErrorMessage component={'a'} className={`w-full ${styles.text.error}`} name={'chip.chip_code'} />
                </div>
              ) : null}

              <div className={'w-full flex flex-col gap-3'}>
                <TextField type={'text'} name={'name'} labelText={PET_NAME_TEXT} placeholder={PET_NAME_PLACEHOLDER} />
              </div>
              <div className={'flex flex-row gap-3'}>
                <div className={'w-full flex flex-col gap-3'}>
                  <Select options={sexOpts} name={'sex'} labelText={'Sexo'} />
                  {touched.sex && errors.sex && (
                    <ErrorMessage component={'a'} className={styles.text.error} name={'sex'} />
                  )}
                </div>
                <div className={'w-full flex flex-col gap-3'}>
                  <DatePickerField name={'birth_date'} labelText={PET_BIRTH_DATE_LABEL_TEXT} />
                  {touched.birth_date && errors.birth_date && (
                    <ErrorMessage component={'a'} className={styles.text.error} name={'birth_date'} />
                  )}
                </div>
              </div>

              <div className={'flex flex-row gap-3'}>
                <div className={'flex flex-col gap-3 w-full'}>
                  <Select name={'specie'} options={species} labelText={PET_SPECIE} />
                  {touched.specie && errors.specie && (
                    <ErrorMessage component={'a'} className={styles.text.error} name={'specie'} />
                  )}
                </div>
                <div className={'flex flex-col gap-3 w-full'}>
                  <Select key={'breed'} options={specieSelect} name={'breed'} labelText={PET_BREED_LABEL_TEXT} />
                  {touched.breed && errors.breed && (
                    <ErrorMessage component={'a'} className={styles.text.error} name={'breed'} />
                  )}
                </div>
              </div>

              <div className={'flex flex-col gap-3 w-full'}>
                <CoatSelect
                  labelText={PET_COAT_LABEL_TEXT}
                  options={colours}
                  name={'coat'}
                  textHelper={PET_COAT_LABEL_TEXT_HELPER}
                />
                {touched.coat && errors.coat && (
                  <ErrorMessage component={'a'} className={styles.text.error} name={'coat'} />
                )}
              </div>

              <div className={'flex flex-col gap-3'}>
                <TextField
                  type={'text'}
                  name={'obtained_from'}
                  labelText={OBTAINED_FROM_TEXT}
                  placeholder={OBTAINED_FROM_PLACEHOLDER}
                />
              </div>
              <div className={'flex flex-col gap-3'}>
                <TextField type={'text'} name={'others'} labelText={OTHERS_TEXT} placeholder={OTHERS_PLACEHOLDER} />
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
                  {BUTTON_CREATE_PET}
                </button>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  ) : (
    <LoadingBar location={routes.owners.manager.home(owner.owner_id)} message={CREATING_PET_LOADING(newPetName)} />
  )
}
