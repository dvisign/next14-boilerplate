import { InputHTMLAttributes, ChangeEvent } from "react"
export interface TextInputTypes extends InputHTMLAttributes<HTMLInputElement> {
  borderSize?: number | string | undefined
  borderStyle?: "solid" | "dotted"
  borderColor?: string | undefined
  outLineColor?: string | undefined
  width?: number
  height?: number
  display?: "flex" | "none" | "block" | "inline" | "inline-block"
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void | undefined
}
