import React, { JSX, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IPet } from '../../../../domain/entities/pets/IPet'
import { NoPetsHome } from './noPetsHome/NoPetsHome'
import { styles } from '../../../../config/styles'
import { ButtonAddPet } from '../../../../shared/components/buttons/pet/ButtonAddPet'
import { Tooltip } from '../../../../shared/components/loadingBar/toolTip/ToolTip'
import { routes } from '../../../../config/routes'
import { useAppMenu } from '../../../../shared/hooks/useAppMenu'
import PetCard from '../shared/petCard/PetCard'
import { useOwner } from '../../../../shared/hooks/useOwner'

export const OwnerHome = (): JSX.Element => {
  const navigate = useNavigate()
  const { owner } = useOwner()
  const { setTitlePage, addBreadcrumbs } = useAppMenu()

  useEffect(() => {
    addBreadcrumbs([{ label: 'Home', link: routes.owners.manager.home(owner.owner_id) }])
    setTitlePage('Mis Mascotas')
  }, [])

  const OwnerWelcome = () => {
    return (
      <div className={'w-full border-b border-b-gray-light pb-3'}>
        <h2 className={`text-2xl`}>Bienvenido {owner?.name + ' ' + owner?.surname}</h2>
        <p className={'text-main-light text-md italic'}>
          {owner.pets
            ? 'Humano de ' +
              owner.pets
                .map((p: IPet, i: number) =>
                  i === 0 ? `${p.name}` : owner.pets.length - 1 === i ? ` y ${p.name}` : `, ${p.name}`
                )
                .join('')
            : 'aun no tienes mascotas'}
        </p>
      </div>
    )
  }

  const PetAlive = (): JSX.Element => (
    <div className={'flex flex-col gap-3 w-full'}>
      <div className={'flex flex-row justify-between mx-3'}>
        <h1 className={styles.text.title}>Mascotas Activas</h1>
        <Tooltip content={'Agrega una mascota'}>
          <ButtonAddPet size={'sm'} onHandle={() => navigate(routes.owners.manager.pets.new)} />
        </Tooltip>
      </div>

      <div className={'alive grid grid-cols-3 gap-3 w-full justify-center items-start'}>
        {owner.pets?.filter((p) => p.is_alive && p.is_enable).length > 0 ? (
          owner.pets?.filter((p: IPet) => p.is_alive && p.is_enable).map((p: IPet) => <PetCard key={p.name} pet={p} />)
        ) : (
          <NoPetsHome />
        )}
      </div>
    </div>
  )

  const PetRemain = (): JSX.Element => (
    <div className={'flex flex-col gap-3 w-full'}>
      {owner.pets?.filter((pet) => !pet.is_alive).length > 0 ? (
        <>
          <h1 className={styles.text.title}>Mis Recuerdos</h1>
          <div className={'alive grid grid-cols-3 gap-3 w-full justify-center items-start'}>
            {owner.pets &&
              owner.pets
                ?.filter((p: IPet) => !p.is_alive && !p.is_enable)
                .map((p: IPet) => <PetCard key={p.name} pet={p} />)}
          </div>
        </>
      ) : null}
    </div>
  )

  return (
    <div className={'container flex flex-col gap-6'}>
      <OwnerWelcome />
      <div className={'flex flex-col'}>
        <PetAlive />
      </div>
      <div className={'flex flex-col'}>
        <PetRemain />
      </div>
    </div>
  )
}
