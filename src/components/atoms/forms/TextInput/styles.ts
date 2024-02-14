import styled from "@emotion/styled"
import { TextInputTypes } from "./types"

// 기본 입력 필드 스타일
export const InputBaseStyle = styled("input")<TextInputTypes>`
  border: 0;
  display: block;
  position: relative;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px 8px ${({ icons }) => (icons ? "40px" : "12px")};
  border-radius: 0;
  height: 20px;
  box-sizing: content-box;
`
