import React, { JSX } from 'react'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import { useTitlePage } from '../../../shared/hooks/useTitlePage'
import { ButtonAsideMenu } from '../../../shared/components/buttons/asideMenu/ButtonAsideMenu'

export const MenuItem = (props: { label: string; link: string; Icon: IconType }): JSX.Element => {
  const { label, link, Icon } = props
  const { handleTitlePage } = useTitlePage()
  return (
    <Link to={link}>
      <ButtonAsideMenu text={label} onHandle={() => handleTitlePage(label)}>
        <Icon />
      </ButtonAsideMenu>
    </Link>
  )
}
