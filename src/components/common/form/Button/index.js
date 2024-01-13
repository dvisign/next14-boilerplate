"use client"
import { ButtonStyles } from "./styles"

function Buttons({ buttonText, onClick }) {
  // return <ButtonStyles variant="contained">Contained</ButtonStyles>
  return <ButtonStyles onClick={() => onClick()}>{buttonText}</ButtonStyles>
}
export default Buttons
