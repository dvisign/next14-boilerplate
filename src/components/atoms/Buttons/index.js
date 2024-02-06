import { ButtonBase, RoundButtonStyle, OutlineButtonStyle, OutlineRoundStyle } from "./styles"

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
// 아웃라인 라운드 버튼
Button.OutlineRound = ({ children, ...props }) => {
  return <OutlineRoundStyle {...props}>{children}</OutlineRoundStyle>
}
export default Button
