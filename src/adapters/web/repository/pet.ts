import { Api } from '../../../domain/repository/api'
import { Http } from '../http'
import build from '../http/url'
import config from '../../../config/config'
import { IPet } from '../../../domain/entities/pets/IPet'
import { IPetRegistry } from '../../../domain/entities/pets/PetRegistry'
import { PetCrud } from '../../../domain/repository/pet'
import { IPetIdentificationOwner } from '../../../domain/entities/pets/IPetIdentificationOwner'

export class PetRepository implements PetCrud {
  private readonly repository: Api<IPet>

  constructor() {
    this.repository = new Http()
  }

  async create(ID: IPetIdentificationOwner, pet: IPetRegistry): Promise<IPet> {
    const { type, id } = ID
    const headers = {}
    const response = await this.repository.post<IPetRegistry>(
      build.buildUrl(build.urls.core, build.path.pets.pets, {
        type,
        id,
      }),
      pet,
      headers,
      config.api.core.token
    )
    return response.data as unknown as IPet
  }

  async get(id: string): Promise<IPet> {
    const headers = {}
    const response = await this.repository.get<IPetRegistry>(
      build.buildUrl(build.urls.core, build.path.pets.getByID(id)),
      headers,
      config.api.core.token
    )
    return response.data as unknown as IPet
  }
}

const petRepository: PetRepository = new PetRepository()
export default petRepository
