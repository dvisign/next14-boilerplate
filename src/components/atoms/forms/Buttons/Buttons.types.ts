import { ReactNode, ButtonHTMLAttributes } from "react"

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: () => void
}
