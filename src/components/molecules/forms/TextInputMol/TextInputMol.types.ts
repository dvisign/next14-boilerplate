import { ReactElement } from "react"
import { TextInputTypes } from "@/components/atoms/forms/TextInput/TextInput.types"

export interface TextInputMolTypes extends TextInputTypes {
  id?: string
  iconComponent?: ReactElement | null
  label?: string
}
