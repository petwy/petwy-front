import { RadioGroupOption } from './index'

export type RadioGroupProps<T> = {
  options: RadioGroupOption<T>[]
  onChange(newVal: string): void
  initialValue: string
}
