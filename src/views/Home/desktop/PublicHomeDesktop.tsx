import React, { JSX } from 'react'
import { ButtonRegistry } from '../../../shared/components/buttons/registy/ButtonRegistry'
import { Login } from '../../Login'
import { OwnerRegistryView } from '../../Registry'
import { ButtonLoginOutline } from '../../../shared/components/buttons/login/ButtonLoginOutline'
import { Link } from 'react-router-dom'
import { modalShowService } from '../../../shared/channels/modal'

export function PublicHomeDesktop(): JSX.Element {
  const handleShowLogin = () => {
    modalShowService.setSubjectManager(true)
  }
  const handleShowRegister = () => {
    modalShowService.setSubjectManager(true)
  }
  return (
    <section>
      <div className={'absolute grid grid-cols-2 gap-3 h-screen h-max-screen w-screen'}>
        <div className={'flex flex-col items-center justify-center bg-main-light bg-opacity-10'}>
          <h1 className={'text-9xl font-bold text-main'}>petwy</h1>
        </div>
        <div className={'container h-full flex flex-col'}>
          <div className={'flex justify-end py-12 px-3 mr-20 '}>
            <Link to={`/owner/62aaaa64-0fd8-4031-ae85-5e6b8d216298`}>
              <ButtonLoginOutline text={'Ingresa'} onHandle={handleShowLogin} />
            </Link>
            <Login />
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
              <ButtonRegistry text={'Comienza ahora'} onHandle={handleShowRegister} />
              <OwnerRegistryView />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
