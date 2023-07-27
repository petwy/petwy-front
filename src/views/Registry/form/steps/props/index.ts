export interface StepProps {
  errors: any
  prevStep?: () => void
  nextStep?: () => void
}

export interface StepThreeProps extends StepProps {
  isValid: boolean
}
