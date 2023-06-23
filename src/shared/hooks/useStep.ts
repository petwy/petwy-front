import { useState } from 'react'

export type Step = {
  step: number
  prevStep: () => void
  nextStep: () => void
}
export const useStep = (): Step => {
  const [step, setStep] = useState<number>(1)
  const prevStep = (): void => {
    setStep(step <= 1 ? 1 : step - 1)
  }
  const nextStep = (): void => {
    setStep(step + 1)
  }
  return { step, prevStep, nextStep }
}
