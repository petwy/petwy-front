import { OwnerCrud } from '@/domain/repository/owner'
import { Owner } from '@/domain/entities/owners/owner'
import { Api } from '@/domain/repository/api'
import { Http } from '@/adapters/web/http'
import config from '@/config/config'
import build from '@/adapters/web/http/url'

export class OwnerRepository implements OwnerCrud {
  private readonly repository: Api<Owner>

  constructor() {
    this.repository = new Http()
  }

  async create(owner: Owner): Promise<Owner> {
    const headers = {}
    const response = await this.repository.post<Owner>(
      build.buildUrl(build.urls.core, build.path.owners.create),
      owner,
      headers,
      config.api.core.token
    )
    return response.data
  }
}

const ownerRepository: OwnerRepository = new OwnerRepository()
export default ownerRepository
