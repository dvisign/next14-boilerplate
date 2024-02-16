import { ReactElement } from "react"
import { TextInputTypes } from "@/components/atoms/forms/TextInput/TextInput.types"

export interface TextInputMoleTypes extends TextInputTypes {
  iconComponent?: ReactElement | null
  label?: string
}
