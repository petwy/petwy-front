import { Observable, Subject } from 'rxjs'

export class SubjectManager<T> {
  event$ = new Subject<T>()

  getSubjectManager(): Observable<T> {
    return this.event$.asObservable()
  }
  setSubjectManager(value: T) {
    this.event$.next(value)
  }
}
