import styled from "@emotion/styled"
// 기본 입력 필드 스타일
export const InputBaseStyle = styled("input")`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: #0265dc;
    outline: none;
  }
`

// 라운드 입력 필드 스타일
export const RoundInputStyle = styled(InputBaseStyle)`
  border-radius: 20px;
`

// 라벨 스타일
export const LabelStyle = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`

// 아이콘 스타일
export const IconStyle = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #666;
`
