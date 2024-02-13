import { FormEvent } from "react"

export interface LoginFormTypes {
  id: string
  passowrd: string
  onChangeId: (val: string) => void
  onChangePassword: (val: string) => void
  onSumbit: (e: FormEvent<HTMLFormElement>) => void
}
