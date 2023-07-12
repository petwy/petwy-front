import React, { JSX } from 'react'
import { useShowing } from '../../../shared/hooks/useShowing'
import { ButtonRegistry } from '../../../shared/components/buttons/registy/ButtonRegistry'
import { LoginView } from '../../login/LoginView'
import { OwnerRegistryView } from '../../registry/OwnerRegistry'
import { ButtonLoginOutline } from '../../../shared/components/buttons/login/ButtonLoginOutline'
import { Link } from 'react-router-dom'

export function PublicHomeDesktop(): JSX.Element {
  const { isShowing: isShowingLoginModal, toggle: setLoginModal } = useShowing()
  const { isShowing: isShowingRegistryModal, toggle: setRegistryModal } = useShowing()
  return (
    <section>
      <div className={'absolute grid grid-cols-2 gap-3 h-screen h-max-screen w-screen'}>
        <div className={'flex flex-col items-center justify-center bg-main-light bg-opacity-10'}>
          <h1 className={'text-9xl font-bold text-main'}>petwy</h1>
        </div>
        <div className={'container h-full flex flex-col'}>
          <div className={'flex justify-end py-12 px-3 mr-20 '}>
            <Link to={`/owner/bfbf8916-7e5b-4695-9c67-e4a24e3eee16`}>
              <ButtonLoginOutline
                text={'Ingresa'}
                onHandle={() => {
                  // setLoginModal()
                }}
              />
            </Link>
            <LoginView show={isShowingLoginModal} hide={setLoginModal} />
          </div>
          <div className={'h-full flex flex-col justify-center items-center gap-6'}>
            <div className={'flex flex-col gap-3'}>
              <h1 className={'text-4xl font-bold'}>{'Te ayudamos en el cuidado de tus mascotas: '}</h1>
              <h2 className={'text-3xl'}>
                {'Agenda visitas veterinarias, vacunas, antiparasitarios, crea recordatorios para medicaciones y más'}
              </h2>
              <p className={'text-xl font-light'}>{'Regístra tu mascota y te ayudaremos a organizar su cuidado'}</p>
            </div>
            <div className={'mt-9'}>
              <ButtonRegistry text={'Comienza ahora'} onHandle={setRegistryModal} />
              <OwnerRegistryView show={isShowingRegistryModal} hide={setRegistryModal} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
