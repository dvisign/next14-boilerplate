import userInfoStyles from "./UserInfoTemp.module.scss"
import UserInfoOrg from "@/components/organisms/UserInfo"
function UserInfoTemp() {
  return (
    <div className={userInfoStyles.userInfoWrapper}>
      <UserInfoOrg />
    </div>
  )
}
export default UserInfoTemp
