import { memo } from "react"
import { ButtonBase } from "./styles"
import { ButtonTypes, ButtonNavtiveTypes } from "./types"

const Button = memo(({ children, onClick, type = ButtonNavtiveTypes.SUBMIT }: ButtonTypes) => {
  return (
    <ButtonBase type={type} onClick={() => (onClick ? onClick() : null)}>
      {children}
    </ButtonBase>
  )
})
export default Button
