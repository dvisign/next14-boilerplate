import { ReactElement } from "react"
import { TextInputTypes } from "@/atoms/forms/TextInput/types"

export interface TextInputMoleTypes extends TextInputTypes {
  iconComponent?: ReactElement | null
  label?: string
}
