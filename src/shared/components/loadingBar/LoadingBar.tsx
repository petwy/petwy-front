import React, { JSX, useEffect, useState } from 'react'
import { FaPaw } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const LoadingBar = (props: { location: string; message: string }): JSX.Element => {
  const { location, message } = props
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      navigate(location || '/home')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {isVisible ? (
        <div
          className={
            'flex flex-col gap-4 justify-center items-center fixed left-0 top-0 z-[1055] h-screen w-screen bg-main'
          }
        >
          <div className="flex flex-row gap-3">
            <FaPaw className={'text-white text-5xl m-1 animate-pulse'} />
            <FaPaw className={'text-white text-5xl m-1 animate-pulse'} />
            <FaPaw className={'text-white text-5xl m-1 animate-pulse'} />
          </div>
          <h1 className={'text-white text-3xl'}>{message}</h1>
        </div>
      ) : null}
    </>
  )
}
