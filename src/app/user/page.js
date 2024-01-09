"use client"
import { useSelector, useDispatch } from "react-redux"
import { requestLogout } from "@/redux/slice/userSlice"
import Button from "@/components/common/form/Button"

function User() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
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
        <Button buttonText={"로그아웃"} onClick={logout} />
      </div>
    </>
  )
}

export default User
