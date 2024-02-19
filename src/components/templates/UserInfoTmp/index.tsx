import userInfoStyles from "./UserInfoTmp.module.scss"
import UserInfoOrg from "@/components/organisms/UserInfo"
function UserInfoTmp() {
  return (
    <div className={userInfoStyles.userInfoWrapper}>
      <UserInfoOrg />
    </div>
  )
}
export default UserInfoTmp
