import { memo } from "react"
import Button from "@/atoms/forms/Buttons"
import { ButtonNavtiveTypes } from "@/atoms/forms/Buttons/types"
import { ButtonMoleTypes } from "./types"
import {
  BaseIconButtonStyle,
  IconStyle,
  ButtonIconTextStyle,
  RoundButtonStyle,
  OutlineButtonStyle,
  OutlineRoundStyle,
} from "./styles"

// 라운드 버튼
const Round = ({ children, id, className, icon, onClick, type = ButtonNavtiveTypes.SUBMIT }: ButtonMoleTypes) => {
  return (
    <RoundButtonStyle id={id} className={className}>
      <Button onClick={onClick} type={type}>
        {icon && <IconStyle>{icon}</IconStyle>}
        <ButtonIconTextStyle>{children}</ButtonIconTextStyle>
      </Button>
    </RoundButtonStyle>
  )
}
// 아웃라인 버튼
const Outline = ({ children, id, className, icon, onClick, type = ButtonNavtiveTypes.SUBMIT }: ButtonMoleTypes) => {
  return (
    <OutlineButtonStyle id={id} className={className}>
      <Button onClick={onClick} type={type}>
        {icon && <IconStyle>{icon}</IconStyle>}
        <ButtonIconTextStyle>{children}</ButtonIconTextStyle>
      </Button>
    </OutlineButtonStyle>
  )
}
// 아웃라인 라운드 버튼
const OutlineRound = ({
  children,
  id,
  className,
  icon,
  onClick,
  type = ButtonNavtiveTypes.SUBMIT,
}: ButtonMoleTypes) => {
  return (
    <OutlineRoundStyle id={id} className={className}>
      <Button onClick={onClick} type={type}>
        {icon && <IconStyle>{icon}</IconStyle>}
        <ButtonIconTextStyle>{children}</ButtonIconTextStyle>
      </Button>
    </OutlineRoundStyle>
  )
}
// 기본 버튼
const IconButtonMole = ({
  children,
  id,
  className,
  icon,
  onClick,
  type = ButtonNavtiveTypes.SUBMIT,
}: ButtonMoleTypes) => {
  return (
    <BaseIconButtonStyle id={id} className={className}>
      <Button onClick={onClick} type={type}>
        {icon && <IconStyle>{icon}</IconStyle>}
        <ButtonIconTextStyle>{children}</ButtonIconTextStyle>
      </Button>
    </BaseIconButtonStyle>
  )
}
IconButtonMole.Round = Round
IconButtonMole.Outline = Outline
IconButtonMole.OutlineRound = OutlineRound

const MemoIconButtonMole = memo(IconButtonMole)

interface CustomMemoIconButtonMoleType extends React.MemoExoticComponent<(props: ButtonMoleTypes) => JSX.Element> {
  Round: typeof Round
  Outline: typeof Outline
  OutlineRound: typeof OutlineRound
}

const CustomMemoIconButtonMole = MemoIconButtonMole as unknown as CustomMemoIconButtonMoleType
CustomMemoIconButtonMole.Round = Round
CustomMemoIconButtonMole.Outline = Outline
CustomMemoIconButtonMole.OutlineRound = OutlineRound

export default CustomMemoIconButtonMole
