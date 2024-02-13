import { ReactElement } from "react"
import { textInputTyps } from "@/atoms/forms/TextInput/types"

export interface textInputMoleTypes extends textInputTyps {
  label?: string
  icons?: ReactElement | null
  className?: string
  id?: string
}

export interface TextInputMoleStyleProps {
  icons?: boolean
}
