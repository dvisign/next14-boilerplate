import { styled } from "@mui/system"

export const ButtonStyles = styled("button")`
  display: block;
  width: 100px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`
