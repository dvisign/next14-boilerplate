import LoginFormOrg from "@/organisms/forms/LoginFormOrg"
import loginFormStyles from "./LoginFormTemp.module.scss"
const LoginFormTemp = () => {
  return (
    <div className={loginFormStyles.formWrapper}>
      <LoginFormOrg />
    </div>
  )
}

export default LoginFormTemp
