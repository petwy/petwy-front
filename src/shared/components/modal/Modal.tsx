import React, { JSX, useEffect, useState } from 'react'
import { styles } from '../../../config/styles'
import { ButtonCloseFilled } from '../buttons/close/ButtonCloseFilled'
import { Baseprop } from '../../../domain/interfaces/baseprop'
import { modalShowService } from '../../channels/modal'

export interface ModalProps extends Baseprop {
  title: string
  children: any
}

export const Modal = (props: ModalProps): JSX.Element | null => {
  const { title, children } = props
  const subscription$ = modalShowService.getSubjectManager()
  const [show, setShow] = useState<boolean>(false)
  useEffect(() => {
    subscription$.subscribe((data) => {
      setShow(data)
    })
  }, [])
  const handleHide = () => {
    modalShowService.setSubjectManager(false)
  }
  return show ? (
    <div
      className={
        'flex justify-center items-center fixed left-0 top-0 z-[1055] h-screen w-screen bg-gray-dark bg-opacity-80'
      }
    >
      <div className={'container bg-white-abs max-w-[60%] max-h-screen text-main rounded-xl'}>
        <div className={'flex flex-row justify-between px-3 py-2 items-center gap-3 border-b'}>
          <h1 className={`${styles.text['main-title']} m-3`}>{title}</h1>
          <ButtonCloseFilled onHandle={handleHide} />
        </div>
        {children}
      </div>
    </div>
  ) : null
}
