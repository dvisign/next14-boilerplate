import { memo, useCallback } from "react"
import TextInput from "@/atoms/forms/TextInput"
import Label from "@/atoms/forms/Label"
import { TextWrapperMoleStyle, RoundTextInputMoleStyle, TextInputMoleStyle, IconStyle } from "./style"

// 입력 필드
const TextInputMole = memo(
  ({ type = "text", round = false, label, icons, className, id, onChange, value }) => {
    const useOnChange = useCallback(
      val => {
        onChange(val)
      },
      [value],
    )
    return (
      <TextWrapperMoleStyle className={className} id={id}>
        <Label label={label} />
        <TextInputMoleStyle round={round} icons={icons}>
          {icons && <IconStyle>{icons}</IconStyle>}
          <TextInput type={type} onChange={useOnChange} value={value} />
        </TextInputMoleStyle>
      </TextWrapperMoleStyle>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  },
)
// 라운드 필드
TextInputMole.RoundInput = memo(
  ({ type = "text", round = false, label, icons, className, id, onChange, value }) => {
    const useOnChange = useCallback(
      val => {
        onChange(val)
      },
      [value],
    )
    return (
      <TextWrapperMoleStyle className={className} id={id}>
        <Label label={label} />
        <RoundTextInputMoleStyle round={round} icons={icons}>
          {icons && <IconStyle>{icons}</IconStyle>}
          <TextInput type={type} onChange={useOnChange} value={value} />
        </RoundTextInputMoleStyle>
      </TextWrapperMoleStyle>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  },
)
export default TextInputMole
