"use client"
import LoginFormOrg from "@/organisms/forms/LoginFormOrg"
import loginFormStyles from "./LoginFormTmp.module.scss"
function LoginFormTmp() {
  return (
    <div className={loginFormStyles.formWrapper}>
      <LoginFormOrg />
    </div>
  )
}

export default LoginFormTmp
