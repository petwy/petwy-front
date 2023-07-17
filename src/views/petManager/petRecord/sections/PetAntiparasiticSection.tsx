import React, { JSX } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { PetVaccineCard } from '../../petVaccineCard/PetVaccineCard'
import { IVaccine } from '../../../../domain/entities/IVaccine'
import moment from 'moment'
import { PetAntiparasiticCard } from '../../petAntiparasiticCard/PetAntiparasiticCard'

export const PetAntiparasiticSection = (props: SectionProps): JSX.Element => {
  const { pet } = props
  const raby: IVaccine = {
    batch: 'A579A01',
    manufacturer: 'Novibac',
    name: 'Novibac rabia',
    vaccination_date: moment('17/08/2022', 'DD/MM/YYYY').toDate(),
    valid_from: moment('07/09/2022', 'DD/MM/YYYY').toDate(),
    valid_until: moment('17/08/2022', 'DD/MM/YYYY').toDate(),
  }

  const echo: IVaccine = {
    batch: 'A579A01',
    manufacturer: 'Novibac',
    name: 'Novibac rabia',
    vaccination_date: moment('17/08/2022', 'DD/MM/YYYY').toDate(),
    valid_from: moment('07/09/2022', 'DD/MM/YYYY').toDate(),
    valid_until: moment('17/08/2023', 'DD/MM/YYYY').toDate(),
  }

  return (
    <PetSection
      title={'Antiparasitarios'}
      isEditable={true}
      onToggle={() => {
        return
      }}
    >
      <div className={'flex flex-col gap-3'}>
        <div className={'flex flex-row gap-3'}>
          <PetAntiparasiticCard name={'Antiparasitarios'} vaccine={{} as IVaccine} />
        </div>
      </div>
    </PetSection>
  )
}
