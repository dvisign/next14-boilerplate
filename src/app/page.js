"use client"
import { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { requestLogin } from "@/redux/slice/userSlice"
import MoleTextInput from "@/molecules/form/MoleTextInput"
import Button from "@/components/atoms/form/Buttons"
import MoleIconButton from "@/molecules/form/MoleIconButton"
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
    if (user.id && user.name) router.push("/user")
  }, [user])
  return (
    <form onSubmit={onSubmit}>
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
            <MoleTextInput.RoundInput
              className="test2"
              value={password}
              onChange={onChangePassword}
              type="password"
              label={"패스워드"}
              icons={<LockPasswordIcon />}
              round={true}
            />
          </div>
          <div>
            <MoleIconButton type="submit">로그인</MoleIconButton>
            {/* <Button.Round>회원가입</Button.Round> */}
            {/* <Button.Outline onClick={() => onSubmit()}>Outline Button</Button.Outline> */}
            {/* <Button onClick={() => onSubmit()}>OutlineRound Button</Button> */}
          </div>
        </div>
      </LoginFormLayoutStyles>
    </form>
  )
}

export default Login
