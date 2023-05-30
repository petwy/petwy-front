import React, { JSX } from 'react'
import PetCard, { PetChronic } from '../../components/shared/components/petCard'
import HeaderView from '../../components/shared/headerView'
import { AsideOwnerMenu } from '../../components/shared/components/asideMenu'
import { IOwner } from '../../domain/entities/owners/owner'

const breadcrumbs = [
  { label: 'Home', link: '' },
  { label: 'Mis Mascotas', link: '' },
]
const viewStyle = {
  lg: 'lg:container lg:grid-cols-4',
}

export default function OwnerManager(props: { owner: IOwner }): JSX.Element {
  const { owner } = props
  return (
    <div className={`py-3 h-screen grid grid-cols-1 gap-3 w-full mb-6 ${viewStyle.lg}`}>
      {/* menu aside */}
      <AsideOwnerMenu owner={owner} />
      {/* contenido */}
      <div className={'px-3 py-3 lg:col-span-3'}>
        <HeaderView title={'Mis Mascotas'} breadcrumbs={breadcrumbs} />
        <div className={'grid  lg:grid-cols-2 gap-3 space-between'}>
          {owner.pets.map((p) => (
            <PetCard
              key={p.name}
              petName={p.name}
              avatar={p.avatar}
              birthDay={p.birthDate}
              isAlive={p.isAlive}
              chronics={p.chronic_diseases.map(
                (c) =>
                  ({
                    name: c.name,
                    severity: c.severity,
                  } as PetChronic)
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
