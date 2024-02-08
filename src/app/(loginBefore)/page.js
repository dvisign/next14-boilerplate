"use client"
import { useCallback, useEffect, createContext, useContext, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { requestLogin } from "@/redux/slice/userSlice"
import LoginFormOrg from "@/organisms/forms/LoginFormOrg"
// import color from "@/assets/scss/_color.module.scss"
import "./styles.scss"

const LoginContext = createContext()

function Login() {
  // console.log(color)
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const dispatch = useDispatch()
  const onChangeId = useCallback(val => setId(val), [id])
  const onChangePassword = useCallback(val => setPassword(val), [password])
  const user = useSelector(state => state.user)
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
