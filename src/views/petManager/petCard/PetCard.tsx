import React, { JSX } from 'react'
import { styles } from '../../../config/styles'
import { Link } from 'react-router-dom'
import { IPet } from '../../../domain/entities/pets/IPet'
import { ageCalc } from '../../../shared/utils/ageCalc'
import { routes } from '../../../config/routes'
import { PetCardHeader } from './PetCardHeader'

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
    sterilised,
    name: petName,
    avatar,
    is_alive,
    is_enable,
    date_of_birth: birthDay,
    pet_death: petDeath,
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
  return (
    <div
      className={
        'flex flex-col gap-3 w-full items-between justify-center px-3 py-2 bg-white border border-gray-light rounded-xl shadow-xl'
      }
    >
      <PetCardHeader chronics={chronics} isSterilised={sterilised} isChipped={!!chip} />
      {/* Body PetCard */}
      <div className={'flex flex-col justify-center items-center'}>
        <img src={avatar} alt={petName} className={'h-auto w-80'} />
      </div>
      <div className={'flex flex-col gap-3'}>
        <h1 className={'text-3xl font-bold text-center title-main'}>{petName.toUpperCase()}</h1>
        <p className={'text-center text-main-dark'}>{age}</p>
        <h3
          className={`text-center text-main-light italic mb-4 ${is_alive && is_enable ? 'text-success' : 'text-gray'}`}
        >
          {is_alive && is_enable ? 'activa' : 'siempre te amaremos'}
        </h3>
        <Link to={routes.owners.manager.pets.petID(pet_id)}>
          <button className={`${styles.button.size.wide} ${styles.button.color.dark} ${styles.button.shape.rounded}`}>
            Ver mas
          </button>
        </Link>
      </div>
    </div>
  )
}
