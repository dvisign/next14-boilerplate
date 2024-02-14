import { memo, ReactElement, MemoExoticComponent } from "react"
import Label from "@/atoms/forms/Label"
import TextInput from "@/atoms/forms/TextInput"
import { TextWrapperMoleStyle, RoundWrapperMoleStyle, TextInputMoleStyle, IconStyle } from "./style"
import { TextInputMoleTypes } from "./types"

// 라운드 필드 컴포넌트
const RoundInput = memo(
  ({
    type = "text",
    label = "",
    icons = null,
    className = "",
    id = "",
    onChange = () => null,
    value = "",
  }: TextInputMoleTypes) => {
    return (
      <RoundWrapperMoleStyle className={className} id={id}>
        <Label label={label} />
        <TextInputMoleStyle icons={!!icons}>
          {icons && <IconStyle>{icons}</IconStyle>}
          <TextInput type={type} onChange={onChange} value={value} />
        </TextInputMoleStyle>
      </RoundWrapperMoleStyle>
    )
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value,
)

// 입력 필드 컴포넌트
const TextInputMole = memo(
  ({
    type = "text",
    label = "",
    icons = null,
    className = "",
    id = "",
    onChange = () => null,
    value = "",
  }: TextInputMoleTypes) => {
    return (
      <TextWrapperMoleStyle className={className} id={id}>
        <Label label={label} />
        <TextInputMoleStyle icons={!!icons}>
          {icons && <IconStyle>{icons}</IconStyle>}
          <TextInput type={type} onChange={onChange} value={value} />
        </TextInputMoleStyle>
      </TextWrapperMoleStyle>
    )
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value,
)

// 커스텀 타입 정의
interface TextInputMoleType extends MemoExoticComponent<(_: TextInputMoleTypes) => ReactElement> {
  RoundInput: typeof RoundInput
}

// TextInputMole에 RoundInput 속성 추가
const TextInputMoleWithRoundInput: TextInputMoleType = TextInputMole as TextInputMoleType
TextInputMoleWithRoundInput.RoundInput = RoundInput

export default TextInputMoleWithRoundInput
