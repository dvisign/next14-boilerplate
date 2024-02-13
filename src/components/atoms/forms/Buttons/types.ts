import { ReactNode } from "react"

export const ButtonNavtiveTypes = {
  SUBMIT: "submit",
  BUTTON: "button",
} as const
export type ButtonNavtiveTypes = (typeof ButtonNavtiveTypes)[keyof typeof ButtonNavtiveTypes]

export interface ButtonTypes {
  children: ReactNode
  onClick?: () => void
  type?: ButtonNavtiveTypes
}
