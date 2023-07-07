import { IMenuItem } from '../../domain/components/appMenu/interfaces/IMenu'
import { HiHome } from 'react-icons/hi'
import { TbVaccine } from 'react-icons/tb'
import { BsFillBugFill } from 'react-icons/bs'
import { AiFillSetting, AiFillWarning, AiTwotoneBell } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { MdOutlinePets } from 'react-icons/md'
import { routes } from '../../config/routes'

export const menu = (id: string): Array<IMenuItem> => {
  return [
    {
      label: 'Home',
      link: routes.owners.manager.home(id),
      style: 'gray-light',
      icon: HiHome,
    },
    {
      label: 'Agrega tu Mascota',
      link: routes.owners.manager.pets.new,
      style: 'gray-light',
      icon: MdOutlinePets,
    },
    {
      label: 'Vacunas',
      link: routes.owners.manager.pets.vaccines,
      style: 'gray-light',
      icon: TbVaccine,
    },
    {
      label: 'Antiparasitarios',
      link: routes.owners.manager.pets.antiparasitic,
      style: 'gray-light',
      icon: BsFillBugFill,
    },
    {
      label: 'Enfermedades Crónicas',
      link: routes.owners.manager.pets.chronics,
      style: 'gray-light',
      icon: AiFillWarning,
    },
    {
      label: 'Recordatorios',
      link: routes.owners.manager.pets.alerts,
      style: 'gray-light',
      icon: AiTwotoneBell,
    },
  ]
}

export const settingMenu: Array<IMenuItem> = [
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
