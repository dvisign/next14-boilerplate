import { memo } from "react"
import Button from "@/atoms/forms/Buttons"
import { ButtonMoleTypes } from "./types"
import { BaseIconButtonStyle, IconStyle, ButtonIconTextStyle } from "./styles"

// 기본 버튼
const IconButtonMole = ({ children, icon, ...props }: ButtonMoleTypes) => {
  return (
    <BaseIconButtonStyle>
      <Button {...props}>
        {icon && <IconStyle>{icon}</IconStyle>}
        <ButtonIconTextStyle>{children}</ButtonIconTextStyle>
      </Button>
    </BaseIconButtonStyle>
  )
}
export default memo(IconButtonMole)
