import { ReactElement } from "react"
import { textInputTyps as inputTyps } from "@/atoms/forms/TextInput/types"

export interface textInputTyps extends inputTyps {
  label?: string
  icons?: ReactElement | null
  className?: string
  id?: string
}

export interface TextInputMoleStyleProps {
  icons?: boolean
}
