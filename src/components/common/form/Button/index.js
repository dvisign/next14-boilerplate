"use client"
import { ButtonStyles } from "./styles"

function Button({ buttonText, onClick }) {
  return <ButtonStyles onClick={() => onClick()}>{buttonText}</ButtonStyles>
}
export default Button
