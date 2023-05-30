import { IPet } from '../domain/entities/IPet'
import { IOwner } from '../domain/entities/owners/owner'

export const regions = [
  'Metropolitana de Santiago',
  'Arica y Parinacota',
  'Tarapacá',
  'Antofagasta',
  'Atacama',
  'Coquimbo',
  'Valparaíso',
  "Libertador General Bernardo O'Higgins",
  'Maule',
  'Ñuble',
  'Biobío',
  'La Araucanía',
  'Los Ríos',
  'Los Lagos',
  'Aysén del General Carlos Ibáñez del Campo',
  'Magallanes y de la Antártica Chilena',
]
export const pets: Array<IPet> = [
  {
    name: 'Kiara',
    pet_id: '1',
    isAlive: true,
    birthDate: new Date(2018, 2, 5),
    chronic_diseases: [
      {
        name: 'ASMA',
        severity: 'medium',
        treatment: [],
      },
    ],
    avatar: '../../public/assets/kiara.jpeg',
  },
  {
    name: 'Simona',
    pet_id: '2',
    isAlive: true,
    birthDate: new Date(2021, 7, 20),
    chronic_diseases: [
      {
        name: 'MDR5',
        severity: 'medium',
        treatment: [],
      },
    ],
    avatar: '../../public/assets/simona.jpeg',
  },
]

export const ownerData: IOwner = {
  pets,
  name: 'Alex',
  surname: 'Figueroa',
  owner_id: '1',
  phone: {
    phone: 999672677,
    code: 56,
  },
  address: {
    street: 'Antonio Varas 2255',
    country: 'Chile',
    city: 'Santiago',
    state: 'Región Metropolitana',
    post_code: '7000897',
  },
  identification: {
    DNI: {
      DNI: '16114086-4',
      country: 'Chile',
    },
    passport: {},
  },
}
