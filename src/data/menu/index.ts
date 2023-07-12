import { IMenuItem } from '../../domain/components/appMenu/interfaces/IMenu'
import { routes } from '../../config/routes'
import {
  AddPetIcon,
  AlertIcon,
  AntiparasiticIcon,
  ChronicIcon,
  HomeIcon,
  SettingIcon,
  SupportIcon,
  VaccineIcon,
} from '../../shared/components/icons'

export const menu = (id: string): Array<IMenuItem> => {
  return [
    {
      label: 'Home',
      link: routes.owners.manager.home(id),
      style: 'gray-light',
      icon: HomeIcon,
    },
    {
      label: 'Agrega tu Mascota',
      link: routes.owners.manager.pets.new,
      style: 'gray-light',
      icon: AddPetIcon,
    },
    {
      label: 'Vacunas',
      link: routes.owners.manager.pets.vaccines,
      style: 'gray-light',
      icon: VaccineIcon,
    },
    {
      label: 'Antiparasitarios',
      link: routes.owners.manager.pets.antiparasitic,
      style: 'gray-light',
      icon: AntiparasiticIcon,
    },
    {
      label: 'Enfermedades Crónicas',
      link: routes.owners.manager.pets.chronics,
      style: 'gray-light',
      icon: ChronicIcon,
    },
    {
      label: 'Recordatorios',
      link: routes.owners.manager.pets.alerts,
      style: 'gray-light',
      icon: AlertIcon,
    },
  ]
}

export const settingMenu: Array<IMenuItem> = [
  {
    label: 'Soporte',
    link: '',
    style: 'gray-light',
    icon: SupportIcon,
  },
  {
    label: 'Configuración',
    link: '',
    style: 'gray-light',
    icon: SettingIcon,
  },
]
