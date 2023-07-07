import { createAsyncThunk } from '@reduxjs/toolkit'
import ownerRepository from '../../../web/repository/owner'
import { OwnerRegistry } from '../../../../domain/entities/owners/ownerRegistry'
import { IOwner } from '../../../../domain/entities/owners/owner'

const sliceNames = { create: 'owners/create', getByOwnerID: 'owners/getByOwnerID' }
export const createOwner = createAsyncThunk(
  sliceNames.create,
  async (registry: OwnerRegistry, thunkAPI): Promise<OwnerRegistry> => {
    try {
      const response = await ownerRepository.create(registry as unknown as IOwner)
      return response as unknown as OwnerRegistry
    } catch (e) {
      thunkAPI.rejectWithValue('error occurred')
      throw e
    }
  }
)

export const getByOwnerID = createAsyncThunk(sliceNames.getByOwnerID, async (id: string, thunkAPI): Promise<IOwner> => {
  try {
    const response = await ownerRepository.getByOwnerID(id)
    console.log('owner', response)
    return response
  } catch (e) {
    thunkAPI.rejectWithValue('error occurred')
    throw e
  }
})
