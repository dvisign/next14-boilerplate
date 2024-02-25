"use client"
import { useRouter } from "next/navigation"
import { useLogin } from "@/app/(loginBefore)/context"
import TextInputMole from "@/components/molecules/forms/TextInputMol"
import IconButtonMole from "@/components/molecules/forms/IconButtonMol"
import { FaUser, FaUserPlus } from "react-icons/fa"
import { FiLogIn } from "react-icons/fi"
import { RiLockPasswordFill } from "react-icons/ri"
import LoginFormStyles from "./LoginFormOrg.module.scss"

function LoginFormOrg() {
  const { id, password, onChangeId, onChangePassword, onSubmit } = useLogin()
  const router = useRouter()
  return (
    <form onSubmit={onSubmit} className={LoginFormStyles.form}>
      <div className={LoginFormStyles.formLine}>
        <TextInputMole
          id="testId"
          value={id}
          onChange={onChangeId}
          type="text"
          label={"아이디"}
          iconComponent={<FaUser />}
        />
      </div>
      <div className={LoginFormStyles.formLine}>
        <TextInputMole
          className="test2"
          value={password}
          onChange={onChangePassword}
          type="password"
          label={"패스워드"}
          iconComponent={<RiLockPasswordFill />}
        />
      </div>
      <div className={`${LoginFormStyles.formLine} submitBtn`} style={{ display: "flex", gap: 10 }}>
        <IconButtonMole icon={<FiLogIn />}>로그인</IconButtonMole>
        <IconButtonMole type="button" icon={<FaUserPlus />} onClick={() => router.push("/signup")}>
          회원가입
        </IconButtonMole>
      </div>
    </form>
  )
}

export default LoginFormOrg
