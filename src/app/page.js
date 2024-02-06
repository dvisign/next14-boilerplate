"use client"
import { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { userInfoAction, requestLogin } from "@/redux/slice/userSlice"
import TextInput from "@/components/atoms/TextInput"
import Button from "@/components/atoms/Buttons"
import { LoginFormLayoutStyles } from "@/components/styles/login"
import { useInput } from "@/hooks"
import theme from "@/assets/scss/_color.module.scss"

function Login() {
  console.log(theme)
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
        password
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
            {/* <TextInput value={id} setValue={onChangeId} type="text" /> */}
            <TextInput>
              <TextInput.Label>Username</TextInput.Label>
              <TextInput.Icon icon="👤" />
              <TextInput.Field
                type="text"
                value={id}
                onChange={e => setId(e.target.value)}
                placeholder="Enter your username"
              />
            </TextInput>
          </div>
          <div>
            {/* <TextInput value={password} setValue={onChangePassword} type="password" /> */}
            <TextInput>
              <TextInput.Label>Username</TextInput.Label>
              <TextInput.Icon icon="👤" />
              <TextInput.Field
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </TextInput>
          </div>
          <div>
            {/* <Button onClick={() => onSubmit()}>
              <Button.Icon name="🔍" />
              <Button.Text>submit</Button.Text>
            </Button> */}
            <Button onClick={() => onSubmit()}>Default Button</Button>
            <Button.Round onClick={() => onSubmit()}>Round Button</Button.Round>
            <Button.Outline onClick={() => onSubmit()}>
              Outline Button
            </Button.Outline>
            <Button.OutlineRound onClick={() => onSubmit()}>
              OutlineRound Button
            </Button.OutlineRound>
          </div>
        </div>
      </LoginFormLayoutStyles>
    </>
  )
}

export default Login
