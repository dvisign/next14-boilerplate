"use client"
import { ButtonStyles } from "./styles"
import { useButton } from "@mui/base/useButton"

const Button = ({ children, onClick, ...props }) => (
  <ButtonStyles type="button" onClick={onClick} {...props}>
    {children}
  </ButtonStyles>
)

// Button 컴포넌트 내부의 Icon 컴포넌트
Button.Icon = ({ name }) => name && <span>{name}</span>

// Button 컴포넌트 내부의 Text 컴포넌트
Button.Text = ({ children }) => <span>{children}</span>

export default Button
