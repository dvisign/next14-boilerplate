import { ReactElement } from "react"
import { ButtonTypes } from "@/components/atoms/forms/Buttons/Buttons.types"

export interface ButtonMolTypes extends ButtonTypes {
  className?: string
  icon?: ReactElement
}
