import { createContext, useContext } from "react"
import { LoginFormTypes } from "@/components/organisms/forms/LoginFormOrg/LoginFormOrg.types"

export const LoginContext = createContext<LoginFormTypes>({
  id: "",
  password: "",
  onChangeId: e => {},
  onChangePassword: e => {},
  onSubmit: e => {},
})
export const useLogin = () => useContext(LoginContext)
