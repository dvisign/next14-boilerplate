import { memo } from "react"
import TextInput from "@/atoms/forms/TextInput"
import Label from "@/atoms/forms/Label"
import { TextWrapperMoleStyle, RoundTextInputMoleStyle, TextInputMoleStyle, IconStyle } from "./style"
import { textInputMoleTypes } from "./types"

// 라운드 필드
const RoundInput = ({ type = "text", label, icons, className, id, onChange, value }: textInputMoleTypes) => {
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
}: textInputMoleTypes) => {
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

const MemoTextInputMole = memo(TextInputMole, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value
})

interface CustomMemoTextInputMoleType extends React.MemoExoticComponent<(props: textInputMoleTypes) => JSX.Element> {
  RoundInput: typeof RoundInput
}

const CustomMemoTextInputMole = MemoTextInputMole as unknown as CustomMemoTextInputMoleType
CustomMemoTextInputMole.RoundInput = RoundInput

export default CustomMemoTextInputMole
