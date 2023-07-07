import { ChangeEventHandler, FormEvent, MouseEventHandler, SyntheticEvent } from 'react'

export interface IEvent extends SyntheticEvent<any>, ChangeEventHandler<any>, MouseEventHandler<any>, FormEvent<any> {}
