import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const ButtonStyles = styled(Button)`
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
