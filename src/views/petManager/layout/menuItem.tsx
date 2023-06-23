import React, { JSX } from 'react'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import { BaseIcon } from '../../../shared/components/icons/BaseIcon'
import { styles } from '../../../config/styles'

export const MenuItem = (props: { label: string; link: string; Icon: IconType; style: string }): JSX.Element => {
  const { label, link, Icon } = props
  return (
    <Link to={link}>
      <div className={'flex flex-row gap-3 py-3 px-3'}>
        <BaseIcon size={styles.icon.size.sm} color={'main'}>
          <Icon />
        </BaseIcon>
        <p className={'hidden lg:text-l lg:block'}>{label}</p>
      </div>
    </Link>
  )
}
