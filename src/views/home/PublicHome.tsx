import React, { JSX } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../domain/routes'
import { AiOutlineLogin } from 'react-icons/ai'
import Icon from '../../components/shared/icon'

export function PublicHome(): JSX.Element {
  return (
    <div className={'text-xl text-main opacity-80 font-bold'}>
      <div className={'grid grid-cols-2 gap-3'}>
        {/* LOGO */}
        <div
          className={'h-screen flex flex-col items-center justify-center bg-cover bg-top-top bg-pet-box bg-opacity-50'}
        >
          <h1 className={'text-9xl mb-60 font-bold text-main'}>petwy</h1>
        </div>
        <div className={'container h-full flex flex-col'}>
          <Link to={routes.owners.manager} className={''}>
            <div className={'flex flex-row py-12 px-3 justify-end mr-20 items-center gap-3'}>
              <p>Ingresa</p> <Icon Dep={AiOutlineLogin} style={'main'} />
            </div>
          </Link>
          <div className={'h-full flex flex-col justify-center items-center gap-6'}>
            <div className={'flex flex-col gap-6 '}>
              <h1 className={'text-3xl'}>
                Mascotas mejor cuidadas: agenda sus vacunas, visitas veterinarias, medicación y más
              </h1>
              <p className={'text-xl font-light'}>
                lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima mollitia nesciunt nostrum quibusdam
                temporibus.
              </p>
            </div>
            <div className={''}>
              <button className={'bg-main px-6 py-3 text-sm text-white rounded'}>Comienza ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
