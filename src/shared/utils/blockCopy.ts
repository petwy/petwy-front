import { IEvent } from '../../domain/components/appMenu/interfaces/IEvent'

export function blockCopy(event: IEvent): void {
  event.preventDefault()
}
