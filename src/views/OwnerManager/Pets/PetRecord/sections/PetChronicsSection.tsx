import React, { JSX, useState } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { Tag } from '../../../../../shared/components/tag/Tag'
import { Level, TagLevel } from '../../../../../shared/components/tag/props'
import { IDiseaseUpdate } from '../../../../../domain/entities/pets/IPetUpdate'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../../adapters/redux/store'
import { FieldArray, Form, Formik, FormikProps } from 'formik'
import { Select } from '../../../../../shared/components/Select'
import { diseaseSeverityOption } from '../../../../../data/diseases'
import { TextField } from '../../../../../shared/components/TextField'
import { ButtonWideOutline } from '../../../../../shared/components/buttons/wide/ButtonWideOutline'
import { MinusIcon, PlusIcon } from '../../../../../shared/components/icons'
import { PetSectionLabel } from './PetSectionLabel'
import { useOwner } from '../../../../../shared/hooks/useOwner'

interface IPetEditableChronics {
  pet_id: string
  chronic_diseases: Array<IDiseaseUpdate>
}

export const PetChronicsSection = (props: SectionProps): JSX.Element => {
  const { pet, patchPet } = useOwner()
  const { pet_id, chronic_diseases } = pet
  const [edit, setEdit] = useState<boolean>(false)
  const PetChronicsForm = () => {
    const initialChronics: IPetEditableChronics = {
      pet_id,
      chronic_diseases: chronic_diseases || [{ name: '', severity: '' }],
    }
    const onSubmit = (chronics: IPetEditableChronics) => {
      const { chronic_diseases } = chronics
      const update: IPetEditableChronics = {
        pet_id,
        chronic_diseases,
      }
      patchPet(pet_id, update)
      setEdit(!edit)
      // dispatch(getPetByID(pet_id))
    }

    return (
      <div className={'transition-opacity ease-in duration-1000 w-full'}>
        <Formik initialValues={initialChronics} onSubmit={onSubmit}>
          {(formik: FormikProps<IPetEditableChronics>) => {
            const { values } = formik
            return (
              <Form>
                <div className={'flex flex-col gap-3'}>
                  <FieldArray name={'chronic_diseases'}>
                    {({ push, remove }) => (
                      <>
                        <div className={'flex flex-row gap-3 items-center pb-3'}>
                          <button
                            type="button"
                            className={'h-6 w-6 border rounded-lg'}
                            onClick={() => push({ name: '', severity: '' })}
                          >
                            <span>
                              <PlusIcon />
                            </span>
                          </button>
                          <p>{'Adiciona una enfermedad'}</p>
                        </div>
                        {values.chronic_diseases?.map((_, index) => (
                          <div key={index} className={'flex flex-row gap-3 w-full py-3'}>
                            <div className={'flex flex-col gap-3 items-center w-full'}>
                              <div className={'flex flex-row gap-3 w-full'}>
                                <TextField
                                  placeholder={'Displasia de cadera'}
                                  type={'text'}
                                  labelText={'Nombre de la enfermedad'}
                                  name={`chronic_diseases.${index}.name`}
                                />

                                <Select
                                  name={`chronic_diseases.${index}.severity`}
                                  labelText={'Severidad'}
                                  options={diseaseSeverityOption}
                                />
                              </div>
                              <TextField
                                type={'text'}
                                labelText={'Detalle de la enfermedad'}
                                name={`chronic_diseases.${index}.detail`}
                              />
                            </div>
                            <div>
                              <button
                                type="button"
                                className={'h-6 w-6 rounded-lg text-error border border-error'}
                                onClick={() => index > 0 && remove(index)}
                              >
                                <span>
                                  <MinusIcon />
                                </span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </FieldArray>
                  <div className={'w-full flex flex-col gap-3'}>
                    <ButtonWideOutline text={'Actualizar'} type={'submit'} />
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    )
  }

  return (
    <PetSection title={'Enfermedades crónicas'} isEditable={true} onToggle={() => setEdit(!edit)}>
      {edit ? (
        <PetChronicsForm />
      ) : (
        <div className={'flex flex-col gap-3 mt-3'}>
          {pet?.chronic_diseases ? (
            pet.chronic_diseases.map((chronic, index) => {
              return (
                <div key={index} className={'flex flex-col gap-3 border rounded-xl p-3'}>
                  <Tag label={chronic.name} level={chronic.severity as TagLevel} className={'ml-3'} />
                  <PetSectionLabel title={'Detalle de la enfermedad'} value={chronic.detail} />
                </div>
              )
            })
          ) : (
            <h2>{'Tu mascota no tiene enfermedades crónicas'}</h2>
          )}
        </div>
      )}
    </PetSection>
  )
}
