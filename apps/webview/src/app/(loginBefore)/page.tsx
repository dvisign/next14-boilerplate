"use client"
import { useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useInput } from "@/hooks"
import { useAppSelector, useAppDispatch } from "@/redux/store"
import { requestLogin } from "@/redux/slice/userSlice"
import LoginFormTemp from "@/components/templates/forms/LoginFormTmp"
import { LoginContext } from "./context"

function LoginPage() {
  const [id, onChangeId] = useInput<string>("")
  const [password, onChangePassword] = useInput<string>("")
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)
  const onSubmit = useCallback(
    async e => {
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
      <LoginFormTemp />
    </LoginContext.Provider>
  )
}

export default LoginPage
