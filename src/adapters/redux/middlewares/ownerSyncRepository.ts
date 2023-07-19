import { Middleware } from 'redux'
import ownerRepository from '../../web/repository/owner'
import { IOwner } from '../../../domain/entities/owners/owner'
import { toast } from 'sonner'
import { toCapitalize } from '../../../shared/utils'
import petRepository from '../../web/repository/pet'

export const ownerSyncRepositoryMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  switch (type) {
    case 'owners/loadOwner':
      return ownerRepository
        .getByOwnerID(payload.id)
        .then((res) => {
          action.payload.owner = res
          next(action)
          return res
        })
        .catch((err) => console.log(err))
    case 'owners/createOwner':
      return ownerRepository
        .create(payload as IOwner)
        .then((res) => {
          toast.success(`Bienvenido ${toCapitalize(res.name)}.`)
          next(action)
          return res
        })
        .catch((err) => console.log(err))
    case 'owners/addPet':
      return petRepository
        .create(payload.id, payload.pet)
        .then((res) => {
          toast.success(`Tu mascota se ha creado correctamente.`)
          next(action)
          return res
        })
        .catch((err) => console.log(err))
    case 'owners/getPetByID':
      return petRepository
        .get(payload.id)
        .then((res) => {
          action.payload.pet = res
          next(action)
          return res
        })
        .catch((err) => console.log(err))
    case 'owners/updatePet':
      return petRepository
        .patch(payload.id, payload.update)
        .then((res) => {
          toast.success(`Se han actualizado correctamente los datos de ${toCapitalize(res.name)}.`)
          next(action)
          return res
        })
        .catch((err) => console.log(err))
  }
}
