import { FormEvent, ChangeEvent } from "react"

export interface LoginFormTypes {
  id: string
  password: string
  onChangeId: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
