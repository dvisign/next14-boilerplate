"use client"
import { useSelector, useDispatch } from "react-redux"
import { requestLogout } from "@/redux/slice/userSlice"
import Button from "@/components/atoms/forms/Buttons"

function User() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const logout = () => {
    dispatch(requestLogout())
  }
  return (
    <>
      <div>
        <p>{user.id}</p>
      </div>
      <div>
        <p>{user.name}</p>
      </div>
      <div>
        <Button onClick={() => logout()}>로그아웃</Button>
      </div>
    </>
  )
}

export default User
