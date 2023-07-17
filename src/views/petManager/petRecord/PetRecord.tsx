import React, { JSX, useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../adapters/redux/store'
import { getPetByID } from '../../../adapters/redux/thunks/pet'
import { styles } from '../../../config/styles'
import { PetSection } from './sections/PetSection'
import { PetRecordMenu } from './PetRecordMenu'
import { PetIdentitySection } from './sections/PetIdentitySection'
import { PetChipSection } from './sections/PetChipSection'
import { PetChronicsSection } from './sections/PetChronicsSection'
import { PetVaccinesSection } from './sections/PetVaccinesSection'
import { PetDimensionSection } from './sections/PetDimensionSection'
import { PetOthersSection } from './sections/PetOthersSection'
import { IPet } from '../../../domain/entities/pets/IPet'
import { PetSterilisedSection } from './sections/PetSterilisedSection'
import { PetAntiparasiticSection } from './sections/PetAntiparasiticSection'

export const PetRecord = (): JSX.Element => {
  const { pet_id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const pet = useSelector<AppState>((state: AppState) => state.petState.pet) as IPet
  const btnStyle = `${styles.button.shape.rounded} ${styles.button.size.wide} ${styles.button.color.dark}`

  useEffect(() => {
    if (pet_id !== undefined) {
      dispatch(getPetByID(pet_id))
    }
  }, [])
  const petRemains = (): JSX.Element => {
    return (
      <PetSection title={'Ya no está conmigo'} onToggle={() => console.log('death')} isEditable={false}>
        <p className={styles.text.italic}>
          {'En esta sección puedes declarar el fallecimiento de tu mascota y dejarle un ' +
            'homenaje, o bien desactivarla porque ya no está bajo tu cuidado. Cuidado, estás acciones desactivarán '}
        </p>
        <div className={'flex flex-row gap-3 mt-3'}>
          <button className={btnStyle}>Quiero declarar su fallecimiento</button>
          <button className={btnStyle}>No esta bajo mi tutela</button>
        </div>
      </PetSection>
    )
  }
  return (
    <div className={'container flex flex-col py-3 px-6 mx-6 my-3 bg-white rounded-xl shadow-xl w-full h-fit'}>
      <PetRecordMenu name={pet.name} isEnable={pet.is_enable} />
      <PetIdentitySection pet={pet} pet_id={pet_id || ''} />
      <PetChipSection pet={pet} pet_id={pet_id || ''} />
      {!pet.sterilised ? <PetSterilisedSection pet={pet} pet_id={pet_id || ''} /> : null}
      <PetDimensionSection pet={pet} pet_id={pet_id || ''} />
      <PetAntiparasiticSection pet={pet} pet_id={pet_id || ''} />
      <PetVaccinesSection pet={pet} pet_id={pet_id || ''} />
      <PetChronicsSection pet={pet} pet_id={pet_id || ''} />
      <PetOthersSection pet={pet} pet_id={pet_id || ''} />
      {/*{petRemains()}*/}
    </div>
  )
}
