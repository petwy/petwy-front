import React, { JSX, useEffect } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { PetSectionLabel } from './PetSectionLabel'
import { ErrorMessage, Form, Formik, FormikProps } from 'formik'
import { IChipUpdate } from '../../../../domain/entities/pets/IPetUpdate'
import { TextField } from '../../../../shared/components/TextField'
import { Select } from '../../../../shared/components/Select'
import { countries } from '../../../../data/geography'
import { styles } from '../../../../config/styles'
import { DatePickerField } from '../../../../shared/components/DatePicker'
import { useShowing } from '../../../../shared/hooks/useShowing'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../../adapters/redux/store'
import { IPet } from '../../../../domain/entities/pets/IPet'
import { addChip, getPetByID, patchPet } from '../../../../adapters/redux/thunks/pet'
import { SwitchField } from '../../../../shared/components/Switch'
import { STERILISE_TEXT } from '../../addPets/form/texts'
import { toCapitalize } from '../../../../shared/utils'
import { ButtonWideOutline } from '../../../../shared/components/buttons/wide/ButtonWideOutline'

interface IPetSterilised {
  pet_id: string
  sterilised: boolean
}

export const PetSterilisedSection = (props: SectionProps): JSX.Element => {
  const { pet_id } = props
  const dispatch = useDispatch<AppDispatch>()
  const pet = useSelector<AppState>((state: AppState) => state.petState.pet) as IPet
  const { isShowing, toggle } = useShowing()

  const initialOther: IPetSterilised = {
    pet_id,
    sterilised: pet?.sterilised,
  }
  useEffect(() => {
    dispatch(getPetByID(pet_id))
  }, [])

  const onSubmit = (others: IPetSterilised) => {
    const { sterilised } = others
    const update: IPetSterilised = {
      pet_id,
      sterilised,
    }
    dispatch(patchPet(update))
    toggle()
    dispatch(getPetByID(pet_id))
  }
  return (
    <PetSection title={'Esterilización'} isEditable={true} onToggle={toggle}>
      {isShowing ? (
        <div className={'transition-opacity ease-in duration-1000'}>
          <Formik initialValues={initialOther} onSubmit={onSubmit}>
            {(formik: FormikProps<IPetSterilised>) => {
              const { errors } = formik
              return (
                <Form className={'w-full'}>
                  <div className={'flex flex-col gap-3 px-6 py-3'}>
                    <PetSectionLabel title={`He esterilizado a ${toCapitalize(pet.name)}`} value={''}>
                      <SwitchField name={'sterilised'} />
                    </PetSectionLabel>
                    <ButtonWideOutline text={'Actualizar'} />
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      ) : (
        <p className={'ml-3'}>{`${toCapitalize(pet.name)} aún no ha sido esterilizada`}</p>
      )}
    </PetSection>
  )
}
