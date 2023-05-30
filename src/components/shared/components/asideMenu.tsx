import React, { JSX } from 'react'
import { MenuItem } from '../menuItem'
import { IMenuItem } from '../../../domain/components/appMenu/interfaces/IMenu'
import { HiHome } from 'react-icons/hi'
import { TbVaccine } from 'react-icons/tb'
import { BsFillBugFill, BsAlarm } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { AiFillSetting, AiFillWarning } from 'react-icons/ai'
import { IOwner } from '../../../domain/entities/owners/owner'

const menuStyle = {
  lg: 'lg:h-full lg:container lg:bg-main lg:opacity-90 lg:py-6 lg:text-white lg:rounded-xl',
  'h1.lg': 'text-2xl mb-3',
}
const menu: Array<IMenuItem> = [
  {
    label: 'Home',
    link: '',
    style: 'gray-light',
    icon: HiHome,
  },
  {
    label: 'Vacunas',
    link: '',
    style: 'gray-light',
    icon: TbVaccine,
  },
  {
    label: 'Antiparasitos',
    link: '',
    style: 'gray-light',
    icon: BsFillBugFill,
  },
  {
    label: 'Cuidados Crónicos',
    link: '',
    style: 'gray-light',
    icon: AiFillWarning,
  },
  {
    label: 'Recordatorios',
    link: '',
    style: 'gray-light',
    icon: BsAlarm,
  },
]

const settingMenu: Array<IMenuItem> = [
  {
    label: 'Soporte',
    link: '',
    style: 'gray-light',
    icon: BiSupport,
  },
  {
    label: 'Configuración',
    link: '',
    style: 'gray-light',
    icon: AiFillSetting,
  },
]

export function AsideOwnerMenu(props: { owner: IOwner }): JSX.Element {
  const { owner } = props
  return (
    <div className={`${menuStyle.lg}`}>
      <div className={'flex items-center gap-3 justify-start mb-6'}>
        <div className={'border-2 border-secondary bg-gray-light p-9 rounded-full'}></div>
        <div>
          <h1 className={`${menuStyle['h1.lg']}`}>{owner.name + ' ' + owner.surname}</h1>
          <p className={'text-gray-light md:text-sm lg:text-md italic'}>
            Humano de {owner.pets.map((p) => p.name).join(', ')}
          </p>
        </div>
      </div>
      <div className={'mb-6 py-3 border-b border-main-light'}>
        {menu.map((m) => (
          <MenuItem key={m.label} Dep={m.icon} style={m.style} label={m.label} />
        ))}
      </div>
      <div className={'mb-3 py-3'}>
        {settingMenu.map((m) => (
          <MenuItem key={m.label} Dep={m.icon} style={m.style} label={m.label} />
        ))}
      </div>
    </div>
  )
}
