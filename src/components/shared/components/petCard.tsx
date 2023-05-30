import React, { JSX } from 'react'
import moment from 'moment'
import { LuScissors } from 'react-icons/lu'

export enum Severity {
  low = 'secondary',
  medium = 'warning',
  high = 'error',
}
export interface PetChronic {
  name: string
  severity: Severity
}
const petAge = (birthDay: Date, isAlive: boolean, petDeath?: Date): string => {
  const ageInYears = moment().diff(birthDay, 'years')
  const ageInMonths = moment().diff(birthDay, 'months')

  if (!isAlive) {
    const ageOfDeath = moment().diff(petDeath, 'years')
    return `${ageInYears - ageOfDeath} años`
  }

  return `${ageInYears} años / ${ageInMonths - ageInYears * 12 + 1} meses`
}
export default function PetCard(props: {
  petName: string
  avatar: string
  isAlive: boolean
  birthDay: Date
  petDeath?: Date
  chronics?: Array<PetChronic>
}): JSX.Element {
  const { petName, avatar, isAlive, birthDay, petDeath, chronics } = props
  const age = petAge(birthDay, isAlive, petDeath ? petDeath : undefined)
  return (
    <div className={'lg:container gap-3 bg-white p-3  rounded overflow-hidden drop-shadow-xl mb-3'}>
      <div className={'grid grid-cols-2 items-start'}>
        <div className={'w-20'}>
          <span className={'group text-xl text-success'}>
            <LuScissors />
          </span>
        </div>
        {/* Enfermedades criticas y cosas a tener cuidado*/}
        <div className={'flex justify-end gap-3 mb-2'}>
          {chronics?.map((c) => (
            <div key={c.name} className={`text-xs font-bold px-3 py-1 bg-warning text-gray rounded`}>
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
      <img src={avatar} alt={petName} />
      <div className={'py-4 px-3 '}>
        <h1 className={'text-2xl text-center title-main mb-8'}>{petName}</h1>
        <p className={'text-center text-main-dark'}>{age}</p>
        <h3 className={`text-center text-main-light italic mb-4 ${isAlive ? 'text-main' : 'text-secondary'}`}>
          {isAlive ? 'activa' : 'siempre te recordaremos'}
        </h3>
        <button className={'w-full bg-main hover:bg-main-700 text-white px-4 py-2 rounded'}>Ver mas</button>
      </div>
    </div>
  )
}
