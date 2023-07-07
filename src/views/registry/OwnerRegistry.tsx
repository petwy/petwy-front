import React, { JSX, ReactPortal } from 'react'
import { FormOwnerRegistry } from './form/FormOwnerRegistry'
import ReactDOM from 'react-dom'
import { Modal } from '../../shared/components/modal/Modal'
import { OwnerRegistryProps } from './props'
import { useSelector } from 'react-redux'
import { AppState } from '../../adapters/redux/store'
import { OwnerState } from '../../adapters/redux/features/owners/ownerSlice'
import { LoadingBar } from '../../shared/components/loadingBar/LoadingBar'

export const OwnerRegistryView = (props: OwnerRegistryProps): ReactPortal | JSX.Element | null => {
  const ownerState = useSelector<AppState>((state) => state.ownerState)
  const { isLoading } = ownerState as OwnerState
  const { show, hide } = props

  return (
    <>
      {show
        ? ReactDOM.createPortal(
            <Modal title={'Registro'} hide={hide}>
              <FormOwnerRegistry hide={hide} />
              {/*<Success name={'Toribio'} surname={'Toro'} email={'toribio@gmail.com'} hide={hide} />*/}
            </Modal>,
            document.body
          )
        : null}
      {isLoading ? <LoadingBar /> : null}
    </>
  )
}
