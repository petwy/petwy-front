import React, { useEffect, useState } from 'react'
import { ToolTipProps } from './props'

export const Tooltip: React.FC<ToolTipProps> = ({ content, children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    setCursorPosition({ x: clientX, y: clientY })
  }
  return (
    <div className="relative group inline-block z-[1]">
      {children}
      <div
        className={`absolute 
            ${cursorPosition.x > 600 ? 'left-[-3rem]' : 'left-24'} 
            transform
            -translate-x-1/2
            opacity-0
            pointer-events-none
            group-hover:opacity-95
            group-hover:pointer-events-auto
            transition-opacity
            duration-200
            `}
      >
        <div className="bg-white w-56 mt-1 border border-gray-light text-gray rounded-md px-3 py-2 shadow-xl">
          {content}
        </div>
      </div>
    </div>
  )
}
