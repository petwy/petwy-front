import React, { JSX } from 'react'
import { PetVaccineCard } from '../petVaccineCard/PetVaccineCard'
import moment from 'moment'
import { IVaccine } from '../../../domain/entities/IVaccine'
import { toDate } from '../../../shared/utils/format/dates'

export const dummy = [
  {
    name: 'Simona del Sufrimiento de Lourdes',
    raby: {
      name: 'versiguard',
      manufacturer: 'zoetis',
      batch: '585829A03',
      vaccination_date: toDate('2023/04/28'),
      valid_from: toDate('2023/04/28'),
      valid_until: toDate('2026/07/01'),
    } as unknown as IVaccine,
    echinococcus: {
      name: 'example',
      manufacturer: 'acme',
      batch: '123456789',
      vaccination_date: moment(),
      valid_from: moment(),
      valid_until: moment(),
    } as unknown as IVaccine,
    antiparasitic: {
      name: 'bravecto',
      manufacturer: 'ACME Ltda',
      batch: '123456789',
      vaccination_date: moment(),
      valid_from: moment(),
      valid_until: moment(),
    } as unknown as IVaccine,
    others: {
      name: 'example',
      manufacturer: 'acme',
      batch: '123456789',
      vaccination_date: moment(),
      valid_from: moment(),
      valid_until: moment(),
    } as unknown as IVaccine,
  },
  {
    name: 'Kiara Gatalina de las Mercedes',
    raby: {
      name: 'versiguard',
      manufacturer: 'zoetis',
      batch: '585829A03',
      vaccination_date: toDate('2023/04/28'),
      valid_from: toDate('2023/04/28'),
      valid_until: toDate('2026/07/01'),
    } as unknown as IVaccine,
    echinococcus: {
      name: 'example',
      manufacturer: 'acme',
      batch: '123456789',
      vaccination_date: moment(),
      valid_from: moment(),
      valid_until: moment(),
    } as unknown as IVaccine,
    antiparasitic: {
      name: 'bravecto',
      manufacturer: 'ACME Ltda',
      batch: '123456789',
      vaccination_date: moment(),
      valid_from: moment(),
      valid_until: moment(),
    } as unknown as IVaccine,
    others: {
      name: 'example',
      manufacturer: 'acme',
      batch: '123456789',
      vaccination_date: moment(),
      valid_from: moment(),
      valid_until: moment(),
    } as unknown as IVaccine,
  },
  {
    name: 'Jacinta',
    raby: {
      name: 'versiguard',
      manufacturer: 'zoetis',
      batch: '585829A03',
      vaccination_date: toDate('2023/04/28'),
      valid_from: toDate('2023/04/28'),
      valid_until: toDate('2026/07/01'),
    } as unknown as IVaccine,
    echinococcus: {
      name: 'example',
      manufacturer: 'acme',
      batch: '123456789',
      vaccination_date: moment(),
      valid_from: moment(),
      valid_until: moment(),
    } as unknown as IVaccine,
    antiparasitic: {
      name: 'bravecto',
      manufacturer: 'ACME Ltda',
      batch: '123456789',
      vaccination_date: moment(),
      valid_from: moment(),
      valid_until: moment(),
    } as unknown as IVaccine,
    others: {
      name: 'example',
      manufacturer: 'acme',
      batch: '123456789',
      vaccination_date: moment(),
      valid_from: moment(),
      valid_until: moment(),
    } as unknown as IVaccine,
  },
]

export const Vaccine = (): JSX.Element => {
  return (
    <div className={'border rounded-xl p-2 w-full'}>
      <table className="w-full">
        <thead className="bg-main-light text-white">
          <tr>
            <th className="w-max-1/4 px-6 py-2 border">Mascota</th>
            <th className="py-2 border">Contra la Rabia</th>
            <th className="py-2 border">Contra el Echinococcus</th>
            <th className="py-2 border">Otras Vacunas</th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((p) => {
            return (
              <tr key={p.name}>
                <th className="py-2 border text-md font-normal">{p.name}</th>
                <th className="p-3 border">
                  <PetVaccineCard name={p.raby.name} vaccine={p.raby} />
                </th>
                <th className="p-3 border">
                  <PetVaccineCard name={p.echinococcus.name} vaccine={p.echinococcus} />
                </th>
                <th className="p-3 border">
                  <PetVaccineCard name={p.others.name} vaccine={p.others} />
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
