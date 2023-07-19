import React, { JSX } from 'react'
import { styles } from '../../../../../config/styles'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../../../config/routes'

export const NoPetsHome = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div className={'col-span-3 flex flex-col gap-6 justify-center items-center'}>
      <div className={'flex flex-col gap-6'}>
        <div className={'flex flex-row gap-3 justify-center items-center'}>
          <h1 className={styles.text.title}>Aún no tienes mascotas activas</h1>
        </div>
        <div className={'flex flex-row gap-2'}>
          <p>Para agregar una mascota a tu catálogo haz click en el siguiente botón</p>
        </div>
      </div>
      <button
        className={`flex flex-row gap-3 justify-center  
              ${styles.button.color.dark} 
              ${styles.button.size.xl} `}
        onClick={() => navigate(routes.owners.manager.pets.new)}
      >
        <p>Agregar mascota</p>
      </button>
    </div>
  )
}
