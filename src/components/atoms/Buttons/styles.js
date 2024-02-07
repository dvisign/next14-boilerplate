import { styled } from "@mui/system"

export const ButtonBase = styled("button")`
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`

export const RoundButtonStyle = styled(ButtonBase)`
  border-radius: 20px;
`

export const OutlineButtonStyle = styled(ButtonBase)`
  background-color: transparent;
  color: #007bff;
  border: 1px solid #007bff;
  &:hover {
    background-color: #007bff;
    color: white;
  }
`
export const OutlineRoundStyle = styled(ButtonBase)`
  background-color: transparent;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 20px;
  &:hover {
    background-color: #007bff;
    color: white;
  }
`
