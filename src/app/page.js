"use client"
import { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { requestLogin } from "@/redux/slice/userSlice"
import MoleTextInput from "@/molecules/MoleTextInput"
import Button from "@/components/atoms/Buttons"
import { LoginFormLayoutStyles } from "@/components/styles/login"
import { useInput } from "@/hooks"
import { UserIcon, LockPasswordIcon } from "@/components/atoms/Icons"
// import color from "@/assets/scss/_color.module.scss"

function Login() {
  // console.log(color)
  const [id, setId] = useInput("")
  const [password, setPassword] = useInput("")
  const router = useRouter()
  const dispatch = useDispatch()
  const onChangeId = useCallback(val => setId(val), [id])
  const onChangePassword = useCallback(val => setPassword(val), [password])
  const user = useSelector(state => state.user)
  const onSubmit = useCallback(() => {
    dispatch(
      requestLogin({
        id,
        password,
      }),
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
            <MoleTextInput
              id="testId"
              value={id}
              onChange={onChangeId}
              type="text"
              label={"아이디"}
              icons={<UserIcon />}
            />
          </div>
          <div>
            <MoleTextInput
              className="test2"
              value={password}
              onChange={onChangePassword}
              type="password"
              label={"패스워드"}
              icons={<LockPasswordIcon />}
            />
          </div>
          <div>
            <Button onClick={() => onSubmit()}>로그인</Button>
            <Button.Round onClick={() => onSubmit()}>회원가입</Button.Round>
            <Button.Outline onClick={() => onSubmit()}>Outline Button</Button.Outline>
            <Button.OutlineRound onClick={() => onSubmit()}>OutlineRound Button</Button.OutlineRound>
          </div>
        </div>
      </LoginFormLayoutStyles>
    </>
  )
}

export default Login
