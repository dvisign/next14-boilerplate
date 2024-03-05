import { ReactElement } from "react"
import { ButtonTypes } from "@repo/_components"

export interface ButtonMolTypes extends ButtonTypes {
  className?: string
  icon?: ReactElement
}
