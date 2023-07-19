import React, { JSX } from 'react'
import { PetVaccineCard } from '../shared/petVaccineCard/PetVaccineCard'
import { dummy } from '../vaccines/Vaccine'
import { PetAntiparasiticCard } from '../shared/petAntiparasiticCard/PetAntiparasiticCard'

export const Antiparasitic = (): JSX.Element => {
  return (
    <div className={'border rounded-xl p-2 w-full'}>
      <table className="w-full">
        <thead className="bg-main-light text-white">
          <tr>
            <th className="w-max-1/4 px-6 py-2 border">Mascota</th>
            <th className="py-2 border">Antiparasitarios</th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((p) => {
            return (
              <tr key={p.name}>
                <th className="py-2 border text-md font-normal">{p.name}</th>
                <th className="p-3 border">
                  <PetAntiparasiticCard name={p.antiparasitic?.name || ''} vaccine={p.antiparasitic} />
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
