import { memo } from "react"
import TextInput from "@/atoms/forms/TextInput"
import Label from "@/atoms/forms/Label"
import { TextWrapperMoleStyle, RoundTextInputMoleStyle, TextInputMoleStyle, IconStyle } from "./style"
import { textInputTyps } from "./types"

// 라운드 필드
const RoundInput = ({ type = "text", label, icons, className, id, onChange, value }: textInputTyps) => {
  return (
    <TextWrapperMoleStyle className={className} id={id}>
      <Label label={label} />
      <RoundTextInputMoleStyle icons={icons ? true : false}>
        {icons && <IconStyle>{icons}</IconStyle>}
        <TextInput type={type} onChange={onChange} value={value} />
      </RoundTextInputMoleStyle>
    </TextWrapperMoleStyle>
  )
}

// 입력 필드
const TextInputMole = ({
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
}
TextInputMole.RoundInput = RoundInput
const MemoizedTextInputMole = memo(TextInputMole)
type MemoizedTextInputMoleType = typeof MemoizedTextInputMole & {
  RoundInput: typeof RoundInput
}
const TypedMemoizedTextInputMole = MemoizedTextInputMole as MemoizedTextInputMoleType

export default TypedMemoizedTextInputMole
