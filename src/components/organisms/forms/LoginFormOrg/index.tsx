import { useLogin } from "@/app/(loginBefore)/page"
import TextInputMole from "@/molecules/forms/TextInputMole"
import IconButtonMole from "@/molecules/forms/IconButtonMole"
import { FaUser } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { FiLogIn } from "react-icons/fi"
import LoginFormStyles from "./LoginFormOrg.module.scss"

const LoginFormOrg = () => {
  const { id, password, onChangeId, onChangePassword, onSubmit } = useLogin()
  return (
    <form onSubmit={onSubmit} className={LoginFormStyles.form}>
      <div>
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
        </div>
      </div>
    </form>
  )
}

export default LoginFormOrg
