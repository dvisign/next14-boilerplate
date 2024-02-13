import { memo, useCallback } from "react"
import TextInput from "@/atoms/forms/TextInput"
import Label from "@/atoms/forms/Label"
import { TextWrapperMoleStyle, RoundTextInputMoleStyle, TextInputMoleStyle, IconStyle } from "./style"
import { textInputTyps } from "./types"

// 입력 필드
const TextInputMole = memo(
  ({
    type = "text",
    label = "",
    icons = null,
    className = "",
    id = "",
    onChange = () => null,
    value = "",
  }: textInputTyps) => {
    return (
      <TextWrapperMoleStyle className={className} id={id}>
        <Label label={label} />
        <TextInputMoleStyle icons={icons ? true : false}>
          {icons && <IconStyle>{icons}</IconStyle>}
          <TextInput type={type} onChange={onChange} value={value} />
        </TextInputMoleStyle>
      </TextWrapperMoleStyle>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  },
)
// 라운드 필드
// TextInputMole.RoundInput = memo(
//   ({ type = "text", label, icons, className, id, onChange, value }) => {
//     return (
//       <TextWrapperMoleStyle className={className} id={id}>
//         <Label label={label} />
//         <RoundTextInputMoleStyle round={round} icons={icons ? true : false}>
//           {icons && <IconStyle>{icons}</IconStyle>}
//           <TextInput type={type} onChange={onChange} value={value} />
//         </RoundTextInputMoleStyle>
//       </TextWrapperMoleStyle>
//     )
//   },
//   (prevProps, nextProps) => {
//     return prevProps.value === nextProps.value
//   },
// )
export default TextInputMole
