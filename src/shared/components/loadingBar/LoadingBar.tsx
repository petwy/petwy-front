import React, { JSX, useEffect, useState } from 'react'
import { PawIcon } from '../icons/pawIcon'

export const LoadingBar = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {isVisible ? (
        <div className={'flex justify-center items-center fixed left-0 top-0 z-[1055] h-screen w-screen bg-main'}>
          <div className="flex flex-row gap-3">
            <PawIcon className={'text-white text-5xl m-1 animate-pulse'} />
            <PawIcon className={'text-white text-5xl m-1 animate-pulse'} />
            <PawIcon className={'text-white text-5xl m-1 animate-pulse'} />
          </div>
        </div>
      ) : null}
    </>
  )
}
