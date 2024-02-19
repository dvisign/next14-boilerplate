import { InputHTMLAttributes, ChangeEvent } from "react"
export interface TextInputTypes extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * value
   */
  value: string
  /**
   * border size
   */
  borderSize?: number | string | undefined
  /**
   * border style
   */
  borderStyle?: "solid" | "dotted"
  /**
   * border color
   */
  borderColor?: string | undefined
  /**
   * focus line color
   */
  outLineColor?: string | undefined
  /**
   * disabled background color
   */
  disabledColor?: string | undefined
  /**
   * disabled
   */
  disabled?: boolean
  /**
   * width
   */
  width?: number
  /**
   * height
   */
  height?: number
  /**
   * display
   */
  display?: "flex" | "none" | "block" | "inline" | "inline-block"
  /**
   * onchange
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void | undefined
}
