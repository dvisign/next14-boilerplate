import styled from "@emotion/styled"
import { ButtonBase } from "@/atoms/forms/Buttons/styles"

export const BaseIconButtonStyle = styled("div")``

export const IconStyle = styled("span")``

export const ButtonIconTextStyle = styled("span")``
export const RoundButtonStyle = styled(BaseIconButtonStyle)`
  ${ButtonBase} {
    border-radius: 20px;
  }
`

export const OutlineButtonStyle = styled(BaseIconButtonStyle)`
  ${ButtonBase} {
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
    &:hover {
      background-color: #007bff;
      color: #fff;
    }
  }
`
export const OutlineRoundStyle = styled(BaseIconButtonStyle)`
  ${ButtonBase} {
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
    border-radius: 20px;
    &:hover {
      background-color: #007bff;
      color: #fff;
    }
  }
`
