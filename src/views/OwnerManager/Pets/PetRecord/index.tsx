import React, { JSX, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PetRecordMenu } from './PetRecordMenu'
import { PetIdentitySection } from './sections/PetIdentitySection'
import { PetChronicsSection } from './sections/PetChronicsSection'
import { PetVaccinesSection } from './sections/PetVaccinesSection'
import { PetOthersSection } from './sections/PetOthersSection'
import { PetAntiparasiticSection } from './sections/PetAntiparasiticSection'
import { useAppMenu } from '../../../../shared/hooks/useAppMenu'
import { toCapitalize } from '../../../../shared/utils'
import { routes } from '../../../../config/routes'
import { Tab, TabComponent } from '../../../../shared/components/Tab'
import { tabShowService } from '../../../../shared/channels/tab'
import { AntiparasiticIcon, ChronicIcon, PawIcon, VaccineIcon } from '../../../../shared/components/icons'
import { useOwner } from '../../../../shared/hooks/useOwner'
import { IPet } from '../../../../domain/entities/pets/IPet'

export const PetRecord = (): JSX.Element => {
  let specie: string
  const { pet_id } = useParams()
  const { setTitlePage, addBreadcrumbs } = useAppMenu()
  const { owner_id, pet: petData, fetchPetByID } = useOwner()
  const [pet, setPet] = useState<IPet>({} as IPet)
  const onClick = (event: any) => {
    const name = event.target.id
    tabShowService.setSubjectManager({ name, action: true })
  }
  useEffect(() => {
    if (pet_id !== undefined) {
      fetchPetByID(pet_id)
      if (petData && petData.name && petData.pet_id && petData.pet_type) {
        setPet(petData)
        specie = petData.pet_type.specie
        setTitlePage(`Ficha de ${toCapitalize(petData.name)}`)
        addBreadcrumbs([
          { label: 'Home', link: routes.owners.manager.home(owner_id) },
          { label: toCapitalize(petData.name), link: routes.owners.manager.pets.petID(pet_id) },
        ])
      }
    }
  }, [petData])

  /**
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
   **/

  const tabs: Array<TabComponent> = [
    {
      name: 'identification',
      title: (
        <span id={'identification'} className={'flex flex-row gap-2 items-center'}>
          <PawIcon className={'text-md'} />
          Identificación
        </span>
      ),
      children: <PetIdentitySection id={pet_id || ''} pet={pet} />,
      is_active: true,
      onClick,
    },
    {
      name: 'vaccines',
      title: (
        <span id={'vaccines'} className={'flex flex-row gap-2 items-center'}>
          <VaccineIcon className={'text-md'} />
          Vacunas
        </span>
      ),
      children: <PetVaccinesSection specie={pet?.pet_type?.specie} id={pet_id || ''} pet={pet} />,
      is_active: false,
      onClick,
    },
    {
      name: 'antiparasitics',
      title: (
        <span id={'antiparasitics'} className={'flex flex-row gap-2 items-center'}>
          <AntiparasiticIcon className={'text-md'} />
          Antiparasitarios
        </span>
      ),
      children: <PetAntiparasiticSection id={pet_id || ''} pet={pet} />,
      is_active: false,
      onClick,
    },
    {
      name: 'chronics',
      title: (
        <span id={'chronics'} className={'flex flex-row gap-2 items-center'}>
          <ChronicIcon className={'text-md'} />
          Enfermedades crónicas
        </span>
      ),
      children: <PetChronicsSection id={pet_id || ''} pet={pet} />,
      is_active: false,
      onClick,
    },
    {
      name: 'other',
      title: 'Otros',
      children: <PetOthersSection id={pet_id || ''} pet={pet} />,
      is_active: false,
      onClick,
    },
  ]

  return pet ? (
    <div className={'container flex flex-col py-3 px-6 mx-6 my-3 bg-white rounded-xl shadow-xl w-full h-fit'}>
      <PetRecordMenu name={pet?.name} isEnable={pet?.is_enable} />
      <Tab tabs={tabs} />
    </div>
  ) : (
    <h2>chao</h2>
  )
}
