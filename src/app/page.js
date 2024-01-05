"use client"
import { useState, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { userInfoAction } from "@/redux/slice/userSlice"
import TextInput from "@/components/common/form/TextInput"
import Button from "@/components/common/form/Button"

function Home() {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const onChangeId = useCallback((val) => setId(val), [id])
  const onChangePassword = useCallback((val) => setPassword(val), [password])
  const onSubmit = useCallback(() => {
    dispatch(
      userInfoAction.updateUser({
        id,
        password,
      })
    )
  }, [id, password])
  const onLogout = () => {
    dispatch(userInfoAction.resetUser())
  }
  if (!user?.name || !user?.id) {
    return (
      <div>
        <div>
          <TextInput value={id} setValue={onChangeId} type="text" />
        </div>
        <div>
          <TextInput value={password} setValue={onChangePassword} type="password" />
        </div>
        <div>
          <Button buttonText={"submit"} onClick={onSubmit} />
        </div>
      </div>
    )
  }
  return (
    <>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <div>
        <Button buttonText={"logOut"} onClick={onLogout} />
      </div>
    </>
  )
}

export default Home
