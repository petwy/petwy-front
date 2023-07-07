import React, { JSX } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import Icon from '../../shared/components/Icon'
import { useShowing } from '../../shared/hooks/useShowing'
import { LoginView } from '../login/LoginView'
import { OwnerRegistryView } from '../registry/OwnerRegistry'
import { styles } from '../../config/styles'
import { Link } from 'react-router-dom'
import { routes } from '../../config/routes'
import { ONWER_HOME_TEST } from '../../router'

export function PublicHome(): JSX.Element {
  const { isShowing: isShowingLoginModal, toggle: setLoginModal } = useShowing()
  const { isShowing: isShowingRegistryModal, toggle: setRegistryModal } = useShowing()
  return (
    <div className={'text-xl text-main opacity-80 font-bold border'}>
      <div className={'grid md:grid-cols-2 grid-cols-1 gap-3'}>
        {/* LOGO */}
        <div
          className={
            'h-screen flex flex-col gap-20 items-center justify-center bg-cover bg-top-top bg-pet-box bg-opacity-50'
          }
        >
          <h1 className={'text-9xl font-bold text-main'}>petwy</h1>
          <div className={`md:hidden w-full flex flex-row px-12 gap-12`}>
            <Link
              className={`
                flex flex-row items-center justify-center gap-3
                ${styles.button.shape['rounded-xl']} 
                ${styles.button.effect['main-to-light']} 
                ${styles.button.text.medium} 
                ${styles.button.size.wide} 
                ${styles.button.color.dark} 
                }
              `}
              to={routes.owners.manager.home(ONWER_HOME_TEST)}
            >
              <button
                // onClick={setLoginModal}
                className={`
                 flex flex-row items-center justify-center gap-3
                 }
              `}
              >
                {'Ingresa'} <Icon IconType={AiOutlineLogin} />
              </button>
            </Link>

            <button
              onClick={setRegistryModal}
              className={`
                ${styles.button.shape['rounded-xl']} 
                ${styles.button.effect['main-to-light']} 
                ${styles.button.text.medium} 
                ${styles.button.size.wide}  
                ${styles.button.color.dark} 
              } 
              `}
            >
              Comienza ahora
            </button>
          </div>
        </div>
        <div className={'container h-full flex flex-col'}>
          {/* LOGIN */}
          <div className={'flex justify-end py-12 px-3 mr-20 '}>
            <button onClick={setLoginModal} className={'flex flex-row items-center gap-3 hover:text-main-light'}>
              Ingresa <Icon IconType={AiOutlineLogin} />
            </button>
            <LoginView show={isShowingLoginModal} hide={setLoginModal} />
          </div>
          <div className={'h-full flex flex-col justify-center items-center gap-6'}>
            <div className={'flex flex-col gap-6 '}>
              <h1 className={'text-3xl'}>
                Te ayudamos en el cuidado de tus mascotas: agenda sus vacunas, visitas veterinarias, medicación y más
              </h1>
              <p className={'text-xl font-light'}>
                lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima mollitia nesciunt nostrum quibusdam
                temporibus.
              </p>
            </div>
            <div className={'mt-9'}>
              {/* REGISTRATION */}
              <button
                className={`
                ${styles.button.size.xl} 
                ${styles.button.color.dark} 
                ${styles.button.shape.rounded} 
                `}
                onClick={setRegistryModal}
              >
                Comienza ahora
              </button>
              <OwnerRegistryView show={isShowingRegistryModal} hide={setRegistryModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
