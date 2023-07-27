import React, { JSX } from 'react'
import { toCapitalize } from '../../../../shared/utils'
import { SuccessProps } from './props'
import { styles } from '../../../../config/styles'

export const Success = (props: SuccessProps): JSX.Element => {
  const { name, surname, email, hide } = props
  return (
    <div className={`${styles['form-block'].normal} p-3`}>
      <div className={styles['form-block'].normal}>
        <h1 className={styles.text['main-title']}>
          {`${toCapitalize(name)} ${toCapitalize(surname)}`}, ya casi eres un petwer
        </h1>
        <p className={'text-xl text-justify'}>
          A continuación te llegará un correo electrónico a <span className={'font-bold'}>{email}</span> con las
          instrucciones donde podrás registrar tu contraseña y luego entrar a nuestro portal desde cualquier dispositivo
          y en cualquier lugar del mundo
        </p>
      </div>
      <div className={styles['form-block'].normal}>
        <button
          onClick={hide}
          className={`${styles.button.size.wide} ${styles.button.shape['rounded-xl']} ${styles.button.color.dark}`}
        >
          {'cerrar'}
        </button>
      </div>
    </div>
  )
}
