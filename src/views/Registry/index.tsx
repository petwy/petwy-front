import React, { JSX } from 'react'
import { FormOwnerRegistry } from './form/FormOwnerRegistry'
import { Modal } from '../../shared/components/modal/Modal'
import { useSelector } from 'react-redux'
import { AppState } from '../../adapters/redux/store'
import { OwnerState } from '../../adapters/redux/features/owners/ownerSlice'
import { LoadingBar } from '../../shared/components/loadingBar/LoadingBar'

export const OwnerRegistryView: React.FC = (): JSX.Element => {
  const ownerState = useSelector<AppState>((state) => state.ownerState)
  const { isLoading } = ownerState as OwnerState

  return (
    <>
      <Modal title={'Registro'}>
        <FormOwnerRegistry />
      </Modal>
      {isLoading ? <LoadingBar /> : null}
    </>
  )
}
