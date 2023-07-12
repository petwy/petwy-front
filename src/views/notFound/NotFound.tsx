import React, { JSX } from 'react'
import { FaPaw } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

export const NotFound: React.FC = (): JSX.Element => {
  const history = useNavigate()
  return (
    <div className={'flex flex-row w-full h-full gap-6 border justify-center items-center'}>
      <div>
        <FaPaw className={'text-main-dark text-9xl'} />
      </div>
      <div className={'flex flex-col gap-9'}>
        <h1 className={'text-lg'}>oops! no existe este recurso</h1>
        <div className={'flex justify-center p-3 border rounded-xl text-justify hover:bg-main-light hover:text-white'}>
          <Link to={`${history(-1)}`}>
            <p className={'font-bold'}>volver</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
