import React, { ReactNode } from 'react'
import { CatIcon, DogIcon } from './index'

export const speciesIcon: Record<string, ReactNode> = {
  canino: <DogIcon />,
  felino: <CatIcon />,
}
