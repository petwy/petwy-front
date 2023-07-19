import { OwnerCrud } from '../../../domain/repository/owner'
import { IOwner } from '../../../domain/entities/owners/owner'
import { Api } from '../../../domain/repository/api'
import { Http } from '../http'
import build from '../http/url'
import config from '../../../config/config'

export class OwnerRepository implements OwnerCrud {
  private readonly repository: Api<IOwner>

  constructor() {
    this.repository = new Http()
  }

  async create(owner: IOwner): Promise<IOwner> {
    const headers = {}
    const response = await this.repository.post<IOwner>(
      build.buildUrl(build.urls.core, build.path.owners.create),
      owner,
      headers,
      config.api.core.token
    )
    return response.data
  }

  async getByOwnerID(id: string): Promise<IOwner> {
    const headers = {}
    const response = await this.repository.get<IOwner>(
      build.buildUrl(build.urls.core, build.path.owners.getByID(id)),
      headers,
      config.api.core.token
    )
    return response.data
  }

  async getAll(): Promise<Array<IOwner>> {
    const headers = {}
    const response = await this.repository.get<Array<IOwner>>(
      build.buildUrl(build.urls.core, build.path.owners.getAll),
      headers,
      config.api.core.token
    )
    return response.data
  }
}

const ownerRepository: OwnerRepository = new OwnerRepository()
export default ownerRepository
