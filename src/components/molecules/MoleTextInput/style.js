import styled from "@emotion/styled"

// 인풋 레이아웃 스타일
export const MoleTextWrapperStyle = styled("div")`
  display: flex;
  position: relative;
  gap: 10px;
  align-items: center;
`
// 인풋 레이아웃 스타일
export const MoleTextInputStyle = styled("div")`
  display: flex;
  position: relative;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px 8px ${({ icons }) => (icons ? "40px" : "12px")};
  border-radius: ${({ round }) => (round ? "50%" : "0")};
`
