import React, { JSX, useEffect, useState } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { Form, Formik, FormikProps } from 'formik'
import { IPetUpdate } from '../../../../domain/entities/pets/IPetUpdate'
import { TextField } from '../../../../shared/components/TextField'
import { styles } from '../../../../config/styles'
import { useShowing } from '../../../../shared/hooks/useShowing'
import { getPetByID, patchPet } from '../../../../adapters/redux/thunks/pet'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../../adapters/redux/store'
import { IPet } from '../../../../domain/entities/pets/IPet'
import { PetSectionLabel } from './PetSectionLabel'
import { Select } from '../../../../shared/components/Select'
import { getWeightTypeMeasureLabel, weight_type_measure } from '../../../../data/weight'

interface IPetDimension {
  height: number
  width: number
  depth: number
  weight: number
  measure_weight_type: string
}

export const PetDimensionSection = (props: SectionProps): JSX.Element => {
  const { pet_id } = props
  const dispatch = useDispatch<AppDispatch>()
  const pet = useSelector<AppState>((state: AppState) => state.petState.pet) as IPet
  const { isShowing, toggle } = useShowing()
  const [isEditable, setEditable] = useState<boolean>(true)
  const petDimension = pet.pet_dimension

  const initialDimensions: IPetDimension = {
    depth: petDimension?.depth,
    height: petDimension?.height,
    weight: petDimension?.weight,
    width: petDimension?.width,
    measure_weight_type: petDimension?.measure_weight_type,
  }
  useEffect(() => {
    dispatch(getPetByID(pet_id))
  }, [])
  const onSubmit = (dimensions: IPetDimension) => {
    const update: IPetUpdate = {
      pet_id,
      pet_dimension: {
        height: dimensions.height,
        depth: dimensions.depth,
        width: dimensions.width,
        weight: dimensions.weight,
        measure_weight_type: dimensions.measure_weight_type,
      },
    }

    dispatch(patchPet(update))
    toggle()
  }

  return (
    <PetSection title={'Dimensiones de tu mascota'} isEditable={true} onToggle={toggle}>
      {isShowing && isEditable ? (
        <div className={'transition-opacity ease-in duration-1000'}>
          <Formik initialValues={initialDimensions} onSubmit={onSubmit}>
            {(formik: FormikProps<IPetDimension>) => {
              const { errors } = formik
              return (
                <Form className={'w-full'}>
                  <div className={'flex flex-col gap-3 px-6 py-3'}>
                    <div className={'flex flex-col gap-3'}>
                      <div className={' flex flex-row gap-3 w-full'}>
                        <TextField type={'number'} labelText={'Peso'} placeholder={'24'} name={'weight'} />
                        <Select
                          name={'measure_weight_type'}
                          labelText={'medida de peso'}
                          options={weight_type_measure}
                        />
                      </div>
                      <div className={`flex flex-row gap-3 items-start w-full`}>
                        <div className={'w-full flex flex-col gap-3'}>
                          <TextField type={'number'} labelText={'Altura en cms'} placeholder={'76'} name={'height'} />
                        </div>
                        <div className={'w-full flex flex-col gap-3'}>
                          <TextField
                            type={'number'}
                            labelText={'Largo en cms (opcional)'}
                            placeholder={'76'}
                            name={'width'}
                          />
                        </div>
                        <div className={'w-full flex flex-col gap-3'}>
                          <TextField
                            type={'number'}
                            labelText={'Ancho en cms (opcional)'}
                            placeholder={'76'}
                            name={'depth'}
                          />
                        </div>
                      </div>
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
          <PetSectionLabel
            title={'Peso'}
            value={
              petDimension && petDimension.weight !== 0
                ? `${petDimension.weight} ${getWeightTypeMeasureLabel(petDimension.measure_weight_type)}`
                : '0 kilos'
            }
          />
          <PetSectionLabel title={'Altura'} value={`${petDimension?.height} cms`} />
          <PetSectionLabel title={'Largo'} value={`${petDimension?.width} cms`} />
          <PetSectionLabel title={'Ancho'} value={`${petDimension?.depth} cms`} />
        </>
      )}
    </PetSection>
  )
}
