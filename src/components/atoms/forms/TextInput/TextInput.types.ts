import { InputHTMLAttributes } from "react"
export interface TextInputTypes extends InputHTMLAttributes<HTMLInputElement> {
  borderSize?: number | string | undefined
  borderStyle?: "solid" | "dotted"
  borderColor?: string | undefined
  width?: string | number
  height?: string | number
  display?: "flex" | "none" | "block" | "inline" | "inline-block"
}
