import { createContext, useContext } from "react"
import { LoginFormTypes } from "@/components/organisms/forms/LoginFormOrg/LoginFormOrg.types"

export const LoginContext = createContext<LoginFormTypes>({
  id: "",
  password: "",
  onChangeId: () => {},
  onChangePassword: () => {},
  onSubmit: () => {},
})
export const useLogin = () => useContext(LoginContext)
