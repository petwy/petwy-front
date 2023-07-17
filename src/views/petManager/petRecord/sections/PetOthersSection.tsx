import React, { JSX, useEffect } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { PetSectionLabel } from './PetSectionLabel'
import { ErrorMessage, Form, Formik, FormikProps } from 'formik'
import { TextField } from '../../../../shared/components/TextField'
import { styles } from '../../../../config/styles'
import { useShowing } from '../../../../shared/hooks/useShowing'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../../adapters/redux/store'
import { IPet } from '../../../../domain/entities/pets/IPet'
import { getPetByID, patchPet } from '../../../../adapters/redux/thunks/pet'

interface IPetOther {
  pet_id: string
  other: string
  obtained_from: string
}

export const PetOthersSection = (props: SectionProps): JSX.Element => {
  const { pet_id } = props
  const dispatch = useDispatch<AppDispatch>()
  const pet = useSelector<AppState>((state: AppState) => state.petState.pet) as IPet
  const { isShowing, toggle } = useShowing()

  const initialOther: IPetOther = {
    pet_id,
    other: pet?.other,
    obtained_from: pet?.obtained_from,
  }
  useEffect(() => {
    dispatch(getPetByID(pet_id))
  }, [])

  const onSubmit = (others: IPetOther) => {
    const { other, obtained_from } = others
    const update: IPetOther = {
      pet_id,
      other,
      obtained_from,
    }
    dispatch(patchPet(update))
    toggle()
    dispatch(getPetByID(pet_id))
  }
  return (
    <PetSection title={'Otras características'} isEditable={true} onToggle={toggle}>
      {isShowing ? (
        <div className={'transition-opacity ease-in duration-1000'}>
          <Formik initialValues={initialOther} onSubmit={onSubmit}>
            {(formik: FormikProps<IPetOther>) => {
              const { errors } = formik
              return (
                <Form className={'w-full'}>
                  <div className={'flex flex-col gap-3 px-6 py-3'}>
                    <div className={'flex flex-col gap-3'}>
                      <div className={'w-full flex flex-col gap-3'}>
                        <TextField
                          type={'text'}
                          labelText={'Otros comentarios'}
                          placeholder={'Un comentario...'}
                          name={'other'}
                        />
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
                        Actualizar datos
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
          <PetSectionLabel title={'Obtenida de'} value={pet.obtained_from} />
          <PetSectionLabel title={'Otros comentarios'} value={pet.other ? pet.other : 'Aún no escribes nada'} />
        </>
      )}
    </PetSection>
  )
}
