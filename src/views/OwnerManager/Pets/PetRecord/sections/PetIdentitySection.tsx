import React, { JSX, useEffect, useState } from 'react'
import { Tooltip } from '../../../../../shared/components/loadingBar/toolTip/ToolTip'
import { ageCalc, dateViewer } from '../../../../../shared/utils/ageCalc'
import { SectionProps } from './props'
import { toCapitalize } from '../../../../../shared/utils'
import { ButtonCircleFilled } from '../../../../../shared/components/buttons/circle/ButtonCircleFilled'
import { AiFillEdit } from 'react-icons/ai'
import { getLabel } from '../../../../../data'
import { PetSection } from './PetSection'
import { PetSectionLabel } from './PetSectionLabel'
import { Alert } from '../../../../../shared/components/Alert'
import { ErrorMessage, Form, Formik, FormikProps } from 'formik'
import { SwitchField } from '../../../../../shared/components/Switch'
import { ButtonWideOutline } from '../../../../../shared/components/buttons/wide/ButtonWideOutline'
import { TextField } from '../../../../../shared/components/TextField'
import { Select } from '../../../../../shared/components/Select'
import { countries } from '../../../../../data/geography'
import { IChipUpdate } from '../../../../../domain/entities/pets/IPetUpdate'
import { styles } from '../../../../../config/styles'
import { DatePickerField } from '../../../../../shared/components/DatePicker'
import { useOwner } from '../../../../../shared/hooks/useOwner'
import { IPet } from '../../../../../domain/entities/pets/IPet'
import { ButtonBackFilled } from '../../../../../shared/components/buttons/back/ButtonBackFilled'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../../../config/routes'

export const initialPet: IPet = {
  pet_id: '',
  avatar: '',
  birth_date: new Date(),
  chip: { chip_code: '', chip_date: new Date(), is_chipped: false, location: '' },
  coat: '',
  country: '',
  death: undefined,
  diseases: [],
  is_alive: false,
  is_enable: false,
  name: '',
  obtained_from: '',
  other: '',
  pet_dimension: { depth: 0, height: 0, measure_weight_type: '', weight: 0, width: 0 },
  pet_type: { breed: '', specie: '' },
  rabies_vaccines: [],
  sex: '',
  sterilised: false,
  chronic_diseases: [],
  anti_echinococcus: [],
  anti_parasitic: [],
  others_vaccines: [],
}
interface IPetEditableIdentification {
  pet_id: string
  sterilised: boolean
  country: string
}

export const PetIdentitySection: React.FC<SectionProps> = ({ id }): JSX.Element => {
  const { owner_id, pet: petData, fetchPetByID, patchPet } = useOwner()
  const navigate = useNavigate()
  const [pet, setPet] = useState<IPet>(initialPet)
  const petName = toCapitalize(pet?.name)
  const specie = toCapitalize(getLabel(pet?.pet_type?.specie, 'specie'))
  const breed = toCapitalize(getLabel(pet?.pet_type?.breed, 'breed', pet?.pet_type?.specie))
  const sterilisedString = pet?.sterilised ? 'si' : 'no'
  const sex = getLabel(pet?.sex, 'sex')
  const residenceCountry = toCapitalize(getLabel(pet?.country, 'country'))
  const coats = getLabel(pet?.coat, 'coat')
  const dateBirth = dateViewer(pet?.birth_date)
  const petAge = `${ageCalc(pet?.birth_date, true, undefined, 'y')} de edad`
  const chippedCountry = toCapitalize(getLabel(pet?.chip?.location, 'country'))
  const [editIdentification, setEditIdentification] = useState<boolean>(false)
  const [editChip, setEditChip] = useState<boolean>(false)

  useEffect(() => {
    if (id !== undefined) fetchPetByID(id)
    if (petData) {
      setPet(petData)
    }
  }, [petData])
  const PetChipForm = () => {
    const initialChip: IChipUpdate = {
      pet_id: id,
      chip_code: pet?.chip?.chip_code,
      chip_date: pet?.chip?.chip_date,
      location: pet?.chip?.location,
    }
    const onSubmit = (chip: IChipUpdate) => {
      const { chip_code, location, chip_date } = chip
      const update: IChipUpdate = {
        pet_id: id,
        chip_code,
        location,
        chip_date,
      }
      patchPet(id, update)
      setEditChip(!editChip)
    }
    return (
      <div className={'transition-opacity ease-in duration-1000 w-full'}>
        <Formik initialValues={initialChip} onSubmit={onSubmit}>
          {(formik: FormikProps<IChipUpdate>) => {
            const { errors } = formik
            return (
              <Form>
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
                  <div className={'flex flex-row gap-3 items-center'}>
                    <ButtonWideOutline text={'Actualizar'} />
                    <ButtonWideOutline text={'Cancelar'} onHandle={() => setEditChip(!editChip)} />
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    )
  }
  const PetIdentificationForm = () => {
    const initialSterilised: IPetEditableIdentification = {
      pet_id: id,
      sterilised: pet?.sterilised,
      country: pet?.country,
    }

    const onSubmit = (editable: IPetEditableIdentification) => {
      const { sterilised, country } = editable
      const update: IPetEditableIdentification = {
        pet_id: id,
        sterilised,
        country,
      }
      patchPet(id, update)
      setEditIdentification(!editIdentification)
    }
    return (
      <div className={'transition-opacity ease-in duration-1000'}>
        <Formik initialValues={initialSterilised} onSubmit={onSubmit}>
          {(formik: FormikProps<IPetEditableIdentification>) => {
            const { errors } = formik
            return (
              <Form>
                <div className={'flex flex-col gap-3 mt-3 ml-3 w-full rounded-xl p-6 border'}>
                  <h2>Edita los datos de tu mascota</h2>
                  <Select name={'country'} labelText={'País de Residencia'} options={countries} />
                  {!pet.sterilised ? (
                    <PetSectionLabel title={`He esterilizado a ${toCapitalize(pet.name)}`} value={''}>
                      <SwitchField name={'sterilised'} />
                    </PetSectionLabel>
                  ) : null}
                  <div className={'flex flex-row gap-3 items-center'}>
                    <ButtonWideOutline text={'Actualizar'} />
                    <ButtonWideOutline text={'Cancelar'} onHandle={() => setEditIdentification(!editIdentification)} />
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    )
  }
  const PetIdentityView = () => (
    <div className={'flex flex-col justify-between ml-3'}>
      <PetSectionLabel title={'Especie'} value={specie} />
      <PetSectionLabel title={'Raza'} value={breed} />
      <PetSectionLabel title={'Sexo'} value={sex} />
      <PetSectionLabel title={'Fecha de Nacimiento'} value={dateBirth} />
      <PetSectionLabel title={'Edad'} value={petAge} />
      <PetSectionLabel title={'Color'} value={coats} />
      {!editIdentification || (editIdentification && pet.sterilised) ? (
        <PetSectionLabel title={'Esterilización'} value={sterilisedString} />
      ) : null}
      {!editIdentification && <PetSectionLabel title={'País de residencia'} value={residenceCountry} />}
      {editIdentification && <PetIdentificationForm />}
    </div>
  )

  const PetAvatarView: React.FC<{ name: string; avatar: string }> = ({ name, avatar }) => (
    <div className={'shadow-xl bg-white-abs rounded-xl flex flex-col justify-center items-center p-3 gap-1'}>
      <img src={avatar} alt={name} className={'w-56 h-auto'} />
      <Tooltip content={`Cambia el avatar de ${name}`}>
        <ButtonCircleFilled
          size={'sm'}
          onHandle={function (): void {
            return
          }}
          iconType={<AiFillEdit />}
        />
      </Tooltip>
    </div>
  )

  const PetChipView = () => (
    <div className={'flex flex-col justify-between ml-3'}>
      <PetSectionLabel title={'Código del chip'} value={pet?.chip.chip_code} />
      <PetSectionLabel title={'Fecha de instalación'} value={pet?.chip ? dateViewer(pet?.chip?.chip_date) : ''} />
      <PetSectionLabel title={'Ubicación del chip'} value={'Lomo'} />
      <PetSectionLabel title={'País de instalación'} value={chippedCountry} />
    </div>
  )
  return (
    <>
      <PetSection
        title={`Datos de Identificación de ${petName}`}
        isEditable={true}
        onToggle={() => {
          setEditIdentification(!editIdentification)
        }}
      >
        <div className={'flex flex-row justify-between items-center'}>
          <PetIdentityView />
          <PetAvatarView name={petName} avatar={pet.avatar} />
        </div>
      </PetSection>
      <PetSection title={'Información del Chip'} isEditable={true} onToggle={() => setEditChip(!editChip)}>
        {pet.chip ? <PetChipView /> : <Alert text={'Tu mascota aún no tiene chip'} type={'warning'} />}
        {editChip ? <PetChipForm /> : null}
      </PetSection>
      <div className={'flex flex-col gap-1 ml-3'}>
        <ButtonBackFilled onHandle={() => navigate(routes.owners.manager.home(owner_id))} />
        <p>Volver al inicio</p>
      </div>
    </>
  )
}
