import { ReactNode, ReactElement } from "react"
import { ButtonTypes, ButtonNavtiveTypes } from "@/atoms/forms/Buttons/types"

export interface ButtonMoleTypes extends ButtonTypes {
  id?: string
  className?: string
  icon?: ReactElement
}
