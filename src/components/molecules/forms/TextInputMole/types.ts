import { ReactElement } from "react"
import { TextInputTypes } from "@/atoms/forms/TextInput/types"

export interface TextInputMoleTypes extends TextInputTypes {
  label?: string
  icons?: ReactElement | null
  className?: string
  id?: string
}

export interface TextInputMoleStyleProps {
  icons?: boolean
}
