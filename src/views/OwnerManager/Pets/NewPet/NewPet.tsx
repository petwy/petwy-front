import React, { JSX, useEffect } from 'react'
import { FormNewPet } from './form/FormNewPet'
import { useParams } from 'react-router'
import { useAppMenu } from '../../../../shared/hooks/useAppMenu'
import { routes } from '../../../../config/routes'

export const NewPet = (): JSX.Element => {
  const { owner_id } = useParams()

  const { setTitlePage, addBreadcrumbs } = useAppMenu()
  useEffect(() => {
    if (owner_id) {
      setTitlePage('Nueva Ficha de Mascota')
      addBreadcrumbs([
        { label: 'Home', link: routes.owners.manager.home(owner_id) },
        { label: 'Nueva Mascota', link: routes.owners.manager.pets.new },
      ])
    }
  }, [])
  return <FormNewPet />
}
