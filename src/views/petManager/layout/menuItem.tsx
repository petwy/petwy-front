import React, { JSX } from 'react'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import { useAppMenu } from '../../../shared/hooks/useAppMenu'
import { ButtonAsideMenu } from '../../../shared/components/buttons/asideMenu/ButtonAsideMenu'
import { IBreadcrumb } from '../../../domain/components/appMenu/interfaces/IBreadcrumb'
import { routes } from '../../../config/routes'

export const MenuItem = (props: { owner_id: string; label: string; link: string; Icon: IconType }): JSX.Element => {
  const { owner_id, label, link, Icon } = props
  const { handleTitlePage, handleBreadcrumbs } = useAppMenu()
  const breadcrumbs: Array<IBreadcrumb> =
    label !== 'Home'
      ? [
          { label: 'Home', link: routes.owners.manager.home(owner_id) },
          { label, link },
        ]
      : [{ label, link }]
  const handleAppMenu = () => {
    handleTitlePage(label)
    handleBreadcrumbs(breadcrumbs)
  }
  return (
    <Link to={link}>
      <ButtonAsideMenu text={label} onHandle={() => handleAppMenu()}>
        <Icon />
      </ButtonAsideMenu>
    </Link>
  )
}
