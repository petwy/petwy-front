import { InfoIcon } from '../icons'
import React from 'react'

interface AlertProps {
  type: 'info' | 'error' | 'warning'
  text: string
}

const styles = {
  info: {
    color: 'main',
    text: 'main',
  },
  error: {
    color: 'error',
    text: 'error',
  },
  warning: {
    color: 'warning',
    text: 'gray-dark',
  },
}

export const Alert: React.FC<AlertProps> = ({ text, type }) => {
  const style = styles[type]
  return (
    <div
      className={`flex items-center gap-3 p-4 mb-4 text-md text-${style.text} rounded-lg bg-${style.color} bg-opacity-40`}
      role="alert"
    >
      <InfoIcon className={'text-2xl'} />
      <span className="sr-only">Info</span>
      <div>{text}</div>
    </div>
  )
}
