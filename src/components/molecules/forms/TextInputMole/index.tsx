import React, { memo, ReactElement } from "react"
import Label from "@/atoms/forms/Label"
import TextInput from "@/atoms/forms/TextInput"
import { TextWrapperMoleStyle, RoundTextInputMoleStyle, TextInputMoleStyle, IconStyle } from "./style"
import { textInputMoleTypes } from "./types"

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
  }: textInputMoleTypes) => {
    return (
      <TextWrapperMoleStyle className={className} id={id}>
        <Label label={label} />
        <RoundTextInputMoleStyle icons={icons ? true : false}>
          {icons && <IconStyle>{icons}</IconStyle>}
          <TextInput type={type} onChange={onChange} value={value} />
        </RoundTextInputMoleStyle>
      </TextWrapperMoleStyle>
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
  }: textInputMoleTypes) => {
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
interface CustomTextInputMoleType extends React.MemoExoticComponent<(props: textInputMoleTypes) => ReactElement> {
  RoundInput: typeof RoundInput
}

// 타입 캐스팅
const CustomMemoTextInputMole: CustomTextInputMoleType = TextInputMole as any
CustomMemoTextInputMole.RoundInput = RoundInput

export default CustomMemoTextInputMole
