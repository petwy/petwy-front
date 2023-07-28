import React, { JSX, useEffect, useState } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { PetSectionLabel } from './PetSectionLabel'
import { ErrorMessage, Form, Formik, FormikHelpers, FormikProps } from 'formik'
import { TextField } from '../../../../../shared/components/TextField'
import { styles } from '../../../../../config/styles'
import { useShowing } from '../../../../../shared/hooks/useShowing'
import { useOwner } from '../../../../../shared/hooks/useOwner'
import { DatePickerField } from '../../../../../shared/components/DatePicker'
import { IPetDeath } from '../../../../../domain/entities/pets/IPet'
import { toCapitalize } from '../../../../../shared/utils'
import { IPetUpdate } from '../../../../../domain/entities/pets/IPetUpdate'
import { modalShowService } from '../../../../../shared/channels/modal'
import { Modal } from '../../../../../shared/components/modal/Modal'
import { dateViewer } from '../../../../../shared/utils/ageCalc'
import * as yup from 'yup'
import { messages } from '../../../../../shared/validation/schema/messages'

const petDeathSchema = yup.object({
  death_date: yup.date().nonNullable().required(messages.required),
  reason: yup.string().required(messages.required),
  remain: yup.string().required(messages.required),
})

interface IPetOther {
  pet_id: string
  other: string
  obtained_from: string
}

const initialPetDeath: IPetDeath = {
  death_date: new Date(),
  reason: '',
  remain: '',
}

export const PetOthersSection = (props: SectionProps): JSX.Element => {
  const { pet, patchPet } = useOwner()
  const pet_id = pet.pet_id
  const { isShowing, toggle } = useShowing()
  const [death, setDeath] = useState<boolean>(false)
  const initialOther: IPetOther = {
    pet_id,
    other: pet?.other,
    obtained_from: pet?.obtained_from,
  }
  const handleModalDeath = () => {
    modalShowService.setSubjectManager(true)
  }

  const onSubmit = (others: IPetOther) => {
    const { other, obtained_from } = others
    const update: IPetOther = {
      pet_id,
      other,
      obtained_from,
    }
    // dispatch(patchPet(update))
    //toggle()
    // dispatch(getPetByID(pet_id))
  }

  const DeathReportView = () => {
    const onSubmit = (death: IPetDeath, helpers: FormikHelpers<IPetDeath>) => {
      const { death_date, reason, remain } = death
      const { resetForm } = helpers
      const update: IPetUpdate = {
        pet_id,
        is_alive: false,
        death: {
          death_date,
          reason,
          remain,
        },
      }
      patchPet(pet_id, update)
      resetForm()
      setDeath(!death)
    }
    return (
      <div>
        <Formik initialValues={initialPetDeath} onSubmit={onSubmit} validationSchema={petDeathSchema}>
          {(formik: FormikProps<IPetDeath>) => {
            const { values, errors, touched } = formik
            return (
              <Form>
                <div className={'flex flex-col gap-3'}>
                  <div>Declaración del fallecimiento de {toCapitalize(pet.name)}</div>
                  <div className={'w-full flex flex-col gap-3'}>
                    <TextField
                      name={'reason'}
                      labelText={'Causa de fallecimiento'}
                      placeholder={'Falleció de viejito'}
                      type={'text'}
                    />
                  </div>
                  <div className={'w-full flex flex-col gap-3'}>
                    <TextField
                      name={'remain'}
                      labelText={'Déjale un mensaje para recordarlo por siempre'}
                      placeholder={'Déjale un mensaje para recordarlo por siempre'}
                      type={'text'}
                    />
                  </div>
                  <div className={'w-full flex flex-col gap-3'}>
                    <DatePickerField name={'death_date'} labelText={'Fecha de fallecimiento'} />
                  </div>

                  <div className={'flex flex-row gap-3 mt-3'}>
                    <button
                      type={'button'}
                      onClick={handleModalDeath}
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
                      Declarar
                    </button>
                    <button
                      type={'button'}
                      className={`rounded-xl text-sm py-2 px-2 w-full border text-error bg-white shadow-xl shadow-gray-light
                            hover:text-white
                            hover:bg-error
                            transition
                            duration-700
                            `}
                      onClick={() => setDeath(!death)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
                <Modal title={`Confirmar fallecimiento de ${toCapitalize(pet.name)}`}>
                  <div className={'flex flex-col gap-3 w-full py-6'}>
                    <div className={'flex flex-col gap-3 py-3'}>
                      <h2 className={'text-lg'}>
                        ¿Confirmas la siguiente declaración sobre el fallecimiento de {toCapitalize(pet.name)}?
                      </h2>
                      <div className={'flex flex-col gap-3'}>
                        <PetSectionLabel title={'Fecha de fallecimiento'} value={dateViewer(values.death_date)} />
                        <PetSectionLabel title={'Causas de su fallecimiento'} value={values.reason} />
                        <PetSectionLabel title={`Dedicatoria para ${toCapitalize(pet.name)}`} value={values.remain} />
                      </div>
                    </div>
                    <div className={'flex flex-row gap-6'}>
                      <button
                        type={'submit'}
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
                        Confirmar
                      </button>
                      <button
                        type={'button'}
                        className={`rounded-xl text-sm py-2 px-2 w-full border text-white bg-error-light
                            hover:text-white
                            hover:bg-error
                            transition
                            duration-700
                            `}
                        onClick={() => setDeath(!death)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </Modal>
              </Form>
            )
          }}
        </Formik>
      </div>
    )
  }
  const PetDeathView = (props: { petDeath: IPetDeath }) => {
    const { petDeath } = props
    return (
      <PetSection
        title={`Recordatorio de ${toCapitalize(pet.name)}`}
        isEditable={false}
        onToggle={() => {
          return
        }}
      >
        <div className={'flex flex-col ml-3'}>
          <PetSectionLabel title={'Fecha de fallecimiento'} value={dateViewer(petDeath.death_date)} />
          <PetSectionLabel title={'Causas de su fallecimiento'} value={petDeath.reason} />
          <PetSectionLabel title={`Dedicatoria para ${toCapitalize(pet.name)}`} value={petDeath.remain} />
        </div>
      </PetSection>
    )
  }
  const PetDeathReportView = () => {
    return (
      <PetSection
        title={'Zona de cuidado'}
        isEditable={false}
        onToggle={() => {
          return
        }}
        titleColor={'error'}
      >
        <h2 className={'text-error-light text-md'}>Quiero reportar que {pet.name} ha fallecido</h2>
        <div>
          <button
            onClick={handleButtonDeathReport}
            className={`rounded-xl text-sm py-2 px-6 text-error border border-error bg-white w-fit
                    hover:text-white
                    hover:bg-error
                    transition
                    duration-700
                    `}
          >
            <div className={'flex flex-row gap-3 justify-center items-center'}>{'Reportar fallecimiento'}</div>
          </button>
        </div>
      </PetSection>
    )
  }
  const handleButtonDeathReport = () => {
    setDeath(!death)
  }
  return (
    <>
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
      {!pet.is_alive && pet.death ? (
        <PetDeathView petDeath={pet.death} />
      ) : !death && pet.is_alive ? (
        <PetDeathReportView />
      ) : (
        <PetSection
          title={'Zona de cuidado'}
          isEditable={false}
          onToggle={() => {
            return
          }}
        >
          <DeathReportView />
        </PetSection>
      )}
    </>
  )
}
