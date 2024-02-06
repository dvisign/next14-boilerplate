"use client"
import { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { userInfoAction, requestLogin } from "@/redux/slice/userSlice"
import TextInput from "@/components/common/form/TextInput"
import Button from "@/components/common/form/Button"
import LoadingDialog from "@/components/common/dialog/LoadingDialog"
import { LoginFormLayoutStyles } from "@/components/styles/login"
import { useInput } from "@/hooks"

function Login() {
  const [id, setId] = useInput("")
  const [password, setPassword] = useInput("")
  const router = useRouter()
  const dispatch = useDispatch()
  const onChangeId = useCallback((val) => setId(val), [id])
  const onChangePassword = useCallback((val) => setPassword(val), [password])
  const user = useSelector((state) => state.user)
  const onSubmit = useCallback(() => {
    dispatch(
      requestLogin({
        id,
        password,
      })
    )
  }, [id, password])
  useEffect(() => {
    if (user.id && user.name) router.push("/user")
  }, [user])
  return (
    <>
      <LoginFormLayoutStyles>
        <div>
          <div>
            <TextInput value={id} setValue={onChangeId} type="text" />
          </div>
          <div>
            <TextInput value={password} setValue={onChangePassword} type="password" />
          </div>
          <div>
            <Button className="test" buttonText={"submit"} onClick={() => onSubmit()} />
          </div>
        </div>
      </LoginFormLayoutStyles>
      {user.loading && <LoadingDialog />}
    </>
  )
}

export default Login
