import React, { JSX } from 'react'
import { styles } from '../../../../config/styles'
import Icon from '../../../../shared/components/Icon'
import { IoMdAddCircle } from 'react-icons/io'
import { IoWarningOutline } from 'react-icons/io5'

export const NoPetsHome = (): JSX.Element => {
  return (
    <div className={'flex flex-col gap-6 items-start'}>
      <div className={'flex flex-col gap-6'}>
        <div className={'flex flex-row gap-3 justify-center items-center'}>
          <Icon IconType={IoWarningOutline} className={'text-5xl text-error-light'} />
          <h1 className={styles.text.title}>Aún no tienes mascotas</h1>
        </div>
        <div className={'flex flex-row gap-2'}>
          <p>Para agregar una mascota a tu catálogo haz click en el siguiente botón</p>
        </div>
      </div>
      <button
        className={`flex flex-row gap-3 justify-center  
              ${styles.button.color.dark} 
              ${styles.button.size.xl} `}
      >
        <p>Agregar mascota</p>
        <Icon IconType={IoMdAddCircle} className={'text-2xl'} />
      </button>
    </div>
  )
}
