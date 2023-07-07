import buildUrl from 'build-url-ts'
import config from '../../../../config/config'

export default {
  urls: {
    core: config.api.core.url,
  },
  path: {
    owners: {
      create: '/owners',
      getAll: '/owners',
      getByID: (ID: string): string => `/owners/${ID}`,
      update: (ID: string): string => `/owners/${ID}`,
      disable: (ID: string): string => `/owners/${ID}`,
    },
    pets: {
      pets: '/pets',
      getByID: (ID: string): string => `/pets/${ID}`,
    },
  },
  buildUrl: (url = '', path = '', queryParams = {}, hash = '', lowerCase = false, disableCSV = false): string => {
    return buildUrl(url, {
      path,
      hash,
      lowerCase,
      disableCSV,
      queryParams,
    })
  },
}
