import { PetChronic } from './PetCard'

export interface PetCardHeaderProps {
  chronics: Array<PetChronic>
  isSterilised: boolean
  isChipped: boolean
}
