import { memo, useCallback } from "react"
import Button from "@/atoms/forms/Buttons"
import { BaseIconButtonStyle, IconStyle, ButtonIconTextStyle } from "./styles"

// 기본 버튼
const IconButtonMole = memo(
  ({ children, id, className, icon, onClick, type = "submit" }) => {
    return (
      <BaseIconButtonStyle id={id} className={className}>
        <Button onClick={onClick} type={type}>
          {icon && <IconStyle>{icon}</IconStyle>}
          <ButtonIconTextStyle>{children}</ButtonIconTextStyle>
        </Button>
      </BaseIconButtonStyle>
    )
  },
  // 컨택스트 리렌더 최적화
  // (prevProps, nextProps) => prevProps.onClick === nextProps.onClick,
)
// 라운드 버튼
IconButtonMole.Round = memo(() => {})
// 아웃라인 버튼
IconButtonMole.Outline = memo(() => {})
// 아웃라인 라운드 버튼
IconButtonMole.OutlineRound = memo(() => {})

export default IconButtonMole
