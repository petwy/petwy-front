import React, { JSX } from 'react'
import { styles } from '../../../config/styles'
import { ButtonCloseFilled } from '../buttons/close/ButtonCloseFilled'
import { ModalProps } from './props'

export const Modal = (props: ModalProps): JSX.Element | null => {
  const { title, hide, children } = props
  return (
    <div
      className={
        'flex justify-center items-center fixed left-0 top-0 z-[1055] h-screen w-screen bg-gray-dark bg-opacity-80'
      }
    >
      <div className={'container bg-white-abs max-w-[60%] max-h-screen text-main rounded-xl'}>
        <div className={'flex flex-row justify-between px-3 py-2 items-center gap-3 border-b'}>
          <h1 className={`${styles.text['main-title']} m-3`}>{title}</h1>
          <ButtonCloseFilled onHandle={hide} />
        </div>
        {children}
      </div>
    </div>
  )
}
