import { ReactElement } from "react"
import { ButtonTypes } from "@dvisign/ibj-packages"

export interface ButtonMolTypes extends ButtonTypes {
  className?: string
  icon?: ReactElement
}
