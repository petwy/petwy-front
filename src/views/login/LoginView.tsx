import React, { MouseEventHandler, ReactPortal } from 'react'
import ReactDOM from 'react-dom'
import { Modal } from '../../shared/components/modal/Modal'
import { Label } from '../../shared/components/label'
import { Input } from '../../shared/components/input'

export const LoginView = (props: { show: boolean; hide: MouseEventHandler<HTMLButtonElement> }): ReactPortal | null => {
  const { show, hide } = props
  return show
    ? ReactDOM.createPortal(
        <Modal title={'Login'} hide={hide}>
          <form className="bg-white h-full" autoComplete={'on'} onSubmit={() => console.log('logged')}>
            <div className={'grid grid-cols-1 py-2'}>
              <div className={'px-3 py-3 w-full'}>
                <p>Aún no tengo una cuenta, Regístrate</p>
              </div>
              <div className={'px-3 py-3 w-full'}>
                <Label name={'username'} text={'Ingresa tu email o usuario'} />
                <Input
                  name={'username'}
                  typeInput={'text'}
                  placeholder={'ejemplo@correo.cl'}
                  autoComplete={'on'}
                  handler={(e) => console.log(e.target.value)}
                />
              </div>
              <div className={'px-3 py-3 w-full'}>
                <Label name={'password'} text={'Ingresa tu password'} />
                <Input
                  name={'password'}
                  typeInput={'password'}
                  placeholder={'********'}
                  autoComplete={'on'}
                  handler={(e) => console.log(e.target.value)}
                />
              </div>
              <div className={'flex flex-row gap-3 text-justify px-3 py-3 w-full'}>
                <input type={'checkbox'} className={'p-3'} />
                <Label name={'text'} text={'Recuérdame'} />
              </div>
              <div className={'text-justify px-3 py-3 '}>
                <button
                  className={'w-full bg-main hover:bg-main text-white px-4 py-2 rounded'}
                  onSubmit={() => console.log('logged')}
                >
                  Ingresar
                </button>
              </div>
              <div className={'text-justify px-3 py-3 '}>
                <p>¡ups! olvidé mi contraseña</p>
              </div>
            </div>
          </form>
        </Modal>,
        document.body
      )
    : null
}
