import { vaccine_config } from '../../../data/vaccines'
import React, { createContext, useState } from 'react'

const vaccinesConfig = vaccine_config

interface Vaccine {
  code: string
  label: string
  optional: boolean
}

export interface VaccineConfig {
  type: string
  vaccines: Array<Vaccine>
}
interface IVaccineConfigContext {
  vaccinesConfig: Array<VaccineConfig>
  getVaccineConfigBySpecie: (specie: string) => Array<Vaccine>
}

const defaultState: IVaccineConfigContext = {
  vaccinesConfig,
  getVaccineConfigBySpecie: (specie: string) =>
    vaccinesConfig.filter((v) => v.type === specie).map((v) => v.vaccines)[0],
}

export const VaccineConfigContext = createContext<IVaccineConfigContext>(defaultState)

interface VaccineConfigProviderProps {
  children: React.ReactNode
}

export const VaccineConfigProvider: React.FC<VaccineConfigProviderProps> = ({ children }) => {
  return <VaccineConfigContext.Provider value={defaultState}>{children}</VaccineConfigContext.Provider>
}

export const useVaccineConfig = (): IVaccineConfigContext => {
  const ctx = React.useContext(VaccineConfigContext)
  if (!ctx) {
    throw new Error('No context available')
  }
  return ctx
}
