import { useAppDispatch, useAppSelector } from '../../adapters/redux/useStore'
import { addPet, getPetByID, updatePet, loadOwner, setLoading } from '../../adapters/redux/features/owners/ownerSlice'
import { IOwner } from '../../domain/entities/owners/owner'
import { IPetRegistry } from '../../domain/entities/pets/PetRegistry'
import { IPetIdentificationOwner } from '../../domain/entities/pets/IPetIdentificationOwner'
import { IPetUpdate } from '../../domain/entities/pets/IPetUpdate'
import { IPet } from '../../domain/entities/pets/IPet'

export const useOwner = () => {
  const dispatch = useAppDispatch()
  const { owner_id, owner, pet, isLoading } = useAppSelector((state) => state.ownerState)

  const loading = () => {
    dispatch(setLoading(true))
  }
  const fetchOwner = (id: string) => {
    dispatch(
      loadOwner({
        id,
        owner: {} as IOwner,
      })
    )
    dispatch(setLoading(false))
  }

  const createNewPet = (id: IPetIdentificationOwner, pet: IPetRegistry) => {
    dispatch(addPet({ id, pet }))
  }

  const fetchPetByID = (id: string) => {
    dispatch(getPetByID({ id, pet: {} as IPet }))
  }

  const patchPet = (id: string, update: IPetUpdate) => {
    dispatch(updatePet({ id, update }))
  }

  return { isLoading, loading, pet, owner, owner_id, createNewPet, fetchOwner, fetchPetByID, patchPet }
}
