import { ReactElement, InputHTMLAttributes, ChangeEvent } from "react"

export interface TextInputMolTypes extends InputHTMLAttributes<HTMLInputElement> {
  iconComponent?: ReactElement | null
  label?: string
  /**
   * value
   */
  value: string | number | readonly string[]
  /**
   * disabled background color
   */
  disabledColor?: string | undefined
  /**
   * onchange
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void | undefined
}
