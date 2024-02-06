import { ButtonBase, RoundButtonStyle, OutlineButtonStyle } from "./styles"

// 기본 버튼
const Button = ({ children, ...props }) => {
  return <ButtonBase {...props}>{children}</ButtonBase>
}

// 라운드 버튼
Button.Round = ({ children, ...props }) => {
  return <RoundButtonStyle {...props}>{children}</RoundButtonStyle>
}

// 아웃라인 버튼
Button.Outline = ({ children, ...props }) => {
  return <OutlineButtonStyle {...props}>{children}</OutlineButtonStyle>
}

export default Button
