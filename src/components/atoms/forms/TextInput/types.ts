import { ChangeEvent } from "react"
export interface TextInputTypes {
  type: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
