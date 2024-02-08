import { memo } from "react"
import { ButtonBase } from "./styles"

const Button = memo(({ children, onClick, type }) => {
  return (
    <ButtonBase type={type} onClick={() => (onClick ? onClick() : null)}>
      {children}
    </ButtonBase>
  )
})
export default Button
