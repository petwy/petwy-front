import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { IOwner } from '../../../../domain/entities/owners/owner'
import { IPet } from '../../../../domain/entities/pets/IPet'
import { IPetRegistry } from '../../../../domain/entities/pets/PetRegistry'
import { IPetIdentificationOwner } from '../../../../domain/entities/pets/IPetIdentificationOwner'
import { IPetUpdate } from '../../../../domain/entities/pets/IPetUpdate'

const initialStatePet = {
  anti_echinococcus: [],
  anti_parasitic: [],
  avatar:
    'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
  birth_date: new Date(2020, 10, 10),
  chip: { chip_code: '', chip_date: new Date(), is_chipped: false, location: '' },
  chronic_diseases: [],
  coat: 'cream',
  country: 'CHL',
  diseases: [],
  height: '',
  is_alive: true,
  is_enable: true,
  name: 'Alo',
  obtained_from: '',
  other: '',
  others_vaccines: [],
  pet_dimension: { depth: 0, height: 0, measure_weight_type: '', weight: 0, width: 0 },
  pet_id: '102912892',
  pet_type: { breed: 'galgo', specie: 'canino' },
  pet_weight: { measure_type: '', weight: 0 },
  rabies_vaccines: [],
  sex: 'male',
  sterilised: false,
  weight: '',
  weight_unit: '',
  width: '',
}

export type OwnerState = {
  owner: IOwner
  owner_id: string
  pet: IPet
  isLoading: boolean
}

const initialState: OwnerState = {
  owner: {
    owner_id: '',
    name: '',
    surname: '',
    identification: { DNI: {}, passport: {} },
    address: { city: '', country: '', post_code: '', state: '', street: '', street_additional: '' },
    phone: { code: '', number: '' },
    pets: [],
  } as IOwner,
  owner_id: '',
  pet: {} as IPet,
  isLoading: false,
}

export const ownerSlice = createSlice({
  name: 'owners',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      const { payload } = action
      state.isLoading = payload
    },
    loadOwner: (state, action: PayloadAction<{ id: string; owner: IOwner }>) => {
      const { payload } = action
      const { id, owner } = payload
      state.owner_id = id
      state.owner = owner
    },
    addOwner: (state, action: PayloadAction<IOwner>) => {
      const { payload } = action
      state.owner = payload
    },
    updateOwner: (state, action: PayloadAction<IOwner>) => {
      const { payload } = action
      state.owner = payload
    },
    addPet: (state, action: PayloadAction<{ id: IPetIdentificationOwner; pet: IPetRegistry }>) => {
      const { payload } = action
      const { pet } = payload

      const { owner_id, name, country, birth_date, sex, coat, specie, breed, obtained_from, sterilised, others, chip } =
        pet
      const { chip_code, chip_date, location } = chip || {}
      const newPet: IPet = {
        name,
        country,
        birth_date,
        sex,
        coat,
        obtained_from: obtained_from || '',
        sterilised: sterilised || false,
        other: others || '',
        chip: {
          chip_code: chip_code || '',
          chip_date: chip_date || new Date(),
          is_chipped: !!chip,
          location: location || '',
        },
        pet_id: 'asbsbsbsbs',
        pet_type: {
          breed: breed,
          specie: specie,
        },
        is_enable: true,
        is_alive: true,
        avatar:
          'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
        anti_echinococcus: [],
        anti_parasitic: [],
        chronic_diseases: [],
        death: undefined,
        diseases: [],
        others_vaccines: [],
        pet_dimension: { depth: 0, height: 0, measure_weight_type: 'grs', weight: 0, width: 0 },
        rabies_vaccines: [],
      }
      state.owner.pets = [...state.owner.pets, newPet]
    },
    updatePet: (state, action: PayloadAction<{ id: string; update: IPetUpdate }>) => {
      const { payload } = action
      const { id, update } = payload
      state.owner.pets = state.owner.pets.map((pet) => {
        if (pet.pet_id === id) {
          state.pet = { ...pet, ...update } as IPet
          return { ...pet, ...update }
        }
        return pet
      }) as Array<IPet>
    },
    getPetByID: (state, action: PayloadAction<{ id: string; pet: IPet }>) => {
      const { payload } = action
      const { id } = payload
      state.pet = state.owner.pets?.filter((pet) => pet.pet_id === id)[0]
    },
  },
})
export const { setLoading, loadOwner, addOwner, updateOwner, addPet, updatePet, getPetByID } = ownerSlice.actions
export default ownerSlice.reducer
