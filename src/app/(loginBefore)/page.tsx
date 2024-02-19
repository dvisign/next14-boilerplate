"use client"
import { useEffect, createContext, useContext, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useInput } from "@/hooks"
import { useAppSelector, useAppDispatch } from "@/redux/store"
import { requestLogin } from "@/redux/slice/userSlice"
import LoginFormOrg from "@/organisms/forms/LoginFormOrg"
import { LoginFormTypes } from "@/components/organisms/forms/LoginFormOrg/LoginFormOrg.types"

const LoginContext = createContext<LoginFormTypes | null>(null)

function Login() {
  const [id, onChangeId] = useInput<string>("")
  const [password, onChangePassword] = useInput<string>("")
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)
  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      dispatch(
        requestLogin({
          id,
          password,
        }),
      )
    },
    [id, password],
  )
  useEffect(() => {
    if (user.id && user.name) router.push("/info")
  }, [user])
  return (
    <LoginContext.Provider value={{ id, password, onChangeId, onChangePassword, onSubmit }}>
      <LoginFormOrg />
    </LoginContext.Provider>
  )
}
export const useLogin = () => useContext(LoginContext)
export default Login
