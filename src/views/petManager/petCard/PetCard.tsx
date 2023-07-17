import React, { JSX } from 'react'
import { Link } from 'react-router-dom'
import { IPet } from '../../../domain/entities/pets/IPet'
import { ageCalc, dateViewer } from '../../../shared/utils/ageCalc'
import { routes } from '../../../config/routes'
import { PetCardHeader } from './PetCardHeader'
import { useAppMenu } from '../../../shared/hooks/useAppMenu'
import { toCapitalize } from '../../../shared/utils'
import { speciesIcon } from '../../../shared/components/icons/species'
import { ButtonWideOutline } from '../../../shared/components/buttons/wide/ButtonWideOutline'
import { PawIcon } from '../../../shared/components/icons'
import { IBreadcrumb } from '../../../domain/components/appMenu/interfaces/IBreadcrumb'

export enum Severity {
  low = 'secondary',
  medium = 'warning',
  high = 'error',
}

export interface PetChronic {
  name: string
  severity: Severity
}

export default function PetCard(props: { pet: IPet }): JSX.Element {
  const {
    pet_id,
    pet_type,
    sterilised,
    name: petName,
    avatar,
    is_alive,
    is_enable,
    birth_date: birthDay,
    death: petDeath,
    chronic_diseases,
    chip,
  } = props.pet
  const chronics = chronic_diseases?.map(
    (c) =>
      ({
        name: c.name,
        severity: c.severity,
      } as PetChronic)
  )

  const age = ageCalc(birthDay, is_alive, petDeath ? petDeath : undefined)
  const deathAge = petDeath && `${dateViewer(birthDay)} - ${dateViewer(petDeath.death_date)}`
  const { handleTitlePage, handleBreadcrumbs } = useAppMenu()
  const handleAppMenu = () => {
    // const label = ''
    // const link = ''
    // const breadcrumbs: Array<IBreadcrumb> = [
    //   { label: 'Home', link: routes.owners.manager.home(id) },
    //   { label, link },
    // ] : []
    handleTitlePage(`Ficha de ${toCapitalize(petName)}`)
    // handleBreadcrumbs(breadcrumbs)
  }
  return (
    <div
      className={
        'flex flex-col gap-3 w-full items-between justify-center px-3 py-2 bg-white border border-gray-light rounded-xl shadow-xl'
      }
    >
      <PetCardHeader
        isActive={is_alive && is_enable}
        chronics={chronics}
        isSterilised={sterilised}
        isChipped={!!chip}
      />
      {/* Body PetCard */}
      <div className={'flex flex-col justify-center items-center'}>
        <img src={avatar} alt={petName} className={'h-auto w-80'} />
      </div>
      <div className={'flex flex-col gap-3'}>
        <div className={'flex flex-row justify-center gap-3 items-center'}>
          <span className={'text-3xl'}>{speciesIcon[pet_type.specie]}</span>
          <h1 className={'text-3xl font-bold text-center title-main'}>{petName.toUpperCase()}</h1>
        </div>
        <p className={'text-center text-main-dark'}>{is_alive ? age : deathAge}</p>
        <h3
          className={`text-center text-main-light italic mb-4 ${is_alive && is_enable ? 'text-success' : 'text-gray'}`}
        >
          {!(is_alive && is_enable) && 'siempre te amaremos'}
        </h3>
        <Link to={routes.owners.manager.pets.petID(pet_id)}>
          <ButtonWideOutline text={'Ver más'} onHandle={() => handleAppMenu()} iconType={<PawIcon />} />
        </Link>
      </div>
    </div>
  )
}
