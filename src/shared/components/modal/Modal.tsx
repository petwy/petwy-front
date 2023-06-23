import React, { JSX } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { styles } from '../../../config/styles'
import Icon from '../Icon'
import { ModalProps } from './props'

export const Modal = (props: ModalProps): JSX.Element | null => {
  const { title, hide, children } = props
  return (
    <div
      className={
        'flex justify-center items-center fixed left-0 top-0 z-[1055] h-screen w-screen bg-gray-dark bg-opacity-80'
      }
    >
      <div
        className={
          'bg-white-abs max-w-screen max-h-screen text-main text-xl rounded-xl sm:p-3 w-full lg:w-3/4 overflow-auto'
        }
      >
        <div className={'flex flex-row justify-between px-3 py-2 items-center gap-3 border-b'}>
          <h1 className={`${styles.text['main-title']} m-3`}>{title}</h1>
          <button className={`rounded-full ${styles.button.shape.error}`} onClick={hide}>
            <Icon IconType={AiFillCloseCircle} className={'text-3xl'} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
