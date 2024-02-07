import styled from "@emotion/styled"

// 기본 입력 필드 스타일
export const InputBaseStyle = styled("input")`
  border: 0;
  display: block;
  width: 100%;
`

// 라운드 입력 필드 스타일
export const RoundInputStyle = styled(InputBaseStyle)``

// // 라벨 스타일
// export const LabelStyle = styled.label`
//   display: flex;
//   font-size: 14px;
//   color: #333;
//   width: fit-content;
//   min-width: 60px;
//   align-items: center;
// `

// // 아이콘 스타일
// export const IconStyle = styled.span`
//   display: block;
//   position: absolute;
//   left: 10px;
//   top: 50%;
//   transform: translateY(-50%);
//   font-size: 18px;
//   color: #666;
// `

// // 인풋 레이아웃 스타일
// export const TemplateStyle = styled("div")`
//   display: flex;
//   position: relative;
//   gap: 10px;
//   align-items: center;
// `
// // 인풋 레이아웃 스타일
// export const TemplateInputStyle = styled("div")`
//   display: flex;
//   position: relative;
//   border: 1px solid #ccc;
//   font-size: 16px;
//   width: 100%;
//   box-sizing: border-box;
//   padding: 8px 12px 8px ${({ icons }) => (icons ? "40px" : "12px")};
//   border-radius: ${({ round }) => (round ? "50%" : "0")};
// `
