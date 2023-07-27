import React, { JSX } from 'react'
import { SectionProps } from './props'
import { PetSection } from './PetSection'
import { useVaccineConfig, VaccineConfigProvider } from '../../../../../adapters/context/VaccineConfigContext'
import { PetVaccineCard } from '../../shared/petVaccineCard/PetVaccineCard'
import { toDate } from '../../../../../shared/utils/format/dates'
import { useOwner } from '../../../../../shared/hooks/useOwner'

interface PetVaccinesSectionProps extends SectionProps {
  specie: string
}

export const PetVaccinesSection: React.FC<PetVaccinesSectionProps> = ({ specie }): JSX.Element => {
  const { getVaccineConfigBySpecie } = useVaccineConfig()
  const { pet } = useOwner()
  const vaccinesConfig = getVaccineConfigBySpecie(specie)
  const rabies_vaccines = {
    name: 'Rabia',
    commercial_name: 'versiguard',
    manufacturer: 'zoetis',
    batch: '585829A03',
    vaccination_date: toDate('2023/04/28'),
    valid_from: toDate('2023/04/28'),
    valid_until: toDate('2023/07/01'),
    is_enable: true,
  }

  return (
    <VaccineConfigProvider>
      <PetSection
        title={'Vacunas al día'}
        isEditable={true}
        onToggle={() => {
          return
        }}
      >
        {vaccinesConfig.map((vc) => {
          return (
            <PetVaccineCard key={vc.code} name={vc.label} vaccine={rabies_vaccines} />
            // pet.rabies_vaccines
            //   .filter((raby: IVaccine) => raby.name === vc.code)
            //   .map((v) => <PetVaccineCard key={vc.code} name={vc.label} vaccine={rabies_vaccines} />)
          )
        })}
      </PetSection>
    </VaccineConfigProvider>
  )
}
