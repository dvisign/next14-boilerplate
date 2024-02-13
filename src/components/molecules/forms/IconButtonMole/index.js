import { memo, useCallback } from "react"
import Button from "@/atoms/forms/Buttons"
import {
  BaseIconButtonStyle,
  IconStyle,
  ButtonIconTextStyle,
  OutlineButtonStyle,
  OutlineRoundStyle,
  RoundButtonStyle,
} from "./styles"

// 기본 버튼
const IconButtonMole = memo(({ children, id, className, icon, onClick, type = "submit" }) => {
  return (
    <BaseIconButtonStyle id={id} className={className}>
      <Button onClick={onClick} type={type}>
        {icon && <IconStyle>{icon}</IconStyle>}
        <ButtonIconTextStyle>{children}</ButtonIconTextStyle>
      </Button>
    </BaseIconButtonStyle>
  )
})
// 라운드 버튼
IconButtonMole.Round = memo(({ children, id, className, icon, onClick, type = "submit" }) => {
  return (
    <RoundButtonStyle id={id} className={className}>
      <Button onClick={onClick} type={type}>
        {icon && <IconStyle>{icon}</IconStyle>}
        <ButtonIconTextStyle>{children}</ButtonIconTextStyle>
      </Button>
    </RoundButtonStyle>
  )
})
// 아웃라인 버튼
IconButtonMole.Outline = memo(({ children, id, className, icon, onClick, type = "submit" }) => {
  return (
    <OutlineButtonStyle id={id} className={className}>
      <Button onClick={onClick} type={type}>
        {icon && <IconStyle>{icon}</IconStyle>}
        <ButtonIconTextStyle>{children}</ButtonIconTextStyle>
      </Button>
    </OutlineButtonStyle>
  )
})
// 아웃라인 라운드 버튼
IconButtonMole.OutlineRound = memo(({ children, id, className, icon, onClick, type = "submit" }) => {
  return (
    <OutlineRoundStyle id={id} className={className}>
      <Button onClick={onClick} type={type}>
        {icon && <IconStyle>{icon}</IconStyle>}
        <ButtonIconTextStyle>{children}</ButtonIconTextStyle>
      </Button>
    </OutlineRoundStyle>
  )
})

export default IconButtonMole
