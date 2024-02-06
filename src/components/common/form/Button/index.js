"use client"
import { ButtonStyles } from "./styles"
import { useButton } from "@mui/base/useButton"

function Buttons(props) {
  const { getRootProps } = useButton()
  const { onClick, buttonText } = props
  return (
    <ButtonStyles type="button" {...props} {...getRootProps()} onClick={() => onClick()}>
      {buttonText}
    </ButtonStyles>
  )
}
export default Buttons
