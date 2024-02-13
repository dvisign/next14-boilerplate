import { useLogin } from "@/app/(loginBefore)/page"
import TextInputMole from "@/molecules/forms/TextInputMole"
import IconButtonMole from "@/molecules/forms/IconButtonMole"
import { UserIcon, LockPasswordIcon } from "@/components/atoms/Icons"

const LoginForm = () => {
  const { id, password, onChangeId, onChangePassword, onSubmit } = useLogin()
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="form-line">
          <TextInputMole
            id="testId"
            value={id}
            onChange={onChangeId}
            type="text"
            label={"아이디"}
            icons={<UserIcon />}
          />
        </div>
        <div className="form-line">
          <TextInputMole
            className="test2"
            value={password}
            onChange={onChangePassword}
            type="password"
            label={"패스워드"}
            icons={<LockPasswordIcon />}
            round={true}
          />
        </div>
        <div className="form-line submit-btn" style={{ display: "flex", gap: 10 }}>
          <IconButtonMole type="submit">로그인</IconButtonMole>
          <IconButtonMole.Round type="submit">라운드</IconButtonMole.Round>
          <IconButtonMole.Outline type="submit">아웃라인</IconButtonMole.Outline>
          <IconButtonMole.OutlineRound type="submit">아웃라인 라운드</IconButtonMole.OutlineRound>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
