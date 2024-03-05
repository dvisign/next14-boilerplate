import { FaUser } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { useAppSelector, useAppDispatch } from "@/redux/store"
import { requestLogout } from "@/redux/slice/userSlice"
import { Buttons } from "@repo/_components"
import TextInputMole from "@/components/molecules/forms/TextInputMol"
import userInfoOrgStyles from "./UserInfoOrg.module.scss"

function UserInfoOrg() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)
  const logout = () => {
    dispatch(requestLogout())
  }
  return (
    <>
      <div className={userInfoOrgStyles.lines}>
        <h1>유저 정보</h1>
      </div>
      <div className={userInfoOrgStyles.lines}>
        <TextInputMole
          id="testId"
          value={user.id}
          type="text"
          label={"아이디"}
          iconComponent={<FaUser />}
          disabled={true}
          disabledColor={"#ccc"}
        />
      </div>
      <div className={userInfoOrgStyles.lines}>
        <TextInputMole
          id="testId"
          value={user.name}
          type="text"
          label={"이름"}
          iconComponent={<RiLockPasswordFill />}
          disabled={true}
          disabledColor={"#ccc"}
        />
      </div>
      <div className={userInfoOrgStyles.lines}>
        <Buttons onClick={() => logout()}>로그아웃</Buttons>
      </div>
    </>
  )
}
export default UserInfoOrg
