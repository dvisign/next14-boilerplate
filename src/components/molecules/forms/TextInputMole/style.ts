import styled from "@emotion/styled"
import { InputBaseStyle } from "@/atoms/forms/TextInput/styles"
import { TextInputMoleTypes } from "./types"

// 인풋 레이아웃 스타일
export const TextWrapperMoleStyle = styled("div")<TextInputMoleTypes>`
  display: flex;
  position: relative;
  gap: 10px;
  align-items: center;
  ${InputBaseStyle} {
    padding: 8px 12px 8px ${({ iconComponent }) => (!iconComponent ? "12px" : "40px")};
  }
`
// 입력 필드 레이아웃 스타일
export const TextInputMoleStyle = styled("div")`
  position: relative;
`

// 아이콘 스타일
export const IconStyle = styled.span`
  display: block;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #666;
`
