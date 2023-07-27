import { SubjectManager } from '../../adapters/subject'

export interface TabSubject {
  name: string
  action: boolean
}
export const tabShowService = new SubjectManager<TabSubject>()
