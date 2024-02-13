import { ChangeEvent } from "react"
export interface textInputTyps {
  type: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
