import styles from "./UserInfoTmp.module.scss"
import UserInfoOrg from "@/components/organisms/UserInfo"
function UserInfoTmp() {
  return (
    <div className={styles.userInfoWrapper}>
      <UserInfoOrg />
    </div>
  )
}
export default UserInfoTmp
