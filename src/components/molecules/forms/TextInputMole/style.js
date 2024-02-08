import styled from "@emotion/styled"

// 인풋 레이아웃 스타일
export const TextWrapperMoleStyle = styled("div")`
  display: flex;
  position: relative;
  gap: 10px;
  align-items: center;
`
// 입력 필드 레이아웃 스타일
export const TextInputMoleStyle = styled("div")`
  display: flex;
  position: relative;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px 8px ${({ icons }) => (icons ? "40px" : "12px")};
  border-radius: 0;
`
// 라운드 필드 레이아웃 스타일
export const RoundTextInputMoleStyle = styled("div")`
  display: flex;
  position: relative;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px 8px ${({ icons }) => (icons ? "40px" : "12px")};
  border-radius: 5px;
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
